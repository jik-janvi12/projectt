// // import React, { useState } from 'react'
// // import ResponsiveDrawer from "./Drawer";
// // import Box from '@mui/material/Box';
// // import Grid from '@mui/material/Grid';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';
// // import Button from '@mui/material/Button';
// // import { styled } from '@mui/material/styles';
// // import Dialog from '@mui/material/Dialog';
// // import DialogTitle from '@mui/material/DialogTitle';
// // import DialogContent from '@mui/material/DialogContent';
// // import DialogActions from '@mui/material/DialogActions';
// // import IconButton from '@mui/material/IconButton';
// // import CloseIcon from '@mui/icons-material/Close';
// // import Typography from '@mui/material/Typography';
// // import TextField from '@mui/material/TextField';
// // import MenuItem from '@mui/material/MenuItem';
// // import { Field,Formik,Form } from 'formik';
// // import Login from "./Login";
// // import axios from 'axios';
// // const BootstrapDialog = styled(Dialog)(({ theme }) => ({
// //   '& .MuiDialogContent-root': {
// //     padding: theme.spacing(2),
// //   },
// //   '& .MuiDialogActions-root': {
// //     padding: theme.spacing(1),
// //   },
// // }));
// // const Category = () => {
// //   const [open, setOpen] = React.useState(false);

// //   const handleClickOpen = () => {
// //     setOpen(true);
// //   };
// //   const handleClose = () => {
// //     setOpen(false);
// //   };
// // // api colling
// //     const [initialvalues , setinitialvalues] =useState({
// //       catagoryName:''
// //     })
// //     const token  = localStorage.getItem('token')

// //     const handleData = (values) =>{
// //         // console.log(values);
// //         axios.post('https://interviewhub-3ro7.onrender.com/catagory/create' ,values,{
// //           headers :{
// //             Authorization : 'token'
// //           }
// //         })
// //         .then((res) =>{
// //           console.log("sucess");
// //           // handleData()
// //         })
// //         .catch((error) =>{
// //           console.log(error);
// //         })
// //     }



// //   return (
// //     <ResponsiveDrawer>
// //       <Box>
// //          <div class="demo">
// //           <div class="demo1">
// //           <TextField id="outlined-basic" label="Search Category" variant="outlined" />
// //           </div>
// //           <div class="demo2">
// //            <React.Fragment>
// //              <Button variant="outlined" onClick={handleClickOpen} sx={{background:'#124256',color:'#fff',padding:'15px 35px'}}>
// //             ADD <br /> CATEGORY
// //           </Button>
// //           <Formik
// //             initialValues={initialvalues}
// //             onSubmit={handleData}
// //           >
// //           <BootstrapDialog
// //         onClose={handleClose}
// //         aria-labelledby="customized-dialog-title"
// //         open={open}
// //       >
// //         <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
// //           Add Category
// //         </DialogTitle>
// //         <IconButton
// //           aria-label="close"
// //           onClick={handleClose}
// //           sx={{
// //             position: 'absolute',
// //             right: 8,
// //             top: 8,
// //             color: (theme) => theme.palette.grey[500],
// //           }}
// //         >
// //           <CloseIcon />
// //         </IconButton>
// //         <DialogContent dividers>
// //         <Form>
// //             <Field as={TextField} type="text" name="catagoryName" placeholder="Category"></Field>
// //             <DialogActions>
// //               <Button autoFocus onClick={handleClose}>
// //                   <Button type='submit' sx={{background:'#124256' ,color:'#fff'}}>Submit</Button>
// //               </Button>
// //             </DialogActions>
// //         </Form>
// //         </DialogContent>
        
