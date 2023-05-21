// import { useState, useEffect } from 'react'
// import './App.css'
// import { fetchUsers } from '../services/UsersApi'
// import TweetList from './TweetList/TweetList'
// import Pagination from '@mui/material/Pagination';

import { useLocation} from "react-router-dom"
// import { BackHomeBtn } from "../components/TweetList/TweetList.styled";
import { StyledLink } from "../components/SharedLayout/SharedLayout.styled";
// import { StyledLink } from "../components/SharedLayout/SharedLayout.styled"

const Home = () => {

    const location = useLocation();
//     const [user, setUser] = useState([])
//   const [page, setPage] = useState(1)

//   useEffect(() => {

//     async function fetch() {
//       const response = await fetchUsers({ fetchInfo: `?page=${page}&limit=3` })
//       await setUser([...response.data])
//     }

//     fetch()
    
//   }, [page])

//   const handleChange = (e, p) => {

//       setPage(p)
//   }

    return (
        <div style={{
            color: '#5CD3A8',
            fontSize: '30px',
            padding: '40px 20px',
            alignItems: 'center',
            background: 'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
            height: '100px',
            width: '400px',
            borderRadius: '10px',

            
        }}>
            <div>
            <div>
                Тестове завдання Tweets
            </div>
                <StyledLink to="/tweet" state={{ from: location }} style={{fontSize: '20px', margin: '0'}}>go to tweets</StyledLink>
            </div>
        </div>
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

export default Home