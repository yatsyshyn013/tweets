import axios from 'axios';


const BASE_URL = 'https://646a14b1183682d6144d2ef5.mockapi.io/Users/'
axios.defaults.baseURL = BASE_URL;

export async function fetchUsers({fetchInfo}) {

    try {
        
        const response = await axios.get(fetchInfo)
        return response

    } catch (error) {
        console.log(error);
    }
    
}

export async function putFollow({id, isFollow, followersCount}) {
    try {
        const updateFollowers = isFollow ? followersCount + 1 : followersCount - 1
        const response = await axios.put(`${id}`, {
            followers: updateFollowers,
            isFollowed: isFollow,
        })
        return response

    } catch (error) {
        console.log(error);
    }
}
