import Head from "next/head";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faCloud,
  faRobot,
  faCodeBranch,
  faUsers,
  faDatabase,
  faMicrochip,
  faLayerGroup,
  faArrowTrendUp,
  faLaptopMobile,
  faWeightHanging,
} from "@fortawesome/free-solid-svg-icons";

const MachineLearning = () => {
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
        <title>Aexonic : Services / Machine Learning &amp; AI</title>
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
                <a className=" navbar-brand">
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
                                  <a className="cursor-pointer dropdown-item active_menu">
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
              {/* <!-- Row  --> */}
              <div className="row justify-content-center ">
                {/* <!-- Column --> */}
                <div
                  className="col-md-6 align-self-center text-center"
                  data-aos="fade-down"
                  data-aos-duration="1200"
                >
                  <h1 className="title banner-text">
                    Machine Learning &amp; AI
                  </h1>
                  <h6 className="subtitle op-8 banner-text">
                    Helping you intelligently solve business challenges using
                    smart tech solutions.
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
                    Harness the power of analytics to bring resilience and
                    realize intelligent business outcomes.
                  </h2>
                  <h6 className="subtitle">
                    Develop powerful, intelligent, and self-equipped apps
                    infused with unparalleled AI that merge seamlessly with
                    business processes and enhance operational efficiency.
                    <br />
                    <br />
                    We offer differentiated digital services in AI & ML to
                    optimize your existing business vertices.
                  </h6>
                </div>
                <div className="col-lg-5">
                  <div className="row wrap-feature-12">
                    <div className="col-md-12">
                      <img
                        src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?w=500&t=st=1666005303~exp=1666005903~hmac=98a62ca1514231f15a6cce42ad3422eee746e1d47d211ba7b2b73b6b922beb03"
                        alt="wrapkit "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer bg-light feature5">
            <div className="container">
              {/* <!-- Row  --> */}
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">We Offer Professional Solutions</h2>
                  <h6 className="subtitle">
                    Predict market shifts and customers&apos; interests when you
                    have control of the data and statistics. AI & ML help your
                    business become the trend.
                  </h6>
                </div>
              </div>

              <div className="row m-t-40">
                <div className="col-md-4 wrap-feature5-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div className="card-body d-flex">
                      <div className="icon-space">
                        <FontAwesomeIcon
                          icon={faUsers}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div className="">
                        <h6 className="font-medium">
                          <a className="linking">
                            Increasing customer satisfaction-
                          </a>
                        </h6>
                        <p className="m-t-20">
                          Track conversations in real-time and predict
                          customers&apos; needs before it arises.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 wrap-feature5-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-down"
                    data-aos-duration="1200"
                  >
                    <div className="card-body d-flex">
                      <div className="icon-space">
                        <FontAwesomeIcon
                          icon={faDatabase}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div className="">
                        <h6 className="font-medium">
                          <a className="linking">
                            Offering differentiated services
                          </a>
                        </h6>
                        <p className="m-t-20">
                          Create intelligent machines using human intelligence
                          and advanced analytics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 wrap-feature5-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <div className="card-body d-flex">
                      <div className="icon-space">
                        <FontAwesomeIcon
                          icon={faCodeBranch}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div className="">
                        <h6 className="font-medium">
                          <a className="linking">
                            Optimizing existing business
                          </a>
                        </h6>
                        <p className="m-t-20">
                          Find patterns within your dataset and let algorithms
                          predict your benefit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Column -->
                            <!-- Column --> */}
                <div className="col-md-4 wrap-feature5-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div className="card-body d-flex">
                      <div className="icon-space">
                        <FontAwesomeIcon
                          icon={faLayerGroup}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div className="">
                        <h6 className="font-medium">
                          <a className="linking">
                            Automating business processes
                          </a>
                        </h6>
                        <p className="m-t-20">
                          Collect large chunks of data and put it to automate to
                          make the decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Column -->
                            <!-- Column --> */}
                <div className="col-md-4 wrap-feature5-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <div className="card-body d-flex">
                      <div className="icon-space">
                        <FontAwesomeIcon
                          icon={faArrowTrendUp}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div className="">
                        <h6 className="font-medium">
                          <a className="linking">
                            Gaining insights underlying problems
                          </a>
                        </h6>

                        <p className="m-t-20">
                          Analyze trends with automated cognitive tasks and
                          improve your business overall.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Column -->
                            <!-- Column --> */}
                <div className="col-md-4 wrap-feature5-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <div className="card-body d-flex">
                      <div className="icon-space">
                        <FontAwesomeIcon
                          icon={faWeightHanging}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div className="">
                        <h6 className="font-medium">
                          <a className="linking">Preventive measures</a>
                        </h6>
                        <p className="m-t-20">
                          Capture subtle shifts in your process and workflow
                          that might impact your business otherwise.
                        </p>
                      </div>
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
                " url(https://img.freepik.com/free-photo/cyborg-3d-hand-pointing-background-technology-artificial-intelligence_53876-147741.jpg?w=900&t=st=1666845994~exp=1666846594~hmac=ae221165b4ea9a69beab3d5d5486e93516ebc2a1686ded05e5cff580726d700a)",
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
                      An integrated offering for enterprises to scale and
                      future-proof AI-powered transformation
                    </h2>

                    <strong>
                      AI helps enterprises adopt a comprehensive approach and
                      roadmap to scaling enterprise-grade AI for their
                      businesses.
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer feature12">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <h2 className="m-b-30 m-t-20">
                    Power Your Creativity With Artificial Intelligence
                  </h2>
                  <h4 className="text-muted font-light">
                    Businesses across the globe use AI to streamline their
                    workflow and make better decisions. From freeing up space
                    and automating redundant tasks to allowing you to focus on
                    more strategic and profit-driven tasks.
                  </h4>
                  <h4 className="text-muted font-light">
                    Our AI & ML engineers build software applications that help
                    your business become more accurate at predicting outcomes.
                    From advanced programming, cloud integration, and automating
                    with a robotic arm to using AI chipsets, AI & ML solutions
                    help your business to explore limitless opportunities.
                  </h4>
                </div>

                <div className="col-lg-7">
                  <div className="row wrap-feature-12">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <div
                            className="card card-shadow"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                          >
                            <div className="card-body text-center">
                              <div className="icon-space">
                                <FontAwesomeIcon
                                  icon={faLaptopCode}
                                  className="text-info pr-3"
                                  size="3x"
                                />
                              </div>
                              <h5 className="font-medium">
                                Advanced Programing
                              </h5>
                              <p className="m-t-20">
                                Using different programming languages
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div
                            className="card card-shadow"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                          >
                            <div className="card-body text-center">
                              <div className="icon-space">
                                <FontAwesomeIcon
                                  icon={faMicrochip}
                                  className="text-info pr-3"
                                  size="3x"
                                />
                              </div>
                              <h5 className="font-medium">AI chipsets</h5>
                              <p className="m-t-20">Designing apps simply</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 uneven-box">
                      <div className="row">
                        <div className="col-md-12">
                          <div
                            className="card card-shadow"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                          >
                            <div className="card-body text-center">
                              <div className="icon-space">
                                <FontAwesomeIcon
                                  icon={faCloud}
                                  className="text-info pr-3"
                                  size="3x"
                                />
                              </div>
                              <h5 className="font-medium">
                                Cloud AI integration
                              </h5>
                              <p className="m-t-20">
                                Using hybrid and cloud solutions
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div
                            className="card card-shadow"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                          >
                            <div className="card-body text-center">
                              <div className="icon-space">
                                <FontAwesomeIcon
                                  icon={faRobot}
                                  className="text-info pr-3"
                                  size="3x"
                                />
                              </div>
                              <h5 className="font-medium">Robotic arm</h5>
                              <p className="m-t-20">Automating tasks quickly</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="spacer bg-light feature26">
            <div className="container">
              <div className="row wrap-feature-26">
                <div className="col-md-6 align-self-center">
                  <div className="max-box">
                    <h2 className="title m-t-20">
                      We Create The Most Realistic Artificial Intelligence
                    </h2>
                    <p className="m-t-30">
                      We aim to deliver you hands-on, frictionless, and
                      innovative Artificial Intelligence and Machine Learning
                      solutions by recognizing trends and developing apps and
                      software that propels your business forward.
                    </p>
                    <p>
                      Our AI & ML developers work around the clock to
                      materialize your vision into reality and bring to market
                      the best solution that solves customers&apos; needs.
                    </p>
             
                  </div>
                </div>
                <div className="col-md-6 ml-auto ">
    
                  <img
                    src="/images/AI_1.png"
                    alt="wrapkit"
                    className="img-responsive"
                  />
                </div>
              </div>
              <div className="row wrap-feature-26 m-t-40 p-t-30">
                <div className="col-md-6">
      
                  <img
                    src="/images/AI_2.jpg"
                    alt="wrapkit"
                    className="img-responsive"
                  />
                </div>
                <div className="col-md-6 ml-auto align-self-center">
                  <h2 className="title m-t-20">
                    Use Machine Learning To Drive Intelligent Optimisation
                  </h2>
                  <p className="m-t-30">
                    Leverage ML to help you make smarter decisions with proven
                    ROI and future-proof your business by staying updated about
                    the latest trends and evolving customers&apos; needs.
                  </p>
                  <p>
                    Explore diverse and untapped business opportunities by
                    expanding your verticals into new revenue streams. Let
                    machines help you make faster decision-making using
                    intelligence and intellect.
                  </p>
                  
                </div>
              </div>
            </div>
          </div> */}

          <div className="blog-home1 spacer bg-light">
            <div className="container">
              {/* <!-- Row  --> */}
              <div className="row justify-content-center">
                {/* <!-- Column --> */}
                <div className="col-md-8 text-center">
                  <h2 className="title">AI-led business transformation</h2>
                  <h6 className="subtitle">
                    Business ideas, goals, and problems aren&apos;t
                    one-size-fits-all. Business solutions shouldn&apos;t be
                    either
                  </h6>
                </div>
                {/* <!-- Column -->
                            <!-- Column --> */}
              </div>
              <div className="row m-t-40">
                {/* <!-- Column --> */}
                <div className="col-md-4">
                  <div
                    className="card card-shadow"
                    data-aos="flip-left"
                    data-aos-duration="1200"
                  >
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?w=900&t=st=1666004190~exp=1666004790~hmac=8bb0be52489e4144a23d2ef43a92d9a77047f9eb60f9b0c719e5e061afaa3b9b"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="p-30">
                      <div className="d-flex no-block font-14">
                        <a href="#">
                          Transformation enhanced productivity of enterprise
                          workers
                        </a>
                      </div>
                      <h5 className="font-medium m-t-20">
                        <a href="#" className="link">
                          AI-based solutions to assist enterprise workers for
                          better productivity
                        </a>
                      </h5>
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
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="https://img.freepik.com/free-photo/man-wearing-smart-glasses-touching-virtual-screen-futuristic-technology-digital-remix_53876-104247.jpg?w=900&t=st=1666004128~exp=1666004728~hmac=9503fa9c8cb6ae5d5272009d825870214357fc0a41479fa0b315303e9e77d43a"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="p-30">
                      <div className="d-flex no-block font-14">
                        <a href="#">Self-learning systems</a>
                      </div>
                      <h5 className="font-medium m-t-20">
                        <a href="#" className="link">
                          Deploy AI solutions that sense their own mistakes and
                          fix them by harvesting the user data seamlessly
                        </a>
                      </h5>
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
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=900&t=st=1666004096~exp=1666004696~hmac=dc921e35577982f84d5e2d208afa8bf01541d258c9a20bd2ef7c66571d81411b"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="p-30">
                      <div className="d-flex no-block font-14">
                        <a href="#">AI for enterprise velocity</a>
                      </div>
                      <h5 className="font-medium m-t-20">
                        <a href="#" className="link">
                          Leverage the power of ML and AI ops, automation and
                          cloud to deliver solutions with velocity
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

export default MachineLearning;
