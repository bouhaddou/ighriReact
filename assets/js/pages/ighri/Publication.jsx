import React, { useState } from 'react';
import FildsPost from '../../Components/forms/FildsPost';
import ImagesPost from './ImagesPost'
import axios from 'axios';
import { toast } from 'react-toastify';
import Webcam from "react-webcam";
import PostApi from '../../services/PostApi';
import Capture from './Capture';



const Publication = ({setEditing,setPost}) => {
    const [fileImage, setFileImage] = useState([])
    const [imageSrc, setImageSrc] = useState([])
    const [camera, setCamera] = useState(false)
    const [ImgeCapture, setImgeCapture] = useState(false)
    const [posts, setPosts] = useState({
      name:"",
      title:"",
      message:""
    })  
    const [error, setError] = useState({
        name:"",
        title:"",
        message:"",
        file:""
    })
    const handleChange =async event =>{
        const {value,name} = event.currentTarget;
        const  dd =new FormData();
        try{
       if(name == "file"){
            dd.append('file',event.target.files[0],event.target.files[0].name);
            const response = await axios.post("http://localhost:8000/api/avatars",dd)
            setFileImage(fileImage => [...fileImage,response.data])
            setError({ ...error, file : ""})
            toast.success("l'image à été ajouter avec succée")
        }else{
            setPosts({...posts, [name] : value})
        }
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
    
   const handleChangeCamera = () =>{
       if(camera){setCamera(false) }else{ setCamera(true)}
       if(ImgeCapture){setImgeCapture(false)}else{setImgeCapture(true)}
   }
  const handleSubmit =async event =>{
    event.preventDefault();
        // try{
            if(fileImage.length > 0 ){
               if(ImgeCapture == false){
                await axios.post("http://localhost:8000/api/posts",{...posts, ...fileImage, 
                avatars: fileImage.map(img => 
                            `/api/avatars/${img.id}`)
                    });
               }else{
                   const idd = fileImage[1].id;
                   console.log(idd)
                await axios.post("http://localhost:8000/api/posts",{...posts, ...fileImage, 
                avatars:   `/api/avatars/${idd}`       
                    });
               }
                        const data = await  PostApi.findAll()
                        setPost(data) 
                    document.getElementById("myBTN").click();
                    toast.success("Le produit a été Ajouter Avec succée ")
                    setPosts({})
                    setFileImage([])
                    props.history.push("/presentation");
                }else{
                    setError({ ...error, file : "Aucune image n'a été trouvée "})
                    toast.error("Aucune image n'a été trouvée ")
            }
              
    //         }catch({response}){
    //           const { violations } = response.data;
    //           if(violations){
    //               const apiErrors = {};
    //               violations.forEach(({propertyPath,message})  => {
    //                   apiErrors[propertyPath] = message;
    //               });
    //               setError(apiErrors);
    //               toast.error(" Merci de vérifiee tous les champs avant de passer la commande  ")
    //         }
    //   }
}

const handleDeleteImage = id =>{
  const tableorigine = [...fileImage];
        setFileImage(fileImage.filter(fileimg => fileimg.id !== id));
      
}
const handleDeleteImageCapture = () =>
{
      setImageSrc([])
      setImgeCapture(false)
      document.getElementById("myBTN").click();

}
const webcamRef = React.useRef(null);
 
const capture =  React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const  dd =new FormData();
    setImageSrc(imageSrc)
    setFileImage(fileImage => [...fileImage,imageSrc])
    setCamera(false)
    const filename ="imagebihi.jpg"
    var arr = imageSrc.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        const fileSRC = new File([u8arr], filename, {type:mime});
        dd.append('file',fileSRC,filename);
        const response = await axios.post("http://localhost:8000/api/avatars",dd)
        setFileImage(fileImage => [...fileImage,response.data])
  },
  [webcamRef]


);




    return ( <>
                <div className="row mt-2 mb-2">
                    <div className=" col-md-12 m-1">
                        <h3 className="text-center mt-auto">Créer une publication</h3>
                    </div>
                </div>
                <form role="form mr-5 ml-5 bg-color pt-3 mb-3" onSubmit={handleSubmit} encType="multipart/form-data"  >
                    <div className="col-md-12  bg-white mb-2" >
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group erorName">
                                    <input type="text" 
                                     value={posts.name} 
                                     name="name"
                                     error={error.name}
                                     onChange={handleChange}
                                    className={" form-control  " + (error.name && " is-invalid" )}
                                     placeholder="Votre nom complet"/>
                                      {error.name &&<p className="invalid-feedback">{error.name}</p>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group erorName">
                                    <input type="text" 
                                    value={posts.title} 
                                    name="title"
                                    error={error.title}
                                    onChange={handleChange}
                                    className=" form-control " placeholder="titre"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                            <div className="form-group erorName">
                                <textarea 
                                style={{ height:90}}
                                value={posts.message} 
                                name="message"
                                error={error.message}
                                onChange={handleChange}
                                id="" cols="30" rows="3" className="form-control" placeholder="que voulezvous dire ??"></textarea>
                            </div>
                            </div>
                            <div className="col-md-12">
                            {ImgeCapture == false ?
                                <ImagesPost  fileImage={fileImage} handleDeleteImage={handleDeleteImage} />
                                :
                                <>
                                <Capture  fileImage={imageSrc} handleDeleteImageCapture={handleDeleteImageCapture} />
                                </>
                                }

                            </div>
                            <div className="col-md-12  w-100">
                               {camera == true ? 
                               <>
                               <Webcam
                                    audio={false}
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"
                                    height="250"
                                    />
                                    <a className="d-flex justify-content-center rounded-circle" onClick={capture}><i className="fas fa-camera fa-2x"></i></a>
                                    <img  src={imageSrc}   />
                               </>
                                : ""}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-4 mt-2">
                                <div className="text-center">
                                        <i className="fas fa-images fa-2x text-success"></i> image
                                        <input type="file" style={{position: "relative",  bottom: 30}}
                                            name="file"
                                            error={error.file}
                                            onChange={handleChange}
                                        className="custom-file-input" id="customFileLangHTML"/>
                                </div>
                            </div>
                            <div className="col-md-4 col-4 mt-2">
                                <div className="text-center">
                                    <a className="nav-link"
                                     onClick={handleChangeCamera}
                                    ><i className="fas fa-camera-retro fa-2x txt-color"></i> camera</a>
                                </div>
                            </div>
                            <div className="col-md-4 col-4 mt-2">
                                <div className="text-center">
                                    <span><i className="fas fa-video fa-2x text-success"></i> video</span>
                                    <input type="file" style={{position: "relative",  bottom: 30}}
                                            name="file"
                                            error={error.file}
                                            onChange={handleChange}
                                        className="custom-file-input" id="customFileLangHTML"/>
                                </div>
                            </div>
                        </div>    
                                    <div className="  form-group mt-2">
                                        <input type="submit" className="form-control bg-color" value="publier" />
                                    </div> 
                        <button type="button" id="myBTN" className="btn btn-danger" data-dismiss="modal" hidden="hidden" ></button>
                        <hr className="m-0 p-0"/>
                    </div>
                </form>
            
    </> );
}
 
export default Publication;