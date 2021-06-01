import createHtmlElement from '../functions/createHtmlElement.js';

export default function createFileContainer(elementParent) {
  const fileContainerAttributes = { className: 'file-container container' };
  const fileContainer = createHtmlElement('div', fileContainerAttributes);
  elementParent.appendChild(fileContainer);

  const textContainerAttributes = {
    id: 'text-initial',
    className: 'text-container',
    spellcheck: false,
  };
  const textContainer = createHtmlElement('textarea', textContainerAttributes);
  fileContainer.appendChild(textContainer);

  const uploadBtnAttributes = {
    type: 'file',
    class: 'upload-btn',
    innerHTML: 'Upload File',
  };
  const uploadBtn = createHtmlElement('input', uploadBtnAttributes);
  fileContainer.appendChild(uploadBtn);
}
