import objectFile from '../index.js';
import erroMessage from '../views/erroMessage.js';
import checkCSV from './checkCSV.js';

export default function toJson() {
  let textCsv = document.getElementById('text-initial').value.trim();
  if (!checkCSV(textCsv)) return erroMessage('O arquivo inserido não está no formato CSV');
  const arrayTexts = textCsv.split('\n').map((str) => str.split(','));
  const arrayKeys = arrayTexts.shift();
  const arrayObjects = arrayTexts.map((arr) =>
    arr.reduce((object, value, index) => {
      object[arrayKeys[index]] = value;
      return object;
    }, {})
  );
  const textJson = JSON.stringify(arrayObjects).replace(/},/g, '},\r\n');
  const convertedText = document.getElementById('converted-text');
  convertedText.value = textJson;
  objectFile.format = 'json';
}
