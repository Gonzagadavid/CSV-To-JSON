import objectFile from '../index.js';

function download(fileName, text, format) {
  const element = document.createElement('a');
  element.href = `data:text/${format};charset=utf-8,${encodeURIComponent(text)}`; // + encodeURIComponent(text)
  element.download = fileName;
  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

export default function downloadFile() {
  const { format } = objectFile;
  const convertedText = document.getElementById('converted-text').value;
  const fileName = `yourFile.${format}`;

  download(fileName, convertedText, format);
}
