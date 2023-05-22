import { useState, useEffect} from 'react'
import { fetchUsers } from '../services/UsersApi'
import TweetList from '../components/TweetList/TweetList'
import Pagination from '@mui/material/Pagination';

const Tweets = () => {
    const [user, setUser] = useState([])
    const [page, setPage] = useState(1)

  useEffect(() => {

    async function fetch() {
      const response = await fetchUsers({ fetchInfo: `?page=${page}&limit=3` })
      await setUser([...response.data])
    }

    fetch()
    
  }, [page])

  const handleChange = (e, p) => {

      setPage(p)
  }

  return (
    <div>
      {user.length !== 0 && (
              <div>
                  
                  
          <TweetList userData={user} />
          <Pagination
            count={4}
            color="secondary"
            showFirstButton
            showLastButton
            // siblingCount={1}
            // boundaryCount={0}
            onChange={handleChange}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }} />
          </div>
      )}
    </div>
  )
}

export default Tweets