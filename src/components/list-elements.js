
import React from 'react';
import { Route } from "react-router-dom";
import RouteLink from "./route-link";

let elementsList = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Tom' }
];

class RowElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      editedElement: this.props.value
    }
  }

  onEditElement() {
    this.setState({ editedElement: this.props.value });
    this.setState({ isEdit: true });

  }
  onRestoreElement() {
    this.setState({ isEdit: false });
  }

  onUpdateElement() {
    this.setState({ isEdit: false });
    this.props.onUpdateElement(this.props.index, this.state.editedElement)
  }

  onDeleteElement() {
    this.props.onDeleteElement(this.props.index);
  }

  onChangeNameElement(e) {
    this.setState({ editedElement: { name: e.target.value } })
  }

  render() {
    if (this.state.isEdit) {
      return (
        <div>
          <input type="text" onChange={this.onChangeNameElement.bind(this)} value={this.state.editedElement.name}></input>
          <button className="btn" onClick={this.onUpdateElement.bind(this)}>
            <i className="glyphicon glyphicon-ok"></i>
          </button>
          <button className="btn" onClick={this.onRestoreElement.bind(this)}>
            <i className="glyphicon glyphicon-repeat"></i>
          </button>
        </div>
      )
    } else {
      return (
        <div>

          {this.props.value.name}
          <button
            onClick={this.onEditElement.bind(this)}
            className="btn">
            <i className="glyphicon glyphicon-pencil"></i>
          </button>
          <button onClick={this.onDeleteElement.bind(this)} className="btn">
            <i className="glyphicon glyphicon-remove"></i>
          </button>
        </div>
      )
    }
  }
}

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
    elementsList.push({ id: elementsList.length + 1, name: this.state.nameNewElement.toString() });
    this.setState({ elements: elementsList });
  }

  onChangeName(event) {
    this.setState({ nameNewElement: event.target.value });
  }

  filteringElements(event) {
    this.setState({ searchText: event.target.value });
  }

  onDeleteElement(index) {
    elementsList.splice(index, 1);
    this.setState({ elementsList: elementsList });
  }

  onUpdateElement(index, value) {
    elementsList[index].name = value.name; // SOME HTTP REQUEST MOCK
    this.setState({ elementsList: elementsList });
  }

  render() {
    let rows = [];
    elementsList.forEach((element, key) => {
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
        <RouteLink></RouteLink>
        <div className="row">
          <div className="col-md-3">
            <h2>DASHBOARD</h2>
            <label htmlFor="search">Поиск</label>
            <br />
            <input name="search" onChange={this.filteringElements.bind(this)} placeholder="Имя элемента" value={this.state.searchText} ></input>
            <br /><br />
            <label htmlFor="search">Добавить элемент</label>
            <br />
            <input name="search" value={this.state.nameNewElement} onChange={this.onChangeName.bind(this)} placeholder="Имя элемента"></input>
            <br /><br />
            <button className="btn btn-primary" onClick={this.onAddElement}>Добавить</button>

            <Route path="/topicOne" component={TopicOne} />
            <Route path="/topicTwo" component={TopicsTwo} />
          </div>
          <div className="col-md-4">
            <h2> Список элементов</h2>
            <ul>
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