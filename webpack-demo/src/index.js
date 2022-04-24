import _ from 'lodash';
import printMe from './print.js';
import './style.css';
// import Icon from './icon.png';
// import Data from './data/data.xml';
// import Notes from './data/data.csv';
// import toml from './data/data.toml';
// import yaml from './data/data.yaml';
// import json from './data/data.json5';



// console.log(toml.title);
// console.log(toml.owner.name);
//
// console.log(yaml.title);
// console.log(yaml.owner.name);
//
// console.log(json.title);
// console.log(json.owner.name);

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  // const myIcon = new Image();
  // myIcon.src = Icon;
  // console.log(Data);
  // console.log(Notes);

  return element;
}

document.body.appendChild(component());
