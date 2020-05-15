import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Capture = ({fileImage,handleDeleteImageCapture}) => {
   if(fileImage.length == 0 ){return <div></div>}else{  
       return ( <> 
        {fileImage.length > 0 &&
            <div className="row">
                    <div className="col-md-6 offset-md-3  mb-1">
                        <button  onClick={handleDeleteImageCapture}
                        className="float-right txt-color btn btn-delete "><i className="fas fa-times-circle fa-lg"></i></button>
                         <img  style={{ maxWidth: 500, maxHeight: 150 , height: 149  }} src={fileImage} alt=""/>
                    </div>
            </div>
        }
    </> );
}
} 
export default Capture;