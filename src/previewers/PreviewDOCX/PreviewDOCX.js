import React, { useState, useEffect } from 'react';
import mammoth from 'mammoth';
import './style.css';

const PreviewDOCX = (props) => {
	const [docHTML, setDocHTML] = useState('');
	const [fontSize, setFontSize] = useState(18);

	useEffect(() => {
		if (!props.file) {
			setDocHTML('');
			return;
		}
		const reader = new FileReader();
		reader.onload = async () => {
			const result = await mammoth.convertToHtml({
				arrayBuffer: reader.result,
			});
			setDocHTML(result.value);
		};
		reader.readAsArrayBuffer(props.file);
	}, [docHTML, props.file]);

	return (
		<div className={props.className + ' PreviewDOCX'}>
			<style dangerouslySetInnerHTML={{__html: `
				.PreviewDOCX *:not(.button) { font-size: ${fontSize}px }
			`}} />
			<div className="buttons">
				<div className="button" onClick={() => setFontSize(fontSize + 2)}>+</div>	
				<div className="button" onClick={() => setFontSize(fontSize - 2)}>−</div>
			</div>
			<div className="sheet">
				<div dangerouslySetInnerHTML={{ __html: docHTML }} />				
			</div>
		</div>
	);
};

export { PreviewDOCX };
