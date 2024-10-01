// // import { Container, Typography, Box } from '@mui/material'

// import { Link } from "react-router-dom/cjs/react-router-dom.min"
// import React, { useEffect, useState } from 'react';

// import axios from 'axios'

// const CatagoryData = () => {
//   const token = localStorage.getItem('token');

//   const [categories, setCategories] = useState([])
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


//   return (
//     <>
//       <Typography style={{ padding: "50px 0", background: "#eef7fd", borderBottom: "1px solid #3ca1e9" }}>
//         <Container>
//           <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px", justifyContent: 'space-between' }}>
//             <h1 style={{ color: "#124265" }}>Category</h1>
//             <p style={{ marginLeft: '48px' }}><a href="/" style={{ color: "#3ca1e9" }}>Home</a> / Category</p>
//           </Box>

//         </Container>

//       </Typography>
//       <Container sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
//       <Typography variant="h4" sx={{ width: '100%', textAlign: 'center', marginTop: '40px',color: '#124265' }}>All Categories</Typography>

//         {
//           categories.map((item, index) => (
//             <Box sx={{ marginTop: "50px" }}>
//               <Link to={{ pathname: '/SubcatagoryData', state: { category: item.catagoryName } }}>
//                 <Box className="box" sx={{ width: "250px", background: "#eef7fd", padding: "35px 0", borderRadius: "8px", boxShadow: "inset 0 0 10px #84c6f31f" }}>
//                   <Typography variant='h5' sx={{ textAlign: "center", color: '#124265' }}> {index + 1} {item.catagoryName}
//                   </Typography>
//                 </Box>
//               </Link>
//             </Box>
//           ))
//         }
//       </Container>

//     </>
//   )
// }

// export default CatagoryData

import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CatagoryData = () => {
  const token = localStorage.getItem('token');

  const [categories, setCategories] = useState([]);
  const [filterCat, setFilterCat] = useState([]);
  const [showAll, setShowAll] = useState(true);

  const getCategory = () => {
    axios.get('http://localhost:5500/catagory/', {
      headers: {
        Authorization: token,
      }
    })
    .then((res) => {
      const data = res.data.data;
      setCategories(res.data.data);
      filterCategories(data, showAll);
    })
    .catch((err) => {
      console.log("err", err);
    });
  }

  const filterCategories = (data, showAll) => {
    if (showAll) {
      setFilterCat(data);
    } else {
      const filtered = data.filter((el) => el.status === 'on');
      setFilterCat(filtered);
    }
  }

  const CategoryView = () => {
    const newShowAll = !showAll;
    setShowAll(newShowAll);
    filterCategories(categories, newShowAll);
  }

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <Typography style={{ padding: "50px 0", background: "#eef7fd", borderBottom: "1px solid #3ca1e9" }}>
        <Container>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px", justifyContent: 'space-between' }}>
            <h1 style={{ color: "#124265" }}>Category</h1>
            <p style={{ marginLeft: '48px' }}><a href="/" style={{ color: "#3ca1e9" }}>Home</a> / Category</p>
          </Box>
          <Button variant="contained" color="primary" onClick={CategoryView}>
            {showAll ? 'Show Only Active Categories' : 'Show All Categories'}
          </Button>
        </Container>
      </Typography>
      <Box sx={{padding:"80px 0"}}>

      <Container sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        <Typography variant="h4" sx={{ width: '100%', textAlign: 'center',  color: '#124265'}}>All Categories</Typography>
        {
          filterCat.map((item, i) => (
            <Box key={i} sx={{ marginTop: "50px" }}>
              <Link to={{ pathname: '/SubcatagoryData', state: { category: item.catagoryName } }}>
                <Box className="box" sx={{ width: "250px", background: "#eef7fd", padding: "35px 0", borderRadius: "8px", boxShadow: "inset 0 0 10px #84c6f31f" }}>
                  <Typography variant='h5' sx={{ textAlign: "center", color: '#124265' }}>
                    {i + 1}.&nbsp; {item.catagoryName}
                  </Typography>
                </Box>
              </Link>
            </Box>
          ))
        }
      </Container>
      </Box>
    </>
  );
}

export default CatagoryData;