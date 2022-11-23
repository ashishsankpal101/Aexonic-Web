import Head from "next/head";
import { React, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileAndroid,
  faServer,
  faBug,
  faChartLine,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

const Technology = () => {
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
        <title>Aexonic : Industries / Technology</title>
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
                      <Link href="">
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
                            <a className="dropdown-item active_menu">
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
                {/* <!-- Column --> */}
                <div
                  className="col-md-6 align-self-center text-center"
                  data-aos="fade-down"
                  data-aos-duration="1200"
                >
                  <h1 className="title banner-text">Technology and Software</h1>
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

          <div className="spacer bg-light feature9">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Our Services</h2>
                  <h6 className="subtitle">
                    We build software solutions with clean code and engage in
                    all stages of product development.
                  </h6>
                </div>
              </div>

              <div className="row m-t-40">
                <div className="col-md-4 wrap-feature11-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div className="card-body">
                      <div className="icon-space">
                        <FontAwesomeIcon
                          icon={faCode}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <h5 className="font-medium">Web development</h5>
                      <p className="m-t-20">
                        Architecture, re-engineering, legacy software migration,
                        application enhancements, and support.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 wrap-feature11-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div className="card-body">
                      <div className="icon-space">
                        <FontAwesomeIcon
                          icon={faMobileAndroid}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <h5 className="font-medium">Mobile development</h5>
                      <p className="m-t-20">
                        Native Android and iOS app development with strict
                        compliance with Google and Apple guidelines.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 wrap-feature11-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div className="card-body">
                      <div className="icon-space">
                        <FontAwesomeIcon
                          icon={faServer}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <h5 className="font-medium">DevOps services</h5>
                      <p className="m-t-20">
                        Infrastructure and CI/CD pipeline setup, monitoring,
                        infra-level security solutions by certified cloud
                        engineers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row m-t-40">
                <div className="col-md-4 wrap-feature11-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <div className="card-body">
                      <div className="icon-space">
                        <FontAwesomeIcon
                          icon={faBug}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <h5 className="font-medium">Testing services</h5>
                      <p className="m-t-20">
                        You can relay on our amazing features list and also our
                        customer services will be great experience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 wrap-feature11-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <div className="card-body">
                      <div className="icon-space">
                        <FontAwesomeIcon
                          icon={faChartLine}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <h5 className="font-medium">Data analytics</h5>
                      <p className="m-t-20">
                        Data analytics, modeling, and visualization,
                        development, maintenance of large-scale products.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 wrap-feature11-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <div className="card-body">
                      <div className="icon-space">
                        <FontAwesomeIcon
                          icon={faRobot}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <h5 className="font-medium">Big data and ML</h5>
                      <p className="m-t-20">
                        Embedded analytics in mobile and web service models,
                        actionable business insights, Agile solutions.
                      </p>
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
                "linear-gradient(90deg, #000000b5, transparent), url(https://img.freepik.com/free-photo/focus-software-developer-hands-typing-source-code-keyboard-while-looking-computer-screens-with-programming-interface-programer-sitting-desk-with-clipboard-writing-algorithm_482257-43990.jpg?w=1060&t=st=1669184222~exp=1669184822~hmac=764626c71e5c99fa0543a9dc214de195307f0ce4dac2c63e8c3b8b73638e1d99)",
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
                      Our vision about Technology and Software
                    </h2>
                    <p>
                      Our principal focus is to convert a real-world problem
                      into data and use a computer to solve it more efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer feature24">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Technologies and frameworks</h2>
                  <h6 className="subtitle">
                    We work with over 20 different technologies, including few
                    of the latest.
                  </h6>
                </div>
              </div>

              <div className="row wrap-feature-24">
                <div className="col-lg-3 col-md-6">
                  <div className="card card-shadow">
                    <img
                      style={{ height: "22vh" }}
                      className="card-img-top"
                      src="https://usemobile.com.br/wp-content/uploads/2022/08/react-native-logo.png"
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
                      src="https://smartmania.cz/wp-content/uploads/2020/05/Android.jpg"
                      alt="wrappixel kit"
                    ></img>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="card card-shadow">
                    <img
                      style={{ height: "22vh" }}
                      className="card-img-top"
                      src="https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png"
                      alt="wrappixel kit"
                    ></img>
                  </div>
                </div>

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
              </div>
            </div>
          </div>

          <div className="spacer bg-light">
            <div className="container">
              {/* <!-- Row  --> */}
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Our work</h2>
                  <h6 className="subtitle">
                    We have built over 200+ mobile and web applications in the
                    past 10+ years.
                  </h6>
                </div>
              </div>
              {/* <!-- Row  --> */}
              <div className="row m-t-40">
                {/* <!-- Column --> */}
                <div className="col-md-4">
                  <div
                    className="card card-shadow"
                    data-aos="flip-left"
                    data-aos-duration="1200"
                  >
                    <a href="#" className="img-ho">
                      <img
                        className="card-img-top"
                        src="https://coditas.com/static/media/1.bf1b3dfa.PNG"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="card-body">
                      <h5 className="font-medium m-b-0">E-Seal</h5>
                    </div>
                  </div>
                </div>
                {/* <!-- Column --> */}
                <div className="col-md-4">
                  <div
                    className="card card-shadow"
                    data-aos="flip-up"
                    data-aos-duration="1200"
                  >
                    <a href="#" className="img-ho">
                      <img
                        className="card-img-top"
                        src="https://coditas.com/static/media/2.5961d0f3.PNG"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="card-body">
                      <h5 className="font-medium m-b-0">TGI</h5>
                    </div>
                  </div>
                </div>
                {/* <!-- Column --> */}
                <div className="col-md-4">
                  <div
                    className="card card-shadow"
                    data-aos="flip-right"
                    data-aos-duration="1200"
                  >
                    <a href="#" className="img-ho">
                      <img
                        className="card-img-top"
                        src="https://coditas.com/static/media/3.71876206.PNG"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="card-body">
                      <h5 className="font-medium m-b-0">Sepio SaaS</h5>
                    </div>
                  </div>
                </div>
                {/* <!-- Column --> */}
                <div className="col-md-4">
                  <div
                    className="card card-shadow"
                    data-aos="flip-left"
                    data-aos-duration="1200"
                  >
                    <a href="#" className="img-ho">
                      <img
                        className="card-img-top"
                        src="https://coditas.com/static/media/4.545861f1.PNG"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="card-body">
                      <h5 className="font-medium m-b-0">Vistamoney</h5>
                    </div>
                  </div>
                </div>
                {/* <!-- Column --> */}
                <div className="col-md-4">
                  <div
                    className="card card-shadow"
                    data-aos="flip-up"
                    data-aos-duration="1200"
                  >
                    <a href="#" className="img-ho">
                      <img
                        className="card-img-top"
                        src="https://coditas.com/static/media/5.a397ffb9.PNG"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="card-body">
                      <h5 className="font-medium m-b-0">Sionage Mokcup</h5>
                    </div>
                  </div>
                </div>
                {/* <!-- Column --> */}
                <div className="col-md-4">
                  <div
                    className="card card-shadow"
                    data-aos="flip-right"
                    data-aos-duration="1200"
                  >
                    <a href="#" className="img-ho">
                      <img
                        className="card-img-top"
                        src="https://coditas.com/static/media/6.84f03ba9.PNG"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="card-body">
                      <h5 className="font-medium m-b-0">
                        Hard Cover Book Mock
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

export default Technology;
