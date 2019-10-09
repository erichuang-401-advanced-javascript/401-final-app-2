import React from 'react';

class CreateThing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      thing: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleCreate(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Name
        <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        New Thing
        <input
          type='text'
          name='thing'
          value={this.state.thing}
          onChange={this.handleChange}
        />
        <button type='submit'>Add</button>
      </form>
    );
  }
}

export default CreateThing;