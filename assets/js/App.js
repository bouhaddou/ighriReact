// import 
import React, { useState, useEffect } from 'react';
import ReactDom from "react-dom";
import HomePage from './pages/ighri/HomePage';
import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from './Components/ighri/Navbar';
import Produits from './pages/shop/Produits';
import Footer from './Components/ighri/Footer';
import LoginApi from './services/LoginApi';
import LoginPage from './pages/LoginPage';
import ProductInfo from './pages/shop/ProductInfo';
import AdminFooter from "./Components/admin/AdminFooter"
import AdminNavbar from './Components/admin/AdminNavbar'
import AdminAside from './Components/admin/AdminAside'
import ProduitsPage from './pages/admin/produits/ProduitsPage';
import produitPage from './pages/admin/produits/produitPage';
import ShowProduct from './pages/admin/produits/ShowProduct'
import CategoriesPage from './pages/admin/categories/CategoriesPage';
import ShowCategorie from './pages/admin/categories/ShowCategorie';
import CategoriePage from './pages/admin/categories/CategoriePage';
import CommandePage from './pages/admin/shops/CommandePage';
import ShowShops from './pages/admin/shops/ShowShops'
import ContactPage from './pages/admin/contact/ContactPage';
import PostPage from './pages/admin/post/PostPage';
import PostsPage from './pages/admin/post/PostsPage';
import ShowPost from './pages/admin/post/ShowPost';
import dashboardPage from './pages/admin/dashboardPage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/shop/Cart';
import Chekout from './pages/shop/Chekout';
import presentation from './pages/ighri/presentation';


LoginApi.setup();

const App = () => {
    const [cartNav, setCartNav] = useState([])
    // const [lang, setLang]= useState(LOCALES.FRENSH)
    const funcNav = () =>{
           const x = JSON.parse(localStorage.getItem("product"));
           if(x){
           setCartNav(x)
           }
           console.log(x)
      }
      
      useEffect(() =>{
        funcNav()
      },[])
    
    const [isAuthenticated, setIsAuthenticated] = useState(LoginApi.isAuthenticated)  ;
    const PrivatRoute = ({path, isAuthenticated, component}) =>{
        return isAuthenticated ? 
           <Route path={path} isAuthenticated={isAuthenticated} component={component} /> 
           : 
           <Redirect to="/login" />
       }   


    return ( <>
        {/* <I18nProvider locale={lang}> */}
         <div className="">
        <HashRouter>
            {!isAuthenticated && <Navbar cartNav={cartNav}    />}
             {isAuthenticated && <AdminNavbar />}
            {isAuthenticated && <AdminAside />}
            <Switch>
              
                {!isAuthenticated && <Route path="/login"  render={props => (  <LoginPage  onLogin={setIsAuthenticated} {...props} /> )} />}
                {!isAuthenticated && <Route  path="/Produits" render={props=>( <Produits setCartNav={setCartNav}   {...props} /> )} />}
                {!isAuthenticated && <Route path="/ProductInfo/:id" render={props=> { return <ProductInfo setCartNav={setCartNav} {...props} /> }} />}
                {!isAuthenticated &&<Route path="/Cart" render={props=>{ return <Cart setCartNav={setCartNav}   {...props} />  }} /> }
                {!isAuthenticated && <Route path="/checkout" component={Chekout} />}
                {!isAuthenticated && <Route path="/presentation" component={presentation} />}
                {!isAuthenticated && <Route path="/ShowPosts/:id" component={ShowShops} />}
               {/* {!isAuthenticated && <Route path="/contact" component={Contact} />}
                {!isAuthenticated && <Route path="/blogPage" component={BlogPage} /> } */}
                {!isAuthenticated && <Route path="/" render={props=>{return <HomePage  setCartNav={setCartNav}  {...props} /> }} /> }
                <div className="content-wrapper">
                <Switch>
                <PrivatRoute path="/posts/show/:id" component={ShowPost} isAuthenticated={isAuthenticated}  />
                <PrivatRoute path="/posts/:id" component={PostPage} isAuthenticated={isAuthenticated}  />
                <PrivatRoute path="/posts" component={PostsPage} isAuthenticated={isAuthenticated}  />
                <PrivatRoute path="/AdminContact" component={ContactPage} isAuthenticated={isAuthenticated}  />
                <PrivatRoute path="/shops/show/:id" component={ShowShops} isAuthenticated={isAuthenticated}  />
                <PrivatRoute path="/shops" component={CommandePage} isAuthenticated={isAuthenticated}  />
                <PrivatRoute path="/categories/show/:id" component={ShowCategorie} isAuthenticated={isAuthenticated}  />
                <PrivatRoute path="/categories/:id" component={CategoriePage} isAuthenticated={isAuthenticated}  />
                <PrivatRoute path="/categories" component={CategoriesPage} isAuthenticated={isAuthenticated}  />
                <PrivatRoute path="/product/show/:id" component={ShowProduct} isAuthenticated={isAuthenticated}  />
                <PrivatRoute path="/product/:id" component={produitPage} isAuthenticated={isAuthenticated}  />
                <PrivatRoute path="/product/new" component={produitPage} isAuthenticated={isAuthenticated}  />
                <PrivatRoute path="/product" component={ProduitsPage} isAuthenticated={isAuthenticated}  /> 
                <PrivatRoute path="/" component={dashboardPage} isAuthenticated={isAuthenticated}  />
                   </Switch>
                </div>
            </Switch>
            <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
            {!isAuthenticated &&<Footer />}
            {isAuthenticated && <AdminFooter />}
            
        </HashRouter>
        </div>
        {/* </I18nProvider> */}
    </> );
}
 
const rootElement = document.querySelector('#App');
ReactDom.render(<App/>,rootElement);
