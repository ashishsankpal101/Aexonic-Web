import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from "next/link";

export default function Home() {
  return (
    // <div classNameNameName={styles.container}>
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
                                        <li className="nav-item dropdown mega-dropdown"> <a className="nav-link dropdown-toggle active"  id="h6-mega-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Home

                                        </a>

                                        </li>
                                        <li className="nav-item dropdown mega-dropdown"> <a className="nav-link dropdown-toggle" href="#" id="h6-mega-dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                                <a className="nav-link dropdown-toggle" id="h6-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Industries
                                                </a>
                                            </Link>

                                        </li>

                                        <li className="nav-item dropdown">
                                            <Link href="/careers">
                                                <a className="nav-link dropdown-toggle " id="h6-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
        {/* <!-- ============================================================== -->
        <!-- Top header  -->
        <!-- ============================================================== --> */}
        {/* <!-- ============================================================== -->
        <!-- Top header  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Page wrapper  -->
        <!-- ============================================================== --> */}
        <div className="page-wrapper">
          {/* <!-- ============================================================== -->
            <!-- Container fluid  -->
            <!-- ============================================================== --> */}
          <div className="container-fluid">
            <section id="slider-sec" className="slider4">
              <div id="slider4" className="carousel bs-slider slide  control-round indicators-line" data-ride="carousel" data-pause="hover" data-interval="7000">
                <ol className="carousel-indicators">
                  <li data-target="#slider4" data-slide-to="0" className="active"></li>
                  <li data-target="#slider4" data-slide-to="1"></li>
                </ol>
                {/* <!-- Wrapper For Slides --> */}
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    {/* <!-- Slide Background --> */}
                    <img src="images/sliders/slide1.jpg" alt="We are Digital Agency" className="slide-image" />
                    {/* <!-- Slide Text Layer --> */}
                    <div className="slide-text slide_style_left">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-9 col-lg-6">
                            <h1 data-animation="animated fadeInLeft" className="title font-bold m-0 p-b-40">Navigate the Power of Disruption</h1>
                            <p>Whether you&apos;re a startup or an industry leader, Aexonic helps you prepare for the future.</p>
                            <div>
                              {/* <!-- <a className="btn btn-danger-gradiant btn-rounded btn-md btn-arrow" data-animation="animated fadeInLeft" data-toggle="collapse" href="#"> </a>
                                                    <a className="btn btn-outline-inverse btn-rounded btn-md btn-arrow m-l-20" data-animation="animated fadeInLeft" data-toggle="collapse" href="#"> </a> --> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Slide -->
                            <!-- Second Slide --> */}
                  <div className="carousel-item">
                    {/* <!-- Slide Background --> */}
                    <img src="images/sliders/slide2.jpg" alt="Building Magical Apps" className="slide-image" />
                    {/* <!-- Slide Text Layer --> */}
                    <div className="slide-text">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-9 col-lg-6">
                            <h1 data-animation="animated fadeInLeft" className="title font-bold m-0 p-b-40">Experience Matters</h1>
                            <p>With our solid business domain and technical expertise, we help you build your brand&apos;s digital presence across Cloud and mobile platforms.</p>
                            <div>
                              {/* <!-- <a className="btn btn-danger-gradiant btn-rounded btn-md btn-arrow" data-animation="animated fadeInLeft" data-toggle="collapse" href="#"></a>
                                                    <a className="btn btn-outline-inverse btn-rounded btn-md btn-arrow m-l-20" data-animation="animated fadeInLeft" data-toggle="collapse" href="#"> </a> --> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Slide -->
                            <!-- End of Wrapper For Slides -->
                            <!-- Slider Control --> */}
                  <div className="slider-control">
                    {/* <!-- Left Control --> */}
                    <a className="left carousel-control-prev text-white font-14" href="#slider4" role="button" data-slide="prev"> <b className="sr-only font-normal">Previous</b> </a>
                    {/* <!-- Right Control --> */}
                    <a className="right carousel-control-next text-white font-14" href="#slider4" role="button" data-slide="next"> <b className="sr-only font-normal">Next</b> </a>
                  </div>
                  {/* <!-- End of Slider Control --> */}
                </div>
              </div>
              {/* <!-- End Slider --> */}
            </section>
          </div>
          {/* <!-- ============================================================== -->
            <!-- End Container fluid  -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Back to top -->
            <!-- ============================================================== --> */}
        </div>


        {/* <!-- ============================================================== -->
                <!-- Feature 1  -->
                <!-- ============================================================== --> */}
        <div className="spacer feature1">
          <div className="container">
            {/* <!-- Row  --> */}
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <h2 className="title">Let our experience guide you.</h2>
                <h6 className="subtitle">We are creative thinkers with a focus on modern web production. We use the latest tools available to help build your brand&apos;s digital presence.</h6>
              </div>
            </div>
            {/* <!-- Row  -->
                        <!-- Row  --> */}
            <div className="row">
              {/* <!-- Column --> */}
              <div className="col-md-6 wrap-feature1-box">
                <div className="card " data-aos="fade-right" data-aos-duration="1200">
                  <div className="card-body text-center">
                    <div className="icon-space"><i className="display-5 icon-Car-Wheel"></i></div>
                    <h5 className="font-medium">Product Engineering</h5>
                    <p className="m-t-20">Our custom approach ensures the perfect fit for your technology initiatives. We help you utilize a complete full-service development team to transform your ideas and vision into reality and achieve breakthrough
                      transformations in your products and services.</p>
                  </div>
                </div>
              </div>
              {/* <!-- Column --> */}
              <div className="col-md-6 wrap-feature1-box">
                <div className="card " data-aos="fade-right" data-aos-duration="1200">
                  <div className="card-body text-center">
                    <div className="icon-space"><i className="display-5 icon-Target"></i></div>
                    <h5 className="font-medium"> Offshore Development Center</h5>
                    <p className="m-t-20">We work to provide uninterrupted service through our dedicated offshore development centers to bring out the best of our technical resource by properly balancing proximity with requirement complexity at low cost
                      and reduced time to industry.</p>
                  </div>
                </div>
              </div>
              {/* <!-- Column --> */}
              <div className="col-md-6 wrap-feature1-box">
                <div className="card " data-aos="fade-left" data-aos-duration="1200">
                  <div className="card-body text-center">
                    <div className="icon-space"><i className="display-5 icon-Mouse-3"></i></div>
                    <h5 className="font-medium">Support and Maintenance</h5>
                    <p className="m-t-20">We address your unique business need by customizing the service option. We let you focus on your business while be build and maintain the technology that is required for your business growth.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wrap-feature1-box">
                <div className="card " data-aos="fade-left" data-aos-duration="1200">
                  <div className="card-body text-center">
                    <div className="icon-space"><i className="display-5 icon-Mouse-3"></i></div>
                    <h5 className="font-medium">Digital Transformation</h5>
                    <p className="m-t-20">We address your unique business need by customizing the service option. We let you focus on your business while be build and maintain the technology that is required for your business growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ============================================================== -->
                <!-- End Feature 1  -->
         <!-- ============================================================== --> */}


        {/* <!-- ============================================================== -->
                <!-- Feature 27  -->
                <!-- ============================================================== --> */}
        <div className="spacer bg-light feature26">
          <div className="container">
            <div className="row">
              {/* <!-- column --> */}
              <div className="col-lg-6 align-self-center">
                <h2 className="title m-t-0">Aexonic provides turnkey IT solutions to preparing you for future.</h2>
                <p className="m-t-30">We are a passionate, energized team who has honed our skills across different verticals in several years. We&apos;re doing stuff that really matters. It&apos;s no fun being "yet another", we&apos;re here to make history.</p>
                <div className="row">
                  <div className="col-md-6 m-t-40">
                    <i className="icon-Laptop-2 display-5"></i>
                    <h5 className="font-medium m-t-20 m-b-20">Your complete website in just few minutes</h5>
                    <p>You can relay on our amazing features list and also our customer services will be great experience have.</p>
                    <a className="linking font-medium" data-toggle="collapse" href="#">Lets Talk!  <i className="ti-arrow-right text-success"></i></a>
                  </div>
                  <div className="col-md-6  m-t-40">
                    <i className="icon-Fan display-5"></i>
                    <h5 className="font-medium m-t-20 m-b-20">Get Powerful Results with WrapKit</h5>
                    <p>You can relay on our amazing features list and also our customer services will be great experience have.</p>
                    <a className="linking font-medium" data-toggle="collapse" href="#">Lets Talk!  <i className="ti-arrow-right text-success"></i></a>
                  </div>
                </div>
              </div>
              {/* <!-- column --> */}
              <div className="col-lg-6 text-center" data-aos="fade-up" data-aos-duration="1800" data-aos-easing="linear">
                <img src="images/fe27.png" className="img-fluid" alt="wrapkit" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ============================================================== -->
                <!-- End Feature 27  -->
                <!-- ============================================================== --> */}

        {/* <!-- ============================================================== -->
                <!-- services  -->
                <!-- ============================================================== --> */}
        <div className="spacer feature24 ">
          <div className="container">
            {/* <!-- Row --> */}
            <div className="row justify-content-center">
              <div className="col-md-12 text-center m-b-40"><img src="images/services.jpg" alt="wrapkit" className="img-fluid" /></div>
              <div className="col-md-7 text-center">
                <h2 className="title">Services you can Relay Upon</h2>
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
        {/* <!-- ============================================================== -->
                <!-- services   -->
                <!-- ============================================================== --> */}


        {/* <!-- ============================================================== -->
        <!-- Portfolio 1  -->
        <!-- ============================================================== --> */}
        <div className="spacer bg-light">
          <div className="container">
            {/* <!-- Row  --> */}
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <h2 className="title">Our Recent Web Project</h2>
                <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
              </div>
            </div>
            {/* <!-- Row  --> */}
            <div className="row m-t-40">
              {/* <!-- Column --> */}
              <div className="col-md-4">
                <div className="card card-shadow" data-aos="flip-left" data-aos-duration="1200">
                  <a href="#" className="img-ho"><img className="card-img-top" src="images/portfolio/img1.jpg" alt="wrappixel kit" /></a>
                  <div className="card-body">
                    <h5 className="font-medium m-b-0">Branding for Theme Designer</h5>
                    <p className="m-b-0 font-14">Digital Marketing</p>
                  </div>
                </div>
              </div>
              {/* <!-- Column --> */}
              <div className="col-md-4">
                <div className="card card-shadow" data-aos="flip-up" data-aos-duration="1200">
                  <a href="#" className="img-ho"><img className="card-img-top" src="images/portfolio/img2.jpg" alt="wrappixel kit" /></a>
                  <div className="card-body">
                    <h5 className="font-medium m-b-0">Button Designs Free</h5>
                    <p className="m-b-0 font-14">Search Engine</p>
                  </div>
                </div>
              </div>
              {/* <!-- Column --> */}
              <div className="col-md-4">
                <div className="card card-shadow" data-aos="flip-right" data-aos-duration="1200">
                  <a href="#" className="img-ho"><img className="card-img-top" src="images/portfolio/img3.jpg" alt="wrappixel kit" /></a>
                  <div className="card-body">
                    <h5 className="font-medium m-b-0">Branding & Co Agency</h5>
                    <p className="m-b-0 font-14">Admin templates</p>
                  </div>
                </div>
              </div>
              {/* <!-- Column --> */}
              <div className="col-md-4">
                <div className="card card-shadow" data-aos="flip-left" data-aos-duration="1200">
                  <a href="#" className="img-ho"><img className="card-img-top" src="images/portfolio/img4.jpg" alt="wrappixel kit" /></a>
                  <div className="card-body">
                    <h5 className="font-medium m-b-0">Zukandre Phoniex</h5>
                    <p className="m-b-0 font-14">Branding</p>
                  </div>
                </div>
              </div>
              {/* <!-- Column --> */}
              <div className="col-md-4">
                <div className="card card-shadow" data-aos="flip-up" data-aos-duration="1200">
                  <a href="#" className="img-ho"><img className="card-img-top" src="images/portfolio/img5.jpg" alt="wrappixel kit" /></a>
                  <div className="card-body">
                    <h5 className="font-medium m-b-0">Sionage Mokcup</h5>
                    <p className="m-b-0 font-14">Wll Mockup</p>
                  </div>
                </div>
              </div>
              {/* <!-- Column --> */}
              <div className="col-md-4">
                <div className="card card-shadow" data-aos="flip-right" data-aos-duration="1200">
                  <a href="#" className="img-ho"><img className="card-img-top" src="images/portfolio/img6.jpg" alt="wrappixel kit" /></a>
                  <div className="card-body">
                    <h5 className="font-medium m-b-0">Hard Cover Book Mock</h5>
                    <p className="m-b-0 font-14">Book Covers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ============================================================== -->
        <!-- End Portfolio 1  -->
        <!-- ============================================================== --> */}
        {/* <!-- ============================================================== -->
                <!-- Feature 29  -->
                <!-- ============================================================== --> */}
        <div className="spacer bg-success-gradiant feature29 p-b-0">
          <div className="container wrap-feature-29">
            {/* <!-- Row --> */}
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <h2 className="title">Seo Techniques Off / On Page</h2>
                <h6 className="subtitle">Effective search engine optimisation requires experience and expertise.</h6>
                <a  data-toggle="modal" data-target="#exampleModal" className="btn btn-outline-light btn-rounded m-t-20">Watch video <span className="btn-devider"><i className="fa fa-play"></i></span></a>
                <div className="modal fade" id="exampleModal">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Watch video</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body" id="yt-player">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/DDwbjWCgxVM?" allowFullScreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Row --> */}
            <div className="row wrap-feature-29 text-white">
              {/* <!-- Column --> */}
              <div className="col-lg-4 text-center">
                <i className="icon-Laptop-2 display-5"></i>
                <h5 className="title">Off Page Seo</h5>
                <p>Off-Page SEO includes not only link building but also social media promotion, bookmarking, etc. </p>
              </div>
              {/* <!-- Column --> */}
              <div className="col-lg-4 text-center" data-aos="fade-up" data-aos-duration="1800" data-aos-easing="linear">
                <img src="images/f29.png" className="img-responsive" alt="wrappixel" />
              </div>
              {/* <!-- Column --> */}
              <div className="col-lg-4 text-center m-b-30">
                <i className="icon-Favorite-Window display-5"></i>
                <h5 className="title">On Page Seo</h5>
                <p>Off-Page SEO includes not only link building but also social media promotion, bookmarking, etc. </p>
              </div>
              {/* <!-- Column --> */}
            </div>
            {/* <!-- Row --> */}
          </div>
        </div>
        {/* <!-- ============================================================== -->
                <!-- End Feature 29 -->
                <!-- ============================================================== --> */}

        {/* <!-- ============================================================== -->
                <!-- Cleint  -->
                <!-- ============================================================== --> */}
        <div className="client2 spacer">
          <div className="container">
            <div className="row client-box text-center op-7">
              <div className="col-lg-2 col-md-4">
                <img src="images/client/c1.png" alt="wrapkit" />
              </div>
              <div className="col-lg-2 col-md-4">
                <img src="images/client/c2.png" alt="wrapkit" />
              </div>
              <div className="col-lg-2 col-md-4">
                <img src="images/client/c3.png" alt="wrapkit" />
              </div>
              <div className="col-lg-2 col-md-4">
                <img src="images/client/c4.png" alt="wrapkit" />
              </div>
              <div className="col-lg-2 col-md-4">
                <img src="images/client/c5.png" alt="wrapkit" />
              </div>
              <div className="col-lg-2 col-md-4">
                <img src="images/client/c6.png" alt="wrapkit" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ============================================================== -->
                <!-- Cleint  -->
                <!-- ============================================================== --> */}

        {/* <!-- ============================================================== -->
                <!-- Blog home 1  -->
                <!-- ============================================================== --> */}
        <div className="blog-home1 spacer">
          <div className="container">
            {/* <!-- Row  --> */}
            <div className="row justify-content-center">
              {/* <!-- Column --> */}
              <div className="col-md-8 text-center">
                <h2 className="title">Latest from Our Blog</h2>
                <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
              </div>
              {/* <!-- Column -->
                            <!-- Column --> */}
            </div>
            <div className="row m-t-40">
              {/* <!-- Column --> */}
              <div className="col-md-4">
                <div className="card card-shadow" data-aos="flip-left" data-aos-duration="1200">
                  <a href="#"><img className="card-img-top" src="images/blog/img3.jpg" alt="wrappixel kit" /></a>
                  <div className="p-30">
                    <div className="d-flex no-block font-14">
                      <a href="#">Digital Marketing</a>
                      <span className="ml-auto">Sept 18, 2017</span>
                    </div>
                    <h5 className="font-medium m-t-20"><a href="#" className="link">Digital Marketing becomes very Essential for any site</a></h5>
                  </div>
                </div>
              </div>
              {/* <!-- Column --> */}
              <div className="col-md-4">
                <div className="card card-shadow" data-aos="flip-up" data-aos-duration="1200">
                  <a href="#"><img className="card-img-top" src="images/blog/img2.jpg" alt="wrappixel kit" /></a>
                  <div className="p-30">
                    <div className="d-flex no-block font-14">
                      <a href="#">Search Engine </a>
                      <span className="ml-auto">Sept 18, 2017</span>
                    </div>
                    <h5 className="font-medium m-t-20"><a href="#" className="link">Rank your site on First Page of Google seems easier now</a></h5>
                  </div>
                </div>
              </div>
              {/* <!-- Column --> */}
              <div className="col-md-4">
                <div className="card card-shadow" data-aos="flip-right" data-aos-duration="1200">
                  <a href="#"><img className="card-img-top" src="images/blog/img1.jpg" alt="wrappixel kit" /></a>
                  <div className="p-30">
                    <div className="d-flex no-block font-14">
                      <a href="#">Search Engine</a>
                      <span className="ml-auto">Sept 18, 2017</span>
                    </div>
                    <h5 className="font-medium m-t-20"><a href="#" className="link">We have just launched our new Admin template</a></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ============================================================== -->
                <!-- End Blog home 1  -->
                <!-- ============================================================== --> */}
        {/* <!-- ============================================================== -->
            <!-- footer 2  -->
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
                                                    <li className="nav-item active "><a className="nav-link active_menu" href="# ">Home</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">Our Offering</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">Careers</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">About US</a></li>
                                                    <li className="nav-item "><a className="nav-link" href="# ">More</a></li>
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
            <!-- End footer 2  -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Back to top -->
            <!-- ============================================================== --> */}
        <a className="bt-top btn btn-circle btn-lg btn-info" href="#top"><i className="ti-arrow-up"></i></a>


        {/* <!-- ============================================================== -->
        <!-- End Page wrapper  -->
        <!-- ============================================================== --> */}
      </div>
      {/* <!-- ============================================================== -->
    <!-- End Wrapper -->
    <!-- ============================================================== --> */}


    </div>
  )
}
