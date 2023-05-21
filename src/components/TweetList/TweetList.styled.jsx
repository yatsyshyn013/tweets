import styled from '@emotion/styled'

export const ListOfTweets = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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