// //           </BootstrapDialog>
// //           </Formik>
// //       </React.Fragment>
// //           </div>
// //        </div>
// //         <Box>
// //         <TableContainer>
// //       <Table sx={{ minWidth: 650 ,background:'#124256',color:'#fff'}} aria-label="simple table">
// //         <TableHead>
// //           <TableRow >
// //             <TableCell sx={{color:'#fff'}}>No</TableCell>
// //             <TableCell sx={{color:'#fff'}}>Category Name</TableCell>
// //             <TableCell sx={{color:'#fff'}} align="right" >Status</TableCell>
// //             <TableCell  sx={{color:'#fff'}} align="right">Delete</TableCell>
// //             <TableCell  sx={{color:'#fff'}} align="right">Update</TableCell>
// //           </TableRow>
// //         </TableHead>
// //         {/* <TableBody>
// //           {rows.map((row) => (
// //             <TableRow
// //               key={row.name}
// //               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
// //             >
// //               <TableCell component="th" scope="row">
// //                 {row.name}
// //               </TableCell>
// //               <TableCell align="right">{row.calories}</TableCell>
// //               <TableCell align="right">{row.fat}</TableCell>
// //               <TableCell align="right">{row.carbs}</TableCell>
// //               <TableCell align="right">{row.protein}</TableCell>
// //             </TableRow>
// //           ))}
// //         </TableBody> */}
// //       </Table>
// //     </TableContainer>
// //         </Box>
// //     </Box>
// //     </ResponsiveDrawer>
// //   )
// // }

// // export default Category



// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++code2+++++++++++++++++++++++++++++++++

// // import React, { useEffect } from 'react'
// // // import TextField from '@mui/material/TextField';
// // import Autocomplete from '@mui/material/Autocomplete';
// // import { Box, TextField } from '@mui/material';
// // import Button from '@mui/material/Button';
// // import { styled } from '@mui/material/styles';
// // import Dialog from '@mui/material/Dialog';
// // import DialogTitle from '@mui/material/DialogTitle';
// // import DialogContent from '@mui/material/DialogContent';
// // import DialogActions from '@mui/material/DialogActions';
// // import IconButton from '@mui/material/IconButton';
// // import CloseIcon from '@mui/icons-material/Close';
// // import Typography from '@mui/material/Typography';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';
// // import { Formik, Form, Field, ErrorMessage } from 'formik';
// // import { useState } from 'react';
// // import axios from 'axios';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import Switch from '@mui/material/Switch';
// // import EditIcon from '@mui/icons-material/Edit';
// // import { alpha } from '@mui/material/styles';
// // import { pink } from '@mui/material/colors';
// // import { DataArrayRounded } from '@mui/icons-material';
// // import * as Yup from 'yup';



// // const label = { inputProps: { 'aria-label': 'Switch demo' } };
// // const PinkSwitch = styled(Switch)(({ theme }) => ({
// //   '& .MuiSwitch-switchBase.Mui-checked': {
// //     color: '#102C57',
// //   },
// //   '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
// //     backgroundColor: '#102C57',
// //   },
// // }));

// // const BootstrapDialog = styled(Dialog)(({ theme }) => ({
// //   '& .MuiDialogContent-root': {
// //     padding: theme.spacing(2),
// //   },
// //   '& .MuiDialogActions-root': {
// //     padding: theme.spacing(1),
// //   },
// // }));

// // const Category = () => {
// //   const token = localStorage.getItem('setToken')
// //   // console.log("token ==> ", token);

// //   const [formikvalues, setFormikValues] = useState({
// //     catagoryName: '',
// //   })
// //   const [data, setData] = useState([])
// //   const [editid, seteditid] = useState(null)
// //   const [opendrower, setOpendrower] = useState(false)
// //   const [checked, setChecked] = useState("")
// //   // console.log("====================>", data.length)
// //   let cat = data.length
// //   localStorage.setItem("categorieslenght", cat)
// //   const [change, setChange] = useState([])
// //   const [changesplit, setchangesplit] = useState([])
// //   // console.log("change", change)


// //   useEffect(() => {
// //     getDataApi()
// //   }, [])


// //   const submitButton = (values) => {
// //     console.log(values)
// //     if (editid !== null) {
// //       axios.patch('http://localhost:5500/catagory/${editid}', values, {
// //         headers: {
// //           Authorization: token
// //         }
// //       })
// //         .then((response) => {
// //           // console.log("response", response)
// //           getDataApi()
// //           seteditid(null)
// //         })
// //         .catch((err) => {
// //           console.log("errer", err)
// //         })
// //     }
// //     else {
// //       axios.post('http://localhost:5500/catagory/create', values, {
// //         headers: {
// //           Authorization: token
// //         }
// //       })
// //         .then((res) => {
// //           // console.log("response ==> ", res)
// //           getDataApi()
// //         })
// //         .catch((err) => {
// //           console.log("Errer", err)
// //         })
// //     }
// //   }


