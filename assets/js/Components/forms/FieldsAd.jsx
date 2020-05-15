import React from 'react';


const FieldsAd = ({name,onChange,type ="text",error="",value="" }) => (
    
        <div className={style}>
         <label htmlFor={name}>{label}</label>
        <input
            onChange={onChange}
            type={type} 
            name={name}
            id={name}
            value={value}
            className={"  " + (error && " is-invalid" )}
        />
        
        {error &&<p className="invalid-feedback">{error}</p>}
    </div>

 );
export default FieldsAd;