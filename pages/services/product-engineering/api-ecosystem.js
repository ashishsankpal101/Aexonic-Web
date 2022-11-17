import Head from "next/head";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faStore,
  faTachographDigital,
  faSliders,
  faUsersGear,
  faEnvelope,
  faDesktop,
  faCloudArrowUp,
  faUsers,
  faKey,
  faHandshake,
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
        <title>Aexonic : Services / ApiEcosystem</title>
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
                                <Link href="/services/product-engineering/mobile-webapp">
                                  <a className="cursor-pointer dropdown-item">
                                    Mobile and Web Apps
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/services/product-engineering/api-ecosystem">
                                  <a className="cursor-pointer dropdown-item active_menu">
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
                <div
                  className="col-md-6 align-self-center text-center"
                  data-aos="fade-down"
                  data-aos-duration="1200"
                >
                  <h1 className="title banner-text">API Ecosystem</h1>
                  <h6 className="subtitle op-8 banner-text">
                    We do your business&apos;s digital transformation with API
                    and take it to the next level.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ============================================================== -->
                        <!-- Testimonial 9 -->
                        <!-- ============================================================== --> */}

          <div className="spacer feature22">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">
                    Business ecosystems are made up of partners and customers
                  </h2>
                  <h6 className="subtitle">
                    Gain a competitive advantage and tap on limitless digital
                    transformation using the API management ecosystem to provide
                    seamless services.
                  </h6>
                </div>
              </div>
              <div className="row wrap-feature-22">
                <div
                  className="col-lg-6"
                  data-aos="flip-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="/images/api-ecosystem/api-eco-img-1.webp"
                    className="rounded img-responsive"
                    alt="wrapkit"
                  />
                </div>

                <div className="col-lg-6">
                  <div className="text-box mt-5">
                    <h3 className="font-light">
                      Organizations that use
                      <span className="text-megna"> APIs become closer</span> to
                      their customers
                    </h3>
                    <p>
                      API helps you solve the problems of your customers in a
                      faster and more structured way.
                    </p>
                    <p>
                      After understanding your business model, we suggest
                      measures to implement enterprise API management that will
                      bring the most value to your organization and your
                      customers.
                      <br />
                      <br /> APIs facilitate this sharing of capabilities by
                      acting as middleware. Developers can connect apps that
                      don&apos;t normally work together, allowing for combined
                      strengths and opportunities to close gaps in product
                      capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spacer bg-light feature24">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">
                    We offer API integration services to
                  </h2>
                  <h6 className="subtitle">
                    Are you in the business of building apps? Then the API
                    management ecosystem is ideal for you. We&apos;ll help you
                    connect with their combined capabilities and tap into their
                    strengths.
                  </h6>
                </div>
              </div>
              <div className="row wrap-feature-24">
                <div className="col-lg-3 col-md-6">
                  <div className="card card-shadow">
                    <a className="service-24">
                      <FontAwesomeIcon
                        icon={faStore}
                        className="text-info pr-3"
                        size="3x"
                      />
                      <h6 className="ser-title">E-Commerce</h6>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card card-shadow">
                    <a className="service-24">
                      <FontAwesomeIcon
                        icon={faTachographDigital}
                        className="text-info pr-3"
                        size="3x"
                      />
                      <h6 className="ser-title">Healthcare</h6>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card card-shadow">
                    <a className="service-24">
                      <FontAwesomeIcon
                        icon={faSliders}
                        className="text-info pr-3"
                        size="3x"
                      />
                      <h6 className="ser-title">Real Estate</h6>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card card-shadow">
                    <a className="service-24">
                      <FontAwesomeIcon
                        icon={faUsersGear}
                        className="text-info pr-3"
                        size="3x"
                      />
                      <h6 className="ser-title">Client Management</h6>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card card-shadow">
                    <a className="service-24">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-info pr-3"
                        size="3x"
                      />
                      <h6 className="ser-title">Education</h6>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card card-shadow">
                    <a className="service-24">
                      <FontAwesomeIcon
                        icon={faDesktop}
                        className="text-info pr-3"
                        size="3x"
                      />
                      <h6 className="ser-title">Website Strategy</h6>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card card-shadow">
                    <a className="service-24">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className="text-info pr-3"
                        size="3x"
                      />
                      <h6 className="ser-title">Hi-Tech</h6>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card card-shadow">
                    <a className="service-24">
                      <FontAwesomeIcon
                        icon={faCloudArrowUp}
                        className="text-info pr-3"
                        size="3x"
                      />
                      <h6 className="ser-title">Government</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer  feature33 b-t p-b-0">
            <div className="container">
              <div className="row wrap-feature-33">
                <div className="col-lg-6 align-self-center">
                  <h2 className="title text-uppercase">
                    Begin With a Consumer-First Approach
                  </h2>
                  <p className="m-t-30">
                    Like with any digital transformation attempt, you must first
                    consider what you want to do with this API ecosystem. And
                    your end goal must keep the customer experience in mind.
                    <br />
                    Putting the user experience above all else will help you
                    design an API that caters to customer needs.
                  </p>
                </div>
                <div className="col-lg-6">
                  <img
                    src="/images/api-ecosystem/api-eco-apparoach.webp"
                    className="img-fluid"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-offset="300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="spacer bg-light feature24">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Technologies and frameworks</h2>
                  <h6 className="subtitle">
                    APIs are often treated as an afterthought to the
                    applications they connect.Our measured and pragmatic
                    approach to API strategy, design and development ensure that
                    the APIs align with your business and technology goals.
                  </h6>
                </div>
              </div>
              <div className="row wrap-feature-24">
                <div className="col-lg-3 col-md-6">
                  <div className="card card-shadow">
                    <img
                      style={{ height: "22vh" }}
                      className="card-img-top"
                      src="/images/api-ecosystem/api-tech-1.png"
                      alt="wrappixel kit"
                    ></img>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card card-shadow">
                    <img
                      style={{ height: "22vh" }}
                      className="card-img-top"
                      src="/images/api-ecosystem/api-tech-2.png"
                      alt="wrappixel kit"
                    ></img>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card card-shadow">
                    <img
                      style={{ height: "22vh" }}
                      className="card-img-top"
                      src="/images/api-ecosystem/api-tech-3.png"
                      alt="wrappixel kit"
                    ></img>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card card-shadow">
                    <img
                      style={{ height: "22vh" }}
                      className="card-img-top"
                      src="/images/api-ecosystem/api-tech-4.png"
                      alt="wrappixel kit"
                    ></img>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card card-shadow">
                    <img
                      style={{ height: "22vh" }}
                      className="card-img-top"
                      src="/images/api-ecosystem/api-tech-5.png"
                      alt="wrappixel kit"
                    ></img>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card card-shadow">
                    <img
                      style={{ height: "22vh" }}
                      className="card-img-top"
                      src="/images/api-ecosystem/api-tech-6.png"
                      alt="wrappixel kit"
                    ></img>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card card-shadow">
                    <img
                      style={{ height: "22vh" }}
                      className="card-img-top"
                      src="/images/api-ecosystem/api-tech-7.png"
                      alt="wrappixel kit"
                    ></img>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card card-shadow">
                    <img
                      style={{ height: "22vh" }}
                      className="card-img-top"
                      src="/images/api-ecosystem/api-tech-8.png"
                      alt="wrappixel kit"
                    ></img>
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
                    Copyright 2018. All Rights Reserved by WrapPixel.
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
