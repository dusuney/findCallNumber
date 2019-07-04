
import React from 'react';
import { BrowserRouter as Route } from "react-router-dom";
import RouteLink from "./route-link";

let elementsList = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Tom' }
];

class RowElement extends React.Component {
  constructor(props) {
    super(props);
    this.onDeleteElement = this.onDeleteElement.bind(this);
    this.state = {
      isEdit: false,
      editedElement: this.props.value
    }
  }

  onEditElement() {
    console.log(this.props.value);
    this.setState({ editedElement: this.props.value });
    this.setState({ isEdit: true });

  }

  onUpdateElement() {
    this.setState({ isEdit: false });
    console.log(this.state.editedElement, "this.state.editedElement");
    this.props.onUpdateElement(this.props.index, this.state.editedElement)
  }

  onRestoreElement() {
    this.setState({ isEdit: false });
  }

  onDeleteElement() {
    this.props.onDeleteElement(this.props.index);
  }
  onChangeNameElement(e) {
    console.log(e.target.value);
    this.setState({ editedElement: e.target.value })
  }
  //need add onChange function with setState({elements:elementsList})
  //now input dosen't updating
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
          {/* where is bind? */}
          <button onClick={this.onDeleteElement} className="btn">
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
      targetValue: '',
      nameElement: '',
      elements: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Tom' }
      ]
    }
  }

  handelAddElement = () => {
    elementsList.push({ id: elementsList.length + 1, name: this.state.nameElement.toString() });
    this.setState({ elements: elementsList });
  }

  handelChangeName(event) {
    this.setState({ nameElement: event.target.value });
  }

  filteringElements(event) {
    this.setState({ targetValue: event.target.value });
  }

  onDeleteElement(index) {
    elementsList.splice(index, 1);
    this.setState({ elementsList: elementsList });
  }

  onUpdateElement(index, value) {
    console.log(index, "INDEX");
    console.log(value, "VALUE");
    elementsList[index].name = value.name; // SOME HTTP REQUEST MOCK
    this.setState({ elementsList: elementsList });
  }

  render() {
    let rows = [];
    console.log(elementsList, "ELEMENT LIST")
    elementsList.forEach((element, key) => {
      if (element.name.indexOf(this.state.targetValue) !== -1) {
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