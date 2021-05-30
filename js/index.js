import createBtnContainer from './views/createBtnContainer.js';
import createConvertedContainer from './views/createConvertedContainer.js';
import createFileContainer from './views/createFileContainer.js';

const content = document.getElementById('content');

createFileContainer(content);
createBtnContainer(content);
createConvertedContainer(content);
