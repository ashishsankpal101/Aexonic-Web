import Head from 'next/head'
import React from "react";
import Image from 'next/image'
import Link from "next/link";


const Industries = () => {
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
                <title>Aexonic : Industries</title>
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
                                        <li className="nav-item dropdown mega-dropdown"> <a className="nav-link dropdown-toggle" href="#" id="h6-mega-dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Services  <i className="fa fa-angle-down m-l-5"></i>
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
                                                            <li><a href="../../wrapkit/sliders-static.html" target="_blank">Banners</a></li>
                                                            <li><a href="../../wrapkit/form-banners.html" target="_blank">Form Banners</a></li>
                                                            <li><a href="../../wrapkit/headers1.html" target="_blank">Navigation 1-10</a></li>
                                                            <li><a href="../../wrapkit/headers2.html" target="_blank">Navigation 11-20</a></li>
                                                            <li><a href="../../wrapkit/footers.html" target="_blank">Footers</a></li>
                                                            <li><a href="../../wrapkit/call-to-action.html" target="_blank">Call to Actions</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-1 col-md-4">
                                                        <ul className="list-style-none">
                                                            <li>
                                                                <h6>Sliders</h6>
                                                            </li>
                                                            <li><a href="../../wrapkit/slider1.html" target="_blank">Slider1</a></li>
                                                            <li><a href="../../wrapkit/slider2.html" target="_blank">Slider2</a></li>
                                                            <li><a href="../../wrapkit/slider3.html" target="_blank">Slider3</a></li>
                                                            <li><a href="../../wrapkit/slider4.html" target="_blank">Slider4</a></li>
                                                            <li><a href="../../wrapkit/slider5.html" target="_blank">Slider5</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-1 col-md-4">
                                                        <ul className="list-style-none">
                                                            <li>
                                                                <h6>&nbsp;</h6>
                                                            </li>
                                                            <li><a href="../../wrapkit/slider6.html" target="_blank">Slider6</a></li>
                                                            <li><a href="../../wrapkit/slider7.html" target="_blank">Slider7</a></li>
                                                            <li><a href="../../wrapkit/slider8.html" target="_blank">Slider8</a></li>
                                                            <li><a href="../../wrapkit/slider9.html" target="_blank">Slider9</a></li>
                                                            <li><a href="../../wrapkit/slider10.html" target="_blank">Slider10</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-2 col-md-4">
                                                        <ul className="list-style-none">
                                                            <li>
                                                                <h6>Other Sections</h6>
                                                            </li>
                                                            <li><a href="../../wrapkit/contacts-forms.html" target="_blank">Contacts</a></li>
                                                            <li><a href="../../wrapkit/blog-homepage.html" target="_blank">Blogs</a></li>
                                                            <li><a href="../../wrapkit/pricing.html" target="_blank">Pricing</a></li>
                                                            <li><a href="../../wrapkit/ui-custom-modals.html" target="_blank">Popups / Modals</a></li>
                                                            <li><a href="../../wrapkit/team.html" target="_blank">Teams</a></li>
                                                            <li><a href="../../wrapkit/testimonial.html" target="_blank">Testimonials</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-2 col-md-4">
                                                        <ul className="list-style-none">
                                                            <li>
                                                                <h6>Features</h6>
                                                            </li>
                                                            <li><a href="../../wrapkit/feature1.html" target="_blank">Features 1-10</a></li>
                                                            <li><a href="../../wrapkit/feature2.html" target="_blank">Features 11-20</a></li>
                                                            <li><a href="../../wrapkit/feature3.html" target="_blank">Features 21-30</a></li>
                                                            <li><a href="../../wrapkit/feature4.html" target="_blank">Features 31-40</a></li>
                                                            <li><a href="../../wrapkit/feature5.html" target="_blank">Features 41-50</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link href="/industry">
                                                <a className="nav-link dropdown-toggle active" id="h6-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Industries
                                                </a>
                                            </Link>

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
                                    <h1 className="title banner-text">Industries</h1>
                                    <h6 className="subtitle op-8 banner-text">We are a team of passionate people who love what we do.</h6>
                                </div>
                                {/* <!-- Column --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- ============================================================== -->
            <!-- Testimonial 9 -->
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

                    <div className="spacer feature1">
                        <div className="container">
                            {/* <!-- Row  --> */}
                            <div className="row justify-content-center">
                                <div className="col-md-7 text-center">
                                    <h2 className="title">How We Work</h2>
                                    <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                            </div>
                            {/* <!-- Row  --> */}
                            <div className="row m-t-40">
                                <div className="col-lg-12" data-aos="flip-up" data-aos-duration="1200"> <img src="images/how_we_work.png" className="rounded img-responsive" alt="wrapkit" /> </div>
                            </div>
                        </div>
                    </div>

                    <div className="spacer bg-light feature1">
                        <div className="container">
                            {/* <!-- Row  --> */}
                            <div className="row justify-content-center">
                                <div className="col-md-7 text-center">
                                    <h2 className="title">Celebrations at Aexonic</h2>
                                    <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                            </div>
                            {/* <!-- Row  --> */}
                            <div className="row m-t-40">
                                <div className="col-lg-12" data-aos="flip-up" data-aos-duration="1200"> <img src="images/about.png" className="rounded img-responsive" alt="wrapkit" /> </div>
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

export default Industries;