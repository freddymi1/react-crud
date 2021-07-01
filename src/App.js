import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import {Main} from './pages/Main.jsx'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Update } from './pages/Update';
function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/update/:id" component={Update}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
