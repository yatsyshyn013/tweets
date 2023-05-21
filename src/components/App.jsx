// import { useState, useEffect } from 'react'
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from './SharedLayout/SharedLayout';
import './App.css'
// import { fetchUsers } from '../services/UsersApi'
// import TweetList from './TweetList/TweetList'
// import Pagination from '@mui/material/Pagination';

const Home = lazy(() => import("../pages/Home"))  
const Tweets = lazy(()=> import("../pages/Tweets"))  

function App() {

  // const [user, setUser] = useState([])
  // const [page, setPage] = useState(1)

  // useEffect(() => {

  //   async function fetch() {
  //     const response = await fetchUsers({ fetchInfo: `?page=${page}&limit=3` })
  //     await setUser([...response.data])
  //   }

  //   fetch()
    
  // }, [page])

  // const handleChange = (e, p) => {

  //     setPage(p)
  // }

  return (

     <Routes>
        <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />}/>
        {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    // <div>
    //   {user.length !== 0 && (
    //     <div>
    //       <TweetList userData={user} />
    //       <Pagination
    //         count={4}
    //         color="secondary"
    //         showFirstButton
    //         showLastButton
    //         // siblingCount={1}
    //         // boundaryCount={0}
    //         onChange={handleChange}
    //         style={{
    //           display: 'flex',
    //           justifyContent: 'center',
    //           alignItems: 'center'
    //         }} />
    //       </div>
    //   )}
    // </div>
  )
}

export default App
