import React, { Component} from 'react';
import * as Mui from "@material-ui/core";

class Photos extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos';
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
  <li><a href="https://materializecss.com/sass.html" class="sidebar-navigation-link crayons-link crayons-link--block">Sass</a></li>
        <li><a href="https://materializecss.com/badges.html" class="sidebar-navigation-link crayons-link crayons-link--block">Components</a></li>
        <li><a href="https://materializecss.com/collapsible.html" class="sidebar-navigation-link crayons-link crayons-link--block">JavaScript</a></li>
  </ul>


          <h1>DATA PHOTOS</h1>
          <table BORDER="2">
            <tr>
              <td>ALBUM ID</td>
              <td>ID</td>
              <td>TITLE</td>
              <td>URL</td>
              <td>THUMbNAIL</td>
            </tr>
            {data.map(todo =>
              <tr key={todo.id}>
                <td>{todo.albumId}</td>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.url}</td>
                <td>{todo.thumbnailUrl}</td>
              </tr>
              )}
          </table>
          </center>
        </div>
    );
  }
} 

export default Photos;
