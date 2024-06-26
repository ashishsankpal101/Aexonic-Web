import Head from "next/head";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faRunning,
  faBrain,
  faChartLine,
  faComputer,
  faSearch,
  faCube,
  faMicrochip,
  faUserGear,
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
        <title>Aexonic : Services /Software Engineering</title>
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
                                  <a className="cursor-pointer dropdown-item">
                                    SaaS Platforms
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/services/product-engineering/software-engineering">
                                  <a className="cursor-pointer dropdown-item active_menu">
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
        </div>
        <div className="container-fluid ">
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
                  <h1 className="title banner-text">Software Engineering</h1>
                  <h6 className="subtitle op-8 banner-text">
                    We are a team of passionate software engineers who are
                    curious to find solutions to any technical challenges.
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer feature12">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h2 className="m-b-30 m-t-20">
                    Software Engineering Services to Get Your Software to Market
                    Faster
                  </h2>
                  <h6 className="subtitle">
                    We are a team of experts who design and develop modern,
                    agile, and scalable software solutions.
                    <br />
                    <br />
                    Building software is a people-intensive operation. Companies
                    find it hard to find and retain talent. With technology
                    changing so rapidly, software built today will soon become a
                    legacy. Supporting your long-term vision requires an
                    extended development team.
                    <br></br> <br></br> In a disruptive digital world, your
                    software must be built to adapt to changing dynamics, just
                    like your business. Not only should the code be able to
                    communicate with legacy systems, but you also need
                    full-stack skills to manage expectations.
                  </h6>
                </div>
                <div className="col-lg-5">
                  <div className="row wrap-feature-12">
                    <div className="col-md-12">
                      <img
                        src="/images/software-engineering/SoftEng-img.webp"
                        className="rounded img-responsive m-t-3"
                        alt="wrapkit "
                      />
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
                "url(/images/software-engineering/softEng-background-img.jpg)",
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
                      World-class expertise in Software Engineering
                    </h2>
                    <p className="op-8">
                      Our software engineering services and specialized industry
                      expertise help you deploy next-gen technologies with a
                      focus on quality, scalability, cost-efficiency and rapid
                      delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer feature15 ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Our Thinking</h2>
                  <h6 className="subtitle">
                    Our team works at making the best of the resources to make
                    your software that positions your company as a leader. We do
                    this by
                  </h6>
                </div>
              </div>

              <div className="row m-t-40">
                <div className="col-lg-6 wrap-feature15-box">
                  <div className="row">
                    <div
                      className="col-md-12 m-b-30"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      <div className="d-flex no-block">
                        <div className="no-shrink">
                          <span className="icon-round bg-white display-5 text-success ">
                            <FontAwesomeIcon
                              icon={faCube}
                              className="text-info pr-3"
                              size="1x"
                            />
                          </span>
                        </div>
                        <div className="p-20">
                          <h5 className="font-medium">
                            <a className="linking">Software innovation </a>
                          </h5>
                          <p className="m-t-20">
                            Constantly upgrading and updating our perspectives
                            to make your visions into reality
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
                          <span className="icon-round bg-white display-5 text-success ">
                            <FontAwesomeIcon
                              icon={faMicrochip}
                              className="text-info pr-3"
                              size="1x"
                            />
                          </span>
                        </div>
                        <div className="p-20">
                          <h5 className="font-medium">
                            <a className="linking">Embracing dynamism</a>
                          </h5>
                          <p className="m-t-20">
                            Constantly adapting to the evolving trends to make
                            sure your products and services meet customers&apos;
                            demands
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
                          <span className="icon-round bg-white display-5 text-success ">
                            <FontAwesomeIcon
                              icon={faUserGear}
                              className="text-info pr-3"
                              size="1x"
                            />
                          </span>
                        </div>
                        <div className="p-20">
                          <h5 className="font-medium">
                            <a className="linking">Creative problem solving</a>
                          </h5>
                          <p className="m-t-20">
                            Constantly keen on solving challenges to create
                            something new and operative
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 wrap-feature15-box"
                  data-aos="flip-left"
                  data-aos-duration="1200"
                >
                  <img
                    src="/images/software-engineering/softEng-ourThink-img.webp"
                    className="img-responsive"
                    alt="wrapkit"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="spacer feature5 bg-light">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Start improving your business today</h2>
                  <h6 className="subtitle">
                    Our team of highly qualified and efficient software
                    engineers helps you build custom audience-centric products
                    that solve the market&apos;s needs and unlocks new
                    opportunity for your business.
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
                          icon={faGauge}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div className="">
                        <h6 className="font-medium">
                          <a className="linking">
                            Accelerating technological progress
                          </a>
                        </h6>
                        <p className="m-t-20">
                          Make use of latest technologies using advanced tools
                          and systems.
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
                          icon={faBrain}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div className="">
                        <h6 className="font-medium">
                          <a className="linking">
                            Solving complexity of business
                          </a>
                        </h6>
                        <p className="m-t-20">
                          We help you simplify business complexities by adopting
                          an unique approach
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
                          icon={faChartLine}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div className="">
                        <h6 className="font-medium">
                          <a className="linking">Continue making progress </a>
                        </h6>
                        <p className="m-t-20">
                          Make continuous innovation a part of your system to
                          improve your business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 wrap-feature5-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div className="card-body d-flex">
                      <div className="icon-space">
                        <FontAwesomeIcon
                          icon={faRunning}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div className="">
                        <h6 className="font-medium">
                          <a className="linking">Become more competitive</a>
                        </h6>
                        <p className="m-t-20">
                          Bring more feature-rich to market that makes setups
                          simpler and more efficient.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 wrap-feature5-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <div className="card-body d-flex">
                      <div className="icon-space">
                        <FontAwesomeIcon
                          icon={faComputer}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div className="">
                        <h6 className="font-medium">
                          <a className="linking">
                            Access to simplicity with software
                          </a>
                        </h6>
                        <p className="m-t-20">
                          Make it easy for your customers to choose you over
                          your competitors.
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
                        {/* <i className="text-success-gradiant  icon-Laptop-Phone"></i> */}
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div className="">
                        <h6 className="font-medium">
                          <a className="linking">
                            Higher operational management
                          </a>
                        </h6>
                        <p className="m-t-20">
                          Digitalize and digitize your workflow for smoother
                          collaboration with software.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-home3 spacer ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                  <h2 className="title">Industry Solutions</h2>
                  <h6 className="subtitle">
                    Drive operational improvements, enhance business strategy,
                    negotiate market challenges, and revitalize customer
                    experience with Aexonic &apos;s suite of industry solutions
                  </h6>
                </div>
              </div>
              <div className="row m-t-40">
                <div className="col-lg-6">
                  <div
                    className="card"
                    data-aos="flip-left"
                    data-aos-duration="1200"
                  >
                    <img
                      style={{ height: "50.8vh" }}
                      className="card-img-top"
                      src="/images/software-engineering/industrySol-img-1.jpg"
                      alt="wrappixel kit"
                    ></img>

                    <div className="date-pos bg-success-gradiant ">
                      Retail And E-Commerce Industry
                    </div>
                    <h4 className="font-medium m-t-30">
                      Retail And E-Commerce Industry
                    </h4>
                    <p className="m-t-20">
                      Aexonic brings deep industry knowledge to the design and
                      implementation of relevant software solutions, helping
                      organizations thrive amid disruption in sectors such as
                      banking, health care, insurance, and beyond.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="card"
                        data-aos="flip-up"
                        data-aos-duration="1200"
                      >
                        <img
                          className="card-img-top"
                          src="/images/software-engineering/industrySol-img-2.jpg"
                          alt="wrappixel kit"
                        ></img>

                        <div className="date-pos bg-success-gradiant">
                          Banking and Fintech Industry
                        </div>
                        <h4 className="font-medium m-t-20">
                          Banking and Fintech Industry
                        </h4>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div
                        className="card"
                        data-aos="flip-up"
                        data-aos-duration="1200"
                      >
                        <img
                          className="card-img-top"
                          src="/images/software-engineering/industrySol-img-3.jpg"
                          alt="wrappixel kit"
                        ></img>

                        <div className="date-pos bg-success-gradiant">
                          Supply Chain And Logistics Industry
                        </div>
                        <h4 className="font-medium m-t-20">
                          Supply Chain And Logistics Industry
                        </h4>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div
                        className="card"
                        data-aos="flip-up"
                        data-aos-duration="1200"
                      >
                        <img
                          className="card-img-top"
                          src="/images/software-engineering/industrySol-img-3.jpg"
                          alt="wrappixel kit"
                        ></img>

                        <div className="date-pos bg-success-gradiant">
                          Healthcare Industry
                        </div>
                        <h4 className="font-medium m-t-20">
                          Healthcare Industry
                        </h4>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div
                        className="card"
                        data-aos="flip-up"
                        data-aos-duration="1200"
                      >
                        <img
                          className="card-img-top"
                          src="/images/software-engineering/industrySol-img-4.jpg"
                          alt="wrappixel kit"
                        ></img>

                        <div className="date-pos bg-success-gradiant">
                          Manifacturing Industry
                        </div>
                        <h4 className="font-medium m-t-20">
                          Manifacturing Industry
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
