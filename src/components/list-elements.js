
import React from 'react';
import { Route } from "react-router-dom";
import RouteLink from "./route-link";
import RowElement from "./row-element";


class ListElements extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      nameNewElement: '',
      elements: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Tom' }
      ]
    }
  }

  onAddElement = () => {


    this.addElement({ id: this.state.elements.length + 1, name: this.state.nameNewElement.toString() });
  }

  addElement = (elem) => {
    let isLatin = /^[a-zA-Z]+$/.test(elem.name);
    if (!isLatin || elem.name.length < 3 || elem.name === "") {
      return;
    }

    let elements = this.state.elements.slice();
    elements.push(elem);

    this.setState({ elements: elements });
  }
  onChangeName(event) {
    this.setState({ nameNewElement: event.target.value });
  }

  filteringElements(event) {
    this.setState({ searchText: event.target.value });
  }

  onDeleteElement(index) {
    let elements = this.state.elements.slice();
    elements.splice(index, 1);
    this.setState({ elements: elements });
  }

  onUpdateElement(index, value) {
    let elements = this.state.elements.slice();
    elements[index].name = value.name; // SOME HTTP REQUEST MOCK
    this.setState({ elements: elements });
  }

  render() {
    let rows = [];
    this.state.elements.forEach((element, key) => {
      if (!element) return;
      if (element.name.indexOf(this.state.searchText) !== -1) {
        rows.push(<li key={key}>
          <RowElement
            index={key}
            value={element}
            onDeleteElement={this.onDeleteElement.bind(this)}
            onUpdateElement={this.onUpdateElement.bind(this)}>
          </RowElement>
        </li>);
      }

    });

    return (

      <div>
        <br />
        <RouteLink></RouteLink>
        <Route path="/topicOne" component={TopicOne} />
        <Route path="/topicTwo" component={TopicsTwo} />
        
        <div className="row">
          <div className="col-md-3 col-xs-4">
            <h2>DASHBOARD</h2>
            <label htmlFor="search">Поиск</label>
            <br />
            <input
              className="form-control"
              name="search"
              onChange={this.filteringElements.bind(this)}
              placeholder="Имя элемента"
              value={this.props.searchText} ></input>
            <br /><br />
            <label htmlFor="search">Добавить элемент</label>
            <br />
            <input
              className="form-control" name="search"
              value={this.props.nameNewElement}
              onChange={this.onChangeName.bind(this)}
              placeholder="Имя элемента"></input>
            <br />
            <button className="btn btn-primary" onClick={this.onAddElement}>Добавить</button>
            <br />
            <hr />
            
          </div>
          <div className="col-md-4 col-xs-6">
            <h2> Список элементов</h2>
            <ul className="rows-elements">
              {rows}
            </ul>

          </div>
        </div>
      </div>

    );
  }
}

function TopicOne() {
  return (
    <div>
      <h2>Topic one</h2>
    </div>
  );
}

function TopicsTwo() {
  return (
    <div>
      <h2>Topic two</h2>
    </div>
  );
}

export default ListElements;