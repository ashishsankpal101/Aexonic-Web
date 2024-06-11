import Head from "next/head";
import { React, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faChartLine,
  faClock,
  faBuilding,
  faArrowUpRightDots,
  faThumbsUp,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";

const Contactus = () => {
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
  function onChange(value) {
    console.log("Captcha value:", value);
  }
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
          href="images/favicon.png"
        />
        <title>Aexonic : Contact Us</title>
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
                    src="images/aexonic-logo_9.png"
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
                          <Link href="industries/banking">
                            <a className="dropdown-item">Banking and FinTech</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="industries/supplychain">
                            <a className="dropdown-item">
                              Supply Chain and Logistics
                            </a>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link href="industries/hospitality">
                            <a className="dropdown-item">
                              Hospitality and Travel
                            </a>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link href="industries/healthcare">
                            <a className="dropdown-item">Healthcare</a>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link href="industries/manifacturing">
                            <a className="dropdown-item">Manufacturing</a>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link href="industries/retail">
                            <a className="dropdown-item">
                              Retail and e-commerce
                            </a>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link href="industries/technology">
                            <a className="dropdown-item">
                              Technology and Software
                            </a>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link href="industries/professional_service">
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
                          {" "}
                          <Link href="/blog">
                            <a className="dropdown-item">Blogs</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="rounded-button active">
                    <Link href="/contactus">
                      <a className="active">Contact Us</a>
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
              backgroundImage: "url(images/services/Banner/support.jpeg)",
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
                  <h1 className="title banner-text">Contact Us</h1>
                  {/* <h6 className="subtitle op-8 banner-text">Our custom approach ensures the perfect fit for your technology initiatives.</h6> */}
                  <h6 className="subtitle op-8 banner-text">
                    Interested to transform your business? Contact us now.
                  </h6>
                </div>
                {/* <!-- Column --> */}
              </div>
            </div>
          </div>

          <div className="spacer feature1 bg-light">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Get In Touch</h2>
                  {/* <h6 className="subtitle">We are creative thinkers with a focus on modern web production. We use the latest tools available to help build your brand&apos;s digital presence.</h6> */}
                  <h6 className="subtitle">
                    Transform your business by leveraging our expertise in
                    digital transformation. Reach out to us today.
                  </h6>
                </div>
              </div>

              <div className="row contact-container m-t-30 ">
                <div className="col-lg-5 align-self-center">
                  <div className="max-500 m-auto p-20">
                    <ul className="list-block with-underline font-medium m-t-30 m-b-20 text-dark">
                      <li>
                        <FontAwesomeIcon
                          icon={faUsers}
                          className="text-info pr-3"
                          size="2x"
                        />

                        <span>200+ Happy Clients </span>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowUpRightDots}
                          className="text-info pr-3"
                          size="2x"
                        />
                        <span>10+ Years of Experience </span>
                      </li>

                      <li>
                        <FontAwesomeIcon
                          icon={faClock}
                          className="text-info pr-3"
                          size="2x"
                        />

                        <span>300+ Projects Delivered</span>
                      </li>

                      <li>
                        <FontAwesomeIcon
                          icon={faBuilding}
                          className="text-info pr-3"
                          size="2x"
                        />
                        <span>5+ Industries Served</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-7 ">
                  <div
                    className="card card-shadow m-t-40"
                    style={{ marginTop: "55px" }}
                    data-aos="fade-up "
                    data-aos-duration="1200 "
                  >
                    <div className="row ">
                      <div className="col-lg-12 ">
                        <div className="contact-box p-40 ">
                          <form>
                            <div className="row ">
                              <div className="col-lg-6 ">
                                <div className="form-group m-t-20 ">
                                  <input
                                    className="form-control "
                                    type="text "
                                    placeholder="Name "
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 ">
                                <div className="form-group m-t-20 ">
                                  <input
                                    className="form-control "
                                    type="text "
                                    placeholder="Email "
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 ">
                                <div className="form-group m-t-20 ">
                                  <input
                                    className="form-control "
                                    type="text "
                                    placeholder="Phone "
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 ">
                                <div className="form-group m-t-20 ">
                                  <input
                                    className="form-control "
                                    type="text "
                                    placeholder="Location "
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 ">
                                <div className="form-group m-t-20 ">
                                  <input
                                    className="form-control "
                                    type="text "
                                    placeholder="Message "
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 ">
                                <ReCAPTCHA
                                  sitekey="6Lf2jtYfAAAAAIZJZoymnF1_QAue0jrpB7jXZtpU"
                                  onChange={onChange}
                                />
                              </div>

                              <div className="col-lg-12 ">
                                <button
                                  type="submit "
                                  className="btn btn-info-gradiant m-t-20 btn-arrow "
                                >
                                  <span>
                                    SUBMIT NOW
                                    <i className="fa fa-arrow-right "></i>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature10">
            <div className="row">
              <div className="col-lg-4 bg-megna">
                <div className="wrap-feature10-box text-center">
                  <div className="display-4 m-b-20">
                    <FontAwesomeIcon
                      icon={faCheckDouble}
                      className="pr-3"
                      size="1x"
                    />
                  </div>

                  <h4 className="box-title">Our Highlights</h4>
                  <p>
                    With a technology-led and innovation-first approach, we help
                    businesses become a pioneer in their industry by equipping
                    them with technological developments.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 bg-primary">
                <div className="wrap-feature10-box text-center">
                  <div className="display-4 m-b-20">
                    <FontAwesomeIcon
                      icon={faBuilding}
                      className="pr-3"
                      size="1x"
                    />
                  </div>

                  <h4 className="box-title">Industries We Serve</h4>
                  <p>
                    From solving complex industry-specific processes and
                    managing highly-technical solutions, the Aexonic team&apos;s
                    end-to-end vertical approach enables us to serve a diverse
                    clientele.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 bg-orange">
                <div className="wrap-feature10-box text-center">
                  <div className="display-4 m-b-20">
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      className="pr-3"
                      size="1x"
                    />
                  </div>

                  <h4 className="box-title">Success Stories</h4>
                  <p>
                    Click here to know how our global clients have benefited by
                    deploying technologically advanced tools and software and
                    empowering their businesses dynamically.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ============================================================== -->
                <!-- Testimonial 9 -->
                <!-- ============================================================== --> */}
          <div className="testimonial9 spacer">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <h2 className="m-t-40 title">What Our Customers Say</h2>
                  {/* <span className="devider bg-danger"></span> */}
                  {/* <h6 className="subtitle ">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6> */}
                  <h6 className="subtitle ">
                    Don&apos;t just believe our words, read what customers say
                    while working with the Aexonic team.
                  </h6>
                </div>
                <div className="col-lg-6 col-md-6 ml-auto">
                  <div className="owl-carousel owl-theme testi9">
                    {/* <!-- item --> */}
                    <div className="item">
                      <div className="card card-shadow testimonial-color">
                        <div className="p-40">
                          {/* <p>We care what our customers think of us and so should you. We are partners in your business and your success is ours in your business.</p> */}
                          <p>
                            We are happy with Aexonic. Usually, I come into the
                            picture when things are escalated, but it&apos;s way
                            more fun and important to appreciate things going
                            well. Keep up the good work!
                          </p>
                        </div>
                      </div>
                      <div className="d-flex no-block align-items-center">
                        <div className="customer-thumb">
                          <img
                            src="images/1.jpg"
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
                    {/* <!-- item -->
                                    <!-- item --> */}

                    {/* <!-- item -->
                                    <!-- item --> */}

                    {/* <!-- item --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ============================================================== -->
                <!-- End Testimonial 9 -->
                <!-- ============================================================== --> */}

          <div className="client2 spacer bg-light">
            <div className="container ">
              <div className="row justify-content-center ">
                <div className="col-md-7 text-center ">
                  <h2 className="title ">Trusted By</h2>
                  <h6 className="subtitle ">
                    Our expertise comes from working with visionary and
                    passionate MNCs, SMBs, entrepreneurs, and startups. With
                    them, we've conquered newer heights.
                  </h6>
                </div>
              </div>
              <div className="row client-box text-center op-7 ">
                <div className="col-lg-2 col-md-4 ">
                  <img src="images/clients/sky7venture.png " alt="wrapkit " />
                </div>
                <div className="col-lg-2 col-md-4 ">
                  <img src="images/clients/slinkd.png " alt="wrapkit " />
                </div>
                <div className="col-lg-2 col-md-4 ">
                  <img src="images/clients/Pay2Cards.png " alt="wrapkit " />
                </div>
                <div className="col-lg-2 col-md-4 ">
                  <img src="images/clients/payatshop.png " alt="wrapkit " />
                </div>
                <div className="col-lg-2 col-md-4 ">
                  <img src="images/clients/paymentbox.png " alt="wrapkit " />
                </div>
                <div className="col-lg-2 col-md-4 ">
                  <img
                    src="images/clients/ProcessingQuotes.png "
                    alt="wrapkit "
                  />
                </div>
              </div>
              <div className="row client-box text-center op-7 m-t-10 ">
                <div className="col-lg-2 col-md-4 ">
                  <img src="images/clients/help-light.png " alt="wrapkit " />
                </div>
                <div className="col-lg-2 col-md-4 ">
                  <img src="images/clients/la_cour.png " alt="wrapkit " />
                </div>
                <div className="col-lg-2 col-md-4 ">
                  <img src="images/clients/mobicall.png " alt="wrapkit " />
                </div>
                <div className="col-lg-2 col-md-4 ">
                  <img src="images/clients/DMS-Final.png " alt="wrapkit " />
                </div>
                <div className="col-lg-2 col-md-4 ">
                  <img src="images/clients/cw.png " alt="wrapkit " />
                </div>
                <div className="col-lg-2 col-md-4 ">
                  <img
                    src="images/clients/ProcessingQuotes.png "
                    alt="wrapkit "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="client2 spacer">
                        <div className="container ">
                            <div className="row justify-content-center ">
                                <div className="col-md-7 text-center ">
                                    <h2 className="title ">Our Global Presence</h2>
                                    <h6 className="subtitle ">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                            </div>
                            <div className="row  op-7 ">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-12 text-center " style={{ paddingBottom: "10px" }}>
                                            <h3 className="title ">Trusted By</h3>
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/sepio.png " style={{ height: "30px", marginLeft: "30px" }} alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/tgi.png " style={{ height: "30px", }} alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/cactus.png " style={{ height: "30px", }} alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/DMS-Final.png " alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/cw.png " alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/ProcessingQuotes.png " alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/help-light.png " alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/mobicall.png " alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/DMS-Final.png " alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/DMS-Final.png " alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/cw.png " alt="wrapkit " />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-10">
                                            <img src="images/clients/ProcessingQuotes.png " alt="wrapkit " />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="row client-box  m-t-10 ">
                                        <div className="col-lg-12 col-md-4 ">
                                            <div className="card" style={{ border: "1px solid rgba(0, 0, 0, 0.125) !important", backgroundColor: "#f5f8fa !important" }}>
                                              
                                                <div className="card-body">
                                                    <h3 style={{ fontWeight: "600" }} className="card-title"><i><img height="25" src="images/contact_us/india.png"></img></i>&nbsp;India</h3>
                                                    <p className="card-text"><i className="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp;504, Stellar Spaces, Kharadi, Pune, Maharashtra 411014 <br /><i className="fa fa-envelope"></i> &nbsp;info@aexonic.com <br /><i className="fa fa-phone"></i>&nbsp;&nbsp;+207 235 7890</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-4 ">
                                            <div className="card" style={{ border: "1px solid rgba(0, 0, 0, 0.125) !important", backgroundColor: "#f5f8fa !important" }}>
                                               
                                                <div className="card-body">
                                                    <h3 style={{ fontWeight: "600" }} className="card-title"><i><img height="25" src="images/contact_us/us.png"></img></i>&nbsp;United States of America</h3>
                                                    <p className="card-text"><i className="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp;504, Stellar Spaces, Kharadi, Pune, Maharashtra 411014 <br /><i className="fa fa-envelope"></i> &nbsp;info@aexonic.com <br /><i className="fa fa-phone"></i>&nbsp;&nbsp;+207 235 7890</p>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                          
                        </div>
                    </div> */}

          {/* <!-- ============================================================== -->
                <!-- End Feature 1  -->
                <!-- ============================================================== --> */}

          {/* <div className=" spacer bg-light feature15">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Our Global Presence</h2>

                  <h6 className="subtitle">
                    We have served 200+ clients globally. Our portfolio of
                    extensive projects has impacted millions and this makes us
                    confident to aim for the zenith.
                  </h6>
                </div>
              </div>

              <div className="row m-t-40">
                <div className="col-lg-5 wrap-feature15-box">
                  <div className="row">
                    <div
                      className="col-md-12 m-b-30"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      <div className="d-flex no-block">
                        <div className="no-shrink">
                          <span className="icon-round display-5 text-info ">
                            <i className="icon-Map-Marker"></i>
                          </span>
                        </div>
                        <div className="p-20">
                          <h5 className="font-medium">
                            <a className="linking">
                              India Office <i className="ti-arrow-right"></i>
                            </a>
                          </h5>
                          <p className="m-t-20">
                            504, Stellar Spaces, Kharadi, Pune, India – 411014.
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
                          <span className="icon-round display-5 text-info ">
                            <i className="icon-Map-Marker"></i>
                          </span>
                        </div>
                        <div className="p-20">
                          <h5 className="font-medium">
                            <a className="linking">
                              US Office <i className="ti-arrow-right"></i>
                            </a>
                          </h5>
                          <p className="m-t-20">
                            2107 N 1st Street #205, San Jose, CA – 95131.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 ml-auto">
                  <div
                    className="card card-shadow aos-init aos-animate"
                    data-aos="flip-left"
                    data-aos-duration="1200"
                  >
                    <img src="/images/contact_us/map2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="spacer feature15">
            <div className="pl-5 pr-5">
              {/* <!-- Row  --> */}
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Our Global Presence</h2>
                  {/* <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6> */}
                  <h6 className="subtitle">
                    We have served 200+ clients globally. Our portfolio of
                    extensive projects has impacted millions and this makes us
                    confident to aim for the zenith.
                  </h6>
                </div>
              </div>
              {/* <!-- Row  --> */}
              <div className="row m-t-40">
                {/* <!-- Column --> */}
                <div className="col-lg-4 wrap-feature15-box">
                  <div className="row">
                    <div
                      className="col-md-12 m-b-30"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      <div className="d-flex no-block">
                        <div className="no-shrink">
                          <span className="icon-round display-5 text-info ">
                            <i className="icon-Map-Marker"></i>
                          </span>
                        </div>
                        <div className="p-20">
                          <h5 className="font-medium">
                            <a className="linking">
                              India Office <i className="ti-arrow-right"></i>
                            </a>
                          </h5>
                          <p className="m-t-20">
                            504, Stellar Spaces, Kharadi, Pune, India – 411014.
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
                          <span className="icon-round display-5 text-info ">
                            <i className="icon-Map-Marker"></i>
                          </span>
                        </div>
                        <div className="p-20">
                          <h5 className="font-medium">
                            <a className="linking">
                              US Office <i className="ti-arrow-right"></i>
                            </a>
                          </h5>
                          <p className="m-t-20">
                            2107 N 1st Street #205, San Jose, CA – 95131.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Column --> */}
                <div className="col-lg-8 ml-auto">
                  <div
                    className="card aos-init aos-animate"
                    data-aos="flip-left"
                    data-aos-duration="1200"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <img
                      src="/images/map.png"
                      alt=""
                      style={{ height: "100%" }}
                    />
                  </div>
                </div>
                {/* <!-- Column --> */}
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
                    <img src="images/footer/aexonic-logo_8.png" alt="Aexonic" />
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

export default Contactus;
