import { useState, useEffect} from 'react'
import { fetchUsers } from '../services/UsersApi'
import TweetList from '../components/TweetList/TweetList'
import Pagination from '@mui/material/Pagination';
import { FilterButton } from '../components/FilterButton/FilterButton';


const Tweets = () => {

    const [page, setPage] = useState(1)
    const [filteredUsers, setFilteredUsers] = useState([])


  useEffect(() => {

    async function fetch() {
      const response = await fetchUsers({ fetchInfo: `?page=${page}&limit=3` })
      await setFilteredUsers([...response.data])
    }

    fetch()
    
  }, [page])

  const handleChange = (e, p) => {

      setPage(p)
    }
    
    const onHandleFilterBtn = (option) => {
        if (option === "all") {
            // eslint-disable-next-line no-inner-declarations
            async function fetch() {
                const response = await fetchUsers({ fetchInfo: `?page=${page}&limit=3` })
                setFilteredUsers([...response.data])
            }

            fetch()
    
    }

        if (option === "follow") {
            // eslint-disable-next-line no-inner-declarations
            async function fetch() {
                const response = await fetchUsers({ fetchInfo: `?filter=false&page=1&limit=12` })
                setFilteredUsers([...response.data])
            }
            
            fetch()
        
    }

        if (option === "followings") {

            // eslint-disable-next-line no-inner-declarations
            async function fetch() {
                const response = await fetchUsers({ fetchInfo: `?filter=true&limit=12` })
                setFilteredUsers([...response.data])
            }

            fetch()

    }
    }

  return (
    <div>
      {filteredUsers.length !== 0 && (
              <div>
                  
          <FilterButton
                        options={["all", "follow", "followings"]}
                      onFilter={onHandleFilterBtn}
                        />        
                  <TweetList userData={filteredUsers} />
                  {filteredUsers.length === 3 && (
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
                  )}
          
          </div>
      )}
    </div>
  )
}

export default Tweets