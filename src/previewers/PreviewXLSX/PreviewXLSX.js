import React, { useState, useEffect } from "react";
import XLSX from "xlsx";
import "./style.css";

const PreviewXLSX = (props) => {
  const [data, setData] = useState({ cols: [], rows: [] });
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = function (e) {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
      setPages(wb.SheetNames);

      /* Get worksheet */
      const wsname = wb.SheetNames[currentPage];
      const ws = wb.Sheets[wsname];

      /* Convert array of arrays */
      const json = XLSX.utils.sheet_to_json(ws, { header: 1 });
      try {
        const cols = makeCols(ws["!ref"]);
        setData({ rows: json, cols: cols });
      } catch {
        setData({ rows: [], cols: [] });
      }
    };
    if (props.file && rABS) reader.readAsBinaryString(props.file);
    else reader.readAsArrayBuffer(props.file);
  }, [props.file, currentPage]);

  useEffect(() => {
    setCurrentPage(0);
  }, [props.file]);

  const makeCols = (refstr) => {
    const o = [];
    const C = XLSX.utils.decode_range(refstr).e.c + 1;
    for (let i = 0; i < C; ++i) {
      o[i] = { name: XLSX.utils.encode_col(i), key: i };
    }
    return o;
  };

  return (
    <div className={props.className + " PreviewXLSX"}>
      <div className="ExcelTable2007-buttons">
        {pages.map((page, i) => (
          <button
            className="ExcelTable2007-button"
            key={i}
            onClick={() => setCurrentPage(i)}
          >
            {page}
          </button>
        ))}
      </div>
      <table className="ExcelTable2007">
        <tbody>
          <tr>
            <th className="heading"></th>
            {data.cols.map((c) => (
              <th key={c.key}>{c.key === -1 ? "" : c.name}</th>
            ))}
          </tr>
          {data.rows.map((r, i) => (
            <tr key={i}>
              <td key={i} className="heading">
                {i}
              </td>
              {data.cols.map((c) => (
                <td key={c.key}>{r[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { PreviewXLSX };
