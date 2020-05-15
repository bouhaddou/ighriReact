import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const ImagesPost = ({fileImage,handleDeleteImage}) => {
   if(fileImage.length == 0 ){return <div></div>}else{  
       return ( <> 
            <div className="row">
                {fileImage.length > 0 && fileImage.map( image =>
                    <div key={image.id} className="col  mb-1">
                        <button  onClick={() => handleDeleteImage(image.id)}
                        className="float-right txt-color btn btn-delete "><i className="fas fa-times-circle fa-lg"></i></button>
                        {image.typeFile == "video/mp4" ?
                        <video controls style={{ maxWidth: 500, maxHeight: 150 , height: 149  }} 
                                className="img-fuild w-100 h-100 mb-2" key={image.id} className="img-fluid w-100" >
                            <source src={"avatars/" +  image.filePath} type="video/mp4"/>
                        </video>
                        :
                        <img style={{ maxWidth: 500, maxHeight: 150 , height: 149  }} 
                        className="img-fuild w-100 h-100 mb-2" key={image.id} className="img-fluid w-100" src={"avatars/" +  image.filePath} />
                            
                        }
                    </div>
                )} 
            </div>
    </> );
}
} 
export default ImagesPost;