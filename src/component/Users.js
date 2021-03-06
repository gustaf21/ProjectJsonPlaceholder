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
                  <nav class="nav-extended blue darken-1">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">DATA</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      
        <li><a href="https://materializecss.com/sass.html" class="sidebar-navigation-link crayons-link crayons-link--block">Sass</a></li>
        <li><a href="https://materializecss.com/badges.html" class="sidebar-navigation-link crayons-link crayons-link--block">Components</a></li>
        <li><a href="https://materializecss.com/collapsible.html" class="sidebar-navigation-link crayons-link crayons-link--block">JavaScript</a></li>
        
      </ul>
    </div>
    
    <div class="nav-content  light-green accent-3">
      <ul class="tabs tabs-transparent">
      
        <li class="tab"><a class="active" href="/Posts"><font color="black">POSTS</font></a></li>
        <li class="tab"><a class="active"href="/Coment"><font color="black">COMMENTS</font></a></li>
        <li class="tab"><a class="active"href="/Albums"><font color="black">ALBUMS</font></a></li>
        <li class="tab"><a class="active"href="/Photos"><font color="black">PHOTOS</font></a></li>
        <li class="tab"><a class="active"href="/Todos"><font color="black">TODOS</font></a></li>
        <li class="tab"><a class="active"href="/Users"><font color="black">USERS</font></a></li>
        
      </ul>

    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">JavaScript</a></li>
  </ul>


                 
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