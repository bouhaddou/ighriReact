    import React from 'react';

    const PresentationHeader = () => {
        return ( <>
        <div className="hero-wrap hero-bread" style={{ backgroundImage:`url('./ighri/images/igh.jpg')`, maxHeight:200 }}>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9  text-center">
          	<p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>About us</span></p>
            <h1 className="mb-0 bread">About us</h1>
          </div>
        </div>
      </div>
    </div>
    <section className="mt-3">
	<div className="container">
		<div className="row no-gutters ftco-services">
			<div className="col-md-3 text-center d-flex  ">
				<div className="media block-5 services mb-md-0 mb-4">
					<div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
						<span className=""><img width="100px" src="upload/images/zafran.png" /></span>
					</div>
					<div className="media-body">
						<h3 className="heading"><a href="/zafran">Safran de IGHRI</a></h3>
						<span>Bio 100%</span>
					</div>
				</div>
			</div>
			<div className="col-md-3 text-center d-flex  ">
				<div className="media block-6 services mb-md-0 mb-4">
					<div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
						<span className=""><i className="fas fa-tractor"></i></span>
					</div>
					<div className="media-body">
						<h3 className="heading"><a href="/agricule">Agriculture de IGHRI</a></h3>
						<span>Qualité</span>
					</div>
				</div>
			</div>
			<div className="col-md-3 text-center d-flex  ">
				<div className="media block-6 services mb-md-0 mb-4">
					<div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
						<span className=""><img width="100px" src="upload/images/amande.png"/></span>
					</div>
					<div className="media-body">
						<h3 className="heading">Loze de IGHRI</h3>
						<span>Qualité</span>
					</div>
				</div>
			</div>
			<div className="col-md-3 text-center d-flex  ">
				<div className="media block-6 services mb-md-0 mb-4">
					<div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
						<span className="flaticon-customer-service"></span>
					</div>
					<div className="media-body">
						<h3 className="heading"><a href="/contact"> Contact</a></h3>
						<span>24/7 en ligne</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="ftco-section ftco-no-pb ftco-no-pt bg-light mt-3">
    <div className="w-100 " style={{ backgroundImage: `url('bg.png')`  }} >
        <div className="container">
            <div className="row">
                <div className="col-md-5 mt-2 p-md-4 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url('./ighri/images/about.jpg')` }}  >
                    <a href="/post/vedio" className="icon popup-vimeo d-flex justify-content-center align-items-center">
                        <span className="icon-play"></span>
                    </a>
                </div>
                <div className="col-md-7 py-4 wrap-about pb-md-5 ">
                    <div className="heading-section-bold mb-4 mt-md-5">
                        <div className="ml-md-0 text-center">
                            <h2 className="mb-4 ">Village <span className="txt-color">IGHRI TALIOUINE</span>
                            <img style={{ width:120, height:80,position:"relative",top:-10 }} src="./logo.png" />
                            <img style={{ width:80, height:60,position:"relative",top:-30,right:80 }} src="./abeille.gif" /> </h2>
                        </div>
                    </div>
                    <div className="pb-md-4">
                        <p className="text-justify text-center text-light" > <span className="txt-color">IGHRI</span> se situe au cœur de la tribu des Souktana, zone historique du safran, dans la 
                            commune rurale de Sidi Hssain. Il se situe à environ 25 Km à l’Est du Centre Urbain 
                            de Taliouine à proximité de la route nationale reliant les deux villes touristiques 
                            de Taroudant et Ouarzazate..
                        </p>
                        
                    </div>
                </div>
                <div className="col-md-12">
                <div className="pb-md-4">
                        <p className="text-justify text-light" > 
                        Ce terroir est réputé dans la région par la qualité de son safran et surtout de 
                        ses bulbes de safran qui sont recherchés par tous les producteurs à l’intérieur et
                         à l’extérieur de la région. Le safran est cultivé dans le terroir d’IGHRI depuis des 
                         siècles à une altitude d’environ 1700 m 
                        et sur une superficie d’environ 35 ha, soit 50 % de la superficie totale irriguée
                        </p>
                        <p className="text-justify text-light" > 
                        La communauté d’IGHRI compte 95 petits producteurs de safran. En année normale, 
                        la production totale du safran dans le terroir d’IGHRI est d’environ 115 kg, soit 1,2 kg/ménage. 
                        Le safran est la principale source de 
                        revenu des ménages de la communauté d’IGHRI, il représente environ 60 % du revenu total du ménage.
                        </p>
                        <p className="text-center">
                            <a href="/presentation" className="btn btn-primary text-center"><i className="fas fa-eye"></i> Voir Plus</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> 
<hr className=" mt-2 mb-2" />
        </> );
    }
     
    export default PresentationHeader;
    