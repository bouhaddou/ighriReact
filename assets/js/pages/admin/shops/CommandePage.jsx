import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../../Components/Pagination';
import ShopsApi from '../../../services/ShopsApi';
import { toast } from 'react-toastify';

const CommandePage = () => {
    const [Shops, setShops] = useState([])
    const [currentPage, setCurrentPage]= useState(1);
    const fetchShops = async () =>{
        try{
         const data = await  ShopsApi.findAll();
             setShops(data);
       }catch(error){
           console.log(error.response)
       }
    }
    useEffect(() => {
      fetchShops();
    }, []);
    const handleChange = (id) =>{
        setCurrentPage(id);
    }

    const itemsPerPage = 6 ;
    const PaginationShops = Pagination.getData(currentPage,itemsPerPage,Shops);

    const handleDelete = async (id) =>{
      const tableorigine = [...Shops];
      setShops(Shops.filter(shop => shop.id !== id));
      try{
          await  ShopsApi.deleteShops(id)
          toast.error(" la vente  a été supprimée avec succès ")
      }catch(error){
              setProduits(tableorigine);
      }
    }
   if(!Shops){ return <div>chargement</div>}else{ return ( <>
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">Ventes</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item "><Link to="/"> Table de bord</Link></li>
              <li className="breadcrumb-item active"> Ventes</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
     <h2 className="mt-2 text-center">Liste des Ventes</h2>
    <div className="container">
        <div className="card mt-3">
              <div className="card-header">
                <h3 className="card-title text-danger">Shops ( {Shops.length} Shops)</h3>
              </div>
              <div className="card-body p-0">
                <table className="table table-condensed">
                  <thead>
                    <tr>
                      <th >Client</th>
                      <th>Produit</th>
                      <th className="text-center">Quantite</th>
                      <th className="text-center" >Prix</th>
                      <th className="text-center" >Total</th>
                      <th className="text-center" >Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                {PaginationShops.map(shop => 
                    <tr key={shop.id}>
                      <td>{shop.client.firstName} {shop.client.lastName}</td>
                      <td className="">{shop.produit.title}</td>
                      <td className="text-center">{shop.Quantity}</td>
                      <td className="text-center">{shop.produit.prix}</td>
                      <td className="text-center">{shop.produit.prix * shop.Quantity }</td>
                      <td className=" text-center">
                          <Link to={"/shops/show/" + shop.client.id} className="btn btn-primary btn-sm mr-1" >
                              <i className="fas fa-folder"> 
                              </i>     Voir
                          </Link>
                          <button 
                            onClick={() => handleDelete(shop.id)}
                            className="btn btn-danger btn-sm mr-1">
                              <i className="fas fa-trash">
                              </i>   Supprimer
                          </button>
                      </td>
                      
                    </tr>
                )}
                  </tbody>
                </table>
              </div>
            </div>
            </div>
            <div className="d-flex justify-content-center">
            <Pagination 
                currentPage={currentPage} 
                itemsPerPage={itemsPerPage} 
                handleChange={handleChange} 
                length={Shops.length} />
            </div>
    </> );
}
}
 
export default CommandePage;