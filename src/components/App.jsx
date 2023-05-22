
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from './SharedLayout/SharedLayout';
import './App.css'


const Home = lazy(() => import("../pages/Home"))  
const Tweets = lazy(()=> import("../pages/Tweets"))  

function App() {

  return (

     <Routes>
        <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home />} />
        <Route path="/tweet" element={<Tweets />}/>
        <Route path="*" element={<Home />} />
        </Route>
      </Routes>
  )
}

export default App
