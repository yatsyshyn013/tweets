import styled from '@emotion/styled'

export const StyledCard = styled.div`
    width: 380px;
    height: 460px;
    border-radius: 10px;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);

    

`

export const LogoArea = styled.div`
    height: 215px;

    position: relative;
   
    
    :after{

        content: '';
         position: absolute;
        bottom: -40px;
         left: 0;
        right: 0;
         top: 0;
        border-bottom: 5px solid #EBD8FF;
        }
`

export const MainImage = styled.img`
    margin: 28px 36px 18px;
`

export const Logo = styled.img`
    padding: 20px 0px 0px 20px;
    display: flex;
    justify-content: start;
`

export const FollowBtn = styled.button`
    width: 196px;
    margin-left: 92px;
    margin-right: 92px;

    text-transform: uppercase;
   
    font-weight: 600;
    font-size: 18px;
    line-height: 1.2;
    color: rgba(55, 55, 55, 1);
    background-color: ${({ isActive }) => (isActive ? '#5CD3A8' : '#EBD8FF;')};
`

export const StyledText = styled.div`
    font-style: normal;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;

color: #EBD8FF;

margin-bottom: 16px;

:last-child{
    margin-bottom: 26px;
}
`

export const AvatarImg = styled.img`
    margin-bottom: 26px;
    border-radius: 50%;
    border: 5px solid #EBD8FF;
    position: relative;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);

    
    :after{
   
        content: '';
         position: absolute;
         bottom: 0;
         left: 0;
        right: 0;
         top: 0;
         box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
    }
`

export const AvatarBorder = styled.div`
    border-radius: 50%;
  
`