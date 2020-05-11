import React from 'react';



const Slider = () => {
	return ( <>
	{/* <section id="home-section" className="hero">
	<div className="home-slider owl-carousel" style={{ maxHeight:350 }}>
		<div className="slider-item"  style={{ backgroundSize: 'cover', backgroundImage: `url('./ighri/images/slider/1.jpg')`,maxHeight:350 }}>
			<div className="overlay"></div>
			<div className="container">
				<div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
					<div className="col-sm-12  text-center">
						<h4 className="mb-2 text-light font-weight-bold text">IGHRI TALIOUINE OFFICIEL </h4>
						<h4 className="subheading mb-4">BIENVENUE SUR NOTRE NOUVEAU SITE WEB IGHRI.COM</h4>
						<p>
							<a href="{{ path('postpage') }}" className="btn btn-primary">savoir plus </a>
						</p>
					</div>

				</div>
			</div>
		</div>
		<div className="slider-item"  style={{ backgroundSize: 'cover', backgroundImage:`url('./ighri/images/slider/2.jpg') `,maxHeight:350 }}>
			<div className="overlay"></div>
			<div className="container">
				<div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

					<div className="col-sm-12  text-center">
						<h4 className="mb-2 text-light font-weight-bold text">IGHRI TALIOUINE OFFICIEL </h4>
						<h4 className="subheading mb-4">BIENVENUE SUR NOTRE NOUVEAU SITE WEB IGHRI.COM</h4>
						<p>
							<a href="{{ path('postpage') }}" className="btn btn-primary">savoir plus</a>
						</p>
					</div>

				</div>
			</div>
		</div>
		<div className="slider-item" style={{ backgroundSize: 'cover', backgroundImage:`url('./ighri/images/slider/3.jpg') `,maxHeight:350 }}>
			<div className="overlay"></div>
			<div className="container">
				<div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

					<div className="col-sm-12  text-center">
						<h4 className="mb-2 text-light font-weight-bold text">IGHRI TALIOUINE OFFICIEL </h4>
						<h4 className="subheading mb-4">BIENVENUE SUR NOTRE NOUVEAU SITE WEB IGHRI.COM</h4>
						<p>
							<a href="{{ path('postpage') }}" className="btn btn-primary">savoir plus</a>
						</p>
					</div>

				</div>
			</div>
		</div>
		<div className="slider-item"  style={{ backgroundSize: 'cover', backgroundImage:`url('./ighri/images/slider/5.png')`,maxHeight:350 }}>
			<div className="overlay"></div>
			<div className="container">
				<div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

					<div className="col-sm-12  text-center">
						<h4 className="mb-2 text-light font-weight-bold text">IGHRI TALIOUINE OFFICIEL</h4>
						<h4 className="subheading mb-4">Bienvenue dans notre site de safran taliouine bio 100%</h4>
						<p>
							<a href="{{ path('postpage') }}" className="btn btn-primary">savoir plus </a>
						</p>
					</div>

				</div>
			</div>
		</div>
		<div className="slider-item"  style={{ backgroundSize: 'cover', backgroundImage:`url('./ighri/images/slider/1.jpg')`,maxHeight:350 }}>
			<div className="overlay"></div>
			<div className="container">
				<div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
					<div className="col-sm-12  text-center">
						<h4 className="mb-2 text-light font-weight-bold text">IGHRI TALIOUINE OFFICIEL</h4>
						<h4 className="subheading mb-4"></h4>
						<p>
							<a href="{{ path('postpage') }}" className="btn btn-primary">savoir plus </a>
						</p>
					</div>

				</div>
			</div>
		</div>

	</div>
</section> */}

<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./ighri/images/slider/1.jpg" className="d-block w-100" alt="./ighri/images/slider/1.jpg"/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="mb-2 text-light font-weight-bold text">IGHRI TALIOUINE OFFICIEL</h5>
        <p className="subheading mb-4">Bienvenue dans notre site de safran taliouine bio 100%</p>
		<p><a href="/post" class="btn btn-primary">savoir plus </a></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./ighri/images/slider/2.jpg" className="d-block w-100" alt="./ighri/images/slider/2.jpg"/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="mb-2 text-light font-weight-bold text">IGHRI TALIOUINE OFFICIEL</h5>
        <p className="subheading mb-4">Bienvenue dans notre site de safran taliouine bio 100%</p>
		<p><a href="/post" class="btn btn-primary">savoir plus </a></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./ighri/images/slider/3.jpg" className="d-block w-100" alt="./ighri/images/slider/3.jpg"/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="mb-2 text-light font-weight-bold ">IGHRI TALIOUINE OFFICIEL</h5>
        <p className="subheading mb-4">Bienvenue dans notre site de safran taliouine bio 100%</p>
		<p><a href="/post" class="btn btn-primary">savoir plus </a></p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
	</> );
}
 
export default Slider;