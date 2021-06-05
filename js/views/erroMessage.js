import createHtmlElement from '../functions/createHtmlElement.js';
import displayNone from '../functions/displayNone.js';

export default function erroMessage(message) {
  const content = document.getElementById('content');
  const container = createHtmlElement('div', { className: 'erro-message' });
  const title = createHtmlElement('h2', { innerHTML: '<i class="fas fa-times"></i> Error' });
  container.appendChild(title);
  const text = createHtmlElement('p', { innerHTML: message });
  container.appendChild(text);
  const btnAttributes = {
    innerHTML: 'OK',
    onclick: () => displayNone(container),
  };
  const btn = createHtmlElement('button', btnAttributes);
  container.appendChild(btn);
  content.appendChild(container);
}
