import './App.css';
import Dashboard from './componets/Dashboard';
import Category from "./componets/Category";
import Subcategory from "./componets/Subcategory";
import Question from "./componets/Question";
import Login from "./componets/Login";
import Box from '@mui/material/Box';
import {
  BrowserRouter ,Route,Routes} from "react-router-dom";

function App() {
  return (
  <>
  
      {/* <Router>
        <Switch>
            <Route exact path="/">
               <Login /> 
            </Route>
            <Route  path="/Dashboard">
                <Dashboard></Dashboard>
            </Route>
            <Route  path="/Category">
                <Category></Category>
            </Route>
            <Route  path="/Subcategory">
                <Subcategory></Subcategory>
            </Route>
            <Route  path="/Question">
               <Question></Question>
            </Route>
        </Switch>
    </Router>  */}
   <Box> 
         <Routes> 
            <Route path="/" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/category" element={<Category />}></Route>
            <Route path="/subcategory" element={<Subcategory />}></Route>
            <Route path="/question" element={<Question />}></Route>
        </Routes>
  </Box>
    
  </>
  );
}

export default App;