// //   const getDataApi = (status) => {
// //     axios.get('http://localhost:5500/catagory/', {
// //       headers: {
// //         Authorization: token
// //       }
// //     })
// //       .then((res) => {
// //         // console.log("responce", res.data.data)
// //         setData(res.data.data)
// //         // let filter = data.filter((el)=>status === "on" ? status)
// //         // console.log("filter",filter)
// //       })
// //       .catch((error) => {
// //         console.log("error====>", error)
// //       })
// //   }

// //   const dataDelete = (id) => {
// //     // console.log("id",id)
// //     axios.delete('http://localhost:5500/catagory/${id}', {
// //       headers: {
// //         Authorization: token
// //       }
// //     })
// //       .then((res) => {
// //         // console.log("success")
// //         getDataApi()
// //       })
// //       .catch((err) => {
// //         console.log("err", err)
// //       })
// //   }

// //   const updateData = (item, id) => {
// //     // console.log(item)
// //     // console.log(id)
// //     setFormikValues({
// //       catagoryName: item.catagoryName,
// //     })
// //     seteditid(id)
// //     setOpendrower(true)
// //   }

// //   const searchData = (e) => {
// //     const searchvalue = e.target.value
// //     console.log(searchvalue)
// //     axios.get('http://localhost:5500/catagory/?search=${searchvalue}', {
// //       headers: {
// //         Authorization: token
// //       }
// //     })
// //       .then((res) => {
// //         // console.log(res)
// //         setData(res.data.data)
// //       })
// //       .catch((err) => {
// //         console.log("errer", err)
// //       })
// //   }

// //   const SubCateStatus = (filterData) => {
// //     console.log("filter ==> ", filterData);
// //     for (let i = 0; i < filterData.length; i++) {
// //       const id = filterData[i]._id;
// //       // console.log("id ==> ",id);
// //       // if(filterData[i].status === 'on')
// //         // {
// //       axios.patch('http://localhost:5500/subcatagory/${id}', {
// //         'status': filterData[i].status === 'on' ? 'off' : 'on'
// //       }, {
// //         headers: {
// //           Authorization: token
// //         }
// //       })
// //       .then((res) => {
// //         console.log("success");
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       })

// //     // }
// //   }
// //   }

// //   const GetSubFilter = (item) => {
// //     // console.log("get item ==> ",item);
// //     axios.get('http://localhost:5500/subcatagory/', {
// //       headers: {
// //         Authorization: token
// //       }
// //     })
// //       .then((res) => {
// //         // console.log("res==>",res.data.data);
// //         const filterData = res.data.data.filter((items) => items.catagoryID._id === item._id)
// //         // console.log("+++++++",filterData);
// //         SubCateStatus(filterData)
// //       })
// //       .catch((error) => {
// //         console.log("error", error);
// //       })
// //   }

// //   const ChangeStatus = (e, id, item) => {
    
// //     console.log("==>", e.target.checked);
// //     axios.patch('http://localhost:5500/catagory/${id}', {
// //       'status': e.target.checked ? 'on' : 'off'
// //       // 'status': stat
// //     }, {
// //       headers: {
// //         Authorization: token
// //       }
// //     })
// //       .then((res) => {
// //         // console.log("res", res)
// //         getDataApi()
// //         GetSubFilter(item)
// //         // changesubStatus()
// //       })
// //       .catch((err) => {
// //         console.log("err", err)
// //       })
// //   }


// //   const [open, setOpen] = React.useState(false);

// //   const handleClickOpen = () => {
// //     setOpen(true);
// //   };
// //   const handleClose = () => {
// //     setOpen(false);
// //   };

// //   return (
// //     <Box sx={{ padding: '24px' }}>

