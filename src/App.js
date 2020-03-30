import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import FAQ from './components/FAQ';
import About from './components/About';
import Gonzo from './components/Gonzo';
import Sponsors from './components/Sponsors';
import Gallery from './components/gallery/Gallery';
import Contact from './components/Contact';
import Info from './components/Info';
import Calendar from './components/Calendar';

class App extends Component { 
  render() {
    return (
    <div>
    	<Navbar />
    	<Switch>
    		<Route path="/" exact component={Homepage}/>
    		<Route path="/about" exact component={About}/>
			<Route path="/gallery" exact component={Gallery}/>
            <Route path="/calendar" exact component={Calendar}/> 
	    </Switch>
    </div>
    );
  }
}

export default App;