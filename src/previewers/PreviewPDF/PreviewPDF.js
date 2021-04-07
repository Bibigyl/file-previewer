import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './style.css';

const PreviewPDF = (props) => {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	const [fileUrl, setFileUrl] = useState(null);

	useEffect(() => {
		if (!props.file) setFileUrl(null);
		const reader = new FileReader();
		reader.onload = () => {
			setFileUrl(reader.result);
		};
		reader.readAsDataURL(props.file);
	}, [props.file]);

	return (
		<div className={props.className + ' PreviewPDF'}>
			<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
				{fileUrl && (
					<Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
				)}
			</Worker>
		</div>
	);
};

export { PreviewPDF };