import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], id:'', name: '',email:'',phone:'' };
    //Another approach to handle this 
    //this.handleNameChange = this.handleNameChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  deleteRecord(id){
    console.log('id @ parent TodoApp' + id);
    var items = this.state.items;
    for (var i = 0; i < items.length; i++) {
      if(id == items[i].id){
        items.splice(i,1);
        break;
      }
    }
    this.setState({items:items});
  }
  editRecord(id){
    console.log('edit id @ parent TodoApp' + id);
    var items = this.state.items;
    for (var i = 0; i < items.length; i++) {
      if(id == items[i].id){
        let state = this.state;
        state.id = items[i].id;
        state.name = items[i].name;
        state.email = items[i].email;
        state.phone = items[i].phone;
        this.setState(state);
        //items.splice(i,1);
        break;
      }
    } 
  }
  doUpdate(user){
    var items = this.state.items;
    for (var i = 0; i < items.length; i++) {
      if(user.id == items[i].id){
        items[i] = user;
        this.setState({items: items, id:'', name: '',email:'',phone:''});
        //items.splice(i,1);
        break;
      }
    }
  }
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input placeholder="name"
            onChange={(e) => this.handleNameChange(e)}
            value={this.state.name}
          /> <br/>
          <input placeholder="email"
            onChange={(e) => this.handleEmailChange(e)}
            value={this.state.email}
          /> <br/>
          <input placeholder="phone"
            onChange={(e) =>this.handlePhoneChange(e)}
            value={this.state.phone}
          /> <br/>
          <button>
            Add / Update #{this.state.items.length + 1}
          </button>
          </form>

        <TodoList items={this.state.items} deleteUser={(id) => this.deleteRecord(id)} editUser={(id) => this.editRecord(id)}/>
      </div>
    );
  }

  updateUser(){
    console.log('update user');
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePhoneChange(e) {
    this.setState({ phone: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    if(this.state.id =='' ){
      var newItem = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      name: '',
      email: '',
      phone: '',
    }));
    }else{
      var user = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      id: this.state.id
    };
    this.doUpdate(user);
    }
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <table>
      <thead>
      <tr><th>Name</th><th>Email</th><th>Phone</th><th> Edit</th><th>Delete</th></tr>
      </thead>
      <tbody>
        {this.props.items.map(item => (
          <tr key={item.id} >
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td><button onClick={() =>this.props.editUser(item.id)}>Edit</button></td>
          <td><button onClick={() =>this.props.deleteUser(item.id)}>Delete</button></td>
          </tr>
        ))}
        </tbody>
      </table>
    );
  }
}