// //       <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap' }}>
// //         <Box sx={{ width: { xs: '100%', sm: '100%', md: '80%', lg: '80%', xl: '80%' } }}>
// //           <TextField label="Search Category" sx={{ width: '100%', marginBottom: '20px' }} onChange={(e) => searchData(e)} />
// //         </Box>
// //         <Box sx={{ width: { xs: '100%', sm: '100%', md: '15%', lg: '15%', xl: '15%' } }}>
// //           <React.Fragment>
// //             <Button variant="outlined" onClick={handleClickOpen} sx={{ backgroundColor: '#102C57', color: '#EEEEEE', padding: "25px 15px", height: '30px', width: '100%' }}>
// //               Add Category
// //             </Button>
// //             <BootstrapDialog
// //               onClose={handleClose}
// //               aria-labelledby="customized-dialog-title"
// //               open={open}
// //             // sx={{ width: '30%' }}
// //             >
// //               <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
// //                 Add Catagory
// //               </DialogTitle>
// //               <IconButton
// //                 aria-label="close"
// //                 onClick={handleClose}
// //                 sx={{
// //                   position: 'absolute',
// //                   right: 8,
// //                   top: 8,
// //                   color: (theme) => theme.palette.grey[500],
// //                 }}
// //               >
// //                 <CloseIcon />
// //               </IconButton>
// //               <DialogContent dividers>
// //                 <Formik
// //                   initialValues={formikvalues}
// //                   validationSchema={Yup.object({
// //                     catagoryName:Yup.string().required('CatagoryName Is Required')
// //                   })}
// //                   onSubmit={submitButton}
// //                 >
// //                   <Form>
// //                     <Field as={TextField} label="Catagory" name='catagoryName' sx={{ width: '100%', marginBottom: '20px' }} />
// //                     <p style={{color:'red'}}><ErrorMessage name='catagoryName'/></p>
// //                     <DialogActions>
// //                       <button type='submit' style={{ backgroundColor: '#102C57', color: '#FEFAF6', padding: '6px 16px', borderRadius: '4px', border: '0' }} onClick={handleClose}>Submit</button>
// //                     </DialogActions>
// //                   </Form>
// //                 </Formik>
// //               </DialogContent>

// //             </BootstrapDialog>
// //           </React.Fragment>
// //         </Box>
// //       </Box>

// //       <Box sx={{ width: "100%" }}>
// //         <TableContainer component={Paper} >
// //           <Table aria-label="simple table">
// //             <TableHead sx={{ backgroundColor: '#102C57', color: '#EEEEEE', width: '100%', marginTop: '10px' }}>
// //               <TableRow>
// //                 <TableCell sx={{ color: '#EEEEEE' }}>No</TableCell>
// //                 <TableCell sx={{ color: '#EEEEEE' }}>Catagory Name</TableCell>
// //                 <TableCell sx={{ color: '#EEEEEE' }}>Status</TableCell>
// //                 <TableCell sx={{ color: '#EEEEEE' }}>Delete	</TableCell>
// //                 <TableCell sx={{ color: '#EEEEEE' }}>Update</TableCell>
// //               </TableRow>
// //             </TableHead>
// //             <TableBody>
// //               {
// //                 data.map((item, index) => {
// //                   return (
// //                     <TableRow key={index}>
// //                       <TableCell sx={{ color: '#787A91' }}>{index + 1}</TableCell>
// //                       <TableCell sx={{ color: '#787A91' }}>{item.catagoryName}</TableCell>
// //                       <TableCell><PinkSwitch {...label} checked={item.status === 'on'} onChange={(e) => ChangeStatus(e, item._id, item)} /></TableCell>
// //                       <TableCell onClick={() => dataDelete(item._id)}><DeleteIcon sx={{ color: '#787A91' }} /></TableCell>
// //                       <TableCell onClick={() => updateData(item, item._id)}><EditIcon sx={{ color: '#787A91' }} onClick={handleClickOpen} /></TableCell>
// //                     </TableRow>
// //                   )
// //                 })
// //               }
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //       </Box>
// //     </Box>
// //   )
// // }

// // export default Category;




// // ____________________________________________code3_________________________________
// import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import Switch from '@mui/material/Switch';
// import {
//     TextField,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Paper,
//     Button,
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogContentText,
//     DialogTitle,
//     Box,
// } from '@mui/material';
// import * as Yup from 'yup';

// const catagorySchema = Yup.object().shape({
//     catagoryName: Yup.string()
//         .required("Required!"),
// })


// function Category() {
//     const token = localStorage.getItem('token');
//     const history = useHistory();

