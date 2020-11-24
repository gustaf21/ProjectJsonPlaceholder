
import './App.css';
import {BrowserRouter, Switch, Link} from 'react-router-dom';
import Posts from './component/Posts';
import Coment from './component/Coment';
import Albums from './component/Albums';
import Photos from './component/Photos';
import Todos from './component/Todos';
import Users from './component/Users';
  
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Link path='/posts' exact component={Posts}/>
      <Link path='/Coment' exact component={Coment}/>
      <Link path='/Albums' exact component={Albums}/>
      <Link path='/Photos' exact component={Photos}/>
      <Link path='/Todos' exact component={Todos}/>
      <Link path='/Users' exact component={Users}/>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
