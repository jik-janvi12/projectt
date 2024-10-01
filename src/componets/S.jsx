
import { Container, Typography, Box } from '@mui/material';
import { Link} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const S = () => {

  const token = localStorage.getItem('token');

  const [allSubcategories, setAllSubcategories] = useState([]);
  const [filteredSubcategories, setFilteredSubcategories] = useState([]);

 

  useEffect(() => {
    Dataview();
  const categoryId = localStorage.getItem('categoryId');
   if(categoryId)
   {
    Dataview(categoryId)
    console.log(" category id get=====================>",categoryId);
    
   }
  }, []);
  function Dataview(categoryId) {
    console.log("++++++++++++++>",categoryId);
    
    axios.get('https://interviewhub-3ro7.onrender.com/subcatagory/', {
      headers: {
        Authorization: token,
      }
    })
      .then((res) => {
        console.log("res--->", res.data.data);
        setAllSubcategories(res.data.data);
        
        if (categoryId) {
          // const filter = res.data.data.filter((el) => el.catagoryID.catagoryName === category);
          // setFilteredSubcategories(filter);
          // console.log("Filtered Data:", filter);
          const filterdata = res.data.data.filter((item) => item.catagoryID._id ===  categoryId)
          setFilteredSubcategories(filterdata);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  const handleId = (item) => {
    console.log(" Subcategory ID:", item._id); // Assuming 'id' is the property you want to log
    localStorage.setItem('SubcategoryId',item._id)
    console.log("setitem SubcategoryId",item._id);
    
  }
  return (
    <>
      <Typography style={{ padding: "50px 0", background: "#eef7fd", borderBottom: "1px solid #3ca1e9" }}>
        <Container>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px", justifyContent: 'space-between' }}>
            <h1 style={{ color: "#124265" }}>Sub Category</h1>
            <p style={{ marginLeft: '48px' }}> <a href="/" style={{ color: "#3ca1e9" }}>Home</a> / SubCategory</p>
          </Box>
        </Container>
      </Typography>
      <Box sx={{padding:"80px 0"}}>
        <Container sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          <Typography variant="h4" sx={{ width: '100%', textAlign: 'center',color: '#124265' }}>Filtered Subcategories</Typography>
          {
            filteredSubcategories.length > 0 ? filteredSubcategories.map((item, index) => (
              <Box key={item._id} sx={{ marginTop: "50px" }}>
                <Link to={{ pathname: '/Q', state: { subcategory: item.subCatagoryname } }}>
                  <Box className="box" sx={{ width: "250px", background: "#eef7fd", padding: "35px 0", borderRadius: "8px", boxShadow: "inset 0 0 10px #84c6f31f" }}>
                    <Typography variant='h5' sx={{ textAlign: "center", color: '#124265' }}> {index + 1}. {item.subCatagoryname}</Typography>
                  </Box>
                </Link>
              </Box>
            )) : <Typography sx={{ marginTop: '20px', textAlign: 'center', color: 'gray' }}>"No subcategories found for the selected category"</Typography>
          }

          <Typography variant="h4" sx={{ width: '100%', textAlign: 'center', marginTop: '40px', color: '#124265' }}>All Subcategories</Typography>
          {
            allSubcategories.map((item, index) => (
              <Box key={item._id} sx={{ marginTop: "50px" }} onClick={() => handleId(item)}>
                <Link to={{ pathname: '/Q', state: { subcategory: item.subCatagoryname } }}>
                  <Box className="box" sx={{ width: "250px", background: "#eef7fd", padding: "35px 0", borderRadius: "8px", boxShadow: "inset 0 0 10px #84c6f31f" }}>
                    <Typography variant='h5' sx={{ textAlign: "center", color: '#124265' }}> {index + 1}. {item.subCatagoryname}</Typography>
                  </Box>
                </Link>
              </Box>
            ))
          }
        </Container>
      </Box>
    </>
  );
};

export default S;































