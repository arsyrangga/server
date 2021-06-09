import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Page/Home/Home';
import Login from './components/Page/Login/Login';
import Register from './components/Page/Register/Register';
import ImageThumb from './components/Page/imagethumb/ImageThumb';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <main className="App">
    <Switch>

    <Route path="/thumb">
    <Home />
    </Route>

    <Route path="/register">
      <Register />
    </Route>

      <Route path='/login'>
        <Login />
      </Route>

      <Route path='/home'>
        <Home />
      </Route>

      <Route path='/'>
        <ImageThumb />
      </Route>

    </Switch>
    </main>
    </BrowserRouter>

    </>
  );
}

export default App;
