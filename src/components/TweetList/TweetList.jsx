import {  useRef   } from 'react'
import PropTypes from 'prop-types';
import TweetCard from '../TweetCard/TweetCard';
import { BackHomeBtn, BtnContainer, ListOfTweets, UserItem } from './TweetList.styled';
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa/';


const TweetList = ({ userData }) => {
    
    const location = useLocation();
    const backLinkLocationHref = useRef(location.state?.from ?? '/');

    return (
        <div>
        { userData !== undefined && (
                <ListOfTweets>
                    <BtnContainer>
                        
                        <BackHomeBtn to={backLinkLocationHref.current} >
                            <FaArrowLeft />
                        </BackHomeBtn> 
                      </BtnContainer>
                {userData.map(item => (
                    <UserItem key={item.id}><TweetCard userInfo={item} /></UserItem>
                    
                ))}
                
            </ListOfTweets>
            ) }
        </div>    
    )
}

export default TweetList

TweetList.propTypes = {
    userData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            followers: PropTypes.number.isRequired
        })
    ).isRequired,
};