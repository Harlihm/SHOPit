import './App.css'
import { productsData } from './api/Api';
import Footer from './components/Footer'
import Header from './components/Header'
import Produc from './components/Produc';
import Cart from './pages/Cart';
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration

} from "react-router-dom";
import Login from './pages/Login';


const Layout =()=>{
  return(
    <div>
       <Header/>
       <ScrollRestoration/>
      <Outlet/>
      <Footer/>

    </div>
  );
};

const router= createBrowserRouter([
{
path:"/",
element:<Layout/>,
children:[
  {
    path:"/",
    element:<Home/>,
    loader:productsData,
  },
  {
    path:"/product/:id",
    element:<Produc/>
  }
  ,
  { 
    path:"/cart",
    element:<Cart/>,
  },
  {
    path:"/login",
    element:<Login/>,
  }
]
},
]);


function App() {



  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
