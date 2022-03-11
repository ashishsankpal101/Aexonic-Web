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
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Machine Learning &amp; AI</a></li>
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
                                                    <Link href="/industries/banking">
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
                                                <a className="nav-link dropdown-toggle " id="h6-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Careers
                                                </a>
                                            </Link>

                                        </li>

                                        <li className="nav-item dropdown">
                                            <Link href="/aboutus">
                                                <a className="nav-link dropdown-toggle active" id="h6-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    About Us
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" id="h6-dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <div className="banner-innerpage" style={{ backgroundImage: "url(images/services/Banner/bg3.jpeg)" }}>
                        <div className="container">
                            {/* <!-- Row  --> */}
                            <div className="row justify-content-center ">
                                {/* <!-- Column --> */}
                                <div className="col-md-6 align-self-center text-center" data-aos="fade-down" data-aos-duration="1200">
                                    <h1 className="title banner-text">About Us</h1>
                                    <h6 className="subtitle op-8 banner-text">You visualize. We materialize</h6>
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
                                        <h6 className="subtitle"> Aexonic&apos;s core team was empowered by the vision to use technology to help global businesses unlock transformative results. After working with Fortune 500 companies, the founders recalibrated their careers and started Aexonic to help today&apos;s dynamic tech brands turn their product ideas into reality.</h6>
                                        <h6 className="subtitle">With expertise in product innovation, accurate working procedures, systemized processes, and highly skilled software engineers and QA testers, Aexonic has evolved into a reputed name globally in the end-to-end software development market.</h6>
                                        <h6 className="subtitle">Our 9+ years of experience in creating functional design roadmaps with technical architecture  has empowered us to handle any project seamlessly. We do everything for you, from planning to the final product deployment phase.</h6>
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
                                    <h6 className="subtitle">Innovation, transformation, and upgradation are at the root of everything we do. Our strength is using technology, data, and processes to achieve your goals.
                                    </h6>
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
                                                <p className="m-t-20">We make an operational blueprint after analyzing your USP.
                                                    <br></br>Your idea is now our responsibility.</p>
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
                                                <p className="m-t-20">Fast-track your company&apos;s growth with conversations that matter.
                                                    We support you to increase productivity and efficiency.

                                                </p>
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
                                                <h6 className="font-medium"><a className="linking">Execute Ideas </a></h6>
                                                <p className="m-t-20">Achieve your KPIs every <br></br>time. <br></br>We materialize your ideas by designing products that your customers need.  </p>
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
                                                <h6 className="font-medium"><a className="linking">People We Serve </a></h6>
                                                <p className="m-t-20">We offer on-time delivery of your projects. <br></br>We use technology to make your life easier.
                                                </p>
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
                                                <h6 className="font-medium"><a className="linking">Motivated To Win</a></h6>
                                                <p className="m-t-20">In the age of automation, we prioritize on-demand hyper-care customer support.
                                                    We&apos;re here for you
                                                </p>
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
                                                <h6 className="font-medium"><a className="linking">Customer Support</a></h6>
                                                <p className="m-t-20">In the age of automation, we prioritize on-demand hyper-care customer support. We&apos;re here for you.
                                                    {/* We&apos;re here for you. */}

                                                </p>
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
                                    <h6 className="subtitle">We are your resource to grow and transform your business by taking care of the entire product life cycle. We believe in tech for the greater good. </h6>
                                </div>
                            </div>

                            <div className="row m-t-40">

                                <div className="col-md-6 wrap-feature9-box b-r b-b">
                                    <div className="card" data-aos="fade-left" data-aos-duration="1200">
                                        <div className="card-body d-flex">
                                            <div className="icon-space align-self-center"><i className="icon-Computer-Secure display-4 text-info-gradiant"></i></div>
                                            <div className="align-self-center">
                                                <h5 className="font-medium"><a className="linking">Ownership <i className="ti-arrow-right"></i></a></h5>
                                                <p className="m-t-20">Ownership is the stepping stone to transformative company culture. We’re committed to a greater digital transformation.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 wrap-feature9-box b-b">
                                    <div className="card" data-aos="fade-left" data-aos-duration="1200">
                                        <div className="card-body d-flex">
                                            <div className="icon-space align-self-center"><i className="icon-Computer-Secure display-4 text-info-gradiant"></i></div>
                                            <div className="align-self-center">
                                                <h5 className="font-medium"><a className="linking">Integrity<i className="ti-arrow-right"></i></a></h5>
                                                <p className="m-t-20">We support you with the best-fitted solutions with well-defined mechanisms that position you as a market leader. We assist you in breaking down the hierarchical barriers and unite your team to resolve them collectively.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 wrap-feature9-box b-r">
                                    <div className="card" data-aos="fade-right" data-aos-duration="1200">
                                        <div className="card-body d-flex">
                                            <div className="icon-space align-self-center"><i className="icon-Cloud-Smartphone display-4 text-info-gradiant"></i></div>
                                            <div className="align-self-center">
                                                <h5 className="font-medium"><a className="linking">Trustworthiness<i className="ti-arrow-right"></i></a></h5>
                                                <p className="m-t-20">We&apos;re deeply embedded with our clients. We work as your extended team and help you unlock greater potential.</p>
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
                                                <p className="m-t-20">Our ethical and corporate responsibility empowers you to solve modern-day problems with simplicity and agility. Empathy is our cornerstone to understand diverse perspectives.</p>
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
                                    <h6 className="subtitle">In the past decade, our accomplishments have spoken for themselves. We&apos;re proud to have executed successful products for global businesses.</h6>
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
                                            <p>We&apos;ve worked with amazing teams who believed in their vision and made us a part to fulfill them.
                                            </p>
                                        </div>
                                        <div className="col-lg-12 m-t-20 m-b-20">
                                            <i className="icon-Monitor-Analytics display-5"></i>
                                            <h4 className="title">9+ Years of Experience</h4>
                                            <p>The humble years of experience have made us realize how far we&apos;ve come and how far we have the potential to go.</p>
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
                                            <p>Our practice of investing in people and processes has empowered us to gain greater customer confidence. </p>
                                        </div>
                                        <div className="col-lg-12 m-t-20 m-b-20">
                                            <i className="icon-Building display-5"></i>
                                            <h4 className="title">5+ Industries Served</h4>
                                            <p>From working with Fortune 500 companies to working with medium and small-sized companies, we&apos;ve gained industry-specific knowledge that helps us perform optimally.</p>
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
                                    <h2 className="title">Experienced &amp; Professional Team</h2>
                                    <h6 className="subtitle">Our expertise and achievements come from the strong workforce that strengthens Aexonic what it is today.</h6>
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
                                    <h6 className="subtitle">To be your most-preferred IT solutions business partner to help your company unlock its optimal potential.</h6>
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
                                                <h5 className="font-medium m-t-10"><a className="linking">Building Supreme Products</a></h5>
                                                <p className="m-t-20">End-to-end software product development that meets the design and usability specs</p>
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
                                                <h5 className="font-medium m-t-10"><a className="linking">Adaptive to Evolving Market Trends</a></h5>
                                                <p className="m-t-20">After your product is released into the market, we track it to refine for the better.</p>
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
                                                <h5 className="font-medium m-t-10"><a className="linking">Integrity in Everything</a></h5>
                                                <p className="m-t-20">To deliver ambitious results and provide post-execution support with upgrades and enhancements</p>
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
                                                <h5 className="font-medium m-t-10"><a className="linking">Best Practices for Best Results</a></h5>
                                                <p className="m-t-20">To help you engineer a reliable product that requires low maintenance and performs optimally.  </p>
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
                                        <h6 className="subtitle m-t-40 m-b-40">It&apos;s not just the technology we use but also how we use technology to innovate in your business operations that differentiate Aexonic from the rest.</h6>
                                        {/* <!-- column  --> */}
                                        <div className="d-flex no-block m-b-40">
                                            <div className="display-4 m-r-20"><i className="icon-Paypal text-success-gradiant"></i></div>
                                            <div>
                                                <h4>Client Focused</h4>
                                                <h6 className="subtitle">Collaboratively solve challenges to grow your business</h6>
                                            </div>
                                        </div>
                                        {/* <!-- column  --> */}
                                        <div className="d-flex no-block m-b-40">
                                            <div className="display-4 m-r-20"><i className="icon-Evernote text-success-gradiant"></i></div>
                                            <div>
                                                <h4>IT Consultation</h4>
                                                <h6 className="subtitle">Technology solutions that create winning strategies
                                                </h6>
                                            </div>
                                        </div>
                                        {/* <!-- column  --> */}
                                        <div className="d-flex no-block m-b-40">
                                            <div className="display-4 m-r-20"><i className="icon-Google-Drive text-success-gradiant"></i></div>
                                            <div>
                                                <h4>Quality-Assurance</h4>
                                                <h6 className="subtitle">Proven quality of services with updated tools</h6>
                                            </div>
                                        </div>
                                        {/* <!-- column  --> */}
                                        <div className="d-flex no-block m-b-40">
                                            <div className="display-4 m-r-20"><i className="icon-Google-Drive text-success-gradiant"></i></div>
                                            <div>
                                                <h4>Customize to Optimize</h4>
                                                <h6 className="subtitle">Design products to fulfill market&apos;s demand and customer requirements</h6>
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
                                    <h6 className="subtitle">Your successes are what make our stories incredible. Check out a few of our noteworthy wins. </h6>
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
                                    <h2 className="title ">Our Partners &amp; Certification</h2>
                                    <h6 className="subtitle ">We&apos;re strengthened by companies and entrepreneurs who believe in us. Here are some of the industry-leading authorities that have accredited us.</h6>
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
                                    <h6 className="subtitle ">Never miss an update about IT news, digital transformation, and innovation in tech. Subscribe and follow our blogs for more.</h6>
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
                                    <p> 503, Pride Icon, Kharadi, Pune, India  411014</p>
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
                                                    <li className="nav-item "><a className="nav-link active" href="# ">About Us</a></li>
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