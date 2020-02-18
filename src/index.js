import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './assets/fonts/Manrope3_Regular_400.ttf'
import './assets/fonts/Manrope3_Regular_400.woff'

ReactDOM.render(
	<BrowserRouter>
    	<App />
  	</BrowserRouter>,
  	document.getElementById('root')
  );

// ReactDOM.render(<App />, document.getElementById('root'));
