import copyConverted from '../functions/copyConverted.js';
import createHtmlElement from '../functions/createHtmlElement.js';
import downloadFile from '../functions/downloadFile.js';

export default function createConvertedContainer(elementParent) {
  const convertedContainerAttributes = { className: 'converted-container container' };
  const convertedContainer = createHtmlElement('div', convertedContainerAttributes);
  elementParent.appendChild(convertedContainer);

  const convertedTextAttributes = {
    id: 'converted-text',
    className: 'text-container',
    spellcheck: false,
    wrap: 'off',
    readOnly: true,
  };
  const convertedText = createHtmlElement('textarea', convertedTextAttributes);
  convertedContainer.appendChild(convertedText);

  const btnConvertedContainerAttributes = { className: 'btn-converted-container' };
  const btnConvertedContainer = createHtmlElement('div', btnConvertedContainerAttributes);
  convertedContainer.appendChild(btnConvertedContainer);

  const btnCopyAttributes = {
    className: 'btn-copy',
    innerHTML: '<i class="fas fa-copy"></i> Copy',
    onclick: copyConverted,
  };
  const btnCopy = createHtmlElement('button', btnCopyAttributes);
  btnConvertedContainer.appendChild(btnCopy);

  const btnDownloadAttributes = {
    className: 'btn-download',
    innerHTML: '<i class="fas fa-download"></i> Download',
    onclick: downloadFile,
  };
  const btnDownload = createHtmlElement('button', btnDownloadAttributes);
  btnConvertedContainer.appendChild(btnDownload);

  const btnTrashAttributes = {
    className: 'btn-trash',
    innerHTML: '<i class="fas fa-trash"></i> Clear',
    onclick: () => (convertedText.value = ''),
  };
  const btnTrash = createHtmlElement('button', btnTrashAttributes);
  btnConvertedContainer.appendChild(btnTrash);
}
