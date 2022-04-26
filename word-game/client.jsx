const React = require('react');
const ReactDOM = require('react-dom');
const WordRelay = require("./WordRelay");
const {createRoot} = require("react-dom/client");

let root = createRoot(document.querySelector('#root'));
root.render(<WordRelay/>);