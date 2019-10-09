import React from 'react';
import superagent from 'superagent';
import DeleteButton from './DeleteButton';
import CreateThing from './CreateThing';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: 'http://localhost:4000',
      things: {},
    };
  }

  componentDidMount(){
    this.handleGet();
  }

  handleGet = () => {
    return superagent
      .get(`${this.state.url}/things`)
      .then(response => {
        this.setState({ ...this.state, things: { ...response.body } })
      });
  }

  handleDelete = (event) => {
    let id = event.target.name;
    return superagent
      .delete(`${this.state.url}/things/${id}`)
      .then((response) => {
        this.setState({ ...this.state, things: { ...response.body } })
      });
  }

  handleCreate = (newThing) => {
    return superagent
      .post(`${this.state.url}/things`)
      .send(newThing)
      .then((response) => {
        this.setState({ ...this.state, things: { ...response.body} })
      });
  }

  render() {
    let currentThings = Object.entries(this.state.things);
    return (
      <React.Fragment>
        <h1>Things and More Things</h1>
        <ul>
          {
            currentThings.map((item) => {
              return (
                <li key={item[0]}>
                  {item[1].name} ------ {item[1].thing}
                  <DeleteButton id={item[0]} handleDelete={this.handleDelete}/>
                </li>
              )
            })
          }
        </ul>
        <CreateThing handleCreate={this.handleCreate} />
      </React.Fragment>
    );
  }
}

export default App;
