import Head from "next/head";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faCloud,
  faTasks,
  faBrain,
  faUserShield,
  faChartLine,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
const Ecosystem = () => {
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
        <title>Aexonic : Services /ApiEcosystem</title>
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
                    src="/images/aexonic-logo_9.png"
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
                        className="nav-link dropdown-toggle active"
                        id="h6-mega-dropdown1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Services <i className="fa fa-angle-down m-l-5"></i>
                      </a>
                      <div
                        className="dropdown-menu b-none font-14 animated "
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
                                  <a className="cursor-pointer dropdown-item active_menu">
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
                      <Link href="">
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
                      <ul className="b-none dropdown-menu font-14 animated ">
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
                          <Link href="/industries/hospitality">
                            <a className="dropdown-item">
                              Hospitality and Travel
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/healthcare">
                            <a className="dropdown-item">Healthcare</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/manifacturing">
                            <a className="dropdown-item">Manufacturing</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/retail">
                            <a className="dropdown-item">
                              Retail and e-commerce
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/technology">
                            <a className="dropdown-item">
                              Technology and Software
                            </a>
                          </Link>
                        </li>
                        <li>
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
                      <ul className="b-none dropdown-menu font-14 animated ">
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
              <div className="row justify-content-center ">
                <div
                  className="col-md-6 align-self-center text-center"
                  data-aos="fade-down"
                  data-aos-duration="1200"
                >
                  <h1 className="title banner-text">SaaS Platforms</h1>
                  <h6 className="subtitle op-8 banner-text">
                    We are a team of professional SaaS solutions providers to
                    help your business build efficient software.
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer feature37 wrap-feature37-box">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <img
                    src="/images/saas-platforms/saas-platform-img-1.jpg"
                    alt="wrapkit"
                    className="img-fluid"
                    style={{
                      height: "30rem",
                    }}
                  />
                </div>
                <div className="col-lg-7 align-self-center">
                  <div className="card max-700">
                    <div className="card-body">
                      <h2 className="title text-uppercase">
                        Simplify your internal processes with SaaS platforms
                      </h2>
                      <h6 className="subtitle">
                        In today&apos;s application economy, more and more
                        businesses consider the SaaS Platforms. However, you can
                        only truly benefit from SaaS if your solution provider
                        can deliver what your business demands.
                        <br />
                        We have a proven track record for providing highly
                        scalable SaaS Platforms using modern technologies over
                        the last 10+ years across the globe.
                        <br />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer bg-light feature41">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">SaaS Solutions</h2>
                  <h6 className="subtitle">
                    We are Aexonic have been developing SaaS solutions for
                    start-ups, mid-level and large enterprises across various
                    domains.
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
                          <FontAwesomeIcon
                            icon={faDesktop}
                            className="text-info pr-3"
                            size="1x"
                          />
                        </div>
                        <div>
                          <h5></h5>
                          <h5 className="m-b-0">Application Development</h5>
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
                          <FontAwesomeIcon
                            icon={faBrain}
                            className="text-info pr-3"
                            size="1x"
                          />
                        </div>
                        <div>
                          <h5></h5>
                          <h5 className="m-b-0">
                            Solution <br /> Management
                          </h5>
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
                          {/* <i className="icon-Dollar-Sign"></i> */}
                          <FontAwesomeIcon
                            icon={faCloud}
                            className="text-info pr-3"
                            size="1x"
                          />
                        </div>
                        <div>
                          <h5></h5>
                          <h5 className="m-b-0">Performance Optimization</h5>
                          {/* <h6 className="subtitle">
                            With high speed we help businesses that beat the
                            competition Optimum security.
                          </h6> */}
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
                          {/* <i className="icon-Data-Center"></i>
                           */}
                          <FontAwesomeIcon
                            icon={faTasks}
                            className="text-info pr-3"
                            size="1x"
                          />
                        </div>
                        <div>
                          <h5></h5>
                          <h5 style={{ textAlign: "center" }}>Migration</h5>
                          {/* <h6 className="subtitle">
                            You can relay on our amazing features list.
                          </h6> */}
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
                        src="/images/saas-platforms/saas-solution-1.jpg"
                        alt="wrapkit"
                        className="rounded img-fluid"
                      />
                      <h5 className="m-t-40">
                        We build innovative appliction to delight your
                        customers, empower your team, and help your business
                        scale, keeping your customers at the heart of our
                        appliction development and delivering rapid-time to
                        market.
                      </h5>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <img
                        src="/images/saas-platforms/saas-solution-2.jpg"
                        alt="wrapkit"
                        className="rounded img-fluid"
                      />
                      <h5 className="m-t-40">
                        Solution Management is the business practice of
                        proactively monitoring and managing all the
                        software-as-a-service (SaaS) applications. We resolve
                        issues of your existing solutions to ensure seem-less
                        interoperability.
                      </h5>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="dropdown1"
                      role="tabpanel"
                      aria-labelledby="dropdown1-tab"
                    >
                      <img
                        src="/images/saas-platforms/saas-solution-3.jpg"
                        alt="wrapkit"
                        className="rounded img-fluid"
                      />
                      <h5 className="m-t-40">
                        Performance Optimization is the key to every
                        application&apos;s success Our Development team work for
                        evaluate the performance of the application and adopt
                        measures to optimize the same. We develop secure and
                        digital solutions
                      </h5>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="ssd"
                      role="tabpanel"
                      aria-labelledby="ssd-tab"
                    >
                      <img
                        src="/images/saas-platforms/saas-solution-4.jpg"
                        alt="wrapkit"
                        className="rounded img-fluid"
                      />
                      <h5 className="m-t-40">
                        {/* We offer the best software maintenance services to keep
                        your app up to date with the latest technologies by
                        incorporating security, workflows, better UI/UX, and API
                        integrations. */}
                        One path to a successful digital transformation is to
                        move traditional applications to cloud-based
                        software-as-a-service (SaaS) applications, a migration
                        that requires approach and using technology in
                        strategic, new ways.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="spacer feature21 wrap-feature21-box"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #000, transparent),url(/images/saas-platforms/saas-platform-background.jpg)",
            }}
          >
            <div className="container">
              {/* <!-- Row  --> */}
              <div className="row text-white">
                {/* <!-- Column --> */}
                <div className="col-md-5 both-space">
                  <div
                    className=""
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <h2 className="text-white m-t-20 m-b-30">
                      Aexonic is one of the leading SaaS application development
                      companies in India.
                    </h2>
                    <p className="op-8">
                      We at Aexonic follow mordern software Development
                      practices to build and deliver SaaS platforms maintaing
                      top-notch security and quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer bg-light feature15">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title"> Features of SaaS Platforms </h2>
                  <h6 className="subtitle">
                    We work with the leading SaaS providers to optimize the
                    impact of our solutions.
                  </h6>
                </div>
              </div>
              <div className="row m-t-40">
                <div
                  className="col-lg-5 wrap-feature15-box"
                  data-aos="flip-left"
                  data-aos-duration="1200"
                >
                  <img
                    src="/images/saas-platforms/backup-saas-1.png"
                    className="img-responsive"
                    alt="wrapkit"
                  />
                </div>
                <div className="col-lg-7 wrap-feature15-box">
                  <div className="row">
                    <div
                      className="col-md-12 m-b-30"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      <div className="d-flex no-block">
                        <div className="no-shrink">
                          <span className="icon-round display-5 text-success ">
                            <FontAwesomeIcon
                              icon={faLayerGroup}
                              className="text-info pr-3"
                              size="1x"
                            />
                          </span>
                        </div>
                        <div className="p-20">
                          <h5 className="font-medium">
                            <a className="linking">Flexible recovery</a>
                          </h5>
                          <p className="m-t-20">
                            Leverage the ability to easily address unanticipated
                            or unconventional recovery requirements with
                            efficient and effective recovery support for your
                            entire organization.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-12 m-b-30"
                      data-aos="fade-down"
                      data-aos-duration="2000"
                    >
                      <div className="d-flex no-block">
                        <div className="no-shrink">
                          <span className="icon-round display-5 text-success ">
                            <FontAwesomeIcon
                              icon={faChartLine}
                              className="text-info pr-3"
                              size="1x"
                            />
                          </span>
                        </div>
                        <div className="p-20">
                          <h5 className="font-medium">
                            <a className="linking">
                              Performance and scalability
                            </a>
                          </h5>
                          <p className="m-t-20">
                            Aexonic provides scalable, proven and reliable
                            backup-as-a-service for Microsoft 365, Google
                            Workspace, OneDrive, Box, Slack and more.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-12 m-b-30"
                      data-aos="fade-down"
                      data-aos-duration="3000"
                    >
                      <div className="d-flex no-block">
                        <div className="no-shrink">
                          <span className="icon-round display-5 text-success ">
                            <FontAwesomeIcon
                              icon={faUserShield}
                              className="text-info pr-3"
                              size="1x"
                            />
                          </span>
                        </div>
                        <div className="p-20">
                          <h5 className="font-medium">
                            <a className="linking">Enterprise-grade security</a>
                          </h5>
                          <p className="m-t-20">
                            Keep your data from prying eyes with a single tenant
                            for each customer, multifactor authentication and
                            end-to-end encryption
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-home1 spacer">
            <div className="container ">
              <div className="row justify-content-center ">
                <div className="col-md-8 text-center ">
                  <h2 className="title ">Our Work</h2>
                  <h6 className="subtitle ">
                    No matter how complex your business questions, we have the
                    capabilities and experience to deliver the answers you need
                    to move forward.
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
                        src="https://media.glassdoor.com/sqll/2056879/sepio-products-squarelogo-1534832084159.png"
                        alt="wrappixel kit "
                      />
                    </a>
                    <div className="p-30 ">
                      <div className="d-flex no-block font-14 ">
                        <a href="# ">sepio solutions private limited </a>
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
                        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/labv2ubdtl0c1mkeskwd"
                        alt="wrappixel kit "
                      />
                    </a>
                    <div className="p-30 ">
                      <div className="d-flex no-block font-14 ">
                        <a href="# ">TGI </a>
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
                        src="https://media-exp1.licdn.com/dms/image/C4E0BAQGRG3BVNnhzKw/company-logo_200_200/0/1519880692665?e=2147483647&v=beta&t=fiuVJsstxRknm5E3RM9ip4xEt_-7l1WltpR914mbMXk "
                        alt="wrappixel kit "
                      />
                    </a>
                    <div className="p-30 ">
                      <div className="d-flex no-block font-14 ">
                        <a href="# ">Vistamoney</a>
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

          {/*  <!-- ============================================================== -->
                         <!-- footer 4  -->
                         <!-- ============================================================== --> */}
          {/* <div className="footer4 spacer ">
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
                    Office :
                    <a href="# " className="link ">
                      info@aexonic.com
                    </a>
                    <br />
                    Site :
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
          </div> */}
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

export default Ecosystem;
