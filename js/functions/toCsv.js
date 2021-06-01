import checkJson from './checkJson.js';

export default function toCsv() {
  const textJson = document.getElementById('text-initial').value;
  if (!checkJson(textJson)) return alert('o arquivo inserido não está no formato JSON');
  let arrObjects = JSON.parse(textJson);
  if (!Array.isArray(arrObjects)) arrObjects = [arrObjects];
  const keys = `${Object.keys(arrObjects[0]).join(',')}\n`;
  const values = arrObjects.map((object) => Object.values(object).join(',')).join('\n');
  const csvText = `${keys}${values}`;
  const convertedText = document.getElementById('converted-text');
  convertedText.value = csvText;
}
