import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { putFollow } from '../../services/UsersApi';
import { AvatarImg, FollowBtn, Logo, LogoArea, MainImage, StyledCard, StyledText, AvatarBorder } from './TweetCard.styled';


const TweetCard = ({ userInfo }) => {
    const { id, tweets, followers, avatar } = userInfo
    // console.log(userInfo);
    
    const [followersCount, setFollowersCount] = useState(followers)

    const [isFollow, setIsFollow] = useState(false)
    // const [localStorageInfo, setLocalStorageInfo] = useState(0)

    useEffect(() => {
        const count = localStorage.getItem(`following ${id}`)
        if (count) {
            setIsFollow(JSON.parse(count))
        }
        
        
    }, [id])

    // useEffect(() => {
    //     // localStorage.setItem("followerCount", followersCount);
    //      if (followersCount > followers) {
    //         localStorage.setItem(`following ${id}`, followersCount);
    //      }
         
    //      if (followersCount <= followers ) {
    //          localStorage.setItem(`unfollow ${id}`, followersCount);
    //     }
    // }, [followersCount, followers])

    const onFollowBtnClick = async () => {
        const follow = !isFollow
        // setFollowersCount(followers + 1)
        setIsFollow(follow)
        localStorage.setItem(`following ${id}`, JSON.stringify(follow));
        // if (followersCount > followers) {
        //     localStorage.setItem("following", followersCount);
        // }
        
        // const count = followersCount;
        // console.log(count);
        
        // const onClickFollower = followersCount;
        try {
            const afterFollow = await putFollow({ id, followers, isFollow: follow, followersCount})
            // console.log(afterFollow);
            setFollowersCount(afterFollow.data.followers)
            
        } catch (error) {
            console.log(error);
        }
        

    }

    // const omUnfollowBtnClick = () => {
    //     setFollowersCount(followersCount - 1)
    //     localStorage.setItem(`unfollow ${id}`, followersCount);
    //     // localStorage.setItem("unfollow", followersCount);
    //     // localStorage.setItem("followerCount", followersCount);
    // }

    return(
        <StyledCard>
            <LogoArea>
                <Logo src="/src/assets/Vector.png" alt="" width="76px" height="22px"/>
                <MainImage src="//src/assets/picture2 1.png" alt="" width="308px" height="168px"/>
            </LogoArea>
            <div>
                    <AvatarBorder>
                        <AvatarImg src={avatar} alt="" width='62px' /> 
                    </AvatarBorder>
            <StyledText>{tweets} Tweets</StyledText>
            <StyledText>{followersCount} Followers</StyledText>
                <FollowBtn
                    type='button'
                    onClick={onFollowBtnClick}
                    isActive={isFollow}
                >
                    {isFollow ? 'Following' : 'Follow'}
                </FollowBtn>
            </div>
            {/* {followersCount <= followers
                ? (<>
                    <div>{followers}</div>
                    <button type='button' onClick={onFollowBtnClick}>Follow</button>
                    </>)
                : (<>
                    <div>{followers}</div>
                    <button type='button' onClick={omUnfollowBtnClick} style={{ backgroundColor: 'tomato' }}>Following</button>
                    </>
                    )} */}
           
            
        </StyledCard>
    )
}

export default TweetCard

TweetCard.propTypes = {
        userInfo: PropTypes.shape({
            id: PropTypes.string.isRequired,
            followers: PropTypes.number.isRequired,
            // user: PropTypes.string.isRequired,
            tweets: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
        }).isRequired

};