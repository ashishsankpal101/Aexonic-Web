import Head from 'next/head'
import React from "react";
import Image from 'next/image'
import Link from "next/link";


const contactus = () => {
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
                <title>Aexonic : Home</title>
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
                                        <li className="nav-item dropdown mega-dropdown"> <a className="nav-link dropdown-toggle" id="h6-mega-dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Machine Learning & AI</a></li>
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
                                    <div className="rounded-button active">
                                        <Link href="/contactus">
                                            <a className="active">Contact Us</a>
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
                    <div className="banner-innerpage" style={{ backgroundImage: "url(images/services/Banner/support.jpeg)" }}>
                        <div className="container">
                            {/* <!-- Row  --> */}
                            <div className="row justify-content-center ">
                                {/* <!-- Column --> */}
                                <div className="col-md-6 align-self-center text-center" data-aos="fade-down" data-aos-duration="1200">
                                    <h1 className="title banner-text">Contact Us</h1>
                                    <h6 className="subtitle op-8 banner-text">Our custom approach ensures the perfect fit for your technology initiatives.</h6>
                                </div>
                                {/* <!-- Column --> */}
                            </div>
                        </div>
                    </div>

                    {/* <!-- ============================================================== -->
                <!-- Testimonial 9 -->
                <!-- ============================================================== --> */}
                    <div className="testimonial9 spacer bg-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <h2 className="m-t-40">What Our Customers Say</h2>
                                    <span className="devider bg-danger"></span>
                                    <h6 className="subtitle ">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                                <div className="col-lg-6 col-md-6 ml-auto">
                                    <div className="owl-carousel owl-theme testi9">
                                        {/* <!-- item --> */}
                                        <div className="item">
                                            <div className="card card-shadow testimonial-color">
                                                <div className="p-40">
                                                    <p>We care what our customers think of us and so should you. We are partners in your business and your success is ours in your business.</p>
                                                </div>
                                            </div>
                                            <div className="d-flex no-block align-items-center">
                                                <div className="customer-thumb"><img src="images/1.jpg" alt="wrapkit" className="circle" /></div>
                                                <div className="">
                                                    <h6 className="font-bold m-b-0">Michael Anderson</h6><span className="font-13">Project client</span></div>
                                            </div>
                                        </div>
                                        {/* <!-- item -->
                                    <!-- item --> */}

                                        {/* <!-- item -->
                                    <!-- item --> */}

                                        {/* <!-- item --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ============================================================== -->
                <!-- End Testimonial 9 -->
                <!-- ============================================================== --> */}


                    {/* <div className="client2 spacer">
                        <div className="container ">
                            <div className="row justify-content-center ">
                                <div className="col-md-7 text-center ">
                                    <h2 className="title ">Our Global Presence</h2>
                                    <h6 className="subtitle ">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                            </div>
                            <div className="row  op-7 ">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-12 text-center " style={{ paddingBottom: "10px" }}>
                                            <h3 className="title ">Trusted By</h3>
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/sepio.png " style={{ height: "30px", marginLeft: "30px" }} alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/tgi.png " style={{ height: "30px", }} alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/cactus.png " style={{ height: "30px", }} alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/DMS-Final.png " alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/cw.png " alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/ProcessingQuotes.png " alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/help-light.png " alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/mobicall.png " alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/DMS-Final.png " alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/DMS-Final.png " alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/cw.png " alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/ProcessingQuotes.png " alt="wrapkit " />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="row client-box  m-t-10 ">
                                        <div className="col-lg-12 col-md-4 ">
                                            <div className="card" style={{ border: "1px solid rgba(0, 0, 0, 0.125) !important", backgroundColor: "#f5f8fa !important" }}>
                                              
                                                <div className="card-body">
                                                    <h3 style={{ fontWeight: "600" }} className="card-title"><i><img height="25" src="images/contact_us/india.png"></img></i>&nbsp;India</h3>
                                                    <p className="card-text"><i className="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp;504, Stellar Spaces, Kharadi, Pune, Maharashtra 411014 <br /><i className="fa fa-envelope"></i> &nbsp;info@aexonic.com <br /><i className="fa fa-phone"></i>&nbsp;&nbsp;+207 235 7890</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-4 ">
                                            <div className="card" style={{ border: "1px solid rgba(0, 0, 0, 0.125) !important", backgroundColor: "#f5f8fa !important" }}>
                                               
                                                <div className="card-body">
                                                    <h3 style={{ fontWeight: "600" }} className="card-title"><i><img height="25" src="images/contact_us/us.png"></img></i>&nbsp;United States of America</h3>
                                                    <p className="card-text"><i className="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp;504, Stellar Spaces, Kharadi, Pune, Maharashtra 411014 <br /><i className="fa fa-envelope"></i> &nbsp;info@aexonic.com <br /><i className="fa fa-phone"></i>&nbsp;&nbsp;+207 235 7890</p>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                          
                        </div>
                    </div> */}

                    {/* <!-- ============================================================== -->
                <!-- End Feature 1  -->
                <!-- ============================================================== --> */}

                    <div className=" spacer feature15">
                        <div className="container">
                            {/* <!-- Row  --> */}
                            <div className="row justify-content-center">
                                <div className="col-md-7 text-center">
                                    <h2 className="title">Trusted By</h2>
                                    <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                            </div>
                            {/* <!-- Row  --> */}
                            <div className="row client-box text-center op-7 ">



                                <div className="col-lg-2 col-md-4">
                                    <img src="images/clients/sepio.png " style={{ height: "30px", marginLeft: "30px" }} alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <img src="images/clients/tgi.png " style={{ height: "30px", }} alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <img src="images/clients/cactus.png " style={{ height: "30px", }} alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <img src="images/clients/DMS-Final.png " alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <img src="images/clients/cw.png " alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <img src="images/clients/ProcessingQuotes.png " alt="wrapkit " />
                                </div>

                            </div>

                            <div className="row client-box text-center op-7 ">
                                <div className="col-lg-2 col-md-4">
                                    <img src="images/clients/help-light.png " alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <img src="images/clients/mobicall.png " alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <img src="images/clients/DMS-Final.png " alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <img src="images/clients/mobicall.png " />
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <img src="images/clients/cw.png " alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <img src="images/clients/ProcessingQuotes.png " alt="wrapkit " />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="bg-light spacer feature20 up">
                        <div className="container">

                            <div className="row justify-content-center">
                                <div className="col-md-7 text-center">

                                    <h2 className="title">Want To Know More</h2>
                                    <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                            </div>

                            <div className="row wrap-feature-20">

                                <div className="col-lg-6" data-aos="flip-left" data-aos-duration="1200">
                                    <div className="card">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="card-body d-flex no-block">
                                                    <div className="m-r-20"><img src="./images/features/f13/img1.jpg" alt="wrapkit" width="70" className="rounded" /></div>
                                                    <div>
                                                        <h5 className="font-medium">Our Highlights</h5>
                                                        <h6 className="subtitle">More About us</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center cursor-pointer">
                                                <a style={{ padding: "40px 0 !important" }} className="text-white linking bg-info-gradiant">View More <i className="ti-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6" data-aos="flip-right" data-aos-duration="1200">
                                    <div className="card">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="card-body d-flex no-block">
                                                    <div className="m-r-20"><img src="./images/features/f13/img2.jpg" alt="wrapkit" width="70" className="rounded" /></div>
                                                    <div>
                                                        <h5 className="font-medium">Engagement Model</h5>
                                                        <h6 className="subtitle">How we engage our clients</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center cursor-pointer">
                                                <a style={{ padding: "40px 0 !important" }} className="text-white linking bg-info-gradiant">View More <i className="ti-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6" data-aos="zoom-in" data-aos-duration="1200">
                                    <div className="card">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="card-body d-flex no-block">
                                                    <div className="m-r-20"><img src="./images/features/f13/img3.jpg" alt="wrapkit" width="70" className="rounded" /></div>
                                                    <div>
                                                        <h5 className="font-medium">Industries We Serve</h5>
                                                        <h6 className="subtitle">More About us</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center cursor-pointer">
                                                <a style={{ padding: "40px 0 !important" }} className="text-white linking bg-info-gradiant">View More <i className="ti-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6" data-aos="zoom-in" data-aos-duration="1200">
                                    <div className="card">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="card-body d-flex no-block">
                                                    <div className="m-r-20"><img src="./images/features/f13/img4.jpg" alt="wrapkit" width="70" className="rounded" /></div>
                                                    <div>
                                                        <h5 className="font-medium">Success Stories</h5>
                                                        <h6 className="subtitle">More About us</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center cursor-pointer">
                                                <a style={{ padding: "40px 0 !important" }} className="text-white linking bg-info-gradiant">View More <i className="ti-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className=" spacer feature15">
                        <div className="container">
                            {/* <!-- Row  --> */}
                            <div className="row justify-content-center">
                                <div className="col-md-7 text-center">
                                    <h2 className="title">Our Global Presence</h2>
                                    <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                            </div>
                            {/* <!-- Row  --> */}
                            <div className="row m-t-40">
                                {/* <!-- Column --> */}
                                <div className="col-lg-5 wrap-feature15-box">
                                    <div className="row">
                                        <div className="col-md-12 m-b-30" data-aos="fade-down" data-aos-duration="1000">
                                            <div className="d-flex no-block">
                                                <div className="no-shrink"><span className="icon-round display-5 text-info "><i className="icon-Map-Marker"></i></span></div>
                                                <div className="p-20">
                                                    <h5 className="font-medium"><a className="linking">India Office <i className="ti-arrow-right"></i></a></h5>
                                                    <p className="m-t-20">503, Pride Icon, Kharadi, Pune, India – 411014.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 m-b-30" data-aos="fade-down" data-aos-duration="2000">
                                            <div className="d-flex no-block">
                                                <div className="no-shrink"><span className="icon-round display-5 text-info "><i className="icon-Map-Marker"></i></span></div>
                                                <div className="p-20">
                                                    <h5 className="font-medium"><a className="linking">US Office <i className="ti-arrow-right"></i></a></h5>
                                                    <p className="m-t-20">2107 N 1st Street #205, San Jose, CA – 95131.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* <!-- Column --> */}
                                <div className="col-lg-7 ml-auto">
                                    <div className="card card-shadow aos-init aos-animate" data-aos="flip-left" data-aos-duration="1200">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15130.709280079906!2d73.9359377!3d18.5434784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf37df2d7acdb1d82!2sAexonic%20Technologies!5e0!3m2!1sen!2sin!4v1601548568796!5m2!1sen!2sin" width="650"
                                            height="350" frameBorder="0" style={{ border: "0px" }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                                    </div>
                                </div>
                                {/* <!-- Column --> */}
                            </div>
                        </div>
                    </div>



                    <div className="spacer feature1 bg-light">
                        <div className="container">

                            <div className="row justify-content-center">
                                <div className="col-md-7 text-center">
                                    <h2 className="title">Get In Touch</h2>
                                    <h6 className="subtitle">We are creative thinkers with a focus on modern web production. We use the latest tools available to help build your brand&apos;s digital presence.</h6>
                                </div>
                            </div>




                            <div className="row contact-container m-t-30 ">
                                <div className="col-lg-5 align-self-center">
                                    <div className="max-500 m-auto p-20">
                                        {/* <!-- <span className="label label-success label-rounded">Feature 47</span> --> */}
                                        {/* <h2 className="title">Why Companies Choose Us</h2> */}
                                        {/* <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6> */}
                                        <ul className="list-block with-underline font-medium m-t-30 m-b-20 text-dark">
                                            <li><i className="fa fa-user-o text-info"></i> <span>200+ Happy Clients  </span></li>
                                            <li><i className="fa fa-line-chart text-info"></i> <span>9+ Years of Experience  </span></li>
                                            <li><i className="fa fa-map-marker text-info"></i> <span>Presence in 2 Countries </span></li>
                                            <li><i className="fa fa-angle-right  text-info"></i> <span>300+ Projects Delivered</span></li>
                                            <li><i className="fa fa-certificate text-info"></i> <span>ISO 27001 Certified</span></li>
                                            <li><i className="fa fa-cog text-info"></i> <span>5+ Industries Served</span></li>
                                        </ul>
                                        {/* <!-- <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20 m-b-20" data-toggle="collapse" href="#f47"><span>Get Code <i className="ti-arrow-right"></i></span></a> --> */}
                                    </div>
                                </div>
                                <div className="col-lg-7 ">
                                    <div className="card card-shadow m-t-40" style={{ marginTop: "55px" }} data-aos="fade-up " data-aos-duration="1200 ">
                                        <div className="row ">
                                            <div className="col-lg-12 ">
                                                <div className="contact-box p-40 ">
                                                    {/* <!-- <h4 className=" ">Contact Us</h4> --> */}
                                                    <form>
                                                        <div className="row ">
                                                            <div className="col-lg-6 ">
                                                                <div className="form-group m-t-20 ">
                                                                    <input className="form-control " type="text " placeholder="Name " />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 ">
                                                                <div className="form-group m-t-20 ">
                                                                    <input className="form-control " type="text " placeholder="Email " />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 ">
                                                                <div className="form-group m-t-20 ">
                                                                    <input className="form-control " type="text " placeholder="Phone " />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 ">
                                                                <div className="form-group m-t-20 ">
                                                                    <input className="form-control " type="text " placeholder="Location " />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 ">
                                                                <div className="form-group m-t-20 ">
                                                                    <input className="form-control " type="text " placeholder="Message " />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 ">
                                                                <button type="submit " className="btn btn-info-gradiant m-t-20 btn-arrow "><span> SUBMIT NOW <i className="fa fa-arrow-right "></i></span></button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                    <li className="nav-item "><a className="nav-link " href="# ">Services</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">Industries</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">Careers</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">About Us</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">More</a></li>
                                                    <li className="nav-item "><a className="nav-link active" href="# ">Contact Us</a></li>
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

export default contactus;