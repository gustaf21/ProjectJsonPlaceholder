import React, { Component} from 'react';
import * as Mui from "@material-ui/core";

class Albums extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/albums';
    fetch(apiUrl)
    .then((response) => response.json())
    .then(( data) => this.setState({data: data}));
  }

  render() {
    const { data } = this.state;

    return(
        <div>
            <center>
              <Mui.ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
  <Mui.Button href="/Posts">POSTS</Mui.Button>
  <Mui.Button href="/Coment">COMMENTS</Mui.Button>
  <Mui.Button href="/Albums">ALBUMS</Mui.Button>
  <Mui.Button href="/Photos">PHOTOS</Mui.Button>
  <Mui.Button href="/Todos">TODOS</Mui.Button>
  <Mui.Button href="/Users">USERS</Mui.Button>
</Mui.ButtonGroup>

          <h1>DATA ALBUMS</h1>
          <table BORDER="2">
            <tr>
              <td>USER ID</td>
              <td>ID</td>
              <td>TITLE</td>
              
            </tr>
            {data.map(todo =>
              <tr key={todo.id}>
                <td>{todo.userId}</td>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
              </tr>
              )}
          </table>
          </center>
        </div>
    );
  }
} 

export default Albums;
