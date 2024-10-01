import React, { useState ,useEffect} from 'react'
import ResponsiveDrawer from "./Drawer";
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
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
import { Field,Formik,Form } from 'formik';
import axios from 'axios';
import Switch from '@mui/material/Switch';
//
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
//

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const Category = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
// api colling
    const [searchValues , setsearchValues] = useState([])
    const [initialvalues , setInitialValues] = useState({
      catagoryName:''
    })

    const [editId ,setEditId] =useState(null)

 // get api
    const [data ,setData] = useState([])
    useEffect(() =>{
      Dataview()
    },[])
          function Dataview() {
            axios.get('https://interviewhub-3ro7.onrender.com/catagory/',{
            headers: {
              Authorization : token
            }
            })
            .then((res) =>{
            setData(res.data.data)
            console.log(res.data.data);
            const  data = res.data.data
            console.log("=====",data.length);
            localStorage.setItem("Cate",data.length)
            

            })
            .catch((error) =>{
            console.log(error);
            })
        }
  // post api
    const token = localStorage.getItem('token')
    const handleData = (values ,{resetForm}) =>{
        // console.log(values);
        if (editId !== null) {
          axios.patch(`https://interviewhub-3ro7.onrender.com/catagory/${editId}`,values,{
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
       else{
        axios.post('https://interviewhub-3ro7.onrender.com/catagory/create' ,values ,{
          headers : {
            Authorization : token
          }
        })
        .then((res) =>{
          console.log("sucess",res);
          handleClose()
          // setData(res.data.data)            
        })
        .catch((error) =>{
           console.log(error);
        })
       }
       resetForm()
    }
 //delete api
  const deletedata = (id) =>{
    // console.log("==>",index);
    axios.delete('https://interviewhub-3ro7.onrender.com/catagory/'+id ,{
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
 const editdata =(el,id) =>{
  handleClickOpen(true)
  console.log(el);
  setInitialValues({
    catagoryName:el.catagoryName
  })
  setEditId(id)
 }


 const searchCat = (values) => {
  // const searchvalue = e.target.value
  console.log(searchValues)
  axios.get("https://interviewhub-3ro7.onrender.com/catagory/?search="+values, {
    headers: {
      Authorization: token
    }
  })
    .then((res) => {
      // console.log(res)
      setData(res.data.data)
    })
    .catch((err) => {
      console.log("errer", err)
    })
  }
  const Search =(e) =>{
    console.log(e);
    const value = e.target.value;
    setsearchValues(value);
    searchCat(value);
  }
////// catagory   status ======
 const Updatestatus = (e,el) =>{
    console.log('=======================>'+e.target.checked);
    console.log("=====>"+el._id);
    axios.patch('https://interviewhub-3ro7.onrender.com/catagory/' +el._id,{
      'status':e.target.checked ? 'on' : 'off'
    },
    {
      headers: {
        Authorization: token
      },
    })
    .then((res) => {
      console.log('suses',res);  
      Dataview();
      subcatStat(el._id)
    
    })
    .catch((err) => {
      console.log("errer", err)
    }) 
 }
/////////////
//  sub categor status on off
 const subcatStat = (id) =>{
      console.log("cateid",id);
      axios.get('https://interviewhub-3ro7.onrender.com/subcatagory',{
        headers:{
          Authorization:token,
        },
      })
      .then((res) =>{
        const subdata = res.data.data.filter((item) =>item.catagoryID._id == id)
        subcatagoryStatus(subdata)
      })
      .catch((error)=>{
        console.log(error);
      })
 }
 const subcatagoryStatus = (subdata) =>{
    console.log("==-+++++++++++++++++>",subdata);
    for(let i=0;i < subdata.length ; i++){
      // subdata[i].status ? 'on' :'off'
      const id = subdata[i]._id
      axios.patch('https://interviewhub-3ro7.onrender.com/subcatagory/' + id, {
        'status': subdata[i].status === 'on' ? 'off' : 'on'
      }, {

        headers: {
            Authorization: token,
        },
      })
      .then((res) => {
            console.log("======success")
      })
      .catch((err) => {
            console.error("err===>", err)
      })
}
      
}




  return (
    <ResponsiveDrawer>
      <Box>
         <div class="demo">
          <div class="demo1">
              <TextField  //////searc api coll function onchang
                type="text"  
                label="Search category"
                value={searchValues}
                onChange={Search}
              />
          </div>
          <div class="demo2">
           <React.Fragment>
             <Button variant="outlined" onClick={handleClickOpen} sx={{background:'#124256',color:'#fff',padding:'15px 35px'}}>
            ADD <br /> CATEGORY
          </Button>
          <Formik
            // initialValues={{
            //   catagoryName :''
            // }}
            enableReinitialize
            initialValues={initialvalues}
            onSubmit={handleData}
          >
          <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add Category
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
            <Field as={TextField} type="text" name="catagoryName" placeholder="Category"></Field>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                  <Button type='submit' sx={{background:'#124256' ,color:'#fff'}}>Submit</Button>
              </Button>
            </DialogActions>
        </Form>
        </DialogContent>
        
          </BootstrapDialog>
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
                  <TableCell sx={{color:'#fff'}}>Category Name</TableCell>
                  <TableCell sx={{color:'#fff'}} align="right" >Status</TableCell>
                  <TableCell  sx={{color:'#fff'}} align="right">Delete</TableCell>
                  <TableCell  sx={{color:'#fff'}} align="right">Update</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {
                  data.map((el,index) =>(
                      <TableRow key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                          <TableCell component="th" scope="row" sx={{color:'#fff'}}>{index+1}</TableCell>
                          <TableCell sx={{color:'#fff'}}>{el.catagoryName}</TableCell>
                          <TableCell sx={{color:'#fff'}} align="right">
                          <FormControlLabel control={<Switch checked={el.status =='on'} />} 
                          onChange={(e)=> Updatestatus(e, el,el._id)}/>
                          </TableCell>
                          <TableCell sx={{color:'#fff'}} align="right"><Button onClick={() => deletedata(el._id)}><DeleteIcon sx={{color:'#fff'}} /></Button></TableCell>
                          <TableCell sx={{color:'#fff'}} align="right"><Button onClick={() => editdata(el,el._id)} ><CreateIcon sx={{color:'#fff'}} /></Button></TableCell>
                      </TableRow>
                  ))
              }
              </TableBody>
            </Table>
    </TableContainer>
    
        </Box>
    </Box>
    </ResponsiveDrawer>
  )
}

export default Category

// import React, { useState, useEffect } from 'react';
// import ResponsiveDrawer from "./Drawer";
// import Box from '@mui/material/Box';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import TextField from '@mui/material/TextField';
// import { Field, Formik, Form } from 'formik';
// import axios from 'axios';
// import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
// import CreateIcon from '@mui/icons-material/Create';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));

// const Category = () => {
//   const [open, setOpen] = useState(false);
//   const [data, setData] = useState([]);
//   const [initialValues, setInitialValues] = useState({ catagoryName: '' });
//   const [editId, setEditId] = useState(null);
//   const [expandedCategory, setExpandedCategory] = useState(null); // State for expanded category
//   const [subCategories, setSubCategories] = useState([]); // State for subcategories

//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = () => {
//     axios.get('https://interviewhub-3ro7.onrender.com/catagory/', {
//       headers: { Authorization: token }
//     })
//       .then(res => setData(res.data.data))
//       .catch(err => console.log(err));
//   };

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleData = (values, { resetForm }) => {
//     if (editId !== null) {
//       axios.patch(`https://interviewhub-3ro7.onrender.com/catagory/${editId}`, values, {
//         headers: { Authorization: token }
//       })
//         .then(() => {
//           fetchCategories();
//           handleClose();
//         })
//         .catch(err => console.log(err));
//     } else {
//       axios.post('https://interviewhub-3ro7.onrender.com/catagory/create', values, {
//         headers: { Authorization: token }
//       })
//         .then(() => {
//           fetchCategories();
//           handleClose();
//         })
//         .catch(err => console.log(err));
//     }
//     resetForm();
//   };

//   const deleteCategory = (id) => {
//     axios.delete(`https://interviewhub-3ro7.onrender.com/catagory/${id}`, {
//       headers: { Authorization: token }
//     })
//       .then(() => fetchCategories())
//       .catch(err => console.log(err));
//   };

//   const editCategory = (el, id) => {
//     handleClickOpen();
//     setInitialValues({ catagoryName: el.catagoryName });
//     setEditId(id);
//   };

//   const toggleSubCategories = (categoryId) => {
//     if (expandedCategory === categoryId) {
//       setExpandedCategory(null); // Collapse if already expanded
//       setSubCategories([]); // Clear subcategories
//     } else {
//       setExpandedCategory(categoryId);
//       fetchSubCategories(categoryId); // Fetch subcategories
//     }
//   };

//   const fetchSubCategories = (categoryId) => {
//     axios.get(`https://interviewhub-3ro7.onrender.com/subcatagory?categoryId=${categoryId}`, {
//       headers: { Authorization: token }
//     })
//       .then(res => setSubCategories(res.data.data))
//       .catch(err => console.log(err));
//   };

//   return (
//     <ResponsiveDrawer>
//       <Box>
//         <div className="demo">
//           <TextField
//             type="text"
//             label="Search category"
//           />
//           <Button variant="outlined" onClick={handleClickOpen}>
//             ADD CATEGORY
//           </Button>
//           <Formik
//             initialValues={initialValues}
//             onSubmit={handleData}
//           >
//             <BootstrapDialog
//               onClose={handleClose}
//               open={open}
//             >
//               <DialogTitle>Add Category</DialogTitle>
//               <IconButton
//                 aria-label="close"
//                 onClick={handleClose}
//               >
//                 <CloseIcon />
//               </IconButton>
//               <DialogContent dividers>
//                 <Form>
//                   <Field as={TextField} name="catagoryName" placeholder="Category" />
//                   <DialogActions>
//                     <Button onClick={handleClose}>Cancel</Button>
//                     <Button type='submit'>Submit</Button>
//                   </DialogActions>
//                 </Form>
//               </DialogContent>
//             </BootstrapDialog>
//           </Formik>
//         </div>

//         <TableContainer>
//           <Table aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>No</TableCell>
//                 <TableCell>Category Name</TableCell>
//                 <TableCell>Status</TableCell>
//                 <TableCell>Delete</TableCell>
//                 <TableCell>Update</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {data.map((el, index) => (
//                 <React.Fragment key={el._id}>
//                   <TableRow>
//                     <TableCell>{index + 1}</TableCell>
//                     <TableCell onClick={() => toggleSubCategories(el._id)} style={{ cursor: 'pointer' }}>
//                       {el.catagoryName}
//                     </TableCell>
//                     <TableCell>
//                       <FormControlLabel
//                         control={<Switch checked={el.status === 'on'} />}
//                         // onChange={(e) => Updatestatus(e, el)}
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <Button onClick={() => deleteCategory(el._id)}><DeleteIcon /></Button>
//                     </TableCell>
//                     <TableCell>
//                       <Button onClick={() => editCategory(el, el._id)}><CreateIcon /></Button>
//                     </TableCell>
//                   </TableRow>
//                   {expandedCategory === el._id && subCategories.map((sub, subIndex) => (
//                     <TableRow key={sub._id}>
//                       <TableCell colSpan={5}>
//                         {sub.subcategoryName} {/* Assuming subcategory has a 'subcategoryName' field */}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </React.Fragment>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </ResponsiveDrawer>
//   );
// };

// export default Category;

