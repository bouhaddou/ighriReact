import React from 'react';


const FildsPost = ({name,onChange,type ="text",error="",style="",placeholder="",value="",label }) => (
        <input
            onChange={onChange}
            type={type} 
            placeholder={placeholder}
            name={name}
            id={name}
            value={value}
            className={"form-control " + (error && " is-invalid" )}
        />
 );
export default FildsPost;