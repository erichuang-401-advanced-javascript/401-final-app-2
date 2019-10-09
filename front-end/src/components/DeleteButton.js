import React from 'react';

class DeleteButton extends React.Component {
  render() {
    return (
      <button name={this.props.id} onClick={this.props.handleDelete}>Delete</button>
    );
  }
}

export default DeleteButton;