import Head from "next/head";
// import React from "react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import $ from "jquery";

const Banking = (props) => {
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
        <title>Aexonic : Industries / Banking</title>
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
                          className="nav-link dropdown-toggle active"
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
                            <a className="dropdown-item active_menu">
                              Banking and FinTech
                            </a>
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
                  <h1 className="title banner-text">Banking and FinTech</h1>
                  <h6 className="subtitle op-8 banner-text">
                    Integrating disruptive technologies for new-age financial
                    services organizations.
                  </h6>
                </div>
                {/* <!-- Column --> */}
              </div>
            </div>
          </div>

          {/* <!-- Blog home 1  -->
                <!-- ============================================================== --> */}
          <div className="blog-home1 spacer bg-light">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                  <h2 className="title">Accelerating Digital Banking</h2>
                  <h6 className="subtitle">
                    The future of financial services is digital and fast moving.
                    As your customers&apos; demands evolve, stay one step ahead
                    by transforming to digital first.​
                  </h6>
                </div>
              </div>
              <div className="row m-t-40">
                <div className="col-md-4">
                  <div
                    className="card card-shadow"
                    data-aos="flip-left"
                    data-aos-duration="1200"
                  >
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="https://images.unsplash.com/photo-1556741533-974f8e62a92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="p-30">
                      <div className="d-flex no-block font-14">
                        <a href="#">Payment software</a>
                      </div>
                      <h5 className="font-medium m-t-20">
                        <a href="#" className="link">
                          Digitalize your payment infrastructure through our
                          open and modular platforms.
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div
                    className="card card-shadow"
                    data-aos="flip-up"
                    data-aos-duration="1200"
                  >
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="p-30">
                      <div className="d-flex no-block font-14">
                        <a href="#">Card services and processing </a>
                      </div>
                      <h5 className="font-medium m-t-20">
                        <a href="#" className="link">
                          Our card and processing services are both flexible and
                          cost-effective.
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div
                    className="card card-shadow"
                    data-aos="flip-right"
                    data-aos-duration="1200"
                  >
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFua2luZyUyMHNlcnZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="p-30">
                      <div className="d-flex no-block font-14">
                        <a href="#">Banking as a Service</a>
                        <span className="ml-auto">Sept 18, 2017</span>
                      </div>
                      <h5 className="font-medium m-t-20">
                        <a href="#" className="link">
                          Simplify your banking operations with a modular and
                          ready set banking services.
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row m-t-40">
                <div className="col-md-4">
                  <div
                    className="card card-shadow"
                    data-aos="flip-left"
                    data-aos-duration="1200"
                  >
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="https://media.istockphoto.com/photos/handcuffs-on-table-picture-id1299626774?k=20&m=1299626774&s=170667a&w=0&h=lSSKsYHyPIgrMsLeHnHfL-3jjGv4Apgg27v7_prfiz0="
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="p-30">
                      <div className="d-flex no-block font-14">
                        <a href="#">Financial crime prevention</a>
                      </div>
                      <h5 className="font-medium m-t-20">
                        <a href="#" className="link">
                          By using and contributing to information generated by
                          our market-leading, data-driven.
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div
                    className="card card-shadow"
                    data-aos="flip-up"
                    data-aos-duration="1200"
                  >
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmluYW5jaWFsJTIwY3JpbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="p-30">
                      <div className="d-flex no-block font-14">
                        <a href="#">Capital markets and advisory</a>
                      </div>
                      <h5 className="font-medium m-t-20">
                        <a href="#" className="link">
                          We digitalise wealth management services to better
                          support wealth accumulation.
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div
                    className="card card-shadow"
                    data-aos="flip-right"
                    data-aos-duration="1200"
                  >
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="https://images.unsplash.com/photo-1606189934732-1c274f894bf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGJhbmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="p-30">
                      <div className="d-flex no-block font-14">
                        <a href="#">Banking Data & AI</a>
                        <span className="ml-auto">Sept 18, 2017</span>
                      </div>
                      <h5 className="font-medium m-t-20">
                        <a href="#" className="link">
                          Grow your business the smart way with secure,
                          scalable, and human-centric AI for financial.
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ============================================================== --> */}

          <div
            className="spacer feature21 wrap-feature21-box "
            style={{
              backgroundImage:
                " linear-gradient(90deg, #000, transparent),url(https://www.zensar.com/_nuxt/img/hero.d8a909c.jpg)",
            }}
          >
            <div className="container">
              <div className="row text-white">
                <div className="col-md-5 both-space">
                  <div
                    className=""
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <h2 className="text-white m-t-20 m-b-30">
                      Keep up with Aexonic
                    </h2>
                    <p className="op-8">
                      You can relay on our amazing features list and also our
                      customer services will be great experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer bg-light feature41">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Our Offerings</h2>
                  <h6 className="subtitle">
                    You can relay on our amazing features list and also our
                    customer services will be great experience for you without
                    doubt and in no-time
                  </h6>
                </div>
              </div>
              <div className="row m-t-40 wrap-feature41-box">
                <div className="col-md-4">
                  <ul className="nav vtab f41-tab">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-expanded="true"
                      >
                        <div className="display-5 t-icon">
                          <i className="icon-Structure"></i>
                        </div>
                        <div>
                          <h5 className="m-b-0">Retail and corporate banks</h5>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                      >
                        <div className="display-5 t-icon">
                          <i className="icon-Brain-2"></i>
                        </div>
                        <div>
                          <h5 className="m-b-0">Capital markets</h5>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="dropdown1-tab"
                        data-toggle="tab"
                        href="#dropdown1"
                        role="tab"
                        aria-controls="dropdown1"
                      >
                        <div className="display-5 t-icon">
                          <i className="icon-Dollar-Sign"></i>
                        </div>
                        <div>
                          <h5 className="m-b-0">Payments</h5>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="ssd-tab"
                        data-toggle="tab"
                        href="#ssd"
                        role="tab"
                        aria-controls="ssd"
                      >
                        <div className="display-5 t-icon">
                          <i className="icon-Data-Center"></i>
                        </div>
                        <div>
                          <h5 className="m-b-0">
                            Governance, risk and compliance
                          </h5>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-7 ml-auto">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1591093337605-dbfdd637de3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1187&q=80"
                        alt="wrapkit"
                        className="rounded img-fluid"
                      />
                      <p className="m-t-40">
                        Our solutions cut across the business value chain
                        including personalization, AI, API automation, DevOps
                        implementation and more
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="wrapkit"
                        className="rounded img-fluid"
                      />
                      <p className="m-t-40">
                        Our experience strategy, digital foundation and advanced
                        analytics help in manging margins, cost, regulatory and
                        operational issues
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="dropdown1"
                      role="tabpanel"
                      aria-labelledby="dropdown1-tab"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1556740772-1a741367b93e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="wrapkit"
                        className="rounded img-fluid"
                      />
                      <p className="m-t-40">
                        Our expertise lies in straight through processing,
                        business process improvement, real time cross border
                        payments, open banking and fraud detection
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="ssd"
                      role="tabpanel"
                      aria-labelledby="ssd-tab"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="wrapkit"
                        className="rounded img-fluid"
                      />
                      <p className="m-t-40">
                        offerings encompass data aggregation, reporting,
                        regulatory compliance, financial crime, risk analytics
                        and credit risk management
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ============================================================== -->
                        <!-- Testimonial 9 -->
                        <!-- ============================================================== --> */}

          <div className="spacer feature9">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">How can we help you?</h2>
                  <h6 className="subtitle">
                    Through our extensive experience in serving Fintech
                    companies, we build robust systems that make your
                    customers&apos; lives easier.
                  </h6>
                </div>
              </div>

              <div className="row m-t-40">
                <div className="col-md-6 wrap-feature9-box b-r b-b">
                  <div
                    className="card"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <div className="card-body d-flex">
                      <div className="icon-space align-self-center">
                        <i className=" icon-Code-Window display-4 text-info-gradiant"></i>
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a className="linking">Legacy modernization </a>
                        </h5>
                        <p className="m-t-20">
                          We provide next-gen application lifecycle management
                          through integrated services, enterprise architecture
                          and consulting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 wrap-feature9-box b-b">
                  <div
                    className="card"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <div className="card-body d-flex">
                      <div className="icon-space align-self-center">
                        <i className="icon-Consulting display-4 text-info-gradiant"></i>
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a className="linking">Digital foundation</a>
                        </h5>
                        <p className="m-t-20">
                          We manage and optimize the technology infrastructure
                          responsible for delivering business outcomes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 wrap-feature9-box b-r">
                  <div
                    className="card"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div className="card-body d-flex">
                      <div className="icon-space align-self-center">
                        <i className="icon-Computer-Secure display-4 text-info-gradiant"></i>
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a className="linking">
                            Experience-led transformation
                          </a>
                        </h5>
                        <p className="m-t-20">
                          We provide services for data quality, governance,
                          visualisation, master data management and applied AI.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 wrap-feature9-box">
                  <div
                    className="card"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <div className="card-body d-flex">
                      <div className="icon-space align-self-center">
                        <i
                          className="icon-Cloud-Settings
 display-4 text-info-gradiant"
                        ></i>
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a className="linking">Streamline operations </a>
                        </h5>
                        <p className="m-t-20">
                          We enable enhanced customer experience across
                          touchpoints through personalised experience solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Column --> */}
              </div>
            </div>
          </div>

          <div className="testimonial9 spacer bg-light">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <h2 className="m-t-40 title">What Our Customers Say</h2>
                  {/* <span className="devider bg-danger"></span> */}
                  <h6 className="subtitle ">
                    Why do financial services organizations choose Aexonic?
                    They&apos;ve chosen Aexonic to support their vision of a
                    more secure, highly-performant tech infrastructure that
                    delivers personalized experiences to provide customers with
                    a truly unique banking experience.
                  </h6>
                </div>
                <div className="col-lg-6 col-md-6 ml-auto">
                  <div className="owl-carousel owl-theme testi9">
                    {/* <!-- item --> */}
                    <div className="item">
                      <div className="card card-shadow testimonial-color">
                        <div className="p-40">
                          <p>
                            We care what our customers think of us and so should
                            you. We are partners in your business and your
                            success is ours in your business.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex no-block align-items-center">
                        <div className="customer-thumb">
                          <img
                            src="/images/1.jpg"
                            alt="wrapkit"
                            className="circle"
                          />
                        </div>
                        <div className="">
                          <h6 className="font-bold m-b-0">Michael Anderson</h6>
                          <span className="font-13">Project client</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="spacer feature17">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">
                    Creating Stronger And More Secure Financial Assets{" "}
                  </h2>
                  <h6 className="subtitle">
                    We&apos;re proud to have worked on different solutions and
                    systems for our BFSI clients that have strengthened their
                    business.{" "}
                  </h6>
                </div>
              </div>

              <div className="card-group m-t-30 wrap-feature-17-box">
                <div className="card m-b-0">
                  <div className="card-body text-center">
                    <div className="p-20">
                      <div className="icon-space">
                        <i className="display-5 text-info-gradiant icon-Paypal"></i>
                      </div>
                      <h4 className="font-medium">Payment Gateway</h4>
                      <p>
                        Bridged the gap between merchant's website and payment
                        provider to facilitate a robust mechanism.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card m-b-0 custom_container">
                  <img
                    src="/images/features/feature17/img4.png"
                    className="image"
                    alt="wrapkit"
                  />
                  <div className="overlay">
                    <div className="text">E-Pin System</div>
                  </div>
                </div>

                <div className="card m-b-0">
                  <div className="card-body text-center">
                    <div className="p-20">
                      <div className="icon-space">
                        <i className="display-5 text-info-gradiant icon-Credit-Card"></i>
                      </div>
                      <h4 className="font-medium">Virtual Card Issuance</h4>
                      <p>
                        Simplified customers&apos; lives by fulfilling their
                        demands to transact securely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-group wrap-feature-17-box">
                <div className="card custom_container">
                  <img
                    src="/images/features/feature17/img5.png"
                    className="image"
                    alt="wrapkit"
                  />
                  <div className="overlay">
                    <div className="text">Payment Gateway</div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body text-center">
                    <div className="p-20">
                      <div className="icon-space">
                        <i className="display-5 text-info-gradiant icon-Gift-Box"></i>
                      </div>
                      <h4 className="font-medium">Gift Cards Exchange</h4>
                      <p>
                        {" "}
                        Empowered our customers freedom at convenience to
                        convert cash or card into a choice and redeem the value.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card custom_container">
                  <img
                    src="/images/features/feature17/img6.png"
                    className="image"
                    alt="wrapkit"
                  />
                  <div className="overlay">
                    <div className="text">Gift Card System</div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="blog-home1 spacer bg-light ">
            <div className="container ">
              <div className="row justify-content-center ">
                <div className="col-md-8 text-center ">
                  <h2 className="title ">News</h2>
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
          </div> */}

          {/*  <!-- ============================================================== -->
                         <!-- footer 4  -->
                         <!-- ============================================================== --> */}
          <div className="footer4 spacer ">
            <div className="container ">
              <div className="row ">
                <div className="col-lg-3 col-md-6 m-b-30 ">
                  <h5 className="m-b-20 ">Address</h5>
                  <p> 503, Pride Icon, Kharadi, Pune, India 411014</p>
                </div>
                <div className="col-lg-3 col-md-6 m-b-30 ">
                  <h5 className="m-b-20 ">Phone</h5>
                  <p>
                    Reception : +205 123 4567
                    <br />
                    Office : +207 235 7890
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 m-b-30 ">
                  <h5 className="m-b-20 ">Email</h5>
                  <p>
                    Office :{" "}
                    <a href="# " className="link ">
                      info@aexonic.com
                    </a>
                    <br />
                    Site :{" "}
                    <a href="# " className="link ">
                      http://www.aexonic.com/
                    </a>
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 ">
                  <h5 className="m-b-20 ">Social</h5>
                  <div className="round-social light ">
                    <a href="# " className="link ">
                      <i className="fa fa-facebook "></i>
                    </a>
                    <a href="# " className="link ">
                      <i className="fa fa-twitter "></i>
                    </a>
                    <a href="# " className="link ">
                      <i className="fa fa-linkedin "></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="f4-bottom-bar ">
                <div className="row ">
                  <div className="col-md-12 ">
                    <hr />

                    <nav
                      style={{ paddingLeft: "0px !important" }}
                      className="navbar navbar-expand-lg h1-nav "
                    >
                      <a className="navbar-brand m-b-11 " href="# ">
                        <img
                          src="/images/aexonic-logo_5.png "
                          alt="Aexonic "
                          width="120 "
                        />
                      </a>
                      <button
                        className="navbar-toggler "
                        type="button "
                        data-toggle="collapse "
                        data-target="#header1 "
                        aria-expanded="false "
                        aria-label="Toggle navigation "
                      >
                        <span className="ti-menu "></span>
                      </button>
                      <div className="collapse navbar-collapse " id="header1 ">
                        <span className="hidden-lg-down ">
                          © 2020 All rights reserved.
                        </span>
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                          <li className="nav-item">
                            <a className="nav-link " href="# ">
                              Home
                            </a>
                          </li>
                          <li className="nav-item ">
                            <a className="nav-link " href="# ">
                              Services
                            </a>
                          </li>
                          <li className="nav-item ">
                            <a className="nav-link active" href="# ">
                              Industries
                            </a>
                          </li>
                          <li className="nav-item ">
                            <a className="nav-link " href="# ">
                              Careers
                            </a>
                          </li>
                          <li className="nav-item ">
                            <a className="nav-link " href="# ">
                              About Us
                            </a>
                          </li>
                          <li className="nav-item ">
                            <a className="nav-link " href="# ">
                              More
                            </a>
                          </li>
                          <li className="nav-item ">
                            <a className="nav-link " href="# ">
                              Contact Us
                            </a>
                          </li>
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

export default Banking;
