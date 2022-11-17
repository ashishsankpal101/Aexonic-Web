import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobile,
  faLayerGroup,
  faGears,
  faBusinessTime,
  faUsersRectangle,
  faDatabase,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";

const offshore = () => {
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
        <title>Aexonic : Services / Staff Augmentation / Offshore</title>
      </Head>
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
                                  <a className="cursor-pointer dropdown-item ">
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
                                  <a className="cursor-pointer dropdown-item active_menu">
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
          <div
            className="banner-innerpage"
            style={{
              backgroundImage: "url(/images/services/Banner/test_engg.jpeg)",
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
                  <h1 className="title banner-text">Offshore development</h1>
                  <h6 className="subtitle op-8 banner-text">
                    As your offshore software development team, we allow you
                    access to a skilled workforce that works for you by reducing
                    your operational costs and saving time.
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
                    {/* We help businesses accelerate the pace of innovation */}
                    Choose Aexonic As Your Offshore Partner
                  </h2>
                  <h6 className="subtitle">
                    We have developed a dedicated offshore software development
                    center to deliver IT consulting along with managed offshore
                    development needs of our clients. We use to provide best
                    facility, set up the environment, staff with qualified and
                    talented team and with processes and reporting structure.
                    <br />
                    <br />
                    Our team keeps the aim to meet the client&apos;s requirement
                    and give satisfaction about work. At Aexonic, we believe
                    that there is much more to than just being at the best of
                    technology.
                  </h6>
                </div>
                <div className="col-lg-5">
                  <div className="row wrap-feature-12">
                    <div className="col-md-12">
                      <img
                        src="https://saigontechnology.com/themes/sts/images/offshore-software-new/offshore_banner.png"
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
              backgroundImage: " url(/images/offshore/offshore_background.jpg)",
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
                      All Experts In One Roof
                    </h2>
                    <p className="op-8">
                      Aexonic&apos;s offshore development team works as your
                      extended internal team and aims to achieve business goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer feature12">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="m-b-30 m-t-20">
                    Prepare your business for the next level of growth
                  </h2>
                  <h4 className="text-muted font-light">
                    With us as your offshore software development partner, you
                    focus more on your core practices without the additional
                    stress of running and managing a software development
                    department.
                  </h4>
                  <div className="row">
                    <div className="col-md-6 m-t-30">
                      <h5 className="font-medium">Cost Effective</h5>
                      <p>
                        Effectively reduce the cost of offshore software
                        development services with us.
                      </p>
                    </div>
                    <div className="col-md-6 m-t-30">
                      <h5 className="font-medium">
                        Saves time with faster solutions &amp; multitasking
                      </h5>
                      <p>
                        We work as your extended team and help you achieve your
                        targets faster with a clear roadmap.
                      </p>
                    </div>
                    <div className="col-md-6 m-t-30">
                      <h5 className="font-medium">
                        Scale fast with better talents
                      </h5>
                      <p>
                        Get access to an intelligent team of engineering and
                        consultancy talent and workforce.
                      </p>
                    </div>
                    <div className="col-md-6 m-t-30">
                      <h5 className="font-medium">
                        Expand the market to a foreign countries
                      </h5>
                      <p>
                        Globalize your reach and authority when you team up with
                        the right partners.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6" style={{ marginTop: "5rem" }}>
                  <div className="row wrap-feature-12">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <img
                            src="https://img.freepik.com/premium-photo/man-holding-cost-text-with-down-arrows_220873-326.jpg?size=626&ext=jpg&ga=GA1.2.874824107.1666083653&semt=sph"
                            className="rounded img-shadow img-responsive"
                            alt="wrapkit"
                          />
                        </div>
                        <div className="col-md-12">
                          <img
                            src="https://img.freepik.com/premium-photo/hourglass-dark-background_127657-7394.jpg?size=626&ext=jpg&ga=GA1.2.874824107.1666083653&semt=sph"
                            className="rounded img-shadow img-responsive"
                            alt="wrapkit"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 uneven-box">
                      <div className="row">
                        <div className="col-md-12">
                          <img
                            src="https://img.freepik.com/free-photo/young-adult-sky-female-jolly-lens-flare_1134-1365.jpg?w=826&t=st=1666962502~exp=1666963102~hmac=4634a5600f7aac40c57f042bfac9c38f6d38a65548b65d02c6506706fcfd6c18"
                            className="rounded img-shadow img-responsive"
                            alt="wrapkit"
                          />
                        </div>
                        <div className="col-md-12">
                          <img
                            src="https://img.freepik.com/premium-photo/research-technological-development-glowing-icons-billboard-night-panoramic-city-view-bangkok-concept-innovative-activities-expanding-new-services-products-southeast-asia_269648-9030.jpg?size=626&ext=jpg&ga=GA1.2.874824107.1666083653&semt=sph"
                            className="rounded img-shadow img-responsive"
                            alt="wrapkit"
                          />
                        </div>
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
                  <h2 className="title">Our Offerings</h2>
                  <h6 className="subtitle">
                    As an offshore software development center, our dedicated
                    teams of software developers can focus on your core value
                    competencies and dramatically increase your agility while
                    embracing our expertise.
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
                          icon={faCode}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a className="linking">Web Development</a>
                        </h5>
                        <p className="m-t-20">
                          We have expertise in web application development and
                          offer this as a part of our offshore software
                          development services for more than a decade.
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
                          icon={faMobile}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a className="linking">App Development</a>
                        </h5>
                        <p className="m-t-20">
                          Android, iOS and hybrid mobile applications with
                          outstanding functionality meet top-notch developers at
                          Aexonic and help you build modern mobile app
                          solutions.
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
                          icon={faLayerGroup}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a className="linking">Custom Software Development</a>
                        </h5>
                        <p className="m-t-20">
                          The software solutions that fulfill all your
                          expectations have become synonymous with our offshore
                          custom software development services.
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
                          icon={faGears}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a className="linking">Web and App Maintenance</a>
                        </h5>
                        <p className="m-t-20">
                          Right from website support to content addition all our
                          maintenance services have helped build healthy and
                          long-relationships with our clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer feature15">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">How does Offshore delivery work? </h2>
                  <h6 className="subtitle">
                    We first get on a one-on-one call with your team to
                    understand the project&apos;s scope of work, objectives, and
                    expectations from the collaboration. You can rely on us for
                    our simple yet detailed process:
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
                          <span className="icon-round  display-5 text-success ">
                            <FontAwesomeIcon
                              icon={faBusinessTime}
                              className="text-info pr-3"
                              size="1x"
                            />
                          </span>
                        </div>
                        <div className="p-20">
                          <h5 className="font-medium">
                            <a className="linking">
                              Understand your business&apos; challenges and
                              scope
                            </a>
                          </h5>
                          <p className="m-t-20">
                            We first research how we can serve you to achieve
                            all your desired goals and KPIs.
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
                          <span className="icon-round  display-5 text-success ">
                            <FontAwesomeIcon
                              icon={faUsersRectangle}
                              className="text-info pr-3"
                              size="1x"
                            />
                          </span>
                        </div>
                        <div className="p-20">
                          <h5 className="font-medium">
                            <a className="linking">
                              Focus On Core Competencies
                            </a>
                          </h5>
                          <p className="m-t-20">
                            We then prepare a framework so that you can focus on
                            your business, and we can help you expand your
                            business.
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
                          <span className="icon-round  display-5 text-success ">
                            <FontAwesomeIcon
                              icon={faDatabase}
                              className="text-info pr-3"
                              size="1x"
                            />
                          </span>
                        </div>
                        <div className="p-20">
                          <h5 className="font-medium">
                            <a className="linking">
                              Use talents to maximum efficiency
                            </a>
                          </h5>
                          <p className="m-t-20">
                            We recruit talents who are experienced at executing
                            projects successfully and to their optimum
                            performance
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
                    src="https://img.freepik.com/free-photo/smiling-diverse-businesswomen-shake-hands-group-meeting-deal-concept_1163-4686.jpg?w=900&t=st=1666962812~exp=1666963412~hmac=3faad43e3e18818123db2742163fc6bbb8a1c6dfdbf45b6d665da879037a5cf4"
                    className="img-responsive"
                    alt="wrapkit"
                  />
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
    </div>
  );
};

export default offshore;
