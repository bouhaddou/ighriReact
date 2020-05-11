import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Cart =  ({setCartNav}) => {
    const [cart, setCart] = useState({});
    const [total, setTotal] = useState(0);
  
    const fetchProduit= async () =>{
      try{
        const donnee = JSON.parse(localStorage.getItem("product"))
        if(donnee !== null)
        {
            setCart(donnee)
        }
      }catch(error){
          console.log(error.response);
      }
  }
    useEffect(() => {
      fetchProduit();
    },[])
  
    const totalfun = () =>{
      let somme = 0
      const donnee = JSON.parse(localStorage.getItem("product"))
      if(donnee)
      {
      for(let i = 0;i < donnee.length ; i++)
      {
        somme = somme +  (donnee[i].prix * donnee[i].quantity) 
       setTotal(somme)
       localStorage.setItem("total",JSON.stringify(somme));
      }
      if(donnee.length == 0){
        
        setTotal(0)
        localStorage.setItem("total",JSON.stringify(0));
      }
    }
    }  
    useEffect(() => {
      totalfun()
    },[])
    const handleChange = event =>{
    const {name, value} = event.currentTarget;
    const donnee = JSON.parse(localStorage.getItem("product"))
    const  existid = donnee.filter(pro => pro.id === parseFloat(name))
    const index = donnee.findIndex(x => x.id === existid[0].id )
    donnee[index].quantity = value
    localStorage.removeItem("product") 
    localStorage.setItem("product",JSON.stringify(donnee))
    setCartNav(donnee)
    setCart(donnee)
    totalfun()
  }
  
  const handleRemoveItem = (event) =>{
    const  name = event.currentTarget.id;
    const dat = localStorage.getItem("product");
    const del = JSON.parse(dat);
    const aaa =  del.filter(item => item.id !== parseFloat(name))
    localStorage.removeItem("product")
    localStorage.setItem("product",JSON.stringify(aaa))
    toast.error("bien supprimer le produit dans panier")
    const data2 = localStorage.getItem("product");
    setCart(JSON.parse(data2));
    setCartNav(JSON.parse(data2))
    totalfun()
    if(cart.length == 0){
      setTotal(0)
    }
  }
  
  if(!cart){return <div>loading</div>}else{ 
      return ( <>
    <div className=" container content-header bg-color">
      <div className="container-fluid mt-2">
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
    <section className=" mt-3 ftco-cart">
			<div className="container">
				<div className="row">
    			<div className="col-md-12 ">
    				<div className="cart-list">
	    				<table className="table">
						    <thead className=" bg-color text-light">
						      <tr className="text-center">
						       
						        <th>&nbsp;</th>
						        <th>Product name</th>
						        <th>Price</th>
						        <th>Quantity</th>
						        <th>Total</th>
						        <th>delete</th>
                                <th>&nbsp;</th>
						      </tr>
						    </thead>
						    <tbody>
                             {cart.length >0 && cart.map(produit =>
                                <tr key={produit.id}>
                                   
                                    <td className="image-prod">
                                        <div className="imag-pro">
                                        <img className=""
                                            src={"avatars/" +  produit.image } alt={produit.title}
                                            alt=""
                                        />
                                        </div>
                                    </td>
                                    <td className="product-name">
                                        <h3>{produit.title}</h3>
                                    <p>{produit.content}</p>
                                    </td>
                                    <td className="price">{produit.prix.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                    <td style={{ width:30 }} className="quantity">
                                        <div className=" mb-1">
                                        <input type="number" className="form-control" id={produit.id}  
                                        name={produit.id}  onChange={handleChange} value={produit.quantity} />
                                        </div>
                                    </td>
                                    <td className="total">{(produit.prix * produit.quantity).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }</td>
                                    <td className="product-remove">
                                        <a onClick={handleRemoveItem} id={produit.id} className="text-danger"><i className="fas fa-trash-alt "></i></a>
                                    </td>
                                </tr>
                             ) } 
						    </tbody>
						  </table>
					  </div>
    			</div>
    		</div>
    		<div className="row justify-content-end">
    			<div className="col-lg-4 mt-5 cart-wrap ">
    				<div className="cart-total mb-3">
    					<h3>Coupon Code</h3>
    					<p>Enter your coupon code if you have one</p>
                        <form action="#" className="info"> 
                            <div className="form-group">
                                <label htmlFor="">Coupon code</label>
                                <input type="text" className="form-control text-left px-3" placeholder=""/>
                            </div> 
                        </form>
    				</div>
    				<p><a href="checkout.html" className="btn btn-primary py-3 px-4">Apply Coupon</a></p>
    			</div> 
    			 <div className="col-lg-4 mt-5 cart-wrap "> 
    				    <div className="cart-total mb-3">
                            <h3>Estimate shipping and tax</h3>
                            <p>Enter your destination to get a shipping estimate</p> 
                            <form action="#" className="info"> 
                                <div className="form-group">
                                    <label htmlFor="">Country</label>
                                    <input type="text" className="form-control text-left px-3" placeholder=""/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="country">State/Province</label>
                                    <input type="text" className="form-control text-left px-3" placeholder=""/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="country">Zip/Postal Code</label>
                                    <input type="text" className="form-control text-left px-3" placeholder=""/>
                                </div> 
                            </form>
                            </div>
                            <p><a href="checkout.html" className="btn btn-primary py-3 px-4">Estimate</a></p>
                        </div> 
                        <div className="col-lg-4 mt-5 cart-wrap ">
                            <div className="cart-total mb-3">
                                <h3>Cart Totals</h3>
                                <p className="d-flex">
                                    <span>Subtotal</span>
                                    <span> {total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
                                </p>
                                <p className="d-flex">
                                    <span>Delivery</span>
                                    <span>$0.00</span>
                                </p>
                                <hr/>
                                <p className="d-flex total-price">
                                    <span>Total</span>
                                    <span>{total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </span>
                                </p>
                            </div>
                            <p><a href="checkout.html" className="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
                        </div> 
    		    </div>
			</div> 
		</section>

	<section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
      <div className="container py-4">
        <div className="row d-flex justify-content-center py-5">
          <div className="col-md-6">
          	<h2  className="mb-0">Subcribe to our Newsletter</h2>
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
export default Cart;