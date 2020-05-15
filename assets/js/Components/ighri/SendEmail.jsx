import React from 'react';



const SendEmail = () => {
    return ( <>
    
    <section className="ftco-section ftco-no-pt ftco-no-pb mb-2 bg-light">
		<div className="w-100 " style={{ backgroundImage: `url('bg.png')`  }} >
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
        </div>
    </section>
    </> );
}
 
export default SendEmail;