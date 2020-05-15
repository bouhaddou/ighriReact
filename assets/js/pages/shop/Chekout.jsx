import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Field from '../../Components/forms/Field';
import RadioFilds from '../../Components/forms/RadioFilds';
import axios from 'axios';

const Chekout  = ({props}) => {

    const [montant , setMontant] = useState(0);
    const [client,setClient] = useState({
      firstName : "",
      lastName : "",
      company : "",
      email : "",
      phone : "",
      paye : "",
      city : "",
      postal : "",
      password:""
    })
    const [error,setError] = useState({
      firstName : "",
      lastName : "",
      company : "",
      email : "",
      phone : "",
      paye : "",
      city : "",
      postal : "",
      password:"",
      type:"",
      status:"",
      delivery:""
    })
    const [user,setUser] = useState({
      email : "",
      password : ""
    })
    const [errorUser,setErrorUser] = useState({
      email : "",
      password : ""
    })
    const [shop,setShop] = useState([{
      produit:"",
      client:"",
      quantity:"",
      type:"",
      status:false,
      delivery:""
    }])
    const [type,setType] = useState("");
    const [delivery,setDelivery] = useState("");
    const [status,setStatus] = useState(false);
    const [clientId,setClientId] = useState();
    const [produit,setProduit] = useState({})
  
    const getAllproduit = () =>{
      const idclient = 2
      const element =[]
      const donnee = JSON.parse(localStorage.getItem("product"));
    if(donnee){
      for( let i=0 ; i < donnee.length; i++ )
      { 
        element.push({produit:donnee[i].id,client:idclient,quantity:donnee[i].quantity,type:type})
      }  
       setShop({shop:element})
    }
    }
    const handlemss = () =>{ 
      $('.bihi').on('click', function(){  $('.bihibihi').toggle();});
      $('.coponclick').on('click', function(){ $('.copponhide').toggle();});
      $('.passshow').on('click', function(){  $('.passshide').toggle();});
      $('.adressshow').on('click', function(){$('.adresshide').toggle();});
    }
  
   useEffect(() =>{
    getAllproduit()
    calculTotal()
    $('.bihibihi').hide(); $('.copponhide').hide(); $('.passshide').hide(); $('.adresshide').hide();
   },[])
  
    const handlSubmit =async event => {
      event.preventDefault();
      try{
      const response = await axios.post("http://localhost:8000/api/clients",client)
      const element =[]
      const donnee = JSON.parse(localStorage.getItem("product"));
   
    // try{
      for( let i=0 ; i < donnee.length; i++ )
      { 
        element.push({produit:donnee[i].id,client:response.data.id,quantity: parseFloat(donnee[i].quantity),type:type,status:status,delivery:delivery})
      }  
      
      for(let j=0; j<element.length;j++){
        await  axios.post("http://localhost:8000/api/shops", {
              ...shop,   produit : `/api/produits/${element[j].produit}`, 
              client : `/api/clients/${element[j].client}`,
              Quantity:element[j].quantity, 
              type:element[j].type,
              status:element[j].status, 
              delivery:element[j].delivery
            });
      }
      localStorage.removeItem("product")
      localStorage.removeItem("total")
      toast.success("votre commande a été bien envoyer ")
      props.history.push("/");
    }catch({response}){
      const { violations } = response.data;
      if(violations){
          const apiErrors = {};
          violations.forEach(({propertyPath,message})  => {
              apiErrors[propertyPath] = message;
          });
  
         setError(apiErrors);
         toast.error(" Merci de vérifiee tous les champs avant de passer la commande  ")
      }
  }
  
    }
  
  
    const handleChange = event =>{
      const {name,value} = event.currentTarget;
      setClient({...client, [name]:value})
      const checked =  event.currentTarget.checked;
      if(name == "type"){
      setType(value)
      }
      if(name == "delivery")
      {
        setDelivery(value);
      }
      if(name == "status"){
        setStatus(checked)
      }
      
    }
  
  
    const calculTotal = () =>{
      const montant = localStorage.getItem("total");
      setMontant(parseFloat(montant));
    }
   return (<>
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
    <section class="ftco-section">
      <div class="container">
          <form onSubmit={handlSubmit}>
        <div class="row justify-content-center">
          <div class="col-xl-7 ">
			
							<h3 class="mb-4 billing-heading">Billing Details</h3>
	          	<div class="row align-items-end">
	          	<Field type="text" placeholder="Prénom " style="col-md-6 form-group p_star"
                id="firstName" 
                name="firstName" 
                value={client.firstName}
                error={error.firstName}
                onChange={handleChange}
                />
                <Field type="text" placeholder="Nom " style="col-md-6 form-group p_star"
                id="lastName"
                name="lastName"
                value={client.lastName}
                error={error.lastName}
                onChange={handleChange}
                />
                 <Field type="text" placeholder="Nom d'entreprise " style="col-md-12 form-group " place="Nom d'entreprise"
                value={client.company} 
                name="company" 
                id="company" 
                error={error.company}
                onChange={handleChange}
                />
                <Field type="text" placeholder="Email " style="col-md-12 form-group p_star"
                value={client.email} 
                name="email"
                id="email"
                error={error.email}
                onChange={handleChange}
               />
               <Field type="number" placeholder="Numéro de téléphone " style="col-md-6 form-group p_star"
                value={client.phone} 
                name="phone" 
                id="phone" 
                error={error.phone}
                onChange={handleChange}
                />
                 <Field type="text" placeholder="paye " style="col-md-6 form-group p_star"
                value={client.paye} 
                name="paye" 
                id="paye" 
                error={error.paye}
                onChange={handleChange}
                />
                <Field type="text" placeholder="ville " style="col-md-12 form-group p_star"
                value={client.city} 
                name="city"
                id="city"
                error={error.city}
                onChange={handleChange}
                />
                <Field type="text" placeholder="Adresse " style="col-md-12 form-group p_star"
                value={client.adress} 
                name="adress" 
                id="adress" 
                error={error.adress}
                onChange={handleChange}
                />
                <Field type="number" placeholder="code Postale " style="col-md-6 form-group p_star"
                value={client.postal} 
                name="postal" 
                id="postal" 
                error={error.postal}
                onChange={handleChange}
                />
               
                <div className="col-md-12 form-group">
                  <div className="creat_account">
                    <button type="button" className="passshow" onClick={handlemss} >Créer un compte?</button>
                  </div>
                </div>
                <Field type="password" placeholder="Mot de passe " style="col-md-12 form-group passshide p_star" 
                id={client.password}
                name="password"
                value={client.password}
                id="password"
                error={error.password}
                onChange={handleChange}
                />	
                <div class="w-100"></div>
	            </div>
	        
				</div>
				<div class="col-xl-5">
	          <div class="row mt-3 pt-3">
	          	<div class="col-md-12 d-flex mb-5">
	          		<div class="cart-detail cart-total p-3 p-md-4">
	          			<h3 class="billing-heading mb-4">Cart Total</h3>
	          			<p class="d-flex">
		    						<span>Subtotal</span>
		    						<span>{montant.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Dhs</span>
		    					</p>
		    					<p class="d-flex">
		    						<span>Delivery</span>
		    						<span>50.00</span>
		    					</p>
		    					<hr/>
		    					<p class="d-flex total-price">
		    						<span>Total</span>
		    						<span>{(montant + 50).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Dhs</span>
		    					</p>
				    </div>
	          	</div>
	          	<div class="col-md-12">
	          		<div class="cart-detail p-3 p-md-4">
	          			<h3 class="billing-heading mb-4">Payment Method</h3>
                        <div class="form-group">
                            <div class="col-md-12">
                                <div class="radio">
                                   
                                    <RadioFilds type="radio" label="le Régelement par cheque" style="creat_account"  
                                        id="option1" value="CHEQUE" 
                                        name="type"
                                        checked="CHEQUE"
                                        error={error.type}
                                        onChange={handleChange}
                                        />
                                       
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                <div class="radio">
                                   
                                    <RadioFilds type="radio" label="le Régelement  a la réception" style="creat_account"  
                                            id="option12" 
                                            value="RECEPTION" 
                                            name="type"
                                            checked="RECEPTION"
                                            error={error.type}
                                            onChange={handleChange}
                                            />   
                                         
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                <div class="checkbox">
                                    <label>
                                    <RadioFilds type="checkbox"  style="" label="J'ai lu et j'accepte les"  
                                        name="status"
                                        id="status"
                                        checked={shop.status}
                                        error={error.status}
                                        onChange={handleChange}
                                        />
                                        <a href="#"> conditions &  générales *</a>
                                         I have read and accept the terms and conditions</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary py-3 px-4" >Place an order</button>
                       
                    </div>
	          	</div>
	          </div>
          </div> 
        </div>
          </form>
      </div>
    </section> 

	<section class="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
      <div class="container py-4">
        <div class="row d-flex justify-content-center py-5">
          <div class="col-md-6">
          	<h2  class="mb-0">Subcribe to our Newsletter</h2>
          	<span>Get e-mail updates about our latest shops and special offers</span>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <form action="#" class="subscribe-form">
              <div class="form-group d-flex">
                <input type="text" class="form-control" placeholder="Enter email address"/>
                <input type="submit" value="Subscribe" class="submit px-3"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>);
}
 
export default Chekout;