//     useEffect(() => {
//         if (!token) {
//             history.push('/admin/login');
//         }

//     }, [history, token]);

//     const [openDialog, setOpenDialog] = useState(false);
//     const [categories, setCategories] = useState([]);
//     const [edit, setEdit] = useState(null);
//     const [initialValues, setInitialValues] = useState({
//         catagoryName: '',
//     });
//     const [searchValues, setSearchValues] = useState('');
//     const [subcategories, setSubcategories] = useState([]);

//     const [stutasapi, setStutasapi] = useState([])


//     useEffect(() => {
//         allDataApi();
//     }, []);


//     const allDataApi = () => {
//         console.log("GET=======>>>>>")
//         axios.get('http://localhost:5500/catagory/', {
//             headers: {
//                 Authorization: token,
//             },
//         })
//             .then((res) => {
//                 console.log(res)
//                 setCategories(res.data.data);

//                 const categories = res.data.data
//                 console.log("categories=====> ==> ", categories.length);

//                 localStorage.setItem("category", categories.length);

//             })

//             .catch((err) => {
//                 console.error(err);
//             });
//     };

//     const Delete = (id) => {

//         console.log("Delete=====>>>>>")

//         axios.delete("http://localhost:5500/catagory/" + id, {
//             headers: {
//                 Authorization: token,
//             },
//         })
//             .then((res) => {
//                 console.log(res)
//                 allDataApi();
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };

//     const updateData = (id, values) => {

//         console.log("Update=====>>>")

//         axios.patch("http://localhost:5500/catagory/" + id, values, {

//             headers: {
//                 Authorization: token,
//             },
//         })
//             .then((res) => {


//                 allDataApi(res);
//                 setEdit(null);
//                 setOpenDialog(false);
//                 handleChange(true)
//             })
//             .catch((err) => {
//                 console.error(err);
//             });
//     };

//     const Submit = (values, { resetForm }) => {
//         if (edit !== null) {
//             console.log("Edit=====>>>")
//             console.log(values)

//             updateData(edit, values);

//             setInitialValues({
//                 catagoryName: ''
//             })


//         } else {
//             console.log("Else Add=====>>>")
//             axios.post('http://localhost:5500/catagory/create', values, {
//                 headers: {
//                     Authorization: token,
//                 },
//             })
//                 .then((res) => {
//                     console.log(res)
//                     allDataApi();
//                     setOpenDialog(false);
//                 })
//                 .catch((err) => {
//                     console.error(err);
//                 });
//         }
//         resetForm();
//     };


//     const searchCat = (values) => {
//         console.log("search===>", values)
//         axios.get("http://localhost:5500/catagory/?search=" + values, {
//             headers: {
//                 Authorization: token,
//             },
//         })
//             .then((res) => {
//                 console.log(res)
//                 setCategories(res.data.data);
//             })
//             .catch((err) => {
//                 console.error(err);
//             });
//     };

//     const Search = (e) => {
//         console.log(e)
//         const value = e.target.value;
//         console.log("search==>", value)
//         setSearchValues(value);
//         searchCat(value);
//     };


//     const handleOpenDialog = () => {
//         setInitialValues({
//             catagoryName: '',
//         });
//         setEdit(null);
//         setOpenDialog(true);
//     };


//     const Edit = (category) => {
//         setInitialValues(category);
//         setEdit(category._id);
//         setOpenDialog(true);
//     };


//     const subCatStatus = (filterData) => {

//         for (let i = 0; i < filterData.length; i++) {
//             const id = filterData[i]._id

//             axios.patch('http://localhost:5500/subcatagory/' + id, {
//                 'status': filterData[i].status === 'on' ? 'off' : 'on'
//             }, {

//                 headers: {
//                     Authorization: token,
//                 },
//             })
//                 .then((res) => {
//                     console.log("success")


//                 })
//                 .catch((err) => {
//                     console.error("err===>", err)
//                 })
//         }
//     }


//     const getSubFilter = (item) => {

//         axios.get('http://localhost:5500/subcatagory/', {
//             headers: {
//                 Authorization: token,
//             },
//         })
//             .then((res) => {

//                 const filterData = res.data.data.filter((items) => items.catagoryID._id === item._id)
//                 subCatStatus(filterData)

