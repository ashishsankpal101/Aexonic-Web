import Head from 'next/head'
import React from "react";
import Image from 'next/image'
import Link from "next/link";


const Healthcare = () => {
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
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png" />
                <title>Aexonic : Industries / Healthcare</title>
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
                                <a className="navbar-brand"><img className="header-icon" src="/images/aexonic-logo_8.png" alt="Aexonic" /></a>
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
                                        <li className="nav-item dropdown">  <Link href="/industry"><a className="nav-link dropdown-toggle active" id="h6-dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Industries <i className="fa fa-angle-down m-l-5"></i>
                                        </a></Link>
                                            <ul className="b-none dropdown-menu font-14 animated fadeInUp">

                                                <li>
                                                    <Link href="/industries/banking">
                                                        <a className="dropdown-item">Banking and FinTech</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/industries/supplychain">
                                                        <a className="dropdown-item">Supply Chain and Logistics</a>
                                                    </Link>
                                                </li>
                                                <li> <Link href="/industries/hospitality">
                                                    <a className="dropdown-item">Hospitality and Travel</a>
                                                </Link>
                                                </li>
                                                <li> <Link href="/industries/healthcare">
                                                    <a className="dropdown-item active_menu">Healthcare</a>
                                                </Link>
                                                </li>
                                                <li> <Link href="/industries/manifacturing">
                                                    <a className="dropdown-item">Manufacturing</a>
                                                </Link>
                                                </li>
                                                <li> <Link href="/industries/retail">
                                                    <a className="dropdown-item">Retail and e-commerce</a>
                                                </Link>
                                                </li>
                                                <li> <Link href="/industries/technology">
                                                    <a className="dropdown-item">Technology and Software</a>
                                                </Link>
                                                </li>
                                                <li> <Link href="/industries/professional_service">
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
                    <div className="banner-innerpage" style={{ backgroundImage: "url(/images/services/Banner/team_aug.jpeg)" }}>
                        <div className="container">
                            {/* <!-- Row  --> */}
                            <div className="row justify-content-center ">
                                {/* <!-- Column --> */}
                                <div className="col-md-6 align-self-center text-center" data-aos="fade-down" data-aos-duration="1200">
                                    <h1 className="title banner-text">Healthcare</h1>
                                    <h6 className="subtitle op-8 banner-text">We are a team of passionate people who love what we do.</h6>
                                </div>
                                {/* <!-- Column --> */}
                            </div>
                        </div>
                    </div>

                    {/* <!-- ============================================================== -->
            <!-- Testimonial 9 -->
            <!-- ============================================================== --> */}
                    {/* <!-- Feature Card --> */}
                    <div className="spacer feature9">
                        <div className="container">
                            {/* <!-- Row --> */}
                            <div className="row justify-content-center">
                                <div className="col-md-7 text-center">
                                    <h2 className="title">Features</h2>
                                    <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                            </div>
                            {/* <!-- Row --> */}
                            <div className="row m-t-40">
                                {/* <!-- Column --> */}
                                <div className="col-md-4 wrap-feature11-box">
                                    <div className="card card-shadow" data-aos="fade-right" data-aos-duration="1200">
                                        <div className="card-body">
                                            <div className="icon-space"><i className="display-5 text-info-gradiant icon-Doctor"></i></div>
                                            <h5 className="font-medium">Appointments</h5>
                                            <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Column --> */}
                                <div className="col-md-4 wrap-feature11-box">
                                    <div className="card card-shadow" data-aos="fade-right" data-aos-duration="1200">
                                        <div className="card-body">
                                            <div className="icon-space"><i className="display-5 text-info-gradiant icon-Clock-Forward"></i></div>
                                            <h5 className="font-medium">Working Time</h5>
                                            <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Column --> */}
                                <div className="col-md-4 wrap-feature11-box">
                                    <div className="card card-shadow" data-aos="fade-right" data-aos-duration="1200">
                                        <div className="card-body">
                                            <div className="icon-space"><i className="display-5 text-info-gradiant icon-First-Aid"></i></div>
                                            <h5 className="font-medium">Emergency</h5>
                                            <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feature16">
                        <div className="row wrap-feature-16">
                            <div className="col-lg-6 with-bg" data-aos="fade-up" data-aos-duration="1200" style={{ backgroundImage: "url(/images/features/hospital_service.jpg)" }}> </div>
                            <div className="col-lg-6 bg-info-gradiant text-white">
                                <div className="with-text">
                                    <p className="op-7">What we did ?</p>
                                    <h2 className="text-white m-t-30 m-b-30">Our Work</h2>
                                    <ul className="list-block m-b-30">
                                        <li><i className="icon-Yes"></i> <span>Powerful and Faster Results for your site</span></li>
                                        <li><i className="icon-Yes"></i> <span>Make your site in no-time with your Bootstrap WrapKit</span></li>
                                        <li><i className="icon-Yes"></i> <span>Tons of Features and Elements available here</span></li>
                                        <li><i className="icon-Yes"></i> <span>What are you wait for? Go and Get it.</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="spacer feature2">
                        <div className="container">
                            {/* <!-- Row  --> */}
                            <div className="row justify-content-center">
                                <div className="col-md-7 text-center">
                                    <h2 className="title"></h2>
                                    <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                            </div>
                            {/* <!-- Row  --> */}
                            <div className="row m-t-40">
                                {/* <!-- Column --> */}
                                <div className="col-md-4 wrap-feature2-box">
                                    <div className="card card-shadow" data-aos="flip-left" data-aos-duration="1200">
                                        <img className="card-img-top" src="/images/features/feature17/img1.jpg" alt="wrappixel kit" />
                                        <div className="card-body text-center">
                                            <h5 className="font-medium">Retargeting Market</h5>
                                            <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Column --> */}
                                <div className="col-md-4 wrap-feature2-box">
                                    <div className="card card-shadow" data-aos="flip-up" data-aos-duration="1200">
                                        <img className="card-img-top" src="/images/features/feature17/img2.jpg" alt="wrappixel kit" />
                                        <div className="card-body text-center">
                                            <h5 className="font-medium">Fruitful Results</h5>
                                            <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Column --> */}
                                <div className="col-md-4 wrap-feature2-box">
                                    <div className="card card-shadow" data-aos="flip-right" data-aos-duration="1200">
                                        <img className="card-img-top" src="/images/features/feature17/img3.jpg" alt="wrappixel kit" />
                                        <div className="card-body text-center">
                                            <h5 className="font-medium">Instant Solutions</h5>
                                            <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Our thinking Section */}
                    <div className="bg-light spacer feature15">
                        <div className="container">
                            {/* <!-- Row  --> */}
                            <div className="row justify-content-center">
                                <div className="col-md-7 text-center">
                                    <h2 className="title">Our Thinking</h2>
                                    <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                            </div>
                            {/* <!-- Row  --> */}
                            <div className="row m-t-40">
                                {/* <!-- Column --> */}
                                <div className="col-lg-6 wrap-feature15-box">
                                    <div className="row">
                                        <div className="col-md-12 m-b-30" data-aos="fade-down" data-aos-duration="1000">
                                            <div className="d-flex no-block">
                                                <div className="no-shrink"><span className="icon-round bg-white display-5 text-success "><i className="icon-Target"></i></span></div>
                                                <div className="p-20">
                                                    <h5 className="font-medium"><a className="linking">Retargeting Market</a></h5>
                                                    <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 m-b-30" data-aos="fade-down" data-aos-duration="2000">
                                            <div className="d-flex no-block">
                                                <div className="no-shrink"><span className="icon-round bg-white display-5 text-success "><i className="icon-Car-Wheel"></i></span></div>
                                                <div className="p-20">
                                                    <h5 className="font-medium"><a className="linking">Fruitful Results</a></h5>
                                                    <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 m-b-30" data-aos="fade-down" data-aos-duration="3000">
                                            <div className="d-flex no-block">
                                                <div className="no-shrink"><span className="icon-round bg-white display-5 text-success "><i className="icon-Mouse-3"></i></span></div>
                                                <div className="p-20">
                                                    <h5 className="font-medium"><a className="linking">Instant Solutions</a></h5>
                                                    <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Column --> */}
                                <div className="col-lg-6 wrap-feature15-box" data-aos="flip-left" data-aos-duration="1200">
                                    <img src="/images/features/img3.png" className="img-responsive" alt="wrapkit" />
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
                                            <a className="navbar-brand m-b-11 " href="# "><img src="/images/aexonic-logo_5.png " alt="Aexonic " width="120 " /></a>
                                            <button className="navbar-toggler " type="button " data-toggle="collapse " data-target="#header1 " aria-expanded="false " aria-label="Toggle navigation ">
                                                <span className="ti-menu "></span>
                                            </button>
                                            <div className="collapse navbar-collapse " id="header1 ">
                                                <span className="hidden-lg-down ">© 2020 All rights reserved.</span>
                                                <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                                                    <li className="nav-item"><a className="nav-link " href="# ">Home</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">Services</a></li>
                                                    <li className="nav-item "><a className="nav-link active" href="# ">Industries</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">Careers</a></li>
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

export default Healthcare;