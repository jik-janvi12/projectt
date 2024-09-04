import React, {useState ,useEffect} from 'react'
import ResponsiveDrawer from "./Drawer";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Field,Formik,Form } from 'formik';
import axios from 'axios';
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
const Question = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // api colling
  const [editId , setEditId] = useState(null)
  const [colldata , setcolldata] = useState([])
  const [data ,setData] = useState([])
  const token = localStorage.getItem('token')           //token get karel
  const [initialvalues, setinitialvalues] = useState({
    questions: '',
    answer: '',
    subcatagoryID:'',
  })
  const handleData =(values , {resetForm}) =>{
    // console.log(value);
    if(editId !== null) {
      axios.patch(`https://interviewhub-3ro7.onrender.com/questions/${editId}`,values, {
        headers : {
          Authorization : token
        }
      })
      .then((res) =>{
        console.log(res);
        Dataview()
      })
      .catch((error) => {
        console.log(error);
      })
    }
    else {
      axios.post('https://interviewhub-3ro7.onrender.com/questions/create', values,{
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
   
    
  }
  ///
  useEffect(() => {
    Apidata()
    Dataview()
  }, [])
  function Apidata() {
    axios.get('https://interviewhub-3ro7.onrender.com/subcatagory/',{
      headers: {
        Authorization: token
      }
    })
    .then((res) => {
      console.log(res.data);
      // setData(res.data.data)
      // setcolldata(res.data.data)
      const subdata = res.data.data.filter((item) => item.status ==='on')
      setcolldata(subdata)
    })
    .catch((error) => {
      console.log(error);
    })
  }
  function Dataview () {
    axios.get('https://interviewhub-3ro7.onrender.com/questions/', {
        headers: {
          Authorization: token
        }
    })
    .then((res) => {
      console.log(res.data);
      setData(res.data.data)
      const data = res.data.data
      localStorage.setItem("QA",data.length)
    })
    .catch((error) => {
      console.log(error);
    })
    
  }
  const  deletedata =(id) =>{
    // console.log(id);
    axios.delete('https://interviewhub-3ro7.onrender.com/questions/'+id ,{
      headers : {
        Authorization : token
      }
    })
    .then((res) =>{
      console.log(res);
      Dataview()
    })
    .catch((error) =>{
      console.log(error);
    })   
  }
  const editdata = (item,id) => {
    handleClickOpen(true)
    console.log(item);
    setinitialvalues({
      questions:item.questions,
      answer:item.answer,
      subcatagoryID:item.subcatagoryID._id,
    })
    setEditId(id)
  }

  return (
   <>
    <ResponsiveDrawer>
    <Box>
       <div class="demo">
          <div class="demo1">
         
          </div>
          <div class="demo2">
                    <React.Fragment>
          <Button variant="outlined" onClick={handleClickOpen} sx={{backgroundColor:'#124256',color:'#fff',padding:'15px 40px'}}>
          ADD Q & A
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
                Add Q & A
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
                {/* <TextField id="outlined-basic" label="quetion" variant="outlined" sx={{paddingBottom:'15px'}}/> <br />
                <TextField id="outlined-basic" label="Q" variant="outlined" /> */}
      
                <Form>
                  <Field as={TextField} type="text" name="questions" placeholder="question"></Field><br /><br />
                  <Field as={TextField} type="text" name="answer" placeholder=""></Field><br /><br />
                  {/* <Field as={TextField} type="text" name="subcatagoryID" placeholder="Sub-Catagory Name"></Field> */}
                  <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>
                      <Select
                       labelId="demo-simple-select-label"
                       id="demo-simple-select"
                       name="subcatagoryID"
                       label="Sub Catagory"
                       value={values.subcatagoryID}
                      
                       onChange={(e) => setFieldValue('subcatagoryID',e.target.value)}
                      >
                        {
                          colldata.map((item , index) =>(
                            <MenuItem value={item._id}>{item.subCatagoryname}</MenuItem>
                          ))
                        }
                      </Select>
                      </FormControl>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        <Button type='submit' sx={{background:'#124256' ,color:'#fff'}}>Submit</Button>
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
      <Table sx={{ minWidth: 650 ,background:'#124256',color:'#fff'}} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{color:'#fff'}}>No</TableCell>
            <TableCell sx={{color:'#fff'}}>Quetion</TableCell>
            <TableCell sx={{color:'#fff'}}>Answer</TableCell>
            <TableCell sx={{color:'#fff'}}>Sub-Category Name</TableCell>
            <TableCell sx={{color:'#fff'}}>Category Name</TableCell>
            <TableCell  sx={{color:'#fff'}} align="right">Delete</TableCell>
            <TableCell  sx={{color:'#fff'}} align="right">Update</TableCell>
          </TableRow>
        </TableHead>
      
        {
          data.map((item ,index) => (
          <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell >{index+1}</TableCell>
            <TableCell >{item.questions}</TableCell>
            <TableCell >{item.answer}</TableCell>
            <TableCell >{item.subcatagoryID !== null ? item.subcatagoryID.subCatagoryname : ''}</TableCell>
            <TableCell >{item.subcatagoryID !== null ? item.subcatagoryID.catagoryID.catagoryName : ''}</TableCell>
            <TableCell align="right"><Button onClick={() =>deletedata(item._id) }><DeleteIcon sx={{color:'#fff'}} /></Button></TableCell>
            <TableCell align="right"><Button onClick={() =>editdata(item,item._id)}><CreateIcon sx={{color:'#fff'}} /></Button></TableCell>

          </TableRow>
          ))
        }
           </Table>
        </TableContainer>
        </Box>
    </Box>
    </ResponsiveDrawer>
   </>
  )
}

export default Question

