import Head from "next/head";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faHeadset,
  faRobot,
  faTriangleExclamation,
  faShop,
  faChartLine,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

const Chatbot = () => {
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
        <title>Aexonic : Services / Chatbot Automation</title>
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
                                  <a className="cursor-pointer dropdown-item active_menu">
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
                  <h1 className="title banner-text">Chatbot and Automation</h1>
                  <h6 className="subtitle op-8 banner-text">
                    Seamlessly integrate Chatbot solutions to increase customer
                    engagement.
                  </h6>
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
                  <h2 className="m-b-30 m-t-20">
                    Start your digital transformation journey with AI chatbots
                  </h2>
                  <h6 className="subtitle">
                    It&apos;s clear that chatbots provide customer support,
                    answer users&apos; questions instantly, and process requests
                    with little-to-no human help.
                    <br />
                    <br />A smooth relationship between the customer and the
                    company can be established by adopting a good communication
                    strategy and chatbots are one of the best modern solutions
                    for this communication crisis.
                    <br></br> <br></br> Chatbots gives detailed and functional
                    documentation of your customers&apos; biggest pain points,
                    thus allowing your organization to improve products and
                    services.
                  </h6>
                </div>
                <div className="col-lg-5">
                  <div className="row wrap-feature-12">
                    <div className="col-md-12">
                      <img
                        src="https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?w=740&t=st=1666777779~exp=1666778379~hmac=7221a16982085cabbb3d1f6fac11a41dd226c9a75531e40f9871fab71ab06118"
                        className="rounded img-responsive m-t-3"
                        alt="wrapkit "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer bg-light feature9">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">
                    Does Your Business Need a Chatbot too?
                  </h2>
                  <h6 className="subtitle">
                    Your customers might need you anytime. So be there for your
                    customers 24*7, 365 days by integrating a human-like
                    conversational chatbot to serve your customers needs.
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
                        <FontAwesomeIcon
                          icon={faHandHoldingDollar}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a className="linking">
                            Reduce the Cost of Ownership
                          </a>
                        </h5>
                        <p className="m-t-20">
                          Implementing chatbots into your operations will help
                          cut support costs, reduce customers' waiting lines,
                          and have a faster response time.
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
                        <FontAwesomeIcon
                          icon={faHeadset}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a className="linking">Customer Satisfaction</a>
                        </h5>
                        <p className="m-t-20">
                          An artificial intelligence software designed to handle
                          all your customers' inquiries smartly and solve them
                          in real time.
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
                        <FontAwesomeIcon
                          icon={faRobot}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a className="linking">Process Automation</a>
                        </h5>
                        <p className="m-t-20">
                          Chatbots offer higher ROI than a human customer
                          service rep. Automate redundant tasks with efficiency
                          and accuracy.
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
                        <FontAwesomeIcon
                          icon={faTriangleExclamation}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a className="linking">Reduce the Error Rate</a>
                        </h5>
                        <p className="m-t-20">
                          Improve your operational efficiency by using chatbots.
                          Chatbots solve inquiries in volumes without
                          compromising on quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Column --> */}
              </div>
            </div>
          </div>

          <div
            className="spacer feature21 wrap-feature21-box"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/premium-photo/white-robot-technology-that-is-thinking-indeed-its-chin_318798-8.jpg?w=826)",
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
                      Chatbot to Improve Enterprise Business Conversations
                    </h2>
                    <p className="op-8">
                      Chatbots are just automated conversational programs
                      offering customers a more personalized way to access
                      information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer feature17">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Industries we serve</h2>
                  <h6 className="subtitle">
                    Whatever line your business operates in, chatbot automation
                    adapts as per your industry, requirements, needs, and
                    demand. So explore limitless opportunities using this
                    technology!
                  </h6>
                </div>
              </div>

              <div className="card-group m-t-30 wrap-feature-17-box">
                <div className="card m-b-0">
                  <div className="card-body text-center">
                    <div className="">
                      <div className="icon-space">
                        <FontAwesomeIcon
                          icon={faShop}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <h4 className="font-medium">Retail</h4>
                      <p>
                        Chatbots offer the retailers a cheaper way to interact
                        with the customers. They can facilitate all tasks from
                        customer support to online transaction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card m-b-0 custom_container">
                  <img
                    src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                    className="image"
                    alt="wrapkit"
                  />
                  <div className="overlay">
                    <div className="text">Finance</div>
                  </div>
                </div>

                <div className="card m-b-0">
                  <div className="card-body text-center">
                    <div className="">
                      <div className="icon-space">
                        <FontAwesomeIcon
                          icon={faChartLine}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <h4 className="font-medium">Finance</h4>
                      <p>
                        Chatbots are being used to power various financial
                        processes in the BFSI industry. They are programmed to
                        provide financial advices and similar services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-group wrap-feature-17-box">
                <div className="card custom_container">
                  <img
                    src="https://images.unsplash.com/photo-1644352442473-57f4cd0873c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
                    className="image"
                    alt="wrapkit"
                  />
                  <div className="overlay">
                    <div className="text">Logistic </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body text-center">
                    <div className="">
                      <div className="icon-space">
                        <FontAwesomeIcon
                          icon={faTruckFast}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <h4 className="font-medium">Logistic</h4>
                      <p>
                        Chatbots can help innovate transportation and logistic
                        operations by providing it more accuracy and
                        transperancy, and a better supply-chain visibility.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card custom_container">
                  <img
                    src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80"
                    className="image"
                    alt="wrapkit"
                  />
                  <div className="overlay">
                    <div className="text">Education Industry</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light spacer feature2">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Our Work</h2>
                  <h6 className="subtitle">
                    pgrade your business by integrating chatbot solutions that
                    help you make better decisions and improve your customers'
                    life cycle.
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
                      src="https://img.freepik.com/premium-photo/automation-customer-service-concept-with-3d-rendering-cute-robot-working-with-headset-notebook_493806-8256.jpg?w=900"
                      alt="wrappixel kit"
                    />
                    <div className="card-body text-center">
                      <h5 className="font-medium">Customer Support Chatbots</h5>
                      <p className="m-t-20">
                        Be virtually there for your customers around the clock
                        and brings happier clients.
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
                      src="https://img.freepik.com/premium-photo/artificial-intelligenceai-chat-bot-concept-hands-holding-mobile-phone-blurred-abstract-background-chatbot-answering-questions-online-robot-assistant-help-website_43780-537.jpg?w=900"
                      alt="wrappixel kit"
                    />
                    <div className="card-body text-center">
                      <h5 className="font-medium">Rule-based Chatbots</h5>
                      <p className="m-t-20">
                        Help your customers choose the correct option using
                        defined rules.
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
                      src="https://img.freepik.com/free-photo/male-asian-engineer-professional-having-discussion-standing-by-machine-factory-two-asian-coworker-brainstorm-explaining-solves-process-curcuit-mother-board-machine_609648-915.jpg?w=900&t=st=1666157301~exp=1666157901~hmac=04587bce62eae3fee5c1c8ec4249c63d520e7e759046a77575bbdc3a8de36bd2"
                      alt="wrappixel kit"
                    />
                    <div className="card-body text-center">
                      <h5 className="font-medium">Hybrid Model Chatbots</h5>
                      <p className="m-t-20">
                        Program your support with the intelligence of machine &
                        intellect of human support
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

export default Chatbot;
