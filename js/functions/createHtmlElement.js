export default function createHtmlElement(typeElement, attributesObject) {
  const htmlElement = document.createElement(typeElement);

  for (let attribute in attributesObject) {
    htmlElement[attribute] = attributesObject[attribute];
  }
  return htmlElement;
}
