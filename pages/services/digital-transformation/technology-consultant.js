import Head from "next/head";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const TechnologyConsultant = () => {
  useEffect(() => {
    $(function () {
      "use strict";
      $(function () {
        $(".preloader").fadeOut();
      });
      jQuery(document).on("click", ".mega-dropdown", function (e) {
        e.stopPropagation();
      });
      jQuery(document).on("click", ".navbar-nav > .dropdown", function (e) {
        e.stopPropagation();
      });
      $(".dropdown-submenu").click(function () {
        $(".dropdown-submenu > .dropdown-menu").toggleClass("show");
      });
      // ==============================================================
      // Resize all elements
      // ==============================================================
      $("body").trigger("resize");
      // ==============================================================
      //Fix header while scroll
      // ==============================================================
      var wind = $(window);
      wind.on("load", function () {
        var bodyScroll = wind.scrollTop(),
          navbar = $(".topbar");
        if (bodyScroll > 100) {
          navbar.addClass("fixed-header animated slideInDown");
        } else {
          navbar.removeClass("fixed-header animated slideInDown");
        }
      });
      $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
          $(".topbar").addClass("fixed-header animated slideInDown");
          $(".bt-top").addClass("visible");
        } else {
          $(".topbar").removeClass("fixed-header animated slideInDown");
          $(".bt-top").removeClass("visible");
        }
      });
      // ==============================================================
      // Animation initialized
      // ==============================================================
      AOS.init();
      // ==============================================================
      // Back to top
      // ==============================================================
      $(".bt-top").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          700
        );
      });
    });
  });

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
        <title>Aexonic : Services / Technology Consulting</title>
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
                        className="nav-link dropdown-toggle active"
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
                                {" "}
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
                                  <a className="cursor-pointer dropdown-item active_menu">
                                    Technology Consulting
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>

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
                          className="nav-link dropdown-toggle"
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
                            <a className="dropdown-item">
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
                  <h1 className="title banner-text">Technology Consulting</h1>
                  <h6 className="subtitle op-8 banner-text">
                    Advising companies on how best to implement IT tools and
                    processes.
                  </h6>
                </div>
                {/* <!-- Column --> */}
              </div>
            </div>
          </div>

          <div className=" spacer feature6">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Our Robust IT Solutions</h2>
                  <h6 className="subtitle">
                    IT consulting services are advisory services that help
                    clients assess different technology strategies and, in doing
                    so, align their technology strategies with their business or
                    process strategies.
                  </h6>
                </div>
              </div>

              <div className="row m-t-40">
                <div className="col-md-4 wrap-feature6-box">
                  <div
                    className="card bg-success-gradiant text-white"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div className="card-body">
                      <h6 className="font-medium text-white">
                        CUSTOM SOFTWARE DEVELOPMENT
                      </h6>
                      <p className="m-t-20">
                        Delivering a powerful software development solution
                        using the right leading-edge technology for market
                        leaders & growing businesses.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 wrap-feature6-box">
                  <div
                    className="card bg-info-gradiant text-white"
                    data-aos="fade-down"
                    data-aos-duration="1200"
                  >
                    <div className="card-body">
                      <h6 className="font-medium text-white">
                        PRODUCT DEVELOPMENT
                      </h6>
                      <p className="m-t-20">
                        Delivering human-focused, market-ready digital products
                        with our 360° development approach to accelerate your
                        business growth.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 wrap-feature6-box">
                  <div
                    className="card bg-danger-gradiant text-white"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <div className="card-body">
                      <h6 className="font-medium text-white">
                        DEDICATED TEAMS
                      </h6>
                      <p className="m-t-20">
                        Leverage the best resources for your project by hiring
                        skilled and experienced dedicated engineers across
                        cutting-edge technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature28 bg-light">
            <div className="row justify-content-center spacer">
              <div className="col-md-7 text-center">
                <h2 className="title">We Handle All Your IT Challenges</h2>
                <h6 className="subtitle">
                  We help you visualize the IT roadmap you need to reach your
                  goals and realize your business value.
                </h6>
              </div>
            </div>
            <div className="wrap-feature-28s row">
              {/* <div className="col-lg-6 bg-cover" style="background-image:url(../assets/images/features/feature28/img1.jpg)"></div> */}
              <div
                className="col-lg-6 bg-cover"
                style={{
                  backgroundImage:
                    "url( https://img.freepik.com/free-photo/businessman-showing-changes-report_1098-3504.jpg?w=900&t=st=1666873847~exp=1666874447~hmac=f4a0a0e5e292c42007305c1668e27cfe07e9e9919b46380073f7c215896c53d4)",
                }}
              ></div>
              <div className="col-lg-6">
                <div className="side-content both-space">
                  {/* <span className="label label-info label-rounded">Great Feature 28</span> */}
                  <h2 className="title">Simplifying your IT transformations</h2>
                  <h6 className="subtitle">
                    We help your organization better understand with new-age
                    technologies, implement agile principles. We use a better
                    approach and enable you to design, define and execute
                    strategies that optimize cost and quality while creating new
                    revenue streams.
                    <br />
                    Our experts team at Aexonic help you things differently, and
                    design a better future.
                  </h6>
                </div>
              </div>
            </div>
            <div className="wrap-feature-28 row">
              <div className="col-lg-6">
                <div className="side-content both-space text-left pull-right">
                  {/* <span className="label label-info label-rounded">Great Feature 28</span> */}
                  <h2 className="title">
                    Making an Impact to grow your business
                  </h2>
                  <h6 className="subtitle">
                    We develop innovative strategies and solutions that help you
                    make most of your technology investments to drive the
                    competitive edge in the market. We deploy flexible delivery
                    models to fit your unique needs, as we as help you
                    strategize and implement solutions.
                  </h6>
                </div>
              </div>

              <div
                className="col-lg-6 bg-cover"
                style={{
                  backgroundImage:
                    "url(https://img.freepik.com/premium-photo/two-smiling-businessmen-shaking-hands-while-standing-office_109710-1799.jpg?w=900)",
                }}
              ></div>
              <div className="col-md-12 text-center"></div>
            </div>
          </div>

          {/* <div className="spacer feature24">
            <div className="container ">
           
              <div className="row justify-content-center ">
                <div className="col-md-7 text-center ">
       
                  <h2 className="title ">Services we can consultant upon us</h2>
                  <h6 className="subtitle ">
                    You can relay on our amazing features list and also our
                    customer services will be great experience for you without
                    doubt and in no-time
                  </h6>
                </div>
              </div>
           
              <div className="row wrap-feature-24 ">
            
                <div className="col-lg-3 col-md-6 ">
                  <div className="card card-shadow ">
                    <a className="service-24 ">
              
                      <i className="icon-Target "></i>
                      <h6 className="ser-title ">Fantastic Co-workers</h6>
                    </a>
                  </div>
                </div>
               
                <div className="col-lg-3 col-md-6 ">
                  <div className="card card-shadow ">
                    <a className="service-24 ">
               
                      <i className="icon-Car-Wheel "></i>
                      <h6 className="ser-title ">Digital Marketing</h6>
                    </a>
                  </div>
                </div>
               
                <div className="col-lg-3 col-md-6 ">
                  <div className="card card-shadow ">
                    <a className="service-24 ">
                 
                      <i className="icon-Mouse-3 "></i>
                      <h6 className="ser-title ">SEO Techniques</h6>
                    </a>
                  </div>
                </div>
         
                <div className="col-lg-3 col-md-6 ">
                  <div className="card card-shadow ">
                    <a className="service-24 ">
       
                      <i className="icon-Eyeglasses-Smiley "></i>
                      <h6 className="ser-title ">Client Management</h6>
                    </a>
                  </div>
                </div>
              
                <div className="col-lg-3 col-md-6 ">
                  <div className="card card-shadow ">
                    <a className="service-24 ">
           
                      <i className="icon-Target-Market "></i>
                      <h6 className="ser-title ">Email Campaign</h6>
                    </a>
                  </div>
                </div>
           
                <div className="col-lg-3 col-md-6 ">
                  <div className="card card-shadow ">
                    <a className="service-24 ">
         
                      <i className="icon-Laptop-Phone "></i>
                      <h6 className="ser-title ">Website Strategy</h6>
                    </a>
                  </div>
                </div>
      
                <div className="col-lg-3 col-md-6 ">
                  <div className="card card-shadow ">
                    <a className="service-24 ">
                   
                      <i className="icon-Full-Bag "></i>
                      <h6 className="ser-title ">eCommerce Shop</h6>
                    </a>
                  </div>
                </div>
           
                <div className="col-lg-3 col-md-6 ">
                  <div className="card card-shadow ">
                    <a className="service-24 ">
             
                      <i className="icon-Eyeglasses-Smiley "></i>
                      <h6 className="ser-title ">Cloud Hosting</h6>
                    </a>
                  </div>
                </div>
         
              </div>
            </div>
          </div> */}
          <div className="spacer feature22">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">
                    Engaging New Audiences Through Smart Approach
                  </h2>
                  <h6 className="subtitle">
                    Our tech advisors and experts unite businesses with
                    experienced tech innovation to solve critical challenges.
                  </h6>
                </div>
              </div>
              <div className="row wrap-feature-22 mt-5">
                {/* <!-- Column --> */}
                <div
                  className="col-lg-6"
                  data-aos="flip-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="https://images.unsplash.com/photo-1520110120835-c96534a4c984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
                    className="rounded img-responsive"
                    alt="wrapkit"
                  />{" "}
                </div>
                {/* <!-- Column --> */}
                <div className="col-lg-6">
                  <div className="text-box">
                    <p>
                      Our technology consultants with years of practical and
                      cross-sector expertise in working with projects across the
                      globe will guide you with insights and knowledge. And
                      studies your business requirements & processes carefully.
                      We then help you trace your exact software requirements
                      and business problem areas that can be effectively managed
                      by innovative software solutions. <br />
                      <br /> We work across all dimensions of IT to
                      understanding current business processes, to identifying
                      gaps to create strategic imperatives for digital
                      transformation.
                    </p>
                  </div>
                </div>
                {/* <!-- Column --> */}
              </div>
            </div>
          </div>

          <div className=" spacer bg-light feature2">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">How we can help</h2>
                  <h6 className="subtitle">
                    Our team of tech strategists, enterprise architects and
                    transformation experts help harness technology and
                    innovation as a way to reinvent every business.
                  </h6>
                </div>
              </div>

              <div className="row m-t-40">
                <div className="col-md-4 wrap-feature2-box">
                  <div
                    className="card card-shadow"
                    data-aos="flip-left"
                    data-aos-duration="1200"
                  >
                    <img
                      className="card-img-top"
                      src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="wrappixel kit"
                    />
                    <div className="card-body text-center">
                      <h5 className="font-medium">Tech value</h5>
                      <p className="m-t-20">
                        Tech value is a one-stop shop for all your business and
                        security needs. Measure and maximize technology
                        investments achieving the transparency to define value,
                        optimize costs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 wrap-feature2-box">
                  <div
                    className="card card-shadow"
                    data-aos="flip-up"
                    data-aos-duration="1200"
                  >
                    <img
                      className="card-img-top"
                      src="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="wrappixel kit"
                    />
                    <div className="card-body text-center">
                      <h5 className="font-medium">Analytics & automation</h5>
                      <p className="m-t-20">
                        Analytics is the analytical capability to Unlock the
                        value of data, artificial intelligence, and automation
                        to drive business value through real-time decision
                        making.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 wrap-feature2-box">
                  <div
                    className="card card-shadow"
                    data-aos="flip-right"
                    data-aos-duration="1200"
                  >
                    <img
                      className="card-img-top"
                      src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="wrappixel kit"
                    />
                    <div className="card-body text-center">
                      <h5 className="font-medium">
                        Intelligent operating model & innovation
                      </h5>
                      <p className="m-t-20">
                        Respond to changing market demands by being nimbler.
                        Design and implement an operating model built for
                        agility, resiliency and growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  <!-- ============================================================== -->
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

export default TechnologyConsultant;
