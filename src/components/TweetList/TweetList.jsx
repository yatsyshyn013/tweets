import PropTypes from 'prop-types';
import TweetCard from '../TweetCard/TweetCard';
import { ListOfTweets, UserItem } from './TweetList.styled';


const TweetList = ({ userData }) => {
   
    return (
        <div>
        { userData !== undefined && (
            <ListOfTweets>
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