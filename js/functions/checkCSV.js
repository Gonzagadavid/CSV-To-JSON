export default function checkCSV(textCsv) {
  const arrayCsv = textCsv.split('\n').map((string) => string.split(',').length);
  return new Set(arrayCsv).size === 1;
}
