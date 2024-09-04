import React from 'react'
import Box from '@mui/material/Box';
import { Typography  } from '@mui/material';
import { Formik, Field, Form } from 'formik';
// import Link from '@mui/material/Link';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



// https://interviewhub-3ro7.onrender.com/
const Login = () => {

    // const history = useHistory()
    const navigate = useNavigate()


  const handleData = async (values) =>{
    console.log(values);
   
    try {
      var res = await axios.post('https://interviewhub-3ro7.onrender.com/admin/login' ,values)
      var token = res.data.token
      localStorage.setItem("token",token)
      navigate('/dashboard')
      console.log(res);
    } catch (error) {
      console.log(error);
    }

  }

  return (
    
    <Box class="jumbo" >
            <Box class="jumbo1">
                <Typography variant='h1' sx={{color:'#124256',marginBottom:'20px',fontWeight:'700',textAlign:'center',fontSize:'2.125rem',letterSpacing:'0.00735em'}}>Admin Panel</Typography>
                <Formik
                 initialValues={{
                  email: '',
                  Password: '',
                }}
                 onSubmit={handleData}
                >
                    <Form>
                        <Field   id="email"
                          name="email"
                          placeholder="Email"
                          type="email" >
                        </Field>
                        <Field  id="password"
                          name="password"
                          placeholder="password"
                          type="password" >
                        </Field>
                      <button type='submit'>submit</button>
                       
                       {/* <Link to="/">submit</Link> */}
                    </Form>
                </Formik>

            </Box>
        </Box>  
       
  )
}

export default Login