import React, { Component} from 'react';
import * as Mui from "@material-ui/core";
import rog from "./rog.gif"; 

class Posts extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    fetch(apiUrl)
    .then((response) => response.json())
    .then(( data) => this.setState({data: data}));
  }

  render() {
    const { data } = this.state;

    return(
        <div>
          <center>
          <nav class="nav-extended blue darken-1">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">DATA</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="https://www.tiktok.com/id/" class="sidebar-navigation-link crayons-link crayons-link--block">TIK TOK</a></li>
      <li><a href="https://www.pubg.com/en-us/" class="sidebar-navigation-link crayons-link crayons-link--block">PUBG MOBILE</a></li>
        <li><a href="https://ff.garena.com/" class="sidebar-navigation-link crayons-link crayons-link--block">FREE FIRE</a></li>
        <li><a href="https://m.mobilelegends.com/en" class="sidebar-navigation-link crayons-link crayons-link--block">MOBILE LEGEND</a></li>
        
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
  <li><a href="https://materializecss.com/sass.html" class="sidebar-navigation-link crayons-link crayons-link--block">Sass</a></li>
        <li><a href="https://materializecss.com/badges.html" class="sidebar-navigation-link crayons-link crayons-link--block">Components</a></li>
        <li><a href="https://materializecss.com/collapsible.html" class="sidebar-navigation-link crayons-link crayons-link--block">JavaScript</a></li>
  </ul>

      
        
            
          <h1>DATA POSTS</h1>
          <table BORDER="2">
            <tr>
              <td>USER ID</td>
              <td>ID</td>
              <td>TITLE</td>
              <td>BODY</td>
            </tr>
            {data.map(todo =>
              <tr key={todo.id}>
                <td>{todo.userId}</td>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.body}</td>
              </tr>
              )}
          </table>
          
          </center>
        </div>
    );
  }
} 

export default Posts;
