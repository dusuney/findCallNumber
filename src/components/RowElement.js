import React from 'react';

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

export default RowElement;