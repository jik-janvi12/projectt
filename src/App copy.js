import './App.css';
import Dashboard from './componets/Dashboard';
import Category from "./componets/Category";
import Subcategory from "./componets/Subcategory";
import Question from "./componets/Question";
import Login from "./componets/Login";
import Box from '@mui/material/Box';
import {
  BrowserRouter ,Route,Routes,} from "react-router-dom";
import Main from './componets/Main';
import C from './componets/C';
import S from './componets/S';
import Q from './componets/Q';


function App() {
  return (
  <>
  
      
   <Box> 
         <Routes> 
           
            <Route path='/' element={<Main/>}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/category" element={<Category />}></Route>
            <Route path="/subcategory" element={<Subcategory />}></Route>
            <Route path="/question" element={<Question />}></Route>
            <Route path="/C" element={<C />}></Route>
            <Route path='/S' element={<S />}></Route>
            <Route path='/Q' element={<Q />}></Route>

           
        </Routes>
  </Box>
 
    
  </>
  );
}

export default App;
