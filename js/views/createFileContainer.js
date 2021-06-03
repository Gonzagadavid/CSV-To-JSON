import createHtmlElement from '../functions/createHtmlElement.js';
import renderText from '../functions/renderText.js';

export default function createFileContainer(elementParent) {
  const fileContainerAttributes = { className: 'file-container container' };
  const fileContainer = createHtmlElement('div', fileContainerAttributes);
  elementParent.appendChild(fileContainer);

  const textContainerAttributes = {
    id: 'text-initial',
    className: 'text-container',
    spellcheck: false,
    wrap: 'off',
  };
  const textContainer = createHtmlElement('textarea', textContainerAttributes);
  fileContainer.appendChild(textContainer);

  const uploadBtnAttributes = {
    type: 'file',
    className: 'upload-btn',
    innerHTML: 'Upload File',
    onchange: renderText,
  };
  const uploadBtn = createHtmlElement('input', uploadBtnAttributes);
  fileContainer.appendChild(uploadBtn);
}
