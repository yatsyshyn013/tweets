import PropTypes from 'prop-types';
import TweetCard from '../TweetCard/TweetCard';
import { UserItem } from './TweetList.styled';


const TweetList = ({ userData }) => {
    // const {id, followers} = userData
    // console.log(userData);
    return (
        <div>
        { userData !== undefined && (
            <ul>
                {userData.map(item => (
                    <UserItem key={item.id}><TweetCard userInfo={item} /></UserItem>
                    // <StyledLinks key={item.id}><Link to={`/movies/${item.id}`} state={{ from: location }} style={{ color: 'black', textDecoration:'none',}}>{item.title}</Link></StyledLinks>
                ))}
                
            </ul>
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