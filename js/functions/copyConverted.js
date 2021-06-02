export default function copyConverted() {
  const convertedText = document.getElementById('converted-text');
  convertedText.select();
  document.execCommand('copy');
}
