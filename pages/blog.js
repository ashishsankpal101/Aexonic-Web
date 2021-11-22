import Head from 'next/head'
import React from "react";
import Image from 'next/image'
import Link from "next/link";


const Blog = () => {
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
                <title>Aexonic : Blog</title>
            </Head>

            {/* <!-- Preloader - style you can find in spinners.css --> */}

            {/* <div className="preloader">
                    <div className="loader">
                        <div className="loader__figure"></div>
                        <p className="loader__label">Aexonic</p>
                    </div>
                    </div> */}

            <div id="main-wrapper">
                {/* <!-- Top header  --> */}
                <div className="topbar">
                    {/* <!-- Header 5  --> */}
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
                                        <li className="nav-item dropdown mega-dropdown"> <a className="nav-link dropdown-toggle" id="h6-mega-dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                                            <li><a target="_blank">Blogs</a></li>
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
                                                            <li><a target="_blank">Features 1-10</a></li>
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
                                                <a className="nav-link dropdown-toggle" id="h6-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Careers
                                                </a>
                                            </Link>

                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link href="/aboutus">
                                                <a className="nav-link dropdown-toggle" id="h6-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    About Us
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item dropdown "> <a className="nav-link dropdown-toggle active" id="h6-dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                                    <a className="dropdown-item active_menu">Blogs</a>
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
                    {/* <!-- End Header 5  --> */}
                </div>
                <div className="container-fluid ">
                    {/* <!-- Static Slider 10  --> */}
                    <div className="banner-innerpage" style={{ backgroundImage: "url(images/services/Banner/saas_dev.jpeg)" }}>
                        <div className="container">
                            {/* <!-- Row  --> */}
                            <div className="row justify-content-center ">
                                {/* <!-- Column --> */}
                                <div className="col-md-6 align-self-center text-center" data-aos="fade-down" data-aos-duration="1200">
                                    <h1 className="title banner-text">Blog</h1>
                                    <h6 className="subtitle op-8 banner-text">Our custom approach ensures the perfect fit for your technology initiatives.</h6>
                                </div>
                                {/* <!-- Column --> */}
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                {/* <!-- ============================================================== -->
                <!-- Blog example  -->
                <!-- ============================================================== --> */}
                <div className="spacer">
                    <div className="container">
                        {/* <!-- Row  --> */}
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                {/* <!-- Blog  --> */}
                                <div className="mini-spacer">
                                    <a><img src="/images/innerpage/blog1.jpg" alt="wrapkit" className="img-fluid"/></a>
                                    <ul className="text-uppercase m-t-40 list-inline font-13 font-medium">
                                        <li><a>John Deo</a></li>
                                        <li><a>&nbsp;NOV 08, 2018</a></li>
                                        <li><a className="text-info"> &nbsp;NEWS</a></li>
                                    </ul>
                                    <h2 className="title font-light"><a className="link">Wrapkit is about to release and we are really very excited about it</a></h2>
                                    <p className="m-t-30 m-b-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec facilisis nullano volutpat justo. Nulla tempus ultricies feugiat. Duis magna risus, luctus id urna dapibus condimentum dui. Maecenas tempor non ex eu vehicula. Sed sit placerat velit,</p>
                                    <Link href="/blog-details">
                                   
                                    <a className="font-13">CONTINUE READING</a>
                                    </Link>
                                </div>
                                {/* <!-- Blog  --> */}
                                <hr className="op-5" />
                                {/* <!-- Blog  --> */}
                                <div className="mini-spacer">
                                    <ul className="text-uppercase list-inline font-13 font-medium">
                                    <li><a>John Deo</a></li>
                                        <li><a>&nbsp;NOV 08, 2018</a></li>
                                        <li><a className="text-info"> &nbsp;NEWS</a></li>
                                    </ul>
                                    <h2 className="title font-light"><a className="link">Wrapkit is about to release and we are really very excited about it</a></h2>
                                    <p className="m-t-30 m-b-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec facilisis nullano volutpat justo. Nulla tempus ultricies feugiat. Duis magna risus, luctus id urna dapibus condimentum dui. Maecenas tempor non ex eu vehicula. Sed sit placerat velit,</p>
                                    <Link href="/blog-details">
                                   
                                    <a className="font-13">CONTINUE READING</a>
                                    </Link>
                                </div>
                                {/* <!-- Blog  --> */}
                                <hr className="op-5" />
                                {/* <!-- Blog  --> */}
                                <div className="mini-spacer">
                                    <ul className="text-uppercase list-inline font-13 font-medium">
                                    <li><a>John Deo</a></li>
                                        <li><a>&nbsp;NOV 08, 2018</a></li>
                                        <li><a className="text-info"> &nbsp;NEWS</a></li>
                                    </ul>
                                    <div className="m-t-40 m-b-10"><i className="display-5 text-muted op-5 fa fa-quote-left"></i></div>
                                    <h2 className="font-light">
                                        <a className="link"> Aliquam diam quis dolor aliquam lobortis. Aenean in tortor et eros faucibus porta sit amet sed ipsum Nullam hendrerit dui id diam suscipit.</a>
                                    </h2>
                                    <h6 className="font-13 m-t-30">STEVE JOBS</h6>
                                </div>
                                {/* <!-- Blog  --> */}
                                <hr className="op-5" />
                                {/* <!-- Blog  --> */}
                                <div className="mini-spacer">
                                    <a><img src="/images/innerpage/blog2.jpg" alt="wrapkit" className="img-fluid"/></a>
                                    <ul className="text-uppercase m-t-40 list-inline font-13 font-medium">
                                    <li><a>John Deo</a></li>
                                        <li><a>&nbsp;NOV 08, 2018</a></li>
                                        <li><a className="text-info"> &nbsp;NEWS</a></li>
                                    </ul>
                                    <h2 className="title font-light"><a className="link">Wrapkit is about to release and we are really very excited about it</a></h2>
                                    <p className="m-t-30 m-b-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec facilisis nullano volutpat justo. Nulla tempus ultricies feugiat. Duis magna risus, luctus id urna dapibus condimentum dui. Maecenas tempor non ex eu vehicula. Sed sit placerat velit,</p>
                                    <Link href="/blog-details">
                                   
                                    <a className="font-13">CONTINUE READING</a>
                                    </Link>
                                </div>
                                {/* <!-- Blog  --> */}
                                <hr className="op-5" />
                                <div className="mini-spacer">
                                    <div className="d-flex no-block font-13">
                                        <a className="link font-medium"><i className="ti-arrow-left m-r-10"></i> PREVIOUS</a>
                                        <a className="link ml-auto font-medium"> NEXT <i className="ti-arrow-right m-l-10 "></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Row  --> */}
                    </div>
                </div>
                {/* <!-- ============================================================== -->
                <!-- End Blog example -->
                <!-- ============================================================== --> */}
            </div>
                    {/* <!-- footer 4  --> */}

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
                                    <p>Office : <a  className="link ">info@aexonic.com</a>
                                        <br />Site : <a  className="link ">http://www.aexonic.com/</a></p>
                                </div>
                                <div className="col-lg-3 col-md-6 ">
                                    <h5 className="m-b-20 ">Social</h5>
                                    <div className="round-social light ">
                                        <a  className="link "><i className="fa fa-facebook "></i></a>
                                        <a  className="link "><i className="fa fa-twitter "></i></a>
                                        <a  className="link "><i className="fa fa-linkedin "></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="f4-bottom-bar ">
                                <div className="row ">
                                    <div className="col-md-12 ">
                                        <hr />
                                        <nav style={{ paddingLeft: "0px !important" }} className="navbar navbar-expand-lg h1-nav ">
                                            <a className="navbar-brand m-b-11 " ><img src="./images/aexonic-logo_5.png " alt="Aexonic " width="120 " /></a>
                                            <button className="navbar-toggler " type="button " data-toggle="collapse " data-target="#header1 " aria-expanded="false " aria-label="Toggle navigation ">
                                                <span className="ti-menu "></span>
                                            </button>
                                            <div className="collapse navbar-collapse " id="header1 ">
                                                <span className="hidden-lg-down ">© 2020 All rights reserved.</span>
                                                <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                                                    <li className="nav-item active "><a className="nav-link " >Home</a></li>
                                                    <li className="nav-item "><a className="nav-link " >Our Offering</a></li>
                                                    <li className="nav-item "><a className="nav-link " >Careers</a></li>
                                                    <li className="nav-item "><a className="nav-link " >About US</a></li>
                                                    <li className="nav-item "><a className="nav-link active_menu" >More</a></li>
                                                    <li className="nav-item "><a className="nav-link " >Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End footer 4  --> */}
                    <a className="bt-top btn btn-circle btn-lg btn-info" href="#top"><i className="ti-arrow-up"></i></a>

                    {/* <!-- End Page wrapper  --> */}

                </div>
            </div>
            {/* <!-- ============================================================== -->
            <!-- End Wrapper -->
            <!-- ============================================================== --> */}
        </div>
    )
}

export default Blog;