import createHtmlElement from '../functions/createHtmlElement.js';

export default function copiedMessage(message) {
  const content = document.getElementById('content');
  const container = createHtmlElement('div', { className: 'copy-message' });
  // const title = createHtmlElement('h2', { innerHTML: '<i class="fas fa-times"></i> Error' });
  // container.appendChild(title);
  const text = createHtmlElement('p', { innerHTML: message });
  container.appendChild(text);
  content.appendChild(container);
  setTimeout(() => {
    content.removeChild(container);
  }, 1000);
}
