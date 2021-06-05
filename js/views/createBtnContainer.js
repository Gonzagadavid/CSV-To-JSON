import createHtmlElement from '../functions/createHtmlElement.js';
import toCsv from '../functions/toCsv.js';
import toJson from '../functions/toJson.js';

export default function createBtnContainer(elementParent) {
  const btnContainerAttributes = { className: 'btn-container container' };
  const btnContainer = createHtmlElement('div', btnContainerAttributes);
  elementParent.appendChild(btnContainer);

  const btnToJsonAttributes = {
    className: 'btn-converts',
    innerHTML: 'to JSON <i class="fas fa-angle-double-right"></i>',
    onclick: toJson,
  };
  const btnToJson = createHtmlElement('button', btnToJsonAttributes);
  btnContainer.appendChild(btnToJson);

  const btnToCsvAttributes = {
    className: 'btn-converts',
    innerHTML: 'to CSV <i class="fas fa-angle-double-right"></i>',
    onclick: toCsv,
  };
  const btnToCsv = createHtmlElement('button', btnToCsvAttributes);
  btnContainer.appendChild(btnToCsv);
}
