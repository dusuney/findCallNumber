import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { create } from "react-test-renderer";
import ListElements from "./components/list-elements"
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should add new element', () => {
  configure({ adapter: new Adapter() });
  const components = shallow(<ListElements />);
  const instance = components.instance();

  let newElement = { name: "Nick" };
  instance.addElement(newElement);

  let expectedObj = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Tom' },
    { name: 'Nick' }
  ];
  expect(instance.state.elements).toEqual(expectedObj);

})

it('should not add empty object', () => {
  configure({ adapter: new Adapter() });
  const components = shallow(<ListElements />);
  const instance = components.instance();

  let newElement = { name: "" };
  instance.addElement(newElement);

  let expectedObj = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Tom' }
  ];
  expect(instance.state.elements).toEqual(expectedObj);

})


it('should equals over >3 ', () => {
  configure({ adapter: new Adapter() });
  const components = shallow(<ListElements />);
  const instance = components.instance();

  let newElement = { name: "41" };
  instance.addElement(newElement);

  let expectedObj = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Tom' }
  ];
  expect(instance.state.elements).toEqual(expectedObj);
});

it('should less 9', () => {

})


it('should only latins symbol', () => {
  configure({ adapter: new Adapter() });
  const components = shallow(<ListElements />);
  const instance = components.instance();

  let newElement = { name: "casc23*" };
  instance.addElement(newElement);

  let expectedObj = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Tom' }
  ];
  expect(instance.state.elements).toEqual(expectedObj);
});
// it('should search element', ()=>{

// })