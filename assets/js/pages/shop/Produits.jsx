import React, { useState, useEffect } from 'react';
import ProduitsApi from '../../services/ProduitsApi';
import Produit from './produit';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Produits = ({setCartNav}) => {
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
          return ( <>
      <div className="container">
        <nav className="mt-3" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Library</a></li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
       <div className=" row">
       <div className="col-md-3">
       <section className="ftco-section">
            <div className="container">
              <div className="row justify-content-center mb-3 pb-3">
                    <div className="col-md-12 heading-section text-center ">
                <span className="subheading"> Produits</span>
              </div>
            </div>
          </div>
        </section>
       </div>
        <div className="col-md-9">
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
              <Produit produits={produits} nb={4} handleShop={handleShop} /> 
            </div>
            </section>
          </div>
        </div>
      </div>
     
    </> );
}}
 
export default Produits;