import styled from '@emotion/styled'
import { Link} from "react-router-dom";

export const ListOfTweets = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`


export const UserItem = styled.div`
    width: 360px;
    height: 460px;
    border-radius: 10px;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    
    :not(:last-child) {
        margin-bottom: 30px;
    }

`

export const BackHomeBtn = styled(Link)`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    color: #EBD8FF;
    
`

export const BtnContainer = styled.div`

display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
`


