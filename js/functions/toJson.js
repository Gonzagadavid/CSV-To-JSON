export default function toJson() {
  const text = document.getElementById('text-initial').value;
  const arrayTexts = text.split('\n').map((str) => str.split(','));
  const arrayKeys = arrayTexts.shift();
  const arrayObjects = arrayTexts.map((arr) =>
    arr.reduce((acc, crr, index) => {
      acc[arrayKeys[index]] = crr;
      return acc;
    }, {})
  );
  const textJson = JSON.stringify(arrayObjects);
  const convertedText = document.getElementById('converted-text');
  convertedText.value = textJson;
}
