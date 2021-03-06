import Head from 'next/head'
import React from "react";
import Image from 'next/image'
import Link from "next/link";


const careers = () => {
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
                <title>Aexonic : Career</title>
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
                                        {/* <li className="nav-item dropdown">
                                            <Link href="/industry">
                                                <a className="nav-link dropdown-toggle" id="h6-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Industries
                                                </a>
                                            </Link>

                                        </li> */}

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
                                                <a className="nav-link dropdown-toggle active" id="h6-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                    <h1 className="title banner-text">Careers</h1>
                                    <h6 className="subtitle op-8 banner-text">We are a team of passionate people who love what we do.</h6>
                                </div>
                                {/* <!-- Column --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- ============================================================== -->
            <!-- Testimonial 9 -->
            <!-- ============================================================== --> */}

                    <div className="spacer feature12">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    {/* <!-- <div className="col-md-12 text-center m-b-40"><img src="images/services.jpg" alt="wrapkit" className="img-fluid" /></div> --> */}
                                    <h2 className="m-b-30 m-t-20">Our Culture</h2>
                                    <h6 className="subtitle">We are proud of having a team-first culture.

                                    <br></br> <br></br> We are a group of diverse individuals united by a vision to empower businesses with our high-quality product development and transformation services.

                                        <br></br> <br></br> We design, test, and deploy technologies to architect a robust product engineering methodology that accelerates businesses&apos; growth. If you are excited about working in a high-paced environment, and with global clients, then Aexonic welcomes you!

                                        <br></br> <br></br>At Aexonic, customer and employee success are the top two priorities. Together, they strengthen our ethos and reflect our external and internal army of brand ambassadors. We work smart and celebrate together.

                                        <br></br> <br></br>We prioritize innovation, transformation, and growth. If you want to take your career to new heights, join Aexonic.
                                    </h6>
                                    {/* <div className="row">
                                        <div className="col-md-6 m-t-30">
                                            <div className="d-flex no-block">
                                                <div className="display-5"><i className="icon-Eyeglasses-Smiley"></i></div>
                                                <div className="m-l-20">
                                                    <h1 className="font-light counter m-b-0">80</h1>

                                                    <h6 className="text-muted font-13 text-uppercase">Happy Clients</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 m-t-30">
                                            <div className="d-flex no-block">
                                                <div className="display-5"><i className="icon-Coffee"></i></div>
                                                <div className="m-l-20">
                                                    <h1 className="font-light counter m-b-0">300</h1>
                                                    <h6 className="text-muted font-13 text-uppercase">Projects Delivered
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 m-t-30">
                                            <div className="d-flex no-block">
                                                <div className="display-5"><i className="icon-Business-ManWoman"></i></div>
                                                <div className="m-l-20">
                                                    <h1 className="font-light counter m-b-0">200</h1>
                                                    <h6 className="text-muted font-13 text-uppercase">Clients Served
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 m-t-30">
                                            <div className="d-flex no-block">
                                                <div className="display-5"><i className="icon-Flag-2"></i></div>
                                                <div className="m-l-20">
                                                    <h1 className="font-light counter m-b-0">15</h1>
                                                    <h6 className="text-muted font-13 text-uppercase">Countries Reached
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>

                                    </div> */}
                                </div>
                                <div className="col-lg-5">
                                    <div className="row wrap-feature-12">
                                        <div className="col-md-12">
                                            <img src="./images/graphic-designing.png" className="rounded img-responsive m-t-3" alt="wrapkit " />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="spacer feature43 bg-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5" data-aos="fade-right" data-aos-duration="1200">
                                    <h2 className="title">What we look for</h2>
                                    <h6 className="subtitle">Aexonic favors people who can walk their talk. Those who can work in a team and still own their work autonomously. You are detail-oriented, adaptable to new changes, and take action. 

This is what strengthens Aexonic as a team. 

                                    </h6>  </div>
                                <div className="col-lg-6 ml-auto">
                                    <div className="row wrap-feature43-box">
                                        <div className="col-md-6" data-aos="fade-right" data-aos-duration="1200">
                                            <h2 className="text-success-gradiant display-5"><i className="icon-Car-Wheel"></i></h2>
                                            <h5 className="title">Open to feedback  </h5>
                                            <h6 className="subtitle">You acknowledge and implement it. You have a growth mindset and aspire to be better.</h6>
                                        </div>
                                        <div className="col-md-6" data-aos="fade-left" data-aos-duration="1200">
                                            <h2 className="text-success-gradiant display-5"><i className="icon-Target"></i></h2>
                                            <h5 className="title">Take on challenges </h5>
                                            <h6 className="subtitle">Your eyes are on the prize. You are an ambitious and fast learner. </h6>
                                        </div>
                                        <div className="col-md-6" data-aos="fade-right" data-aos-duration="1200">
                                            <h2 className="text-success-gradiant display-5"><i className="icon-Mouse-3"></i></h2>
                                            <h5 className="title">Strong work ethics</h5>
                                            <h6 className="subtitle">You work until it&apos;s right. And be accountable for it. </h6>
                                        </div>
                                        <div className="col-md-6" data-aos="fade-left" data-aos-duration="1200">
                                            <h2 className="text-success-gradiant display-5"><i className="icon-Car-Wheel"></i></h2>
                                            <h5 className="title">Flexibility with creativity</h5>
                                            <h6 className="subtitle">You light the room with new ideas. You have a knack for innovative products. </h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* <!-- ============================================================== -->
                <!-- Features 21  -->
                <!-- ============================================================== --> */}
                    {/* <div className="spacer feature21 wrap-feature21-box" style="background-image:url(images/bg1.jpg)"> */}
                    <div className="spacer feature21 wrap-feature21-box" style={{ backgroundImage: "url(images/bg1.jpg)" }}>
                        <div className="container">
                            {/* <!-- Row  --> */}
                            <div className="row text-white">
                                {/* <!-- Column --> */}
                                <div className="col-md-5 both-space">
                                    <div className="" data-aos="fade-right" data-aos-duration="1200">
                                        <h2 className="text-white m-t-20 m-b-30">Don&apos;t go by Queue, Create your Own Way Faster</h2>
                                        <p className="op-8">Don&apos;t just come up with an "out-of-the-box" idea. Create your own box and design it with your energy.</p> <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20" data-toggle="collapse" href="#"><span>Join Us <i className="ti-arrow-right"></i></span></a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ============================================================== -->
                <!-- Features 21  -->
                <!-- ============================================================== --> */}
                    <div className="spacer feature24 bg-light ">
                        <div className="container ">
                            {/* <!-- Row --> */}
                            <div className="row justify-content-center ">
                                <div className="col-md-7 text-center ">
                                    {/* <!-- <span className="label label-success label-rounded ">Feature 24</span> --> */}
                                    <h2 className="title ">Why work with us</h2>
                                    <h6 className="subtitle ">Working at Aexonic is not just about having a job that makes your ends meet. Here, you have the opportunity to explore your curiosity, fulfill your ambitions, and take success into your own hands. 
                                    </h6>
                                </div>
                            </div>
                            {/* <!-- Row --> */}
                            <div className="row wrap-feature-24 ">
                                {/* <!-- Column --> */}
                                <div className="col-lg-3 col-md-6 ">
                                    <div className="card card-shadow ">
                                        <a className="service-24 "> <i className="icon-Target "></i>
                                            <h6 className="ser-title ">Greater opportunities</h6>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- Column -->
                        <!-- Column --> */}
                                <div className="col-lg-3 col-md-6 ">
                                    <div className="card card-shadow ">
                                        <a className="service-24 "> <i className="icon-Car-Wheel "></i>
                                            <h6 className="ser-title ">Diverse skillsets</h6>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- Column -->
                        <!-- Column --> */}
                                <div className="col-lg-3 col-md-6 ">
                                    <div className="card card-shadow ">
                                        <a className="service-24 "> <i className="icon-Mouse-3 "></i>
                                            <h6 className="ser-title ">Peer-to-peer learning</h6>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- Column -->
                        <!-- Column --> */}
                                <div className="col-lg-3 col-md-6 ">
                                    <div className="card card-shadow ">
                                        <a className="service-24 "> <i className="icon-Eyeglasses-Smiley "></i>
                                            <h6 className="ser-title ">Unity in diversity </h6>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- Column -->
                        <!-- Column --> */}
                                <div className="col-lg-3 col-md-6 ">
                                    <div className="card card-shadow ">
                                        <a className="service-24 "> <i className="icon-Target-Market "></i>
                                            <h6 className="ser-title ">Flexible with uncertainty</h6>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- Column -->
                        <!-- Column --> */}
                                <div className="col-lg-3 col-md-6 ">
                                    <div className="card card-shadow ">
                                        <a className="service-24 "> <i className="icon-Laptop-Phone "></i>
                                            <h6 className="ser-title ">Prioritize creativity</h6>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- Column -->
                        <!-- Column --> */}
                                <div className="col-lg-3 col-md-6 ">
                                    <div className="card card-shadow ">
                                        <a className="service-24 "> <i className="icon-Full-Bag "></i>
                                            <h6 className="ser-title ">Connect globally </h6>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- Column -->
                        <!-- Column --> */}
                                <div className="col-lg-3 col-md-6 ">
                                    <div className="card card-shadow ">
                                        <a className="service-24 "> <i className="icon-Eyeglasses-Smiley "></i>
                                            <h6 className="ser-title ">Nurture your innate talents</h6>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- Column --> */}

                            </div>
                        </div>
                    </div>

                    <div className="spacer feature1">
                        <div className="container">
                            {/* <!-- Row  --> */}
                            <div className="row justify-content-center">
                                <div className="col-md-7 text-center">
                                    <h2 className="title">Our Workspace</h2>
                                    <h6 className="subtitle">Our holy space is where ideas are brainstormed and executed. </h6>
                                </div>
                            </div>
                            {/* <!-- Row  --> */}
                            <div className="row m-t-40">
                                <div className="col-lg-12" data-aos="flip-up" data-aos-duration="1200"> <img src="images/about.png" className="rounded img-responsive" alt="wrapkit" /> </div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial9 spacer bg-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <h2 className="m-t-40">What Our Employee&apos;s Say</h2>
                                    <span className="devider bg-danger"></span>
                                    <h6 className="subtitle ">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                                <div className="col-lg-6 col-md-6 ml-auto">
                                    <div className="owl-carousel owl-theme testi9">
                                        {/* <!-- item --> */}
                                        <div className="item">
                                            <div className="card card-shadow testimonial-color">
                                                <div className="p-40">
                                                    <p>I found an amazing opportunity to work at Aexonic in 2018. Since then, I&apos;ve fast-tracked my career and have worked on diverse projects that have strengthen my Front-End Devlopment

                                                        I hope to achieve great things and continue working at Aexonic to simplify complex products.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-flex no-block align-items-center">
                                                <div className="customer-thumb"><img src="images/1.jpg" alt="wrapkit" className="circle" /></div>
                                                <div className="">
                                                    <h6 className="font-bold m-b-0">Ashish Sankpal</h6><span className="font-13">Front End Developer</span></div>
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
            <!-- footer 4  -->
            <!-- ============================================================== --> */}
                    <div className="footer4 spacer ">
                        <div className="container ">
                            <div className="row ">
                                <div className="col-lg-3 col-md-6 m-b-30 ">
                                    <h5 className="m-b-20 ">Address</h5>
                                    <p> 503, Pride Icon, Kharadi, Pune, India ??? 411014</p>
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
                                                <span className="hidden-lg-down ">?? 2020 All rights reserved.</span>
                                                <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                                                    <li className="nav-item"><a className="nav-link " href="# ">Home</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">Services</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">Industries</a></li>
                                                    <li className="nav-item "><a className="nav-link active" href="# ">Careers</a></li>
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

export default careers;