
import React from 'react';
import { BrowserRouter as Route } from "react-router-dom";
import RouteLink from "./route-link";

let allElements = [];

class ListElements extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      targetValue: '',
      nameElement: '',
      elements: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Tom' }
      ]
    }
    allElements = this.state.elements;
  }

  handelAddElement = () => {
    let el = this.state.elements.slice();
    el.push({ id: el.length + 1, name: this.state.nameElement.toString() });
    allElements = el.slice();
    this.setState({ elements: el });
  }

  handelChangeName(event) {
    this.setState({ nameElement: event.target.value });
  }

  filteringElements(event) {
    this.setState({ targetValue: event.target.value });
    let targetValue = event.target.value;
  }



  render() {
    let rows = [];
    this.state.elements.forEach((element, key) => {
      if (element.name.indexOf(this.state.targetValue) === -1) {
        return;
      }
      rows.push(<li  key={key}>{element.name}</li>);
    });
    return (

      <div>
        <RouteLink></RouteLink>
        <div className="row">
          <div className="col-md-3">
            <h2>DASHBOARD</h2>
            <label htmlFor="search">Поиск</label>
            <br />
            <input name="search" onChange={this.filteringElements.bind(this)} placeholder="Имя элемента" value={this.state.search} ></input>
            <br /><br />
            <label htmlFor="search">Добавить элемент</label>
            <br />
            <input name="search" value={this.state.nameElement} onChange={this.handelChangeName.bind(this)} placeholder="Имя элемента"></input>
            <br /><br />
            <button className="btn btn-primary" onClick={this.handelAddElement}>Добавить</button>

            <Route path="/topics" component={Topics} />
            <Route path="/topics2" component={Topics2} />
          </div>
          <div className="col-md-9">
            <h2> Список элементов</h2>
            <button type="button" className="btn btn-default" aria-label="Left Align">

            </button>
            <ul>
              {rows}
            </ul>
            <span className="glyphicon glyphicon-pencil"></span>
                <span className="glyphicon glyphicon-remove"></span>
                <span className="glyphicon glyphicon-ok"></span>
                <span className="glyphicon glyphicon-repeat"></span>
          </div>
        </div>
      </div>

    );
  }
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
    </div>
  );
}

function Topics2() {
  return (
    <div>
      <h2>Topics2</h2>
    </div>
  );
}

export default ListElements;