//             })
//             .catch((err) => {
//                 console.error(err);
//             });

//     }


//     const handleChange = (id, e, item) => {

//         axios.patch("http://localhost:5500/catagory/" + id, {
//             'status': e.target.checked ? 'on' : 'off'
//         },
//             {
//                 headers: {
//                     Authorization: token,
//                 },
//             })

//             .then((res) => {
//                 allDataApi();
//                 getSubFilter(item)

//             })

//             .catch((err) => {
//                 console.error(err);
//             });

//     }


//     return (
//         <>
//             <Box sx={{ marginLeft: '240px', padding: '20px' }}>

//                 <TextField
//                     label="Search Category"
//                     sx={{ mb: 2, boxShadow: 1, width: "80%" }}
//                     value={searchValues}
//                     onChange={Search}
//                 />

//                 <Button variant="contained" onClick={handleOpenDialog} sx={{ padding: "16px 40px", marginLeft: "30px" }} >
//                     Add Category
//                 </Button>

//                 <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>

//                     <Formik
//                         initialValues={initialValues}
//                         validationSchema={catagorySchema}
//                         enableReinitialize={true}
//                         onSubmit={Submit}>

//                         {
//                             ({ submitForm }) => (
//                                 <Form>
//                                     <DialogTitle>
//                                         {
//                                             edit !== null ? 'Update Category' : 'Add Category'
//                                         }
//                                     </DialogTitle>

//                                     <DialogContent>
//                                         <DialogContentText>
//                                             <Field as={TextField} label="Category Name" name="catagoryName" fullWidth />
//                                             <ErrorMessage name="catagoryName" component="h5" style={{ color: 'red' }}/>
//                                         </DialogContentText>
//                                     </DialogContent>

//                                     <DialogActions>

//                                         <Button onClick={() => setOpenDialog(false)} sx={{ color: 'gray' }}>
//                                             Cancel
//                                         </Button>

//                                         <Button variant="contained" onClick={submitForm} onClose={() => setOpenDialog(false)}>
//                                             {edit !== null ? 'Update' : 'Add'}
//                                         </Button>

//                                     </DialogActions>
//                                 </Form>
//                             )
//                         }
//                     </Formik>
//                 </Dialog>

//                 <TableContainer component={Paper}>
//                     <Table size="small">
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell align="left" width="20px">No.</TableCell>
//                                 <TableCell align="left" width="35%">Category</TableCell>
//                                 <TableCell align="right">Status</TableCell>
//                                 <TableCell align="right">Delete</TableCell>
//                                 <TableCell align="right">Update</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>

//                             {
//                                 categories.map((category, i) => (
//                                     <TableRow key={category._id}>
//                                         <TableCell align="left">{i + 1}</TableCell>
//                                         <TableCell align="left">{category.catagoryName}</TableCell>
//                                         <TableCell align="right"><Switch checked={category.status === 'on'} onChange={(e) => handleChange(category._id, e, category)} /></TableCell>
//                                         <TableCell align="right">
//                                             <Button
//                                                 onClick={() => Delete(category._id)}
//                                                 style={{ border: '0', background: 'none', color: 'gray' }}
//                                             >
//                                                 <DeleteIcon />
//                                             </Button>
//                                         </TableCell>
//                                         <TableCell align="right">
//                                             <Button
//                                                 onClick={() => Edit(category)}
//                                                 style={{ border: '0', background: 'none', color: 'gray' }}
//                                             >
//                                                 <EditIcon />
//                                             </Button>
//                                         </TableCell>
//                                     </TableRow>
//                                 ))
//                             }

//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </Box>


//         </>
//     );
// }

// export default Category;


// =====================================================================================
import { Container, Typography, Box } from '@mui/material'

import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react';

import axios from 'axios'

