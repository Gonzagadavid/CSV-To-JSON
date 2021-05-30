import createHtmlElement from '../functions/createHtmlElement.js';

export default function createBtnContainer(elementParent) {
  const btnContainerAttributes = { className: 'btn-container container' };
  const btnContainer = createHtmlElement('div', btnContainerAttributes);
  elementParent.appendChild(btnContainer);

  const btnToJsonAttributes = {
    className: 'btn-converts',
    innerHTML: 'to JSON >',
  };
  const btnToJson = createHtmlElement('button', btnToJsonAttributes);
  btnContainer.appendChild(btnToJson);

  const btnToCsvAttributes = {
    className: 'btn-converts',
    innerHTML: 'to CSV >',
  };
  const btnToCsv = createHtmlElement('button', btnToCsvAttributes);
  btnContainer.appendChild(btnToCsv);
}
