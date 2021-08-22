import 'bootstrap/dist/css/bootstrap.min.css';//always put custom css at the bottom';
import './App.css';
import LandingPage from './pages/LandingPage';
import AboutPage from  './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import {
  withRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  
  return (
    <Switch>
      <Route exact path = "/" component={LandingPage}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/service" component={ServicePage}/>
      <Route exact path="/contact" component={ContactPage}/>
      <Route exact path="/blog" component={BlogPage} />
      <Route exact path="/pricing" component={PricingPage}/>
    </Switch>
  )
}

export default withRouter(App);