const C = () => {
//   const token = localStorage.getItem('token');

  const [categories, setCategories] = useState([])
//   const [subcategory, setSubcategory] = useState([])

//   function getCategory() {
//     axios.get('http://localhost:5500/catagory/', {
//       headers: {
//         Authorization : token,
//       }
//     })
//       .then((res) => {
//         // console.log("res--->", res.data.data)
//         const filter = res.data.data.filter((el) => el.status == 'on')
//         setCategories(filter)
//         // console.log("filter", filter)
//       })
//       .catch((err) => {
//         console.log("err", err)
//       })
//   }



//   useEffect(() => {
//     getCategory()
//     // getSubCategory()
//   }, [])


  return (
    <>
      <Typography style={{ padding: "50px 0", background: "#eef7fd", borderBottom: "1px solid #3ca1e9" }}>
        <Container>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px", justifyContent: 'space-between' }}>
            <h1 style={{ color: "#124265" }}>Category</h1>
            <p style={{ marginLeft: '48px' }}><a href="/" style={{ color: "#3ca1e9" }}>Home</a> / Category</p>
          </Box>

        </Container>

      </Typography>
      <Container sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
      <Typography variant="h4" sx={{ width: '100%', textAlign: 'center', marginTop: '40px',color: '#124265' }}>All Categories</Typography>

        {
          categories.map((item, index) => (
            <Box sx={{ marginTop: "50px" }}>
              <Link to={{ pathname: '/SubcatagoryData', state: { category: item.catagoryName } }}>
                <Box className="box" sx={{ width: "250px", background: "#eef7fd", padding: "35px 0", borderRadius: "8px", boxShadow: "inset 0 0 10px #84c6f31f" }}>
                  <Typography variant='h5' sx={{ textAlign: "center", color: '#124265' }}> {index + 1} {item.catagoryName}
                  </Typography>
                </Box>
              </Link>
            </Box>
          ))
        }
      </Container>

    </>
  )
}

export default C

// import { Container, Typography, Box, Button } from '@mui/material';
// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const C = () => {
//   const token = localStorage.getItem('token');

//   const [categories, setCategories] = useState([]);
//   const [filterCat, setFilterCat] = useState([]);
//   const [showAll, setShowAll] = useState(true);

//   const getCategory = () => {
//     axios.get('http://localhost:5500/catagory/', {
//       headers: {
//         Authorization: token,
//       }
//     })
//     .then((res) => {
//       const data = res.data.data;
//       setCategories(res.data.data);
//       filterCategories(data, showAll);
//     })
//     .catch((err) => {
//       console.log("err", err);
//     });
//   }

//   const filterCategories = (data, showAll) => {
//     if (showAll) {
//       setFilterCat(data);
//     } else {
//       const filtered = data.filter((el) => el.status === 'on');
//       setFilterCat(filtered);
//     }
//   }

//   const CategoryView = () => {
//     const newShowAll = !showAll;
//     setShowAll(newShowAll);
//     filterCategories(categories, newShowAll);
//   }

//   useEffect(() => {
//     getCategory();
//   }, []);

//   return (
//     <>
//       <Typography style={{ padding: "50px 0", background: "#eef7fd", borderBottom: "1px solid #3ca1e9" }}>
//         <Container>
//           <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px", justifyContent: 'space-between' }}>
//             <h1 style={{ color: "#124265" }}>Category</h1>
//             <p style={{ marginLeft: '48px' }}><a href="/" style={{ color: "#3ca1e9" }}>Home</a> / Category</p>
//           </Box>
//           <Button variant="contained" color="primary" onClick={CategoryView}>
//             {showAll ? 'Show Only Active Categories' : 'Show All Categories'}
//           </Button>
//         </Container>
//       </Typography>
//       <Box sx={{padding:"80px 0"}}>

//       <Container sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
//         <Typography variant="h4" sx={{ width: '100%', textAlign: 'center',  color: '#124265'}}>All Categories</Typography>
//         {
//           filterCat.map((item, i) => (
//             <Box key={i} sx={{ marginTop: "50px" }}>
//               <Link to={{ pathname: '/SubcatagoryData', state: { category: item.catagoryName } }}>
//                 <Box className="box" sx={{ width: "250px", background: "#eef7fd", padding: "35px 0", borderRadius: "8px", boxShadow: "inset 0 0 10px #84c6f31f" }}>
//                   <Typography variant='h5' sx={{ textAlign: "center", color: '#124265' }}>
//                     {i + 1}.&nbsp; {item.catagoryName}
//                   </Typography>
//                 </Box>
//               </Link>
//             </Box>
//           ))
//         }
//       </Container>
//       </Box>
//     </>
//   );
// }

// export default C;