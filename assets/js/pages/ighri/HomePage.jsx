import React, { useState, useEffect } from 'react';
import Slider from './../../Components/ighri/Slider'
import ProduitsApi from '../../services/ProduitsApi';
import Produit from '../shop/produit';
import { toast } from 'react-toastify';
import SendEmail from '../../Components/ighri/SendEmail';
import { Link } from 'react-router-dom';

const HomePage  = ({setCartNav}) => {
	const [produits,setProduits] = useState({});
	  const [filterProduit,setFilterProduit] = useState({});
	  const [bestProduct,setBestProduct] = useState({});
	  const [loding,setLoading] = useState(false);
	
	  const fetchProduits = async () =>{
		try{
			const data = await  ProduitsApi.findAll()
			 setProduits(data);
			 setFilterProduit(data.slice(0,6))
			 const nombre = Math.floor(Math.random() * (data.length - 1 + 1)) + 1;
			 setBestProduct(data[nombre])
			  setLoading(true);
	   }catch(error){
		   console.log(error.response)
	   }
	}
	
	useEffect(() => {
	  fetchProduits();
	}, []);
	
	
	
	const handleShop =(param) => {
	
	  const data = localStorage.getItem("product")
			if(data === null)
			{
			  const quantity= 1
			  const image = param.avatars[0].filePath
			  const {id,title, prix} = param
			  localStorage.setItem("product",JSON.stringify([{id,title, image, prix,quantity}]))
			  setCartNav({id,title, image, prix,quantity})
			}else{
			  const image = param.avatars[0].filePath
			  const {id,title, prix} = param
			  const proLocal = JSON.parse(localStorage.getItem("product"));
			  const  existid = proLocal.filter(produit => produit.id === id)
			  if(existid.length > 0)
			  {
				const index = proLocal.findIndex(x => x.id === existid[0].id )
				proLocal[index].quantity = proLocal[index].quantity + 1
				localStorage.removeItem("product") 
				localStorage.setItem("product",JSON.stringify(proLocal))
			  }else{
			  const quantity= 1
			  proLocal.push({id,title, image, prix,quantity})
			  localStorage.setItem("product",JSON.stringify(proLocal))
			  }
			  setCartNav(proLocal)
			}
			toast.success("le produit est ajouter au panier avec succée")
	}
if(!produits){
        return <div>loading</div>
      }else{   
return ( 
        <>
<Slider />
<section className="ftco-section p-0 mt-2">
	<div className="container">
		<div className="row justify-content-center mb-3 pb-3">
          <div className="col-md-12 heading-section text-center ">
          	<span className="subheading text-dark"> Bienvenue<br/> </span>
            <h2 className="mb-4 txt-color">IGHRI TALIOUINE OFFICIEL</h2>
            <p>Vous êtes Ighrioui ou d'origine de Taliouine ou d'autres origines bienvenue sur notre site 
                <strong className="txt-color">IGHRI إغري </strong><br/>vous êtes 
			dans le bon endroit pour découvrir  notre Blade <span className="txt-color">IGHRI</span>  
            </p>
			
          </div>
        </div>  
    </div>
</section>
<section className="ftco-section ftco-no-pb ftco-no-pt bg-light mt-3">
<div className="w-100 " style={{ backgroundImage: `url('bg.png')`  }} >
	<div className="container">
		<div className="row">
			<div className="col-md-5 p-md-4 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url('logo.png')` }}  >
				<a href="/post/vedio" className="icon popup-vimeo d-flex justify-content-center align-items-center">
					<span className="icon-play"></span>
				</a>
			</div>
			<div className="col-md-7 py-4 wrap-about pb-md-5 ">
				<div className="heading-section-bold mb-4 mt-md-5">
					<div className="ml-md-0 text-center">
						<h2 className="mb-4 ">Village <span className="txt-color">IGHRI TALIOUINE</span>
						<img style={{ width:120, height:80,position:"relative",top:-10 }} src="./logo.png" />
						<img style={{ width:80, height:60,position:"relative",top:-30,right:80 }} src="./abeille.gif" /> </h2>
					</div>
				</div>
				<div className="pb-md-4">
					<p className="text-justify text-center" > <span className="txt-color">IGHRI</span> se situe au cœur de la tribu des Souktana, zone historique du safran, dans la 
						commune rurale de Sidi Hssain. Il se situe à environ 25 Km à l’Est du Centre Urbain 
						de Taliouine à proximité de la route nationale reliant les deux villes touristiques 
						de Taroudant et Ouarzazate..
					</p>
					<p className="text-center">
						<a href="/presentation" className="btn btn-primary text-center"><i className="fas fa-eye"></i> Voir Plus</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
</section>
    <section className="ftco-section">
    	<div className="container">
        <div className="row justify-content-center mb-3 pb-3">
          		<div className="col-md-12 heading-section text-center ">
					<span className="subheading txt-color"> Produits</span>
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
			<Produit produits={filterProduit} nb={3} handleShop={handleShop}/> 
    		</div>
    	</div>
    </section>
    <section className="ftco-section ftco-no-pb ftco-no-pt bg-light mt-3">
	<div className="w-100 " style={{ backgroundImage: `url('bg.png')`  }} >
	<div className="container">
		<div className="row">
			<div className="col-md-5 p-md-4 img img-2 d-flex justify-content-center align-items-center"  
			style={{ backgroundImage: `url('fisteval.png')` }}>
				<Link to="/ShowPosts" className="icon popup-vimeo d-flex justify-content-center align-items-center">
					<span className="icon-play"></span>
				</Link>
			</div>
			
			<div className="col-md-7 py-4 wrap-about pb-md-5 " >
				<div className="heading-section-bold mb-4 mt-md-5">
					<div className="ml-md-0 text-center">
						<h2 className="mb-4">Festival International du  <span className="txt-color">SAFRAN</span> </h2>
					</div>
				</div>
				<div className="pb-md-4">
					<p className="text-justify text-center" > <span className="txt-color">SAFRAN</span> Les objectifs principaux du Festival :

Développement et valorisation de la filière du Safran pour en faire un vecteur de Développement socio-économique pour la population locale;
Accompagnement des organismes professionnels à travers les ateliers organisés autour de la thématique du Festival;
Création d’un cadre d’échange interculturel;
Fédérer les résultats de la recherche scientifique sur la filière et les vulgariser auprès des agriculteurs;
Offrir à la population locale un moments de détente à travers le programme artistique, culturel et sportif;
Contribuer au Développement Touristiques de la région de Taliouine.
					</p>
					<p className="text-center">
						<a href="/presentation" className="btn btn-primary text-center"><i className="fas fa-eye"></i> Voir Plus</a>
					</p>
				</div>
			</div>
		</div>
	</div>
	</div>
</section>
<section className="ftco-section ftco-category ftco-no-pt mt-5">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="row">
							<div className="col-md-6 order-md-last align-items-stretch d-flex">
                                <div className="category-wrap-2  img align-self-stretch d-flex" 
                                style={{ backgroundImage:`url('./ighri/images/category.jpg')` }}>
									<div className="text text-center">
										<h2>Vegetables</h2>
										<p>Protect the health of every home</p>
										<p><a href="#" className="btn btn-primary">Shop now</a></p>
									</div>
								</div>
							</div>
							<div className="col-md-6">
                                <div className="category-wrap  img mb-4 d-flex align-items-end" 
                                style={{ backgroundImage:`url('./ighri/images/category-1.jpg')` }}>
									<div className="text px-3 py-1">
										<h2 className="mb-0"><a href="#">Fruits</a></h2>
									</div>
								</div>
                                <div className="category-wrap  img d-flex align-items-end" 
                                style={{ backgroundImage:`url('./ighri/images/category-2.jpg')` }}>
									<div className="text px-3 py-1">
										<h2 className="mb-0"><a href="#">Vegetables</a></h2>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
                        <div className="category-wrap  img mb-4 d-flex align-items-end" 
                        style={{ backgroundImage:`url('./ighri/images/category-3.jpg')` }}>
							<div className="text px-3 py-1">
								<h2 className="mb-0"><a href="#">Juices</a></h2>
							</div>		
						</div>
                        <div className="category-wrap  img d-flex align-items-end" 
                        style={{ backgroundImage:`url('./ighri/images/category-4.jpg')` }}>
							<div className="text px-3 py-1">
								<h2 className="mb-0"><a href="#">Dried</a></h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<SendEmail />
        </>
     );
}}
 
export default HomePage;