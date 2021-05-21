import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Bisection from './pages/bisection_method';
import FalsePosition from './pages/FalsePosition';
import NewtonRaphson from './pages/NewtonRaphson';
import OnePointIteration from './pages/OnePointIteration';
import Secant from './pages/Secant';
import GaussElimination from './pages/GaussElimination';
import Cramer from './pages/cramer';
import GaussJordan from './pages/GaussJordan';
import LuDecomposition from './pages/lu_decomposition'
import Jacobi from './pages/Jacobi';
import Gauss_seidel from './pages/Gauss_seidel';
import Conjugate_Gradient from './pages/Conjugate_gradient'
import LinearRegression from './pages/Linear_regression'
import NewtonInterpulation from './pages/polynomial'
import LagrangeInterpulaion from './pages/lagrange'
import Cubic_Spline from './pages/Cubic_spline'
import PolynomialRegression from './pages/Polynomial_Regression'

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/bisection_method' exact component={Bisection} />
        <Route path='/falseposition' exact component={FalsePosition} />
        <Route path='/newtonraphson' exact component={NewtonRaphson} />
        <Route path='/onepointiteration' exact component={OnePointIteration} />
        <Route path='/secant' exact component={Secant} />
        <Route path='/team' exact component={Team} />
        <Route path='/gausselimination' exact component={GaussElimination} />
        <Route path='/cramer' exact component={Cramer} />
        <Route path='/gaussjordan' exact component={GaussJordan} />
        <Route path='/lu_decomposition' exact component={LuDecomposition} />
        <Route path='/jacobi' exact component={Jacobi} />
        <Route path='/gauss_seidel' exact component={Gauss_seidel} />
        <Route path='/conjugate_gradient' exact component={Conjugate_Gradient} />
        <Route path='/linearregression' exact component={LinearRegression} />
        <Route path='/polynomial' exact component={NewtonInterpulation} />
        <Route path='/lagrange' exact component={LagrangeInterpulaion} />
        <Route path='/cubic_spline' exact component={Cubic_Spline} />
        <Route path='/polynomial_regression' exact component={PolynomialRegression} />
      </Switch>
    </Router>
  );
}

export default App;