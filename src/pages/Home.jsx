
import { useLocation} from "react-router-dom"
import { StyledLink } from "../components/SharedLayout/SharedLayout.styled";


const Home = () => {

    const location = useLocation();


    return (
        <div style={{
            color: '#5CD3A8',
            fontSize: '30px',
            padding: '40px 20px',
            alignItems: 'center',
            background: 'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
            height: '100px',
            width: '400px',
            borderRadius: '10px',

            
        }}>
            <div>
            <div>
                Тестове завдання Tweets
            </div>
                <StyledLink to="/tweet" state={{ from: location }} style={{fontSize: '20px', margin: '0'}}>go to tweets</StyledLink>
            </div>
        </div>
   
  )
}

export default Home