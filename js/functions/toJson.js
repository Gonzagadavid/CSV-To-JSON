import objectFile from '../index.js';
import checkCSV from './checkCSV.js';

export default function toJson() {
  let textCsv = document.getElementById('text-initial').value.trim();
  if (!checkCSV(textCsv)) return alert('o texto inserido não está no formato CSV');
  const arrayTexts = textCsv.split('\n').map((str) => str.split(','));
  const arrayKeys = arrayTexts.shift();
  const arrayObjects = arrayTexts.map((arr) =>
    arr.reduce((object, value, index) => {
      object[arrayKeys[index]] = value;
      return object;
    }, {})
  );
  const textJson = JSON.stringify(arrayObjects);
  const convertedText = document.getElementById('converted-text');
  convertedText.value = textJson;
  objectFile.format = 'json';
}
