import React from 'react';
import './Stylesheets/alignments.css'
import './Stylesheets/custom-components.css'
import './Stylesheets/form-elements.css'
import './Stylesheets/text-elements.css'
import './Stylesheets/theme.css'
import{BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';

function App() {
  return (
     <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;









// import React from 'react';
// import './Stylesheets/alignments.css'
// import './Stylesheets/custom-components.css'
// import './Stylesheets/form-elements.css'
// import './Stylesheets/text-elements.css'
// import './Stylesheets/theme.css'
// import Login from './pages/Login/Login.js'
// import Register from './pages/Register/Register.js';


// function App() {
//   return <div classname="App">
//     <Register/>
//     <Login/>
//   </div>
// }

// export default App;
