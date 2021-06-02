export default function renderText(e) {
  const textInitial = document.getElementById('text-initial');
  const fileReader = new FileReader();
  const path = e.target.files[0];

  fileReader.onloadend = () => {
    textInitial.value = fileReader.result;
  };
  fileReader.readAsText(path);
}
