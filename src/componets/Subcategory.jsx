import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
//
import axios from 'axios';
import { Field, Formik, Form } from 'formik';
import ResponsiveDrawer from "./Drawer";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
//
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const Subcategory = () => {



  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // api colling
  const [searchValues , setsearchValues] = useState([])
  const [catagory, setcatagory] = useState([])
  const [editId , setEditId] = useState(null) 
  const [initialvalues, setInitialValues] = useState({
    subCatagoryname: '',
    catagoryID: ''
  })
  const [data , setData] = useState([])
  const token = localStorage.getItem('token')
  const handleData = (values, {resetForm}) => {
    console.log(values);
    if (editId !== null)  {
      axios.patch(`https://interviewhub-3ro7.onrender.com/subcatagory/${editId}`,values,{
        headers : {
          Authorization : token
        }
      })
      .then((res) =>{
        console.log(res);
        Apidata()
      })
      .catch((error) =>{
        console.log(error);
      })
    }
    else{
      axios.post('https://interviewhub-3ro7.onrender.com/subcatagory/create', values, {
        headers: {
          Authorization: token
        }
      })
        .then((res) => {
          console.log("sucess", res);
          handleClose()
          // setData(res.data.data)            
        })
        .catch((error) => {
          console.log(error);
        }) 
       }
       resetForm()
       setEditId(null)
    }
  //  catagory  get api
  useEffect(() => {
    Dataview()
    Apidata()
  }, [])

  function Dataview() {
    axios.get('https://interviewhub-3ro7.onrender.com/catagory/', {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        // console.log(res.data);
        // setcatagory(res.data.data)
        const catadata = res.data.data.filter((item) => item.status === 'on')
        setcatagory(catadata)
        
      })
      .catch((error) => {
        console.log(error);
      })
  }
  // Subcategory get api
  function Apidata() {
    axios.get('https://interviewhub-3ro7.onrender.com/subcatagory/',{
      headers: {
        Authorization: token
      }
    })
    .then((res) => {
      console.log(res.data);
      setData(res.data.data)
      const data = res.data.data
      console.log("=====",data.length);
      localStorage.setItem("Subcate",data.length)
    })
    .catch((error) => {
      console.log(error);
    })
  }
  // delete api coliing
  const deletedata =(id) =>{
    console.log(id);
    axios.delete('https://interviewhub-3ro7.onrender.com/subcatagory/'+id ,{
      headers : {
        Authorization : token
      }
    })
    .then((res) =>{
      console.log(res);
      Apidata()
    })
    .catch((error) =>{
      console.log(error);
    })   
  }
  // updata api
    const editdata = (item,id) => {
    handleClickOpen(true)
    console.log(item);
    setInitialValues({
      subCatagoryname:item.subCatagoryname,
      catagoryID:item.catagoryID._id
    })
    setEditId(id)
    

  }
  //seach apiiiiiiiiii
  const searchSubcat = (values) => {
    console.log("search=====>",values);
    axios.get('https://interviewhub-3ro7.onrender.com/subcatagory/?search=' +values, {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        console.log('search =====>',res.data.data)
        setData(res.data.data

        )
      })
      .catch((err) => {
        console.log("errer", err)
      })
  }
  const Search =(e) =>{
      console.log(e);
      const value = e.target.value;
      console.log("search", value);
      setsearchValues(value);
      searchSubcat(value);
  }

  const Updatestatus =(e,item) =>{
    console.log('======>',e.target.checked);
    console.log('=========+++++>',item);
    axios.patch('https://interviewhub-3ro7.onrender.com/subcatagory/' +item._id,{
      'status':e.target.checked ? 'on' : 'off'
    },
    {
      headers: {
        Authorization: token
      },
    })
    .then((res) => {
      console.log('suses',res);  
      Apidata();
    })
    .catch((err) => {
      console.log("errer", err)
    }) 
    
  }
  
  


  return (

    <ResponsiveDrawer>
      <Box>
        <div class="demo">
          <div class="demo1">
            <TextField 
            type='text'
            label='Search Subcategory'
            value={searchValues}
            onChange={Search}
            
             />
          </div>
          <div class="demo2">
            <React.Fragment>
              <Button variant="outlined" onClick={handleClickOpen} sx={{ background: '#124256', color: '#fff', padding: '15px 35px' }}>
                ADD  SUB<br /> CATEGORY
              </Button>
              <Formik
                enableReinitialize
                initialValues={initialvalues}
                onSubmit={handleData}
              >
                {
                  ({values , setFieldValue}) => (
                    <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Add Sub Category
                  </DialogTitle>
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: 8,
                      color: (theme) => theme.palette.grey[500],
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <DialogContent dividers>
                    <Form>
                      <Field as={TextField} type="text" name="subCatagoryname" label="sub Catagory" variant="outlined"></Field><br /><br />
                      <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Category</InputLabel>
                      <Select
                       labelId="demo-simple-select-label"
                       id="demo-simple-select"
                       name="catagoryID"
                       label="Catagory"
                       value={values.catagoryID}
                      
                       onChange={(e) => setFieldValue('catagoryID',e.target.value)}
                      >
                        {
                          catagory.map((item , index) =>(
                            <MenuItem value={item._id}>{item.catagoryName}</MenuItem>
                          ))
                        }
                      </Select>
                      </FormControl>

                      <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                          <Button type='submit' sx={{ background: '#124256', color: '#fff' }}>Submit</Button>
                        </Button>
                      </DialogActions>
                    </Form>
                  </DialogContent>

                </BootstrapDialog>
                  )
                }
              </Formik>
            </React.Fragment>
          </div>
        </div>
        <Box>
          <TableContainer>
            <Table sx={{ minWidth: 650, background: '#124256', color: '#fff' }} aria-label="simple table">
              <TableHead>
                <TableRow >
                  <TableCell sx={{ color: '#fff' }}>No</TableCell>
                  <TableCell sx={{ color: '#fff' }}>Sub-Category Name</TableCell>
                  <TableCell sx={{ color: '#fff' }}>Category Name</TableCell>
                  <TableCell sx={{ color: '#fff' }} align="right" >Status</TableCell>
                  <TableCell sx={{ color: '#fff' }} align="right">Delete</TableCell>
                  <TableCell sx={{ color: '#fff' }} align="right">Update</TableCell>
                </TableRow>
              </TableHead>
              {
                data.map((item, index) => (
                  <TableRow key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" sx={{ color: '#fff' }}>{index + 1}</TableCell>
                    <TableCell sx={{ color: '#fff' }}>{item.subCatagoryname}</TableCell>
                    {/* <TableCell sx={{ color: '#fff' }}>{item.catagoryID.catagoryName}</TableCell> */}
                    <TableCell sx={{ color: '#fff' }}>{item.catagoryID === 'undefined' ? '' : item.catagoryID.catagoryName}</TableCell>
                    <TableCell sx={{ color: '#fff' }} align="right">
                      
                      <FormControlLabel control={<Switch checked={item.status ==='on'} />} 
                      onChange={(e)=> Updatestatus(e,item,item._id)} />
                    </TableCell>
                    <TableCell sx={{color:'#fff'}} align="right"><Button onClick={() => deletedata(item._id)}><DeleteIcon sx={{color:'#fff'}} /></Button></TableCell> 
                    <TableCell sx={{color:'#fff'}} align="right"><Button onClick={() => editdata(item, item._id)} ><CreateIcon sx={{color:'#fff'}} /></Button></TableCell>
                  </TableRow>
                ))
              }
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </ResponsiveDrawer>
  )
}

export default Subcategory
