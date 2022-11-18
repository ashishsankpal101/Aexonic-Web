import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const RetailEcommoerce = () => {
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
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon.png"
        />
        <title>Aexonic : Industries / Retail and e-commerce</title>
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
                <a className="navbar-brand">
                  <img
                    className="header-icon"
                    src="/images/aexonic-logo_8.png"
                    alt="Aexonic"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#h5-info"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="ti-menu"></span>
                </button>
                <div className="collapse navbar-collapse" id="h5-info">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown mega-dropdown">
                      <Link href="/">
                        <a
                          className="nav-link dropdown-toggle"
                          id="h6-mega-dropdown"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Home
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item dropdown mega-dropdown">
                      {" "}
                      <a
                        className="nav-link dropdown-toggle"
                        id="h6-mega-dropdown1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Services <i className="fa fa-angle-down m-l-5"></i>
                      </a>
                      <div
                        className="dropdown-menu b-none font-14 animated fadeInUp"
                        aria-labelledby="h6-mega-dropdown1"
                      >
                        <div className="row">
                          <div className="col-lg-3 inside-bg hidden-md-down">
                            <div
                              className="bg-img"
                              style={{
                                backgroundImage: "url(/images/mega-bg2.jpg)",
                              }}
                            >
                              <h3 className="text-white font-light">
                                Create anything <br />
                                with our amazing <br />
                                sections
                              </h3>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4">
                            <ul className="list-style-none">
                              <li>
                                <h6 className="f-w-500 active cursor-pointer">
                                  Product Engineering
                                </h6>
                              </li>
                              <li>
                                <Link href="/services/product-engineering/saas-platforms">
                                  <a className="cursor-pointer dropdown-item">
                                    SaaS Platforms
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/services/product-engineering/software-engineering">
                                  <a className="cursor-pointer dropdown-item">
                                    Software Engineering
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/services/product-engineering/mobile-webapp">
                                  <a className="cursor-pointer dropdown-item">
                                    Mobile and Web Apps
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/services/product-engineering/api-ecosystem">
                                  <a className="cursor-pointer dropdown-item">
                                    API Ecosystem
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-3 col-md-4">
                            <ul className="list-style-none">
                              <li>
                                <h6 className="f-w-500 active cursor-pointer">
                                  Digital Transformation
                                </h6>
                              </li>
                              <li>
                                <Link href="/services/digital-transformation/machine-learning-ai">
                                  <a className="cursor-pointer dropdown-item">
                                    Machine Learning &amp; AI
                                  </a>
                                </Link>
                              </li>

                              <li>
                                <Link href="/services/digital-transformation/data-analytics">
                                  <a className="cursor-pointer dropdown-item">
                                    Data and Analytics
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/services/digital-transformation/internet-of-things">
                                  <a className="cursor-pointer dropdown-item">
                                    Internet of Things (IoT)
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/services/digital-transformation/chatbot-automation">
                                  <a className="cursor-pointer dropdown-item">
                                    Chatbot and Automation
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/services/digital-transformation/cloud-devops">
                                  <a className="cursor-pointer dropdown-item">
                                    Cloud and DevOps
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/services/digital-transformation/technology-consultant">
                                  <a className="cursor-pointer dropdown-item">
                                    Technology Consulting
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          {/* <div className="col-lg-2 col-md-4">
                                                        <ul className="list-style-none">
                                                            
                                                          
                                                        </ul>
                                                    </div> */}
                          <div className="col-lg-3 col-md-4">
                            <ul className="list-style-none">
                              <li>
                                <h6 className="f-w-500 active cursor-pointer">
                                  Staff Augmentation
                                </h6>
                              </li>
                              <li>
                                <Link href="/services/staff_augmentaion/onshore">
                                  <a className="cursor-pointer dropdown-item">
                                    Onshore
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/services/staff_augmentaion/offshore">
                                  <a className="cursor-pointer dropdown-item">
                                    Offshore
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/services/staff_augmentaion/nearshore">
                                  <a className="cursor-pointer dropdown-item">
                                    Nearshore
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <h6 className="f-w-500 active cursor-pointer">
                                  Enterprise Solutions
                                </h6>
                              </li>
                              <li>
                                <Link href="/services/enterprise-solutions/sap">
                                  <a className="cursor-pointer dropdown-item">
                                    SAP
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      {" "}
                      <Link href="/industry">
                        <a
                          className="nav-link active dropdown-toggle"
                          id="h6-dropdown2"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Industries <i className="fa fa-angle-down m-l-5"></i>
                        </a>
                      </Link>
                      <ul className="b-none dropdown-menu font-14 animated fadeInUp">
                        <li>
                          <Link href="/industries/banking">
                            <a className="dropdown-item">Banking and FinTech</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/supplychain">
                            <a className="dropdown-item">
                              Supply Chain and Logistics
                            </a>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link href="/industries/hospitality">
                            <a className="dropdown-item">
                              Hospitality and Travel
                            </a>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link href="/industries/healthcare">
                            <a className="dropdown-item">Healthcare</a>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link href="/industries/manifacturing">
                            <a className="dropdown-item">Manufacturing</a>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link href="/industries/retail">
                            <a className="dropdown-item active_menu">
                              Retail and e-commerce
                            </a>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link href="/industries/technology">
                            <a className="dropdown-item">
                              Technology and Software
                            </a>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link href="/industries/professional_service">
                            <a className="dropdown-item">
                              Professional Services
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link href="/careers">
                        <a
                          className="nav-link dropdown-toggle"
                          id="h6-dropdown"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
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
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="h6-dropdown"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          About Us
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      {" "}
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="h6-dropdown1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
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
                        <li>
                          {" "}
                          <Link href="/blog">
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
          <div
            className="banner-innerpage"
            style={{
              backgroundImage: "url(/images/services/Banner/team_aug.jpeg)",
            }}
          >
            <div className="container">
              {/* <!-- Row  --> */}
              <div className="row justify-content-center ">
                {/* <!-- Column --> */}
                <div
                  className="col-md-6 align-self-center text-center"
                  data-aos="fade-down"
                  data-aos-duration="1200"
                >
                  <h1 className="title banner-text">Retail and e-commerce</h1>
                  <h6 className="subtitle op-8 banner-text">
                    We are a team of passionate people who love what we do.
                  </h6>
                </div>
                {/* <!-- Column --> */}
              </div>
            </div>
          </div>
          {/* <!-- ============================================================== -->
            <!-- Testimonial 9 -->
            <!-- ============================================================== --> */}

          <div className="spacer bg-light feature31 wrap-feature31-box">
            <div className="row">
              <div className="container">
                <div className="col-lg-6">
                  <div
                    className=""
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <h2 className="title text-uppercase">Services Provided</h2>
                    <p className="op-8">
                      You can relay on our amazing features list and also our
                      customer services will be great experience.
                    </p>
                  </div>
                  <div className="row m-t-30" data-aos="fade-right">
                    <div className="col-md-4">
                      <div className="card card-shadow">
                        <div className="card-body text-center text-uppercase">
                          {" "}
                          <i className="icon-Car-Wheel display-5 text-success"></i>
                          <h6 className="m-t-10 font-medium">Target</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card card-shadow">
                        <div className="card-body text-center text-uppercase">
                          {" "}
                          <i className="icon-Mouse-3 display-5 text-success"></i>
                          <h6 className="m-t-10 font-medium">Internet</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card card-shadow">
                        <div className="card-body text-center text-uppercase">
                          {" "}
                          <i className="icon-Target display-5 text-success"></i>
                          <h6 className="m-t-10 font-medium">survive</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row m-t-30" data-aos="fade-right">
                    <div className="col-md-4">
                      <div className="card card-shadow">
                        <div className="card-body text-center text-uppercase">
                          {" "}
                          <i className="icon-Car-Wheel display-5 text-success"></i>
                          <h6 className="m-t-10 font-medium">Target</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card card-shadow">
                        <div className="card-body text-center text-uppercase">
                          {" "}
                          <i className="icon-Mouse-3 display-5 text-success"></i>
                          <h6 className="m-t-10 font-medium">Internet</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card card-shadow">
                        <div className="card-body text-center text-uppercase">
                          {" "}
                          <i className="icon-Target display-5 text-success"></i>
                          <h6 className="m-t-10 font-medium">survive</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 right-image">
                  <img
                    src="/images/retail_1.jpg"
                    className="half-radius"
                    alt="wrappixel"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                    data-aos-offset="500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="feature39 spacer wrap-feature39-box">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="/images/retail_2.jpg"
                    className="img-fluid"
                    alt="wrapkit"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="card-body">
                    <h2 className="title text-uppercase">
                      Awesome Extra Ordinary Flexibility
                    </h2>
                    <p className="m-t-40 m-b-40">
                      You can relay on our amazing features list and also our
                      customer services will be greatexperience for you without
                    </p>
                    <div className="d-flex no-block m-b-40">
                      <div className="display-4 m-r-20">
                        <i className="icon-Paypal text-success-gradiant"></i>
                      </div>
                      <div>
                        <h4>Payment and exchange</h4>
                        <h6 className="subtitle">
                          You can relay on our amazing features
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex no-block m-b-40">
                      <div className="display-4 m-r-20">
                        <i className="icon-Evernote text-success-gradiant"></i>
                      </div>
                      <div>
                        <h4>Notes and organising</h4>
                        <h6 className="subtitle">
                          You can relay on our amazing features
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex no-block m-b-40">
                      <div className="display-4 m-r-20">
                        <i className="icon-Google-Drive text-success-gradiant"></i>
                      </div>
                      <div>
                        <h4>Language &amp; Input Tools</h4>
                        <h6 className="subtitle">
                          You can relay on our amazing features
                        </h6>
                      </div>
                    </div>{" "}
                    <a
                      className="btn btn-success-gradiant btn-md btn-arrow"
                      data-toggle="collapse"
                      href="#f39"
                    >
                      <span>
                        View Feature39 code <i className="ti-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="spacer feature42"
            style={{ backgroundImage: "url(/images/bg2.jpg)" }}
          >
            <div className="container">
              <div className="row justify-content-center wrap-feature42-box">
                <div
                  className="col-md-10 col-lg-7 text-center"
                  data-aos="fade-up"
                >
                  <h2 className="title text-white">
                    You wont believ that you can make Your Website in Record
                    Time
                  </h2>
                  <h6 className="subtitle text-white op-7 m-b-20">
                    You can relay on our amazing features list and also our
                    customer services will be great experience for you without
                    doubt and in no-time
                  </h6>{" "}
                  <a
                    className="text-success-gradiant display-4"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <i className="icon-Play-Music"></i>
                  </a>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Watch video</h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            {" "}
                            <span aria-hidden="true">×</span>{" "}
                          </button>
                        </div>
                        <div className="modal-body" id="yt-player">
                          <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/DDwbjWCgxVM?"
                            frameBorder="0"
                            allowFullScreen=""
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-home1 spacer bg-light ">
            <div className="container ">
              <div className="row justify-content-center ">
                <div className="col-md-8 text-center ">
                  <h2 className="title ">Our Work</h2>
                  <h6 className="subtitle ">
                    You can relay on our amazing features list and also our
                    customer services will be great experience for you without
                    doubt and in no-time
                  </h6>
                </div>
              </div>
              <div className="row m-t-40 ">
                <div className="col-md-4 ">
                  <div
                    className="card card-shadow "
                    data-aos="flip-left "
                    data-aos-duration="1200 "
                  >
                    <a href="# ">
                      <img
                        className="card-img-top "
                        src="/images/blog/img3.jpg "
                        alt="wrappixel kit "
                      />
                    </a>
                    <div className="p-30 ">
                      <div className="d-flex no-block font-14 ">
                        <a href="# ">Digital Marketing</a>
                        <span className="ml-auto ">Sept 18, 2017</span>
                      </div>
                      <h5 className="font-medium m-t-20 ">
                        <a href="# " className="link ">
                          Digital Marketing becomes very Essential for any site
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div
                    className="card card-shadow "
                    data-aos="flip-up "
                    data-aos-duration="1200 "
                  >
                    <a href="# ">
                      <img
                        className="card-img-top "
                        src="/images/blog/img2.jpg "
                        alt="wrappixel kit "
                      />
                    </a>
                    <div className="p-30 ">
                      <div className="d-flex no-block font-14 ">
                        <a href="# ">Search Engine </a>
                        <span className="ml-auto ">Sept 18, 2017</span>
                      </div>
                      <h5 className="font-medium m-t-20 ">
                        <a href="# " className="link ">
                          Rank your site on First Page of Google seems easier
                          now
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div
                    className="card card-shadow "
                    data-aos="flip-right "
                    data-aos-duration="1200 "
                  >
                    <a href="# ">
                      <img
                        className="card-img-top "
                        src="/images/blog/img1.jpg "
                        alt="wrappixel kit "
                      />
                    </a>
                    <div className="p-30 ">
                      <div className="d-flex no-block font-14 ">
                        <a href="# ">Search Engine</a>
                        <span className="ml-auto ">Sept 18, 2017</span>
                      </div>
                      <h5 className="font-medium m-t-20 ">
                        <a href="# " className="link ">
                          We have just launched our new Admin template
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ============================================================== -->
            <!-- footer 4  -->
            <!-- ============================================================== --> */}
          <div className="footer3 bg-dark font-14">
            <div className="f3-topbar container">
              <div className="d-flex">
                <div className="d-flex no-block align-items-center">
                  <a href="#" className="m-r-20">
                    <img
                      src="/images/footer/aexonic-logo_8.png"
                      alt="Aexonic"
                    />
                  </a>
                  <span>
                    We are empowered by a mindset for technological
                    breakthroughs and creating functional tools and solutions.
                    We unite and work with a problem-solving approach by
                    employing technologies that drive dynamic progress.
                  </span>
                </div>
                <div className="ml-auto no-shrink align-self-center">
                  <form>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control form-control-dark form-control-lg"
                        placeholder="Sign up for updates"
                      />
                      <span className="input-group-btn">
                        <button
                          className="btn btn-danger-gradiant btn-md"
                          type="button"
                        >
                          Go!
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="f3-middle container">
              <div className="row">
                <div className="col-lg-3 col-md-6 m-b-30">
                  <h6 className="font-medium text-white">SERVICES</h6>
                  <ul className="general-listing">
                    <li>
                      <a href="#">
                        <i className="ti-arrow-right"></i> Product Engineering
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-arrow-right"></i> Digital
                        Transformation
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-arrow-right"></i> Staff Augmentation
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-arrow-right"></i> Enterprise Solutions
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 m-b-30">
                  <h6 className="font-medium text-white">PROJECTS</h6>
                  <div className="d-flex no-block align-items-center m-t-20">
                    <div className="btext">
                      <a href="#" className="link">
                        Hotel nira inn got bigger heding you ever seen.
                      </a>
                    </div>
                  </div>
                  <div className="d-flex no-block align-items-center m-t-20">
                    <div className="btext">
                      <a href="#" className="link">
                        Hotel nira inn got bigger heding you ever seen.
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 m-b-30">
                  <h6 className="font-medium text-white">BLOG</h6>
                  <div className="d-flex no-block align-items-center m-t-20">
                    <div className="btext">
                      <a href="#" className="link">
                        Automation for Utilities and Energy Sectors
                      </a>
                    </div>
                  </div>
                  <div className="d-flex no-block align-items-center m-t-20">
                    <div className="btext">
                      <a href="#" className="link">
                        AI, IoT, Blockchain
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 m-b-30">
                  <h6 className="font-medium text-white">CONTACT</h6>
                  <div className="d-flex no-block m-b-10 m-t-20">
                    <div className="display-7 m-r-20 align-self-top">
                      <i className="icon-Location-2"></i>
                    </div>
                    <div className="info">
                      <p>504, Stellar Spaces, Kharadi, Pune, India – 411014</p>
                    </div>
                  </div>
                  <div className="d-flex no-block m-b-10">
                    <div className="display-7 m-r-20 align-self-top">
                      <i className="icon-Phone-2"></i>
                    </div>
                    <div className="info">
                      <span className=" db  m-t-5"> +207 235 7890</span>
                    </div>
                  </div>
                  <div className="d-flex no-block m-b-30">
                    <div className="display-7 m-r-20 align-self-top">
                      <i className="icon-Mail"></i>
                    </div>
                    <div className="info">
                      <a
                        href="http://www.aexonic.com/"
                        className="link db  m-t-5"
                      >
                        http://www.aexonic.com/
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="f3-bottom-bar">
              <div className="container">
                <div className="d-flex">
                  <span className="m-t-10 m-b-10">
                    Copyright 2018. All Rights Reserved by Aexonic.
                  </span>
                  <div className="ml-auto m-t-10 m-b-10">
                    <a href="#" className="link">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="link">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#" className="link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#" className="link">
                      <i className="fa fa-pinterest"></i>
                    </a>
                    <a href="#" className="link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ============================================================== -->
            <!-- End footer 4  -->
            <!-- ============================================================== --> */}
          <a className="bt-top btn btn-circle btn-lg btn-info" href="#top">
            <i className="ti-arrow-up"></i>
          </a>

          {/* <!-- ============================================================== -->
      <!-- End Page wrapper  -->
      <!-- ============================================================== --> */}
        </div>
      </div>
      {/* <!-- ============================================================== -->
  <!-- End Wrapper -->
  <!-- ============================================================== --> */}
    </div>
  );
};

export default RetailEcommoerce;
