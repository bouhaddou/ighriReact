import React from 'react';
import '../../../css/ighri/css/open-iconic-bootstrap.min.css'
import '../../../css/ighri/css/animate.css'
import '../../../css/ighri/css/owl.carousel.min.css'
import '../../../css/ighri/css/owl.theme.default.min.css'
import '../../../css/ighri/css/magnific-popup.css'
import '../../../css/ighri/css/aos.css'
import '../../../css/ighri/css/ionicons.min.css'
import '../../../css/ighri/css/bootstrap-datepicker.css'
import '../../../css/ighri/css/jquery.timepicker.css'
import '../../../css/ighri/css/flaticon.css'
import '../../../css/ighri/css/icomoon.css'
import '../../../css/ighri/css/style.css'
import '../../../css/ighri/css/style2.css'
import { Link, NavLink } from 'react-router-dom';
import $ from 'jquery'
import { toast } from 'react-toastify';
const Navbar = ({cartNav}) => {
    return ( <>
	<div className="py-1 bg-color">
	<div className="container">
		<div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
			<div className="col-lg-12 d-block">
				<div className="row d-flex">
					<div className="col-md pr-4 d-flex topper align-items-center">
						<div className="icon mr-2 d-flex justify-content-center align-items-center">
							<span className="icon-phone2"></span>
						</div>
						<span className="text ">+212666340050</span>
					</div>
					<div className="col-md pr-4 d-flex topper align-items-center">
						<div className="icon mr-2 d-flex justify-content-center align-items-center text-light">
							<i className="fas fa-envelope-open "></i>
						</div>
						<span className="text">brahimbouhaddou12@email.com</span>
					</div>
					<div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
						<span className="text">
								<a href="/login" className="text"><i className="fas fa-lock-open"></i> Connexion</a> &
								<a href="/register" className="text"><i className="fas fa-sign-in-alt"></i> Inscription</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light" >
	    <div className="container">
	      <Link className="navbar-brand txt-color" to="/">SAFRAN 
		  <img style={{ width:50, height:40,position:"relative",top:-15 }} src="./logo.png" /> TALIOUINE</Link>
	      <button className="navbar-toggler" type="button" data-target="#navbarSupportedContentA" data-toggle="collapse" aria-controls="navbarSupportedContentA" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="navbarSupportedContentA">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item active">
				  <Link to="/" className="nav-link">Accueil</Link></li>
	          <li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" 
					data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop
				</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdown">
					<Link className="dropdown-item" to="/produits" >Shop</Link>
					<Link className="dropdown-item" to="/cart">Cart</Link>
				</div>
              </li>
			  <li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" href="#" id="dropdown04" 
					data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">IGHRI
				</a>
				<div className="dropdown-menu" aria-labelledby="dropdown04">
					<Link className="dropdown-item" to="/presentation" >Présentation</Link>
					<Link className="dropdown-item" to="/cart">Cart</Link>
				</div>
              </li>
	          <li className="nav-item"> <Link  to="/Produits" className="nav-link">IGHRI</Link></li>
	          <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
	          <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
	          <li className="nav-item cta cta-colored">
				  <Link to="/cart" className="nav-link text-danger">
					  <i className="icon-shopping_cart fa-1x"></i>
					  <span className="">[{ cartNav.length}]</span>
					  </Link> 
					</li>

	        </ul>
	      </div>
	    </div>
	  </nav>

    </> );
}
 
export default Navbar;