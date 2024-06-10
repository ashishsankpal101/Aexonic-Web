import Head from "next/head";
import { React, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCropSimple,
  faHeadset,
  faCashRegister,
  faCartShopping,
  faWarehouse,
  faListCheck,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";

const RetailEcommoerce = () => {
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
                        className="nav-link dropdown-toggle"
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
                            <a className="dropdown-item active_menu">
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
                  <h1 className="title banner-text">Retail and e-commerce</h1>
                  <h6 className="subtitle op-8 banner-text">
                    We help you transform into a responsive and regenerative
                    business.
                  </h6>
                </div>
                {/* <!-- Column --> */}
              </div>
            </div>
          </div>

          <div className="spacer feature12">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h2 className="m-b-30 m-t-20">
                    Retail Technology For The Evolving Consumer Landscape
                  </h2>
                  <h6 className="subtitle">
                    Retail technology trends are towards powerful, contactless
                    digital customer engagements and e-commerce to safer
                    workplaces and more agile operations and supply chains.
                    <br />
                    <br />
                    COVID-19 led to a near-simultaneous shutdown of the global
                    economy, with retail among the severely impacted. In
                    responding to the global crisis, retailers turned to rapid
                    large-scale digital transformation to focus on short-term
                    operational issues and look ahead at the evolving retail
                    landscape.
                    <br></br> <br></br> Aexonic is an award winning agency and
                    has the requisite expertise to power the growth of digital
                    commerce across all of these segments.
                  </h6>
                </div>
                <div className="col-lg-5">
                  <div className="row wrap-feature-12">
                    <div className="col-md-12">
                      <img
                        src="https://img.freepik.com/free-vector/store-with-credit-card-gift-boxes-buyers-illustration_1262-18980.jpg?w=900&t=st=1669099142~exp=1669099742~hmac=89c7d6474554a8c99931a1df353e0bbacda251fc5145addf9266172c05071fc3"
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
                "linear-gradient(90deg, #000000b5, transparent), url(https://ais-akamai.rtl.de/masters/1789117/1686x0/eine-junge-frau-schlendert-die-shoppingmeile-entlang-und-haelt-einige-tueten-in-den-haenden.jpg)",
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
                      Digitize to 'retell' your retail journey
                    </h2>
                    <p>
                      Discover Aexonic retail technology solutions and services
                      to help your retail business stay agile and responsive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature39 spacer wrap-feature39-box">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="https://images.unsplash.com/photo-1571867424488-4565932edb41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    className="img-fluid"
                    alt="wrapkit"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="card-body">
                    <h2 className="title text-uppercase">Our offerings</h2>
                    <p className="m-t-40 m-b-40">
                      Catering to all the IT needs of the eCommerce & Retail
                      industry
                    </p>
                    <div className="d-flex no-block m-b-40">
                      <div className="display-4 m-r-20">
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div>
                        <h4>Omnichannel Commerce Solutions</h4>
                        <h6 className="subtitle">
                          Deliver an engaging experience to customers on all
                          channels and touchpoints to grow and drive business
                          forward.
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex no-block m-b-40">
                      <div className="display-4 m-r-20">
                        <FontAwesomeIcon
                          icon={faCashRegister}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div>
                        <h4>eCommerce Platform Migration</h4>
                        <h6 className="subtitle">
                          Get your digital product developed, harnessing our
                          engineering excellence with DevOps & agile approach
                          for quick time-to-market
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex no-block m-b-40">
                      <div className="display-4 m-r-20">
                        <FontAwesomeIcon
                          icon={faHeadset}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div>
                        <h4>Maintenance & Support</h4>
                        <h6 className="subtitle">
                          Focus on the business and let us take care of your
                          platform, patches, upgrades, bugs, and features in a
                          reliable way
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex no-block m-b-40">
                      <div className="display-4 m-r-20">
                        <FontAwesomeIcon
                          icon={faCropSimple}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div>
                        <h4>Experience Design</h4>
                        <h6 className="subtitle">
                          Assess your current platform and migrate to a suitable
                          platform for your business with our replatforming and
                          migration services.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light spacer feature3">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Retail Management On The Go!</h2>
                  <h6 className="subtitle">
                    We work with global retailers to identify new growth
                    opportunities and tap into the vast potential of next-gen
                    technologies.
                  </h6>
                </div>
              </div>

              <div className="row m-t-40">
                <div className="col-md-6 wrap-feature3-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div className="card-body d-flex">
                      <div className="icon-space align-self-center">
                        <FontAwesomeIcon
                          icon={faWarehouse}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a href="" className="linking">
                            Inventory Management
                          </a>
                        </h5>
                        <p className="m-t-20">
                          Aexonic provide inventory management feature for
                          retailers because the it helps them increase profits.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 wrap-feature3-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <div className="card-body d-flex">
                      <div className="icon-space align-self-center">
                        <FontAwesomeIcon
                          icon={faListCheck}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a href="" className="linking">
                            Orders Management
                          </a>
                        </h5>
                        <p className="m-t-20">
                          Manage sales and purchase orders, create packages and
                          send delivery updates through a order management
                          system.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 wrap-feature3-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div className="card-body d-flex">
                      <div className="icon-space align-self-center">
                        <FontAwesomeIcon
                          icon={faCropSimple}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a href="" className="linking">
                            Product Sharing On Social Media
                          </a>
                        </h5>
                        <p className="m-t-20">
                          We will help to build your business on social media
                          for increase business presence and engage your
                          audience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 wrap-feature3-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <div className="card-body d-flex">
                      <div className="icon-space align-self-center">
                        <FontAwesomeIcon
                          icon={faChartSimple}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a href="" className="linking">
                            Shop Analytics
                          </a>
                        </h5>
                        <p className="m-t-20">
                          Our retail analytics software provides retailers with
                          an in-depth look into all aspects of their business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer feature2">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Our Work</h2>
                  <h6 className="subtitle">
                    Platform driven eCommerce and retail solutions for quick
                    turnaround
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
                      src="https://images.unsplash.com/photo-1627634771100-b78244ffd302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="wrappixel kit"
                    />
                    <div className="card-body text-center">
                      <h5 className="font-medium">Marketplaces Solutions</h5>
                      <p className="m-t-20">
                        Manage transactions of goods and services between buyers
                        and suppliers with a powerful platform and our domain
                        knowledge.
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
                      src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="wrappixel kit"
                    />
                    <div className="card-body text-center">
                      <h5 className="font-medium">
                        Business to Business (B2B)
                      </h5>
                      <p className="m-t-20">
                        Delight your business buyers by providing them easier
                        ways to get special prices, receive quotes, negotiate,
                        and place repeat orders.
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
                      src="https://images.unsplash.com/photo-1579616043939-95d87a6e8512?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                      alt="wrappixel kit"
                    />
                    <div className="card-body text-center">
                      <h5 className="font-medium">Material Tracking Systems</h5>
                      <p className="m-t-20">
                        Facilitate fast and flexible implementation of mobile
                        solutions in areas of inventory, logistics, service, and
                        product tracking.
                      </p>
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
