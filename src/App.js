import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { RootOfEquation } from './pages/RootOfEquation';
import Team from './pages/Team';
import Bisection from './pages/Bisection';
import FalsePosition from './pages/FalsePosition';
import NewtonRaphson from './pages/NewtonRaphson';
import OnePointIteration from './pages/OnePointIteration';
import Secant from './pages/Secant';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/rootofequation' exact component={RootOfEquation} />
        <Route path='/bisection' exact component={Bisection} />
        <Route path='/falseposition' exact component={FalsePosition} />
        <Route path='/newtonraphson' exact component={NewtonRaphson} />
        <Route path='/onepointiteration' exact component={OnePointIteration} />
        <Route path='/secant' exact component={Secant} />
        <Route path='/team' exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;