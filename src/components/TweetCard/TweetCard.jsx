import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { putFollow } from '../../services/UsersApi';
import { AvatarImg, FollowBtn, Logo, LogoArea, MainImage, StyledCard, StyledText, AvatarBorder } from './TweetCard.styled';
import MainPhoto from '../../assets/picture2 1.png'
import CompanyLogo from '../../assets/Vector.png'

const TweetCard = ({ userInfo }) => {
    const { id, tweets, followers, avatar } = userInfo
    
    const [followersCount, setFollowersCount] = useState(followers)

    const [isFollow, setIsFollow] = useState(false)

    useEffect(() => {
        const count = localStorage.getItem(`following ${id}`)
        if (count) {
            setIsFollow(JSON.parse(count))
        }
        
        
    }, [id])


    const onFollowBtnClick = async () => {
        const follow = !isFollow
    
        setIsFollow(follow)
        localStorage.setItem(`following ${id}`, JSON.stringify(follow));

        try {
            const afterFollow = await putFollow({ id, followers, isFollow: follow, followersCount})
            
            setFollowersCount(afterFollow.data.followers)
            
        } catch (error) {
            console.log(error);
        }
        

    }

    function numberWithCommas(followersNumber) {
    return followersNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

    return(
        <StyledCard>
            <LogoArea>
                <Logo src={CompanyLogo} alt="Logo company" width="76px" height="22px"/>
                <MainImage src={MainPhoto} alt="Background photo" width="308px" height="168px"/>
            </LogoArea>
            <div>
                    <AvatarBorder>
                        <AvatarImg src={avatar} alt="" width='62px' /> 
                    </AvatarBorder>
            <StyledText>{tweets} Tweets</StyledText>
            <StyledText>{numberWithCommas(followersCount)} Followers</StyledText>
                <FollowBtn
                    type='button'
                    onClick={onFollowBtnClick}
                    isActive={isFollow}
                >
                    {isFollow ? 'Following' : 'Follow'}
                </FollowBtn>
            </div> 
            
        </StyledCard>
    )
}

export default TweetCard

TweetCard.propTypes = {
        userInfo: PropTypes.shape({
            id: PropTypes.string.isRequired,
            followers: PropTypes.number.isRequired,
            tweets: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
        }).isRequired

};