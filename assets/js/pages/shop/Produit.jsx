import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Produit = ({produits,nb,handleShop}) => {
    return ( <>
            <div className="row">
                {produits.length > 0 && produits.map(produit =>
                <div  key={produit.id} className={ "fadeInUp col-md-6 col-lg-"+ nb   }>
                    <div className="product">
                      <a href="#" className="img-prod"><img style={{ maxHeight: 165,height:164  }}  className="img-fluid w-100 h-100" src={"avatars/" +  produit.avatars[0].filePath} alt=" "/>
                        <div className="overlay"></div>
                      </a>
                      <div className="text py-3 pb-4 px-3 text-center">
                        <h3><a href="#">{produit.title}</a></h3>
                        <div className="d-flex">
                          <div className="pricing">
                            <p className="price"><span>{produit.prix.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </span></p>
                          </div>
                        </div>
                        <div className="bottom-area d-flex px-3">
                          <div className="m-auto d-flex">
                            <Link  to={"/ProductInfo/" + produit.id }   className="add-to-cart d-flex justify-content-center align-items-center text-center">
                              <span><i className="ion-ios-menu"></i></span>
                            </Link>
                            <a 
                            onClick={() => handleShop(produit)}
                            className="buy-now d-flex justify-content-center align-items-center mx-1">
                              <span><i className="ion-ios-cart"></i></span>
                            </a>
                            <a href="#" className="heart d-flex justify-content-center align-items-center ">
                              <span><i className="ion-ios-heart"></i></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                )}
            </div> 
    </> );
}
 
export default Produit;