import Head from 'next/head'
import React from "react";
import Image from 'next/image'
import Link from "next/link";


const aboutus = () => {
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
                <title>Aexonic : About Us</title>
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
                                        <li className="nav-item dropdown mega-dropdown"> <a className="nav-link dropdown-toggle"  id="h6-mega-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Home

                                        </a>

                                        </li>
                                        <li className="nav-item dropdown mega-dropdown"> <a className="nav-link dropdown-toggle"  id="h6-mega-dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Our Offering <i className="fa fa-angle-down m-l-5"></i>
                                        </a>
                                            <div className="dropdown-menu b-none font-14 animated fadeInUp" aria-labelledby="h6-mega-dropdown1">
                                                <div className="row">
                                                    <div className="col-lg-4 inside-bg hidden-md-down">
                                                        <div className="bg-img" style={{ backgroundImage: "url(images/mega-bg2.jpg)" }}>
                                                            <h3 className="text-white font-light">Create anything <br />with our amazing <br />sections</h3>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-4">
                                                        <ul className="list-style-none">
                                                            <li>
                                                                <h6>Headers &amp; Footers</h6>
                                                            </li>
                                                            <li><a  target="_blank">Banners</a></li>
                                                            <li><a  target="_blank">Form Banners</a></li>
                                                            <li><a  target="_blank">Navigation 1-10</a></li>
                                                            <li><a  target="_blank">Navigation 11-20</a></li>
                                                            <li><a  target="_blank">Footers</a></li>
                                                            <li><a  target="_blank">Call to Actions</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-1 col-md-4">
                                                        <ul className="list-style-none">
                                                            <li>
                                                                <h6>Sliders</h6>
                                                            </li>
                                                            <li><a  target="_blank">Slider1</a></li>
                                                            <li><a  target="_blank">Slider2</a></li>
                                                            <li><a  target="_blank">Slider3</a></li>
                                                            <li><a  target="_blank">Slider4</a></li>
                                                            <li><a  target="_blank">Slider5</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-1 col-md-4">
                                                        <ul className="list-style-none">
                                                            <li>
                                                                <h6>&nbsp;</h6>
                                                            </li>
                                                            <li><a  target="_blank">Slider6</a></li>
                                                            <li><a  target="_blank">Slider7</a></li>
                                                            <li><a  target="_blank">Slider8</a></li>
                                                            <li><a  target="_blank">Slider9</a></li>
                                                            <li><a  target="_blank">Slider10</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-2 col-md-4">
                                                        <ul className="list-style-none">
                                                            <li>
                                                                <h6>Other Sections</h6>
                                                            </li>
                                                            <li><a  target="_blank">Contacts</a></li>
                                                            <li><a  target="_blank">Blogs</a></li>
                                                            <li><a  target="_blank">Pricing</a></li>
                                                            <li><a  target="_blank">Popups / Modals</a></li>
                                                            <li><a  target="_blank">Teams</a></li>
                                                            <li><a  target="_blank">Testimonials</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-2 col-md-4">
                                                        <ul className="list-style-none">
                                                            <li>
                                                                <h6>Features</h6>
                                                            </li>
                                                            <li><a  target="_blank">Features 1-10</a></li>
                                                            <li><a  target="_blank">Features 11-20</a></li>
                                                            <li><a  target="_blank">Features 21-30</a></li>
                                                            <li><a  target="_blank">Features 31-40</a></li>
                                                            <li><a  target="_blank">Features 41-50</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="nav-item dropdown">
                                            <Link href="/careers">
                                                <a className="nav-link dropdown-toggle " id="h6-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Careers
                                                </a>
                                            </Link>

                                        </li>


                                        {/* <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle"  id="h6-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Blog

                                        </a>

                                        </li> */}

                             


                                        <li className="nav-item dropdown">
                                            <Link href="/aboutus">
                                                <a className="nav-link dropdown-toggle active"  id="h6-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    About Us
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle"  id="h6-dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            More <i className="fa fa-angle-down m-l-5"></i>
                                        </a>
                                            <ul className="b-none dropdown-menu font-14 animated fadeInUp">

                                                <li>
                                                    <Link href="/aboutus">
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
                    <div className="banner-innerpage" style={{ backgroundImage: "url(images/services/Banner/bg3.jpeg)" }}>
                        <div className="container">
                            {/* <!-- Row  --> */}
                            <div className="row justify-content-center ">
                                {/* <!-- Column --> */}
                                <div className="col-md-6 align-self-center text-center" data-aos="fade-down" data-aos-duration="1200">
                                    <h1 className="title banner-text">About Us</h1>
                                    <h6 className="subtitle op-8 banner-text">Our custom approach ensures the perfect fit for your technology initiatives.</h6>
                                </div>
                                {/* <!-- Column --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- ============================================================== -->
                <!-- Feature 5  -->
                <!-- ============================================================== --> */}
                    {/* <!-- ============================================================== -->
                <!-- Feature 37  -->
                <!-- ============================================================== --> */}
                    <div className="spacer feature37 wrap-feature37-box">
                        <div className="row">
                            <div className="col-lg-5"> <img src="../images/features/img1.jpg" alt="wrapkit" className="img-fluid" /> </div>
                            <div className="col-lg-7 align-self-center">
                                <div className="card max-700">
                                    <div className="card-body">
                                        <h2 className="title text-uppercase">Our Story</h2>
                                        <h6 className="subtitle">Aexonic’s founders left their Fortune 500 careers to form a new technology services firm based on superior client service and a unique, inspirational corporate culture.<br /> Since incorporation we have grown a diverse client base, attracted global talent, and developed into a highly successful professional services company. We have formed a culture of continuous learning and innovations. Our professionals have consulted for a number of industry leaders, such as Bank of America, Aflac, Hewlett Packard, Basf, AT&T, Cameron, Spirit AeroSystems, Timken, and Teleflex. Our team has an overall passion for technology and how it can improve the way companies do business.</h6>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ============================================================== -->
                <!-- End Feature 37  -->
                <!-- ============================================================== --> */}
                    <div className="bg-light spacer feature5">
                        <div className="container">
                            {/* <!-- Row  --> */}
                            <div className="row justify-content-center">
                                <div className="col-md-7 text-center">
                                    <h2 className="title">Our Business Philosophy</h2>
                                    <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                            </div>
                            {/* <!-- Row  --> */}
                            <div className="row m-t-40">
                                {/* <!-- Column --> */}
                                <div className="col-md-4 wrap-feature5-box">
                                    <div className="card card-shadow" data-aos="fade-right" data-aos-duration="1200">
                                        <div className="card-body d-flex">
                                            <div className="icon-space"><i className="text-success-gradiant icon-Stopwatch"></i></div>
                                            <div className="">
                                                <h6 className="font-medium"><a className="linking">Understand Clients Needs</a></h6>
                                                <p className="m-t-20">You can relay on our amazing features list and also our customer services.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Column -->
                            <!-- Column --> */}
                                <div className="col-md-4 wrap-feature5-box">
                                    <div className="card card-shadow" data-aos="fade-down" data-aos-duration="1200">
                                        <div className="card-body d-flex">
                                            <div className="icon-space"><i className="text-success-gradiant icon-Information"></i></div>
                                            <div className="">
                                                <h6 className="font-medium"><a className="linking">Effective Collaboration </a></h6>
                                                <p className="m-t-20">You can relay on our amazing features list and also our customer services.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Column -->
                            <!-- Column --> */}
                                <div className="col-md-4 wrap-feature5-box">
                                    <div className="card card-shadow" data-aos="fade-left" data-aos-duration="1200">
                                        <div className="card-body d-flex">
                                            <div className="icon-space"><i className="text-success-gradiant icon-Leo-2"></i></div>
                                            <div className="">
                                                <h6 className="font-medium"><a className="linking">100% Satisfaction </a></h6>
                                                <p className="m-t-20">You can relay on our amazing features list and also our customer services.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Column -->
                            <!-- Column --> */}
                                <div className="col-md-4 wrap-feature5-box">
                                    <div className="card card-shadow" data-aos="fade-right" data-aos-duration="1200">
                                        <div className="card-body d-flex">
                                            <div className="icon-space"><i className="text-success-gradiant icon-Target-Market"></i></div>
                                            <div className="">
                                                <h6 className="font-medium"><a className="linking">Targeting Market</a></h6>
                                                <p className="m-t-20">You can relay on our amazing features list and also our customer services.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Column -->
                            <!-- Column --> */}
                                <div className="col-md-4 wrap-feature5-box">
                                    <div className="card card-shadow" data-aos="fade-up" data-aos-duration="1200">
                                        <div className="card-body d-flex">
                                            <div className="icon-space"><i className="text-success-gradiant icon-Sunglasses-Smiley"></i></div>
                                            <div className="">
                                                <h6 className="font-medium"><a className="linking">Goal Achievement </a></h6>
                                                <p className="m-t-20">You can relay on our amazing features list and also our customer services.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Column -->
                            <!-- Column --> */}
                                <div className="col-md-4 wrap-feature5-box">
                                    <div className="card card-shadow" data-aos="fade-left" data-aos-duration="1200">
                                        <div className="card-body d-flex">
                                            <div className="icon-space"><i className="text-success-gradiant  icon-Laptop-Phone"></i></div>
                                            <div className="">
                                                <h6 className="font-medium"><a className="linking">24/7 Support</a></h6>
                                                <p className="m-t-20">You can relay on our amazing features list and also our customer services.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- ============================================================== -->
                <!-- End Feature 5  -->
                <!-- ============================================================== --> */}
                    {/* <!-- ============================================================== -->
                <!-- Counter  -->
                <!-- ============================================================== --> */}
                    {/* <div className="mini-spacer bg-info feature24">
                        <div className="container">
                           
                            <div className="row p-t-20 p-b-20 tclient-box text-white">
                             
                                <div className="col-lg-3 col-md-6">
                                    <div className="d-flex no-block">
                                        <div className="display-5"><i className="icon-Eyeglasses-Smiley"></i></div>
                                        <div className="m-l-20">
                                            <h1 className="font-light counter m-b-0 text-white">5000</h1>
                                            <h6 className="font-13 text-uppercase text-white op-7">Happy Clients</h6>
                                        </div>
                                    </div>
                                </div>
                             
                                <div className="col-lg-3 col-md-6">
                                    <div className="d-flex no-block">
                                        <div className="display-5"><i className="icon-Coffee"></i></div>
                                        <div className="m-l-20">
                                            <h1 className="font-light counter m-b-0 text-white">2300</h1>
                                            <h6 className="font-13 text-uppercase text-white op-7">Cups of Coffe</h6>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="col-lg-3 col-md-6">
                                    <div className="d-flex no-block">
                                        <div className="display-5"><i className="icon-Business-ManWoman"></i></div>
                                        <div className="m-l-20">
                                            <h1 className="font-light counter m-b-0 text-white">200</h1>
                                            <h6 className="font-13 text-uppercase text-white op-7">Dedicated staff</h6>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-3 col-md-6">
                                    <div className="d-flex no-block">
                                        <div className="display-5"><i className="icon-Trophy"></i></div>
                                        <div className="m-l-20">
                                            <h1 className="font-light counter m-b-0 text-white">20</h1>
                                            <h6 className="font-13 text-uppercase text-white op-7">Awards won</h6>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div> */}
                    {/* <!-- ============================================================== -->
                <!-- Counter   -->
                <!-- ============================================================== --> */}


                    <div className="spacer feature9">
                        <div className="container">

                            <div className="row justify-content-center">
                                <div className="col-md-7 text-center">

                                    <h2 className="title">How We Engage Our Client</h2>
                                    <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                            </div>

                            <div className="row m-t-40">

                                <div className="col-md-6 wrap-feature9-box b-r b-b">
                                    <div className="card" data-aos="fade-left" data-aos-duration="1200">
                                        <div className="card-body d-flex">
                                            <div className="icon-space align-self-center"><i className="icon-Computer-Secure display-4 text-info-gradiant"></i></div>
                                            <div className="align-self-center">
                                                <h5 className="font-medium"><a className="linking">Ownership <i className="ti-arrow-right"></i></a></h5>
                                                <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 wrap-feature9-box b-b">
                                    <div className="card" data-aos="fade-left" data-aos-duration="1200">
                                        <div className="card-body d-flex">
                                            <div className="icon-space align-self-center"><i className="icon-Computer-Secure display-4 text-info-gradiant"></i></div>
                                            <div className="align-self-center">
                                                <h5 className="font-medium"><a className="linking">Transparency <i className="ti-arrow-right"></i></a></h5>
                                                <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 wrap-feature9-box b-r">
                                    <div className="card" data-aos="fade-right" data-aos-duration="1200">
                                        <div className="card-body d-flex">
                                            <div className="icon-space align-self-center"><i className="icon-Cloud-Smartphone display-4 text-info-gradiant"></i></div>
                                            <div className="align-self-center">
                                                <h5 className="font-medium"><a className="linking">Trust <i className="ti-arrow-right"></i></a></h5>
                                                <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 wrap-feature9-box">
                                    <div className="card" data-aos="fade-left" data-aos-duration="1200">
                                        <div className="card-body d-flex">
                                            <div className="icon-space align-self-center"><i className="icon-Business-ManWoman display-4 text-info-gradiant"></i></div>
                                            <div className="align-self-center">
                                                <h5 className="font-medium"><a className="linking">Empathy <i className="ti-arrow-right"></i></a></h5>
                                                <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Column --> */}

                            </div>
                        </div>
                    </div>
                    {/* <!-- ============================================================== -->
                <!-- End Feature 3  -->
                <!-- ============================================================== --> */}

                    {/* <!-- ============================================================== -->
                <!-- Feature 29 -->
                <!-- ============================================================== --> */}
                    <div className="mini-spacer bg-info feature29 p-b-0">
                        <div className="container wrap-feature-29">
                            {/* <!-- Row --> */}
                            <div className="row justify-content-center">
                                <div className="col-md-7 text-center">
                                    <h2 className="title">Our Highlights</h2>
                                    <h6 className="subtitle">Effective search engine optimisation requires experience and expertise.</h6>
                                </div>
                                <div className="col-md-12 m-t-20 text-center">
                                    <div className="collapse m-t-20" id="f29">
                                        <div className="card card-body card-shadow">
                                            <ul className="nav nav-tabs" id="myTab8" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="html-tab8" data-toggle="tab" href="#html9" role="tab" aria-controls="html" aria-expanded="true">HTML</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="css-tab8" data-toggle="tab" href="#css9" role="tab" aria-controls="css">CSS</a>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Row --> */}
                            <div className="row wrap-feature-29 text-white">
                                {/* <!-- Column --> */}
                                <div className="col-lg-4 text-center">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <i className="icon-Eyeglasses-Smiley display-5"></i>
                                            <h4 className="title">200+ Happy Clients</h4>
                                            <p>Off-Page SEO includes not only link building but also social media promotion, bookmarking, etc. </p>
                                        </div>
                                        <div className="col-lg-12 m-t-20 m-b-20">
                                            <i className="icon-Monitor-Analytics display-5"></i>
                                            <h4 className="title">9+ Years of Experience</h4>
                                            <p>Off-Page SEO includes not only link building but also social media promotion, bookmarking, etc. </p>
                                        </div>
                                    </div>

                                </div>
                                {/* <!-- Column --> */}
                                <div className="col-lg-4 text-center" data-aos="fade-up" data-aos-duration="1800" data-aos-easing="linear">
                                    <img src="./images/features/img1.png" className="img-responsive" alt="wrappixel" />
                                </div>
                                {/* <!-- Column --> */}
                                <div className="col-lg-4 text-center m-b-30">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <i className="icon-Sheriff-Badge display-5"></i>
                                            <h4 className="title">ISO 27001 Certified</h4>
                                            <p>Off-Page SEO includes not only link building but also social media promotion, bookmarking, etc. </p>
                                        </div>
                                        <div className="col-lg-12 m-t-20 m-b-20">
                                            <i className="icon-Building display-5"></i>
                                            <h4 className="title">5+ Industries Served</h4>
                                            <p>Off-Page SEO includes not only link building but also social media promotion, bookmarking, etc. </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Column --> */}
                            </div>
                            {/* <!-- Row --> */}
                        </div>
                    </div>
                    {/* <!-- ============================================================== -->
                <!-- End Feature 29 -->
                <!-- ============================================================== --> */}

                    <div className="spacer team4">
                        <div className="container">
                            <div className="row justify-content-center m-b-30">
                                <div className="col-md-7 text-center">
                                    {/* <span className="label label-success label-rounded">Team 4</span> */}
                                    <h2 className="title">Experienced & Professional Team</h2>
                                    <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                            </div>
                            <div className="row m-t-30">
                                {/* <!-- column  --> */}
                                <div className="col-lg-3 m-b-30">
                                    {/* <!-- Row --> */}
                                    <div className="row">
                                        <div className="col-md-12 pro-pic">
                                            <img src="./images/team/t1.jpg" alt="wrapkit" className="img-responsive" />
                                        </div>
                                        <div className="col-md-12">
                                            <div className="p-t-10">
                                                <h5 className="title font-medium">Vikas Ranjan</h5>
                                                <h6 className="subtitle">Chief Technology Officer</h6>
                                                <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><a ><i className="fa fa-facebook"></i></a></li>
                                                    <li className="list-inline-item"><a ><i className="fa fa-twitter"></i></a></li>
                                                    <li className="list-inline-item"><a ><i className="fa fa-instagram"></i></a></li>
                                                    <li className="list-inline-item"><a ><i className="fa fa-behance"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Row --> */}
                                </div>
                                {/* <!-- column  -->
                            <!-- column  --> */}
                                <div className="col-lg-3 m-b-30">
                                    {/* <!-- Row --> */}
                                    <div className="row">
                                        <div className="col-md-12 pro-pic">
                                            <img src="./images/team/t2.jpg" alt="wrapkit" className="img-responsive" />
                                        </div>
                                        <div className="col-md-12">
                                            <div className="p-t-10">
                                                <h5 className="title font-medium">Aprajita Sinha</h5>
                                                <h6 className="subtitle">Director</h6>
                                                <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><a ><i className="fa fa-facebook"></i></a></li>
                                                    <li className="list-inline-item"><a ><i className="fa fa-twitter"></i></a></li>
                                                    <li className="list-inline-item"><a ><i className="fa fa-instagram"></i></a></li>
                                                    <li className="list-inline-item"><a ><i className="fa fa-behance"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Row --> */}
                                </div>
                                {/* <!-- column  -->
                            <!-- column  --> */}
                                <div className="col-lg-3 m-b-30">
                                    {/* <!-- Row --> */}
                                    <div className="row">
                                        <div className="col-md-12 pro-pic">
                                            <img src="./images/team/t3.jpg" alt="wrapkit" className="img-responsive" />
                                        </div>
                                        <div className="col-md-12">
                                            <div className="p-t-10">
                                                <h5 className="title font-medium">Abhishek Prasad</h5>
                                                <h6 className="subtitle">Director</h6>
                                                <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><a ><i className="fa fa-facebook"></i></a></li>
                                                    <li className="list-inline-item"><a ><i className="fa fa-twitter"></i></a></li>
                                                    <li className="list-inline-item"><a ><i className="fa fa-instagram"></i></a></li>
                                                    <li className="list-inline-item"><a ><i className="fa fa-behance"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Row --> */}
                                </div>
                                {/* <!-- column  -->
                            <!-- column  --> */}
                                <div className="col-lg-3 m-b-30">
                                    {/* <!-- Row --> */}
                                    <div className="row">
                                        <div className="col-md-12 pro-pic">
                                            <img src="./images/team/t4.jpg" alt="wrapkit" className="img-responsive" />
                                        </div>
                                        <div className="col-md-12">
                                            <div className="p-t-10">
                                                <h5 className="title font-medium">Michael Doe</h5>
                                                <h6 className="subtitle">Property Specialist</h6>
                                                <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><a ><i className="fa fa-facebook"></i></a></li>
                                                    <li className="list-inline-item"><a ><i className="fa fa-twitter"></i></a></li>
                                                    <li className="list-inline-item"><a ><i className="fa fa-instagram"></i></a></li>
                                                    <li className="list-inline-item"><a ><i className="fa fa-behance"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Row --> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- ============================================================== -->
                <!-- Feature 13  -->
                <!-- ============================================================== --> */}
                    <div className=" spacer feature13 bg-light">
                        <div className="container">
                            {/* <!-- Row  --> */}
                            <div className="row justify-content-center">
                                <div className="col-md-7 text-center">
                                    {/* <!-- <span className="label label-success label-rounded">Feature 13</span> --> */}
                                    <h2 className="title">Our Values</h2>
                                    <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                            </div>
                            {/* <!-- Row  --> */}
                            <div className="row m-t-40">
                                {/* <!-- Column --> */}
                                <div className="col-lg-6 wrap-feature13-box">
                                    <div className="card card-shadow" data-aos="fade-right" data-aos-duration="1200">
                                        <ul className="img-inline">
                                            <li className="half-width"><img src="./images/services/1.png" alt="wrapkit" className="img-responsive rounded" /></li>
                                            <li className="p-20 half-width">
                                                <h5 className="font-medium m-t-10"><a className="linking">Optimum Client Satisfaction</a></h5>
                                                <p className="m-t-20">You can relay on our amazing.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- Column --> */}
                                <div className="col-lg-6 wrap-feature13-box">
                                    <div className="card card-shadow" data-aos="fade-left" data-aos-duration="1200">
                                        <ul className="img-inline">
                                            <li className="half-width"><img src="./images/services/3.png" alt="wrapkit" className="img-responsive rounded" /></li>
                                            <li className="p-20 half-width">
                                                <h5 className="font-medium m-t-10"><a className="linking">Result-oriented Approach</a></h5>
                                                <p className="m-t-20">You can relay on our amazing.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- Column -->
                            <!-- Column --> */}
                                <div className="col-lg-6 wrap-feature13-box">
                                    <div className="card card-shadow" data-aos="fade-right" data-aos-duration="1200">
                                        <ul className="img-inline">
                                            <li className="half-width"><img src="./images/services/2.png" alt="wrapkit" className="img-responsive rounded" /></li>
                                            <li className="p-20 half-width">
                                                <h5 className="font-medium m-t-10"><a className="linking"> Integrity in Everything</a></h5>
                                                <p className="m-t-20">You can relay on our amazing.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- Column --> */}
                                <div className="col-lg-6 wrap-feature13-box">
                                    <div className="card card-shadow" data-aos="fade-left" data-aos-duration="1200">
                                        <ul className="img-inline">
                                            <li className="half-width"><img src="./images/services/4.png" alt="wrapkit" className="img-responsive rounded" /></li>
                                            <li className="p-20 half-width">
                                                <h5 className="font-medium m-t-10"><a className="linking">Great Place to Work </a></h5>
                                                <p className="m-t-20">You can relay on our amazing.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ============================================================== -->
                <!-- End Feature 13  -->
                <!-- ============================================================== --> */}

                    {/* <!-- ============================================================== -->
                <!-- Feature 39  -->
                <!-- ============================================================== --> */}
                    <div className="feature39 spacer wrap-feature39-box">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6"><img src="../images/features/img2.jpg" className="img-fluid" alt="wrapkit" /></div>
                                <div className="col-lg-6">
                                    <div className="card-body">
                                        {/* <span className="label label-success label-rounded">Feature 39</span> */}
                                        <h2 className="title text-uppercase">Our Differentiators</h2>
                                        {/* <p className="m-t-40 m-b-40">You can relay on our amazing features list and also our customer services will be greatexperience for you without</p> */}
                                        <h6 className="subtitle m-t-40 m-b-40">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                        {/* <!-- column  --> */}
                                        <div className="d-flex no-block m-b-40">
                                            <div className="display-4 m-r-20"><i className="icon-Paypal text-success-gradiant"></i></div>
                                            <div>
                                                <h4>Client Focused</h4>
                                                <h6 className="subtitle">You can relay on our amazing features</h6>
                                            </div>
                                        </div>
                                        {/* <!-- column  --> */}
                                        <div className="d-flex no-block m-b-40">
                                            <div className="display-4 m-r-20"><i className="icon-Evernote text-success-gradiant"></i></div>
                                            <div>
                                                <h4>IT Consultation</h4>
                                                <h6 className="subtitle">You can relay on our amazing features</h6>
                                            </div>
                                        </div>
                                        {/* <!-- column  --> */}
                                        <div className="d-flex no-block m-b-40">
                                            <div className="display-4 m-r-20"><i className="icon-Google-Drive text-success-gradiant"></i></div>
                                            <div>
                                                <h4>End To End Services</h4>
                                                <h6 className="subtitle">You can relay on our amazing features</h6>
                                            </div>
                                        </div>
                                        {/* <a className="btn btn-success-gradiant btn-md btn-arrow" data-toggle="collapse" href="#f39"><span>View Feature39 code <i className="ti-arrow-right"></i></span>
                                        </a> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ============================================================== -->
                <!-- Feature 39  -->
                <!-- ============================================================== --> */}


                    <div className="bg-light spacer feature20 up">
                        <div className="container">

                            <div className="row justify-content-center">
                                <div className="col-md-7 text-center">

                                    <h2 className="title">Success Stories</h2>
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
                                                        <h5 className="font-medium">Make your website in no-time with us.</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center cursor-pointer">
                                                <a className="text-white linking bg-info-gradiant">View More <i className="ti-arrow-right"></i></a>
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
                                                        <h5 className="font-medium">Make your website in no-time with us.</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center cursor-pointer">
                                                <a className="text-white linking bg-info-gradiant">View More <i className="ti-arrow-right"></i></a>
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
                                                        <h5 className="font-medium">Make your website in no-time with us.</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center cursor-pointer">
                                                <a className="text-white linking bg-info-gradiant">View More <i className="ti-arrow-right"></i></a>
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
                                                        <h5 className="font-medium">Make your website in no-time with us.</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center cursor-pointer">
                                                <a className="text-white linking bg-info-gradiant">View More <i className="ti-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="client2 spacer ">
                        <div className="container ">
                            <div className="row justify-content-center ">
                                <div className="col-md-7 text-center ">
                                    <h2 className="title ">Our Partners & Certification</h2>
                                    <h6 className="subtitle ">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                            </div>
                            <div className="row client-box text-center op-7 ">
                                <div className="col-lg-2 col-md-4 ">
                                    <img src="images/clients/sky7venture.png " alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4 ">
                                    <img src="images/clients/slinkd.png " alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4 ">
                                    <img src="images/clients/Pay2Cards.png " alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4 ">
                                    <img src="images/clients/payatshop.png " alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4 ">
                                    <img src="images/clients/paymentbox.png " alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4 ">
                                    <img src="images/clients/ProcessingQuotes.png " alt="wrapkit " />
                                </div>
                            </div>
                            <div className="row client-box text-center op-7 m-t-10 ">
                                <div className="col-lg-2 col-md-4 ">
                                    <img src="images/clients/help-light.png " alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4 ">
                                    <img src="images/clients/la_cour.png " alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4 ">
                                    <img src="images/clients/mobicall.png " alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4 ">
                                    <img src="images/clients/DMS-Final.png " alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4 ">
                                    <img src="images/clients/cw.png " alt="wrapkit " />
                                </div>
                                <div className="col-lg-2 col-md-4 ">
                                    <img src="images/clients/ProcessingQuotes.png " alt="wrapkit " />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="blog-home1 spacer bg-light ">
                        <div className="container ">

                            <div className="row justify-content-center ">

                                <div className="col-md-8 text-center ">
                                    <h2 className="title ">News</h2>
                                    <h6 className="subtitle ">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>

                            </div>
                            <div className="row m-t-40 ">

                                <div className="col-md-4 ">
                                    <div className="card card-shadow " data-aos="flip-left " data-aos-duration="1200 ">
                                        <a href="# "><img className="card-img-top " src="images/blog/img3.jpg " alt="wrappixel kit " /></a>
                                        <div className="p-30 ">
                                            <div className="d-flex no-block font-14 ">
                                                <a href="# ">Digital Marketing</a>
                                                <span className="ml-auto ">Sept 18, 2017</span>
                                            </div>
                                            <h5 className="font-medium m-t-20 "><a href="# " className="link ">Digital Marketing becomes very Essential for any site</a></h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 ">
                                    <div className="card card-shadow " data-aos="flip-up " data-aos-duration="1200 ">
                                        <a href="# "><img className="card-img-top " src="images/blog/img2.jpg " alt="wrappixel kit " /></a>
                                        <div className="p-30 ">
                                            <div className="d-flex no-block font-14 ">
                                                <a href="# ">Search Engine </a>
                                                <span className="ml-auto ">Sept 18, 2017</span>
                                            </div>
                                            <h5 className="font-medium m-t-20 "><a href="# " className="link ">Rank your site on First Page of Google seems easier now</a></h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 ">
                                    <div className="card card-shadow " data-aos="flip-right " data-aos-duration="1200 ">
                                        <a href="# "><img className="card-img-top " src="images/blog/img1.jpg " alt="wrappixel kit " /></a>
                                        <div className="p-30 ">
                                            <div className="d-flex no-block font-14 ">
                                                <a href="# ">Search Engine</a>
                                                <span className="ml-auto ">Sept 18, 2017</span>
                                            </div>
                                            <h5 className="font-medium m-t-20 "><a href="# " className="link ">We have just launched our new Admin template</a></h5>
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
                                                    <li className="nav-item active "><a className="nav-link " href="# ">Home</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">Services</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">Our Work</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">Technology</a></li>
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

export default aboutus;