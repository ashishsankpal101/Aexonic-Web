import Head from 'next/head'
import React from "react";
import Image from 'next/image'
import Link from "next/link";


const ServiceProductEngg = () => {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                {/* <!-- Tell the browser to be responsive to screen width --> */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                {/* <!-- Favicon icon --> */}
                <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png" />
                <title>Aexonic : Product Engineering</title>
            </Head>


            {/* <!-- ============================================================== -->
  <!-- Preloader - style you can find in spinners.css -->
  <!-- ============================================================== --> */}
            {/* <div className="preloader">
      <div className="loader">
        <div className="loader__figure"></div>
        <p className="loader__label">Aexonic</p>
      </div>
    </div> */}
            {/* <!-- ============================================================== -->
  <!-- Main wrapper - style you can find in pages.scss -->
  <!-- ============================================================== --> */}
            <div id="main-wrapper">
                {/* <!-- ============================================================== -->
      <!-- Top header  -->
      <!-- ============================================================== --> */}

                <div className="topbar">
                    {/* <!-- ============================================================== -->
        <!-- Header 5  -->
        <!-- ============================================================== --> */}
                    <div className="header5">
                        <div className="container po-relative">
                            <nav className="navbar navbar-expand-lg hover-dropdown h5-nav-bar">
                                <a className="navbar-brand"><img className="header-icon" src="images/aexonic-logo_8.png" alt="Aexonic" /></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#h5-info" aria-expanded="false" aria-label="Toggle navigation"><span className="ti-menu"></span></button>
                                <div className="collapse navbar-collapse" id="h5-info">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown mega-dropdown">
                                            <Link href="/">
                                                <a className="nav-link dropdown-toggle" id="h6-mega-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Home
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown mega-dropdown"> <a className="nav-link active dropdown-toggle" id="h6-mega-dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Services <i className="fa fa-angle-down m-l-5"></i>
                                        </a>
                                            <div className="dropdown-menu b-none font-14 animated fadeInUp" aria-labelledby="h6-mega-dropdown1">
                                                <div className="row">
                                                    <div className="col-lg-3 inside-bg hidden-md-down">
                                                        <div className="bg-img" style={{ backgroundImage: "url(/images/mega-bg2.jpg)" }}>
                                                            <h3 className="text-white font-light">Create anything <br />with our amazing <br />sections</h3>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4">
                                                        <ul className="list-style-none">
                                                            <li>
                                                                <h6 className="f-w-500 active cursor-pointer">Product Engineering</h6>
                                                            </li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank ">SaaS Platforms</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Software Engineering</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Mobile and Web Apps</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">API Ecosystem</a></li>

                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4">
                                                        <ul className="list-style-none">
                                                            <li>
                                                                <h6 className="f-w-500 active cursor-pointer">Digital Transformation</h6>
                                                            </li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Machine Learning &amp;s AI</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Data and Analytics</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Internet of Things (IoT)</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Chatbot and Automation</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Cloud and DevOps</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Technology Consulting</a></li>
                                                        </ul>
                                                    </div>
                                                    {/* <div className="col-lg-2 col-md-4">
                                                        <ul className="list-style-none">
                                                            
                                                          
                                                        </ul>
                                                    </div> */}
                                                    <div className="col-lg-3 col-md-4">
                                                        <ul className="list-style-none">
                                                            <li>
                                                                <h6 className="f-w-500 active cursor-pointer">Staff Augmentation</h6>
                                                            </li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Onshore</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Offshore</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Nearshore</a></li>
                                                            <li>
                                                                <h6 className="f-w-500 active cursor-pointer">Enterprise Solutions</h6>
                                                            </li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">SAP</a></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">  <Link href="/industry"><a className="nav-link dropdown-toggle" id="h6-dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Industries <i className="fa fa-angle-down m-l-5"></i>
                                        </a></Link>
                                            <ul className="b-none dropdown-menu font-14 animated fadeInUp">

                                                <li>
                                                    <Link href="industries/banking">
                                                        <a className="dropdown-item">Banking and FinTech</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="industries/supplychain">
                                                        <a className="dropdown-item">Supply Chain and Logistics</a>
                                                    </Link>
                                                </li>
                                                <li> <Link href="industries/hospitality">
                                                    <a className="dropdown-item">Hospitality and Travel</a>
                                                </Link>
                                                </li>
                                                <li> <Link href="industries/healthcare">
                                                    <a className="dropdown-item">Healthcare</a>
                                                </Link>
                                                </li>
                                                <li> <Link href="industries/manifacturing">
                                                    <a className="dropdown-item">Manufacturing</a>
                                                </Link>
                                                </li>
                                                <li> <Link href="industries/retail">
                                                    <a className="dropdown-item">Retail and e-commerce</a>
                                                </Link>
                                                </li>
                                                <li> <Link href="industries/technology">
                                                    <a className="dropdown-item">Technology and Software</a>
                                                </Link>
                                                </li>
                                                <li> <Link href="industries/professional_service">
                                                    <a className="dropdown-item">Professional Services</a>
                                                </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link href="/careers">
                                                <a className="nav-link dropdown-toggle" id="h6-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Careers
                                                </a>
                                            </Link>

                                        </li>
                                        {/* <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" id="h6-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Blog

                                        </a>
                                        </li> */}
                                        <li className="nav-item dropdown">
                                            <Link href="/aboutus">
                                                <a className="nav-link dropdown-toggle" href="#" id="h6-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    About Us
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" id="h6-dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            More <i className="fa fa-angle-down m-l-5"></i>
                                        </a>
                                            <ul className="b-none dropdown-menu font-14 animated fadeInUp">

                                                <li>
                                                    <Link href="/life-at-aexonic">
                                                        <a className="dropdown-item">Life@aexonic</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/case-study">
                                                        <a className="dropdown-item">Case Studies</a>
                                                    </Link>
                                                </li>
                                                <li> <Link href="/blog">
                                                    <a className="dropdown-item">Blogs</a>
                                                </Link>
                                                </li>
                                            </ul>
                                        </li>



                                    </ul>
                                    <div className="rounded-button">
                                        <Link href="/contactus">
                                            <a className="">Contact Us</a>
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    {/* <!-- ============================================================== -->
          <!-- End Header 5  -->
          <!-- ============================================================== --> */}
                </div>
                <div className="container-fluid ">
                    {/* <!-- ============================================================== -->
                <!-- Static Slider 10  -->
                <!-- ============================================================== --> */}
                    {/* <div className="banner-innerpage" style="background-image:url(images/services/Banner/support.jpeg)"> */}
                    <div className="banner-innerpage" style={{ backgroundImage: "url(images/services/Banner/team_aug.jpeg)" }}>
                        <div className="container">
                            {/* <!-- Row  --> */}
                            <div className="row justify-content-center ">
                                {/* <!-- Column --> */}
                                <div className="col-md-6 align-self-center text-center" data-aos="fade-down" data-aos-duration="1200">
                                    <h1 className="title banner-text">Product Engineering</h1>
                                    <h6 className="subtitle op-8 banner-text">We are a team of passionate people who love what we do.</h6>
                                </div>
                                {/* <!-- Column --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- ============================================================== -->
            <!-- Testimonial 9 -->
            <!-- ============================================================== --> */}

<div className="container-fluid">
               
                <div className="spacer feature26">
                    <div className="container">
                        <div className="row wrap-feature-26">
                            <div className="col-md-6 align-self-center">
                                <div className="max-box">
                                    <h2 className="title m-t-20">Our custom approach ensures the perfect fit for your technology initiatives </h2>
                                    <p className="m-t-30">You can relay on our amazing features list and also our customer services will be greatexperience for you without doubt and in no-time and with great quality for design.</p>
                                    <p>We guarantee you with our WrapKit that you will make your site in record time and it will be fun to work on.</p>
                                    {/* <a href="" className="linking">Learn More <i className="ti-arrow-right"></i></a> */}
                                </div>
                            </div>
                            <div className="col-md-5 col-md-5 ml-auto "> <img src="./images/innerpage/s1.jpg" alt="wrapkit" className="img-responsive" /> </div>
                        </div>
                        <div className="row wrap-feature-26 m-t-40 p-t-30">
                            <div className="col-md-5"> <img src="./images/innerpage/s1.jpg" alt="wrapkit" className="img-responsive" /> </div>
                            <div className="col-md-6 ml-auto align-self-center">
                                <h2 className="title m-t-20">We help you utilize a complete full-service development</h2>
                                <p className="m-t-30">You can relay on our amazing features list and also our customer services will be greatexperience for you without doubt and in no-time and with great quality for design.</p>
                                <p>We guarantee you with our WrapKit that you will make your site in record time and it will be fun to work on.</p>
                                {/* <a className="linking" data-toggle="collapse" href="#f26">View Feature26 code  <i className="ti-arrow-right"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
             
                <div className="bg-light spacer feature3">
                    <div className="container">
                      
                        <div className="row justify-content-center">
                            <div className="col-md-7 text-center">
                                <h2 className="title">Engagement Options</h2>
                                <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                            </div>
                        </div>
                       
                        <div className="row m-t-40">
                           
                            <div className="col-md-6 wrap-feature3-box">
                                <div className="card card-shadow" data-aos="fade-right" data-aos-duration="1200">
                                    <div className="card-body d-flex">
                                        <div className="icon-space align-self-center"><i className="icon-Double-Circle display-2 text-info-gradiant"></i></div>
                                        <div className="align-self-center">
                                            <h5 className="font-medium"><a href="" className="linking">Advisory </a></h5>
                                            <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="col-md-6 wrap-feature3-box">
                                <div className="card card-shadow" data-aos="fade-left" data-aos-duration="1200">
                                    <div className="card-body d-flex">
                                        <div className="icon-space align-self-center"><i className="icon-Stopwatch display-2 text-info-gradiant"></i></div>
                                        <div className="align-self-center">
                                            <h5 className="font-medium"><a href="" className="linking">Implementaion </a></h5>
                                            <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                            <div className="col-md-6 wrap-feature3-box">
                                <div className="card card-shadow" data-aos="fade-right" data-aos-duration="1200">
                                    <div className="card-body d-flex">
                                        <div className="icon-space align-self-center"><i className="icon-Thumbs-UpSmiley display-2 text-info-gradiant"></i></div>
                                        <div className="align-self-center">
                                            <h5 className="font-medium"><a href="" className="linking">Turn-Key </a></h5>
                                            <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="col-md-6 wrap-feature3-box">
                                <div className="card card-shadow" data-aos="fade-left" data-aos-duration="1200">
                                    <div className="card-body d-flex">
                                        <div className="icon-space align-self-center"><i className="icon-Window-2 display-2 text-info-gradiant"></i></div>
                                        <div className="align-self-center">
                                            <h5 className="font-medium"><a href="" className="linking">Partnership </a></h5>
                                            <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
               

                

                <div className="feature28">

                <div className="row justify-content-center spacer">
                            <div className="col-md-7 text-center">
                                <h2 className="title">Our Services</h2>
                                <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                            </div>
                        </div>

                    <div className="wrap-feature-28 row">
                        <div className="col-lg-6 bg-cover" style={{backgroundImage: "url(./images/innerpage/s3.jpg)"}}></div>
                        <div className="col-lg-6">
                            <div className="side-content both-space">
                              
                                <h2 className="title">SaaS Platforms</h2>
                                <p>You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time and with great quality.</p>
                                <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20" data-toggle="collapse" href="#f28"><span>View More <i className="ti-arrow-right"></i></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="wrap-feature-28 row">
                        <div className="col-lg-6">
                            <div className="side-content both-space text-right pull-right">
                               
                                <h2 className="title">Software Engineering</h2>
                                <p>You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time and with great quality.</p>
                                <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20" data-toggle="collapse" href="#f28"><span>View More <i className="ti-arrow-right"></i></span></a>
                            </div>
                        </div>
                        <div className="col-lg-6 bg-cover" style={{backgroundImage: "url(./images/innerpage/s4.jpg)"}}></div>
                    </div>
                    <div className="wrap-feature-28 row">
                        <div className="col-lg-6 bg-cover" style={{backgroundImage: "url(./images/innerpage/s3.jpg)"}}></div>
                        <div className="col-lg-6">
                            <div className="side-content both-space">
                              
                                <h2 className="title">Mobile and Web Apps</h2>
                                <p>You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time and with great quality.</p>
                                <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20" data-toggle="collapse" href="#f28"><span>View More <i className="ti-arrow-right"></i></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="wrap-feature-28 row">
                        <div className="col-lg-6">
                            <div className="side-content both-space text-right pull-right">
                               
                                <h2 className="title">API Ecosystem</h2>
                                <p>You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time and with great quality.</p>
                                <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20" data-toggle="collapse" href="#f28"><span>View More <i className="ti-arrow-right"></i></span></a>
                            </div>
                        </div>
                        <div className="col-lg-6 bg-cover" style={{backgroundImage: "url(./images/innerpage/s4.jpg)"}}></div>
                    </div>
                </div>
              
                <div className="bg-light spacer feature11">
                    <div className="container">
                       
                        <div className="row justify-content-center">
                            <div className="col-md-7 text-center">
                                <h2 className="title">How It Helps Your Business Succeed</h2>
                                <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                            </div>
                        </div>
                       
                        <div className="row m-t-40">
                           
                            <div className="col-md-3 wrap-feature11-box">
                                <div className="card card-shadow" data-aos="fade-right" data-aos-duration="1200">
                                    <div className="card-body">
                                        <div className="icon-space">
                                            <div className="icon-round bg-success-gradiant"><i className="icon-Business-Man"></i></div>
                                        </div>
                                        <h5 className="font-medium">01. Disscussion &amp; Ideas</h5>
                                        <p className="m-t-20">You can relay on our amazing features list and </p>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="col-md-3 wrap-feature11-box">
                                <div className="card card-shadow" data-aos="fade-up" data-aos-duration="1200">
                                    <div className="card-body">
                                        <div className="icon-space">
                                            <div className="icon-round bg-success-gradiant"><i className="icon-Car-Wheel"></i></div>
                                        </div>
                                        <h5 className="font-medium">02. Concepts &amp; Initatives</h5>
                                        <p className="m-t-20">You can relay on our amazing features list and </p>
                                    </div>
                                </div>
                            </div>
                         
                            <div className="col-md-3 wrap-feature11-box">
                                <div className="card card-shadow" data-aos="fade-left" data-aos-duration="1200">
                                    <div className="card-body">
                                        <div className="icon-space">
                                            <div className="icon-round bg-success-gradiant"><i className="icon-Mouse-3"></i></div>
                                        </div>
                                        <h5 className="font-medium">03. Trying &amp; Testing</h5>
                                        <p className="m-t-20">You can relay on our amazing features list and </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 wrap-feature11-box">
                                <div className="card card-shadow" data-aos="fade-left" data-aos-duration="1200">
                                    <div className="card-body">
                                        <div className="icon-space">
                                            <div className="icon-round bg-success-gradiant"><i className=" icon-Chacked-Flag"></i></div>
                                        </div>
                                        <h5 className="font-medium">04. Execute &amp; Support</h5>
                                        <p className="m-t-20">You can relay on our amazing features list and </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="spacer feature24 ">
                    <div className="container">
                        {/* <!-- Row --> */}
                        <div className="row justify-content-center">
                            {/* <div className="col-md-12 text-center m-b-40"><img src="images/services.jpg" alt="wrapkit" className="img-fluid" /></div> */}
                            <div className="col-md-7 text-center">
                                <h2 className="title">More Then 8 Years We Provide IT Solutions Services For You</h2>
                                <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                            </div>
                        </div>
                        {/* <!-- Row --> */}
                        <div className="row m-t-30 p-t-30 client-box">
                            {/* <!-- column  --> */}
                            <div className="col-lg-3 col-md-6">
                                <div className="d-flex no-block">
                                    <div className="display-5"><i className="icon-Eyeglasses-Smiley"></i></div>
                                    <div className="m-l-20">
                                        <h1 className="font-light counter m-b-0">80</h1>

                                        <h6 className="text-muted font-13 text-uppercase">Happy Clients</h6>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- column  -->
                            <!-- column  --> */}
                            <div className="col-lg-3 col-md-6">
                                <div className="d-flex no-block">
                                    <div className="display-5"><i className="icon-Coffee"></i></div>
                                    <div className="m-l-20">
                                        <h1 className="font-light counter m-b-0">300</h1>
                                        <h6 className="text-muted font-13 text-uppercase">Projects Delivered
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- column  -->
                            <!-- column  --> */}
                            <div className="col-lg-3 col-md-6">
                                <div className="d-flex no-block">
                                    <div className="display-5"><i className="icon-Business-ManWoman"></i></div>
                                    <div className="m-l-20">
                                        <h1 className="font-light counter m-b-0">200</h1>
                                        <h6 className="text-muted font-13 text-uppercase">Clients Served
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- column  -->
                            <!-- column  --> */}
                            <div className="col-lg-3 col-md-6">
                                <div className="d-flex no-block">
                                    <div className="display-5"><i className="icon-flag"></i></div>
                                    <div className="m-l-20">
                                        <h1 className="font-light counter m-b-0">15</h1>
                                        <h6 className="text-muted font-13 text-uppercase">Countries Reached
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- column  --> */}
                        </div>
                    </div>
                </div>

                <div className="spacer feature24 bg-light ">
                        <div className="container ">
                            {/* <!-- Row --> */}
                            <div className="row justify-content-center ">
                                <div className="col-md-7 text-center ">
                                    {/* <!-- <span className="label label-success label-rounded ">Feature 24</span> --> */}
                                    <h2 className="title ">Why Companies Choose Us</h2>
                                    <h6 className="subtitle ">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                            </div>
                            {/* <!-- Row --> */}
                            <div className="row wrap-feature-24 ">
                                {/* <!-- Column --> */}
                                <div className="col-lg-4 col-md-6 ">
                                    <div className="card card-shadow ">
                                        <a className="service-24 "> <i className="icon-Target "></i>
                                            <h6 className="ser-title ">Industry Experience</h6>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- Column -->
                        <!-- Column --> */}
                                <div className="col-lg-4 col-md-6 ">
                                    <div className="card card-shadow ">
                                        <a className="service-24 "> <i className="icon-Car-Wheel "></i>
                                            <h6 className="ser-title ">Delivery Methodology</h6>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- Column -->
                        <!-- Column --> */}
                                <div className="col-lg-4 col-md-6 ">
                                    <div className="card card-shadow ">
                                        <a className="service-24 "> <i className="icon-Mouse-3 "></i>
                                            <h6 className="ser-title ">Outstanding Team</h6>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- Column -->
                        <!-- Column --> */}
                                <div className="col-lg-4 col-md-6 ">
                                    <div className="card card-shadow ">
                                        <a className="service-24 "> <i className="icon-Eyeglasses-Smiley "></i>
                                            <h6 className="ser-title ">End to End Product Development</h6>
                                        </a>
                                    </div>
                                </div>
                            
                                <div className="col-lg-4 col-md-6 ">
                                    <div className="card card-shadow ">
                                        <a className="service-24 "> <i className="icon-Eyeglasses-Smiley "></i>
                                            <h6 className="ser-title ">Process</h6>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 ">
                                    <div className="card card-shadow ">
                                        <a className="service-24 "> <i className="icon-Eyeglasses-Smiley "></i>
                                            <h6 className="ser-title ">Maintanence &amp; Support</h6>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- Column --> */}

                            </div>
                        </div>
                    </div>
               
                    <div className="spacer feature4">
                    <div className="container">
                      
                        <div className="row justify-content-center">
                            <div className="col-md-7 text-center">
                               
                                <h2 className="title">We Are Experts In</h2>
                                <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                            </div>
                        </div>
                     
                        <div className="row m-t-40">
                     
                            <div className="col-md-4 wrap-feature4-box">
                                <div className="card" data-aos="zoom-out-right" data-aos-duration="1200">
                                    <div className="card-body">
                                        <div className="icon-round bg-light-info"><i className="icon-Clown"></i></div>
                                        <h5 className="font-medium">User Interface Design</h5>
                                        <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience. Lorem ipsum dolor sit amet.</p>
                                        {/* <a data-toggle="collapse" href="#f4" className="linking text-themecolor">Check the Feature4 Code <i className="ti-arrow-right"></i></a> */}
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-md-4 wrap-feature4-box">
                                <div className="card" data-aos="zoom-out-left" data-aos-duration="1200">
                                    <div className="card-body">
                                        <div className="icon-round bg-light-info"><i className="icon-Mouse-3"></i></div>
                                        <h5 className="font-medium">User Experience Design</h5>
                                        <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience. Lorem ipsum dolor sit amet. </p>
                                        {/* <a className="linking text-themecolor" data-toggle="collapse" href="#f4">Check the Feature4 Code <i className="ti-arrow-right"></i></a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 wrap-feature4-box">
                                <div className="card" data-aos="zoom-out-right" data-aos-duration="1200">
                                    <div className="card-body">
                                        <div className="icon-round bg-light-info"><i className="icon-Clown"></i></div>
                                        <h5 className="font-medium">Web &amp; Mobile Development</h5>
                                        <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience. Lorem ipsum dolor sit amet.</p>
                                        {/* <a data-toggle="collapse" href="#f4" className="linking text-themecolor">Check the Feature4 Code <i className="ti-arrow-right"></i></a> */}
                                    </div>
                                </div>
                            </div>
                           
                           
                            {/* <!-- Column --> */}
                            
                        </div>
                    </div>
                </div>
                

                
              
               
            </div>

            <div className="mini-spacer bg-info text-white c2a7">
                    <div className="container">
                        <div className="d-flex">
                            <div className="display-7 align-self-center">Are you happy with what we offer? Ask for Free Quote</div>
                            <div className="ml-auto m-t-10 m-b-10">
                                <button className="btn btn-outline-light btn-md">Ask for Quatation</button>
                            </div>
                        </div>
                    </div>
                </div>

                    {/* <!-- ============================================================== -->
            <!-- footer 4  -->
            <!-- ============================================================== --> */}
                    <div className="footer4 spacer ">
                        <div className="container ">
                            <div className="row ">
                                <div className="col-lg-3 col-md-6 m-b-30 ">
                                    <h5 className="m-b-20 ">Address</h5>
                                    <p> 503, Pride Icon, Kharadi, Pune, India – 411014</p>
                                </div>
                                <div className="col-lg-3 col-md-6 m-b-30 ">
                                    <h5 className="m-b-20 ">Phone</h5>
                                    <p>Reception : +205 123 4567
                                        <br />Office : +207 235 7890</p>
                                </div>
                                <div className="col-lg-3 col-md-6 m-b-30 ">
                                    <h5 className="m-b-20 ">Email</h5>
                                    <p>Office : <a href="# " className="link ">info@aexonic.com</a>
                                        <br />Site : <a href="# " className="link ">http://www.aexonic.com/</a></p>
                                </div>
                                <div className="col-lg-3 col-md-6 ">
                                    <h5 className="m-b-20 ">Social</h5>
                                    <div className="round-social light ">
                                        <a href="# " className="link "><i className="fa fa-facebook "></i></a>
                                        <a href="# " className="link "><i className="fa fa-twitter "></i></a>
                                        <a href="# " className="link "><i className="fa fa-linkedin "></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="f4-bottom-bar ">
                                <div className="row ">

                                    <div className="col-md-12 ">

                                        <hr />

                                        <nav style={{ paddingLeft: "0px !important" }} className="navbar navbar-expand-lg h1-nav ">
                                            <a className="navbar-brand m-b-11 " href="# "><img src="./images/aexonic-logo_5.png " alt="Aexonic " width="120 " /></a>
                                            <button className="navbar-toggler " type="button " data-toggle="collapse " data-target="#header1 " aria-expanded="false " aria-label="Toggle navigation ">
                                                <span className="ti-menu "></span>
                                            </button>
                                            <div className="collapse navbar-collapse " id="header1 ">
                                                <span className="hidden-lg-down ">© 2020 All rights reserved.</span>
                                                <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                                                    <li className="nav-item"><a className="nav-link " href="# ">Home</a></li>
                                                    <li className="nav-item "><a className="nav-link active" href="# ">Services</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">Industries</a></li>
                                                    <li className="nav-item "><a className="nav-link" href="# ">Careers</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">About Us</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">More</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ============================================================== -->
            <!-- End footer 4  -->
            <!-- ============================================================== --> */}
                    <a className="bt-top btn btn-circle btn-lg btn-info" href="#top"><i className="ti-arrow-up"></i></a>


                    {/* <!-- ============================================================== -->
      <!-- End Page wrapper  -->
      <!-- ============================================================== --> */}
                </div>
            </div>
            {/* <!-- ============================================================== -->
  <!-- End Wrapper -->
  <!-- ============================================================== --> */}


        </div>
    )
}

export default ServiceProductEngg;