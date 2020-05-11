import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProduitsApi from '../../services/ProduitsApi';
import Produit from './produit';
import { toast } from 'react-toastify';



const ProductInfo = (props) => {
	const  par  = props.match.params.id;
	const [produit,setProduit] = useState(undefined);
	const [produits,setProduits] = useState({});
	const [edi,setEdi] = useState(false);
	const [cart, setCart] = useState({});
	const [loading, setLoading] = useState(false);
  
	const fetchProduit = async () =>{
	  try{
		const data = await  ProduitsApi.findAll()
		setProduits(data.slice(0,6))
	   const  {id,ref,title,content,prix,setAt,observation,avatars} = await ProduitsApi.findbyId(par)
		setProduit({id,ref,title,content,prix,setAt,observation,avatars})
		const quantity = 1
		setCart({id,title,avatars,prix,quantity})
		const donnee = JSON.parse(localStorage.getItem("product"))
		if(donnee !== null)
		{
		  const  existid = donnee.filter(pro => pro.id === id)
		  if(existid.length > 0)
		  {
			setCart({...cart, quantity: existid[0].quantity})
		  }
		}
		// setLoading(true);
			 
	  }catch(error){
		  console.log(error.response);
	  }
  }
  useEffect(() =>{
	fetchProduit();
   
  },[])
  const handleShop =(param) => {
	const data = localStorage.getItem("product")
	if(data === null)
	{
	  const quantity= 1
	  const {id,title, avatar, prix} = param
	  localStorage.setItem("product",JSON.stringify([{id,title, avatar, prix,quantity}]))
	  props.setCartNav({id,title, avatar, prix,quantity})
	}else{
	  const {id,title, avatar, prix} = param
	  const proLocal = JSON.parse(localStorage.getItem("product"));
	  const  existid = proLocal.filter(produit => produit.id === id)
	  if(existid.length > 0)
	  {
		const index = proLocal.findIndex(x => x.id === existid[0].id )
		proLocal[index].quantity = cart.quantity 
		localStorage.removeItem("product") 
		localStorage.setItem("product",JSON.stringify(proLocal))
		props.setCartNav(proLocal)
	  }else{
	  const quantity= 1
	  proLocal.push({id,title, avatar, prix,quantity})
	  localStorage.setItem("product",JSON.stringify(proLocal))
	  props.setCartNav(proLocal)
	  }
	}
  }
  
	const handleChange = event =>{
	  const {id,avatar,title, prix} = produit;
	  setCart({id,avatar,title, prix});
	  const {value, name}  = event.currentTarget;
	  setCart({...cart, [name]: parseFloat(value)})
	}
if(!produit){ return <div>jfjf</div>}else{
  return ( <>
    <div className=" container content-header bg-color">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">Produits</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item "><Link to="/"> Accueil</Link></li>
              <li className="breadcrumb-item active">Produits</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <section className="ftco-section">
    	<div className="container">
    		<div className="row">
			<div className="col-lg-6 ">
              <div className="s_product_img">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                      {produit.avatars.map(function(image, index) {  
                        return <li key={image.id} data-target="#carouselExampleIndicators" 
                        data-slide-to={index} className={"  " + (index == 0 && " active ")}>
                          <img className="w-100 h-100" src={"avatars/" +  image.filePath} alt=""/>
                        </li>
						 
                      } )}
                  </ol>
                  <div className="carousel-inner">
                      {produit.avatars.map(function(image, index){
                        return <div  key={image.id} className={"carousel-item  " + (index == 0 && " active")}>
                          <img
                            className="d-block w-100"
                            src={"avatars/" +  image.filePath}
                            alt="First slide"
                          />
                        </div>
                        })}
                  </div>
                </div>
              </div>
            </div>
    			<div className="col-lg-6 product-details pl-md-5 ">
  				<h3>{produit.title}</h3>
				  <p><span>Réference</span> : {produit.ref}</p>
    				<div className="rating d-flex">
							<p className="text-left mr-4">
								<a href="#" className="mr-2">5.0</a>
								<a href="#"><span className="ion-ios-star-outline"></span></a>
								<a href="#"><span className="ion-ios-star-outline"></span></a>
								<a href="#"><span className="ion-ios-star-outline"></span></a>
								<a href="#"><span className="ion-ios-star-outline"></span></a>
								<a href="#"><span className="ion-ios-star-outline"></span></a>
							</p>
							<p className="text-left mr-4">
								<a href="#" className="mr-2" >100 <span>Rating</span></a>
							</p>
							
						</div>
    				<p className="price"><span>{ produit.prix.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') } Dirhams</span></p>
    				<p>{produit.content}.
						</p>
						<div className="row mt-4">
							<div className="col-md-6">
								<div className="form-group d-flex">
		              
		            </div>
							</div>
							<div className="w-100"></div>
							<div className="input-group col-md-6 d-flex mb-3">
	             
						<input type="number" className="form-control" id={cart.quantity} name="quantity" onChange={handleChange} value={cart.quantity} />
	            KG
	          	</div>
	          	<div className="w-100"></div>
	          	<div className="col-md-12">
	          		<p > <span>Disponibilité</span> : En Stock</p>
	          	</div>
          	</div>
          	<p><a href="cart.html" className="btn btn-black py-3 px-5">Add to Cart</a></p>
    			</div>
    		</div>
    	</div>
    </section>

    <section className="ftco-section">
			<div className="container">
              <div className="row justify-content-center mb-3 pb-3">
                    <div className="col-md-12 heading-section text-center ">
                <span className="subheading"> Produits</span>
                <h2 className="mb-4">ÉPICERIE TALIOUINE  Bio 100 %</h2>
                <p>
                Bienvenue sur notre épicerie en ligne Bio pour la plupart des produits. Découvrez nos Produits bio, 
                SAFRAN ,ARGANE et autres  produits Bio de grande qualité venant des meilleurs producteurs
                et fournisseurs Maroccain, 
                Chaque semaine vous découvrirez de nouveaux produits,
                de nouveaux assemblages 
                . Bonne découverte.
                </p>
                  </div>
                </div>   		
            </div>
    	<div className="container">
    		<div className="row">
				<Produit produits={produits} nb={4} handleShop={handleShop}/>
    		</div>
    	</div>
    </section>

		<section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
      <div className="container py-4">
        <div className="row d-flex justify-content-center py-5">
          <div className="col-md-6">
          	<h2 className="mb-0">Subcribe to our Newsletter</h2>
          	<span>Get e-mail updates about our latest shops and special offers</span>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <form action="#" className="subscribe-form">
              <div className="form-group d-flex">
                <input type="text" className="form-control" placeholder="Enter email address"/>
                <input type="submit" value="Subscribe" className="submit px-3"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </> );
}
}
export default ProductInfo;