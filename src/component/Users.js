import  {Component} from 'react';
import * as Mui from '@material-ui/core';


class Users extends Component{
  constructor(props){
   super(props);

  this.state ={
   data: [],
  };
}

 componentDidMount(){
   const apiUrl = 'https://jsonplaceholder.typicode.com/users';
   fetch(apiUrl)
     .then((response) => response.json())
     .then((data) => this.setState({data: data}));
 }


  render() {
    const {data} = this.state;

    return (
      <div >
                
                  <center>
              <Mui.ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
  <Mui.Button href="/Posts">POSTS</Mui.Button>
  <Mui.Button href="/Coment">COMMENTS</Mui.Button>
  <Mui.Button href="/Albums">ALBUMS</Mui.Button>
  <Mui.Button href="/Photos">PHOTOS</Mui.Button>
  <Mui.Button href="/Todos">TODOS</Mui.Button>
  <Mui.Button href="/Users">USERS</Mui.Button>
</Mui.ButtonGroup>

                 
                  <Mui.Container fixed>
        <h1 align="center">DATA USERS </h1>
        <table border="2">
          <tr>
            <th> ID</th>
            <td>NAME</td>
            <td>USERNAME</td>
            <td>EMAIL</td>
            <td colspan="6" align="center">ADDRESS</td>
            <td>PHONE</td>
            <td>WEBSITE</td>
            <th colspan="3">COMPANY</th>
            </tr>
          {data.map(todo =>
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td>{todo.username}</td>
              <td>{todo.email}</td>
              <td>{todo.address.street}</td>
              <td>{todo.address.suite}</td>
              <td>{todo.address.city}</td>
              <td>{todo.address.zipcode}</td>
              <td>{todo.address.geo.lat}</td>
              <td>{todo.address.geo.lng}</td>
              <td>{todo.phone}</td>
              <td>{todo.website}</td>
              <td>{todo.company.name}</td>
              <td>{todo.company.catchPhrase}</td>
              <td>{todo.company.bs}</td>
            </tr>
            )}
        </table>
        </Mui.Container>
        </center>
      </div>
    );
  }
}


export default Users;