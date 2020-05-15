import React, { useState, useEffect } from 'react';
import FildsPost from '../../Components/forms/FildsPost';
import ImagesPost from './../ighri/ImagesPost'
import axios from 'axios';
import { toast } from 'react-toastify';
import PostApi from '../../services/PostApi';
import publication from './Publication';
import Publication from './Publication';
import PresentationHeader from './PresentationHeader'
import {FacebookIcon} from "react-share";
const presentation = (props) => {
    const [fileImage, setFileImage] = useState([])
    const [post, setPost] = useState({})
    const [editing, setEditing] = useState(false)

    const posts_item =async () =>{
        try{
            const data = await  PostApi.findAll()
            setPost(data) 
        }catch(error){
            console.log(error.response)
        }
    }

    useEffect(() =>{
        posts_item()
    },[])
    const handleEdit =() =>{
        if(editing){ setEditing(false)  }else{ setEditing(true)}
    }

if(!post){return <div>telechargement</div>}else{
 return ( <>
     
  <PresentationHeader />
<div style={{ backgroundColor: "#f0f2f5" }} >
    <div className="container" >
        <div className="row"  >
            <div className="col-md-7  " style={{ backgroundColor: "#f0f2f5" }}>
                <div className="card mt-3">
                 {!editing ? 
                    <div>
                        <div className="card-header">
                            Créer une publication
                        </div>
                        <div className="mt-2">
                        </div>
                    
                    <div className="card-body">
                        <a 
                         onClick={handleEdit}
                         data-toggle="modal" data-target=".bd-example-modal-lg"
                        className="btn btn-primary">  Créer une publication</a>
                    </div>
                    </div>
                    :
                    <div className="m-1">
                        <h3 className="float-left mt-auto">Créer une publication</h3>
                        <button 
                         onClick={handleEdit}
                        className="float-right text-danger btn">
                            <i className="fas fa-times"></i></button>
                    </div>
                    }
                    {!editing ? " " :
                    <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="bg-info">
                                    <Publication  setPost={setPost}/> 
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                {post.length > 0 && post.map(prod => 
                <div  key={prod.id} style={{ backgroundColor: "#fff" }} className="pb-4" >
                    <div className="col-md-12 m-0 p-0">
                        <div className="col-md-12 mt-1 bg-white" >
                            <div className="row">
                                <div className="col p-2" style={{ maxWidth:50 }}>
                                    <div className="avatar-medium">
                                        <img className="avatar-ws" src="ighri/images/about.jpg"/>
                                    </div>
                                </div>
                                <div className="col mt-2 menu-pub " >
                                    <span className="clearfix " style={{ fontSize:13}}>
                                    <strong>{prod.name}</strong>
                                        <span style={{ float:"right", fontWeight:400,lineHeight:1 }} className="oi oi-menu mt-1">
                                            </span>
                                    </span>
                                    <span className="clearfix" style={{ fontSize:13}}>
                                        21-03-2020 <i className="far fa-clock"></i>
                                        <a href="#" className="text-danger">
                                    </a><i className="fas fa-users"></i>
                                    </span><hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12" >
                        <h6 className="text-center">{prod.title}</h6>
                        <p className="mr-3 ml-3 mt-1 mb-1">{prod.message}</p>
                        <div className="row pb-1 ">
                            {prod.avatars.slice(0,4).map((image) =>
                            <>
                             {image.typeFile == "video/mp4" ?  
                                <div key={image.id} className={"card-group  col-12 mt-1" }>
                                    <video  height="320" controls>
                                        <source src={"avatars/" +  prod.avatars[0].filePath} type="video/mp4"/>
                                    </video>
                                </div>
                             : 
                                <>
                                {prod.avatars.length == 1 ?
                                    <div key={image.id} className={"card-group  col-12 mt-1" }>
                                        <a className="card" data-toggle="modal" data-target={"#bihi" + prod.id}  >
                                            <img style={{ maxHeight: 300,height:300  }} className="card-img-top" 
                                            src={"avatars/" +  image.filePath} alt={prod.title} />
                                        </a> 
                                    </div>
                                :
                                    <div key={image.id} className={"card-group  col-6 mt-1" }>
                                        <a className="card" data-toggle="modal" data-target={"#bihi" + prod.id}  >
                                            <img style={{ maxHeight: 300,height:300  }} className="card-img-top" 
                                            src={"avatars/" +  image.filePath} alt={prod.title} />
                                        </a> 
                                    </div>
                                }
                                </>
                            }
                            </>
                            )}
                            {prod.avatars.length > 4 &&
                            <>
                                <div className="col-6 m-0 p-0" >
                                    <div className="float-left">
                                    <div class="fb-share-button" 
                                    data-href="http://localhost:8000/#/presentation" 
                                    data-layout="button_count" data-size="small">
                                        <a target="_blank" 
                                        href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A8000%2F%23%2Fpresentation&amp;src=sdkpreparse" 
                                        class="fb-xfbml-parse-ignore">Partager</a></div>
                                    </div>
                                </div>
                                <div className="col-6 m-0 p-0" >
                                    <div className="float-right">
                                        <span className="h3 text-info" > +{prod.avatars.length - 4}  </span>
                                        <i className="fas fa-images fa-lg text-success"></i>
                                    </div>
                                </div>
                            </>
                            }
                        <div className="modal fade " id={"bihi" + prod.id} tabIndex="-1" role="dialog" 
                            aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="s_product_img">
                                            <div id={"carouselExampleIndicators"+ prod.id} className="carousel slide" data-ride="carousel">
                                            <ol className="carousel-indicators">
                                                {prod.avatars.map(function(image, index) {  
                                                    return <li key={image.id} data-target={"#carouselExampleIndicators" + prod.id} 
                                                    data-slide-to={index} className={"  " + (index == 0 && " active ")}>
                                                    <img className="w-100 h-100" src={"avatars/" +  image.filePath} alt=""/>
                                                    </li>
                                                    
                                                } )}
                                            </ol>
                                            <div className="carousel-inner">
                                                {prod.avatars.map(function(image, index){
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
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                 )}
            </div>
            <div className="col-md-4">
             <div className="sidebar-box  mt-3 border">
                <h3 className="heading text-center border p-2" >Menu</h3>
                <ul className="categories">
                    <li><a href=" /presentation " className="text-primary">IGHRI <i className="fas fa-cat"></i></a></li>
                    <li><a href="/post"className="text-primary">Publications  <span>(30)</span></a></li>
                    <li><a  href="/post/image"className="text-primary">Images <span>(37)</span></a></li>
                    <li><a href="/post/vedio"className="text-primary">Vidéos <span>(42)</span></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>
<hr className="mt-3 mb-3" />

    </> );
}}
 
export default presentation;