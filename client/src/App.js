import React from 'react';
import './Stylesheets/alignments.css'
import './Stylesheets/custom-components.css'
import './Stylesheets/form-elements.css'
import './Stylesheets/text-elements.css'
import './Stylesheets/theme.css'
import Login from './pages/Login/Login.js'
import Register from './pages/Register/Register.js';


function App() {
  return <div classname="App">
    <Register/>
    <Login/>
  </div>
}

export default App;
