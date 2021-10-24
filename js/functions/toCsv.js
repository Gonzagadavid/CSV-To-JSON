import objectFile from '../index.js';
import erroMessage from '../views/erroMessage.js';
import checkJson from './checkJson.js';

function objectToString (array) {
  return array.map((str) => str.toString().replace(/\,/g, '.')).join(',')
}

export default function toCsv() {
  const textJson = document.getElementById('text-initial').value;
  if (!checkJson(textJson)) return erroMessage('O arquivo inserido não está no formato JSON');
  let arrObjects = JSON.parse(textJson);
  if (!Array.isArray(arrObjects)) arrObjects = [arrObjects];
  const keys = `${Object.keys(arrObjects[0]).join(',')}\n`;
  const values = arrObjects.map((object) => objectToString(Object.values(object))).join('\n');
  const csvText = `${keys}${values}`;
  const convertedText = document.getElementById('converted-text');
  convertedText.value = csvText;
  objectFile.format = 'csv';
}
