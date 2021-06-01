import createHtmlElement from '../functions/createHtmlElement.js';
import toCsv from '../functions/toCsv.js';
import toJson from '../functions/toJson.js';

export default function createBtnContainer(elementParent) {
  const btnContainerAttributes = { className: 'btn-container container' };
  const btnContainer = createHtmlElement('div', btnContainerAttributes);
  elementParent.appendChild(btnContainer);

  const btnToJsonAttributes = {
    className: 'btn-converts',
    innerHTML: 'to JSON >',
    onclick: toJson,
  };
  const btnToJson = createHtmlElement('button', btnToJsonAttributes);
  btnContainer.appendChild(btnToJson);

  const btnToCsvAttributes = {
    className: 'btn-converts',
    innerHTML: 'to CSV >',
    onclick: toCsv,
  };
  const btnToCsv = createHtmlElement('button', btnToCsvAttributes);
  btnContainer.appendChild(btnToCsv);
}
