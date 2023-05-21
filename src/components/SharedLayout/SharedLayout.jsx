import { Suspense } from "react";
import { Outlet} from "react-router-dom";
import {NavigationContainer, StyledLink} from "./SharedLayout.styled"



const SharedLayout = () => {
    return (
         <div>
        <NavigationContainer>
        
        <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/tweet" >Tweets</StyledLink>
        </nav>
        </NavigationContainer>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
    </div>
    )
}

export default SharedLayout