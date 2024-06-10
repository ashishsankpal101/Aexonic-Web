import Head from "next/head";
import { React, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faHeadset,
  faLightbulb,
  faTrophy,
  faUsersGear,
  faUserGear,
  faComment,
  faThumbsUp,
  faGlobe,
  faSliders,
  faLayerGroup,
  faFaceSmile,
  faAtom,
  faChartColumn,
  faIndustry,
  faShieldHalved,
  faRecycle,
  faDatabase,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

const Aboutus = () => {
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
          href="images/favicon.png"
        />
        <title>Aexonic : About Us</title>
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
                        className="dropdown-menu b-none font-14 animated"
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
                      <ul className="b-none dropdown-menu font-14 animated">
                        <li>
                          <Link href="/industries/banking">
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
                          <Link href="industries/hospitality">
                            <a className="dropdown-item">
                              Hospitality and Travel
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="industries/healthcare">
                            <a className="dropdown-item">Healthcare</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="industries/manifacturing">
                            <a className="dropdown-item">Manufacturing</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="industries/retail">
                            <a className="dropdown-item">
                              Retail and e-commerce
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="industries/technology">
                            <a className="dropdown-item">
                              Technology and Software
                            </a>
                          </Link>
                        </li>
                        <li>
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
                          className="nav-link dropdown-toggle "
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
                          className="nav-link dropdown-toggle active"
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
                        id="h6-dropdown1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        More <i className="fa fa-angle-down m-l-5"></i>
                      </a>
                      <ul className="b-none dropdown-menu font-14 animated">
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
            style={{ backgroundImage: "url(images/services/Banner/bg3.jpeg)" }}
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
                  <h1 className="title banner-text">About Us</h1>
                  <h6 className="subtitle op-8 banner-text">
                    You visualize. We materialize
                  </h6>
                </div>
                {/* <!-- Column --> */}
              </div>
            </div>
          </div>
          {/* <!-- ============================================================== -->
                <!-- Feature 5  -->
                <!-- ============================================================== --> */}
          {/* <!-- ============================================================== -->
                <!-- Feature 37  -->
                <!-- ============================================================== --> */}
          {/* <div className="spacer feature37 wrap-feature37-box">
            <div className="row">
              <div className="col-lg-5">
                <img
                  src="../images/features/img1.jpg"
                  alt="wrapkit"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-7 align-self-center">
                <div className="card max-700">
                  <div className="card-body">
                    <h2 className="title text-uppercase">Our Story</h2>
                    <h6 className="subtitle">
                      Aexonic&apos;s core team was empowered by the vision to
                      use technology to help global businesses unlock
                      transformative results. After working with Fortune 500
                      companies, the founders recalibrated their careers and
                      started Aexonic to help today&apos;s dynamic tech brands
                      turn their product ideas into reality.
                    </h6>
                    <h6 className="subtitle">
                      With expertise in product innovation, accurate working
                      procedures, systemized processes, and highly skilled
                      software engineers and QA testers, Aexonic has evolved
                      into a reputed name globally in the end-to-end software
                      development market.
                    </h6>
                    <h6 className="subtitle">
                      Our 9+ years of experience in creating functional design
                      roadmaps with technical architecture has empowered us to
                      handle any project seamlessly. We do everything for you,
                      from planning to the final product deployment phase.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <!-- ============================================================== -->
                <!-- End Feature 37  -->
                <!-- ============================================================== --> */}

          <div className="spacer feature37 wrap-feature37-box">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <img
                    src="/images/about-us/OurStory.jpg"
                    alt="wrapkit"
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-7 align-self-center">
                  <div className="card max-700">
                    <div className="card-body">
                      <h2 className="title text-uppercase">OUR STORY</h2>
                      <h6 className="subtitle">
                        Aexonic&apos;s core team was empowered by the vision to
                        use technology to help global businesses unlock
                        transformative results. After working with Fortune 500
                        companies, the founders recalibrated their careers and
                        started Aexonic to help today&apos;s dynamic tech brands
                        turn their product ideas into reality.
                      </h6>
                      <h6 className="subtitle">
                        With expertise in product innovation, accurate working
                        procedures, systemized processes, and highly skilled
                        software engineers and QA testers, Aexonic has evolved
                        into a reputed name globally in the end-to-end software
                        development market.
                      </h6>
                      <h6 className="subtitle">
                        Our 9+ years of experience in creating functional design
                        roadmaps with technical architecture has empowered us to
                        handle any project seamlessly. We do everything for you,
                        from planning to the final product deployment phase.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light spacer feature5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Our Business Philosophy</h2>
                  <h6 className="subtitle">
                    Innovation, transformation, and upgradation are at the root
                    of everything we do. Our strength is in excelling at process
                    and performance to drive the best results.
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
                          <a className="linking">Understand Clients Needs</a>
                        </h6>
                        <p className="m-t-20">
                          We make an operational blueprint after analyzing your
                          USP.Your idea is now our responsibility.
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
                          icon={faComment}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div className="">
                        <h6 className="font-medium">
                          <a className="linking">Effective Collaboration </a>
                        </h6>
                        <p className="m-t-20">
                          Fast-track your company&apos;s growth with
                          conversations that matter. We support you to increase
                          productivity and efficiency.
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
                          icon={faLightbulb}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div className="">
                        <h6 className="font-medium">
                          <a className="linking">Execute Ideas </a>
                        </h6>
                        <p className="m-t-20">
                          We materialize your ideas by designing products that
                          your customers need. Execution is what you need to do
                          to be successful
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
                          icon={faUserGear}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div className="">
                        <h6 className="font-medium">
                          <a className="linking">People We Serve </a>
                        </h6>
                        <p className="m-t-20">
                          We offer on-time delivery of your projects. We use
                          technology to make your life easier.
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
                          icon={faTrophy}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div className="">
                        <h6 className="font-medium">
                          <a className="linking">Motivate To Win</a>
                        </h6>
                        <p className="m-t-20">
                          Motivate to Win is a comprehensive guide starting from
                          the very definition of motivation, to its
                          implications.
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
                          icon={faHeadset}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div className="">
                        <h6 className="font-medium">
                          <a className="linking">Customer Support</a>
                        </h6>
                        <p className="m-t-20">
                          In the age of automation, we prioritize on-demand
                          hyper-care customer support. We&apos;re here for you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer feature9">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">How We Engage Our Client</h2>
                  <h6 className="subtitle">
                    We are your resource to grow and transform your business by
                    taking care of the entire product life cycle. We believe in
                    tech for the greater good.
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
                          icon={faThumbsUp}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a className="linking">
                            Ownership <i className="ti-arrow-right"></i>
                          </a>
                        </h5>
                        <p className="m-t-20">
                          Ownership is the stepping stone to transformative
                          company culture. We enable efficient systems that
                          positively reflect our performance.
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
                          icon={faGlobe}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a className="linking">
                            Integrity<i className="ti-arrow-right"></i>
                          </a>
                        </h5>
                        <p className="m-t-20">
                          We support you with the best-fitted solutions with
                          well-defined mechanisms that position you as a market
                          leader. We assist you in breaking down the
                          hierarchical barriers and unite your team to resolve
                          them collectively.
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
                          icon={faSliders}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a className="linking">
                            Trustworthiness<i className="ti-arrow-right"></i>
                          </a>
                        </h5>
                        <p className="m-t-20">
                          We&apos;re deeply embedded with our clients. We work
                          as your extended team and help you unlock greater
                          potential.
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
                          icon={faLayerGroup}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a className="linking">
                            Empathy <i className="ti-arrow-right"></i>
                          </a>
                        </h5>
                        <p className="m-t-20">
                          Our ethical and corporate responsibility empowers you
                          to solve modern-day problems with simplicity and
                          agility. Empathy is our cornerstone to understand
                          diverse perspectives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Column --> */}
              </div>
            </div>
          </div>
          {/* <!-- ============================================================== -->
                <!-- End Feature 3  -->
                <!-- ============================================================== --> */}

          {/* <!-- ============================================================== -->
                <!-- Feature 29 -->
                <!-- ============================================================== --> */}
          <div className="mini-spacer bg-info feature29 p-b-0">
            <div className="container wrap-feature-29">
              {/* <!-- Row --> */}
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Our Highlights</h2>
                  <h6 className="subtitle">
                    In the past decade, our accomplishments have spoken for
                    themselves. We&apos;re proud to have executed successful
                    products for global businesses.
                  </h6>
                </div>
                <div className="col-md-12 m-t-20 text-center">
                  <div className="collapse m-t-20" id="f29">
                    <div className="card card-body card-shadow">
                      <ul className="nav nav-tabs" id="myTab8" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="html-tab8"
                            data-toggle="tab"
                            href="#html9"
                            role="tab"
                            aria-controls="html"
                            aria-expanded="true"
                          >
                            HTML
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="css-tab8"
                            data-toggle="tab"
                            href="#css9"
                            role="tab"
                            aria-controls="css"
                          >
                            CSS
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Row --> */}
              <div className="row wrap-feature-29 text-white">
                <div className="col-lg-6 text-center">
                  <div className="row">
                    <div className="col-lg-12">
                      <FontAwesomeIcon
                        icon={faFaceSmile}
                        className="pr-3"
                        size="3x"
                      />
                      <h4 className="title">200+ Happy Clients</h4>
                      <p>
                        We&apos;ve worked with amazing teams who believed in
                        their vision and made us a part to fulfill them.
                      </p>
                    </div>
                    <div className="col-lg-12 m-t-20 m-b-20">
                      <FontAwesomeIcon
                        icon={faChartColumn}
                        className="pr-3"
                        size="3x"
                      />
                      <h4 className="title">10+ Years of Experience</h4>
                      <p>
                        The humble years of experience have made us realize how
                        far we&apos;ve come and how far we have the potential to
                        go.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 text-center m-b-30">
                  <div className="row">
                    <div className="col-lg-12">
                      <FontAwesomeIcon
                        icon={faAtom}
                        className="pr-3"
                        size="3x"
                      />
                      <h4 className="title">ISO 27001 Certified</h4>
                      <p>
                        Our practice of investing in people and processes has
                        empowered us to gain greater customer confidence.
                      </p>
                    </div>
                    <div className="col-lg-12 m-t-20 m-b-20">
                      <FontAwesomeIcon
                        icon={faIndustry}
                        className="pr-3"
                        size="3x"
                      />
                      <h4 className="title">5+ Industries Served</h4>
                      <p>
                        From working with Fortune 500 companies to working with
                        medium and small-sized companies, we&apos;ve gained
                        industry-specific knowledge that helps us perform
                        optimally.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ============================================================== -->
                <!-- End Feature 29 -->
                <!-- ============================================================== --> */}

          <div className="spacer team4">
            <div className="container">
              <div className="row justify-content-center m-b-30">
                <div className="col-md-7 text-center">
                  {/* <span className="label label-success label-rounded">Team 4</span> */}
                  <h2 className="title" style={{ paddingBottom: "2vh" }}>
                    Experienced &amp; Professional Team
                  </h2>
                  <h6 className="subtitle">
                    Our expertise and achievements come from the strong
                    workforce that strengthens Aexonic what it is today.
                  </h6>
                </div>
              </div>
              <div className="row m-t-30 justify-content-center">
                {/* <!-- column  --> */}
                <div className="col-lg-3 m-b-30">
                  {/* <!-- Row --> */}
                  <div className="row">
                    <div className="col-md-12 pro-pic">
                      <img
                        src="./images/team/t1.jpg"
                        alt="wrapkit"
                        className="img-responsive"
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="p-t-10">
                        <h5 className="title font-medium">Abhishek Prasad</h5>
                        <h6 className="subtitle">Director</h6>
                        <p>
                          Abhishek Prasad has extensive experience in the
                          deployment Business Solution. He has successfully led
                          strategy and deployment of business transformation
                          project and mobility solutions for enterprises.
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a>
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a>
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a>
                              <i className="fa fa-instagram"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a>
                              <i className="fa fa-behance"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Row --> */}
                </div>
                {/* <!-- column  -->
                            <!-- column  --> */}
                <div className="col-lg-3 m-b-30">
                  {/* <!-- Row --> */}
                  <div className="row">
                    <div className="col-md-12 pro-pic">
                      <img
                        src="./images/team/t2.jpg"
                        alt="wrapkit"
                        className="img-responsive"
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="p-t-10">
                        <h5 className="title font-medium">Aprajita Sinha</h5>
                        <h6 className="subtitle">Director</h6>
                        <p>
                          Aprajita Sinha has extensive experience in the
                          deployment Business Solution. She is Developing
                          corporate plans for a variety of HR matters such as
                          compensation, benefits, health and safety etc.
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a>
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a>
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a>
                              <i className="fa fa-instagram"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a>
                              <i className="fa fa-behance"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Row --> */}
                </div>
                {/* <!-- column  -->
                            <!-- column  --> */}
                <div className="col-lg-3 m-b-30">
                  {/* <!-- Row --> */}
                  <div className="row">
                    <div className="col-md-12 pro-pic">
                      <img
                        src="./images/team/t3.jpg"
                        alt="wrapkit"
                        className="img-responsive"
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="p-t-10">
                        <h5 className="title font-medium"> Vikas Ranjan</h5>
                        <h6 className="subtitle">Chief Technology Officer</h6>
                        <p>
                          Vikas Ranjan has multiple years of experience in
                          emerging technologies like IOT, AI/ML, Blockchain,
                          Chat Bots. He has nurtured multiple startups and
                          business to utilize emerging technologies to build
                          better solutions
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a>
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a>
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a>
                              <i className="fa fa-instagram"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a>
                              <i className="fa fa-behance"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Row --> */}
                </div>
                {/* <!-- column  -->
                            <!-- column  --> */}
              </div>
            </div>
          </div>

          {/* <!-- ============================================================== -->
                <!-- Feature 13  -->
                <!-- ============================================================== --> */}
          <div className=" spacer feature13 bg-light">
            <div className="container">
              {/* <!-- Row  --> */}
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  {/* <!-- <span className="label label-success label-rounded">Feature 13</span> --> */}
                  <h2 className="title">Our Values</h2>
                  <h6 className="subtitle">
                    To be your most-preferred IT solutions business partner to
                    help your company unlock its optimal potential.
                  </h6>
                </div>
              </div>
              {/* <!-- Row  --> */}
              <div className="row m-t-40">
                {/* <!-- Column --> */}
                <div className="col-lg-6 wrap-feature13-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <ul className="img-inline">
                      <li className="half-width">
                        <img
                          src="./images/services/1.png"
                          alt="wrapkit"
                          className="img-responsive rounded"
                        />
                      </li>
                      <li className="p-20 half-width">
                        <h5 className="font-medium m-t-10">
                          <a className="linking">Building Supreme Products</a>
                        </h5>
                        <p className="m-t-20">
                          End-to-end software product development that meets the
                          design and usability specs
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Column --> */}
                <div className="col-lg-6 wrap-feature13-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <ul className="img-inline">
                      <li className="half-width">
                        <img
                          src="./images/services/3.png"
                          alt="wrapkit"
                          className="img-responsive rounded"
                        />
                      </li>
                      <li className="p-20 half-width">
                        <h5 className="font-medium m-t-10">
                          <a className="linking">
                            Adaptive to Evolving Market Trends
                          </a>
                        </h5>
                        <p className="m-t-20">
                          After your product is released into the market, we
                          track it to refine for the better.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Column -->
                            <!-- Column --> */}
                <div className="col-lg-6 wrap-feature13-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <ul className="img-inline">
                      <li className="half-width">
                        <img
                          src="./images/services/2.png"
                          alt="wrapkit"
                          className="img-responsive rounded"
                        />
                      </li>
                      <li className="p-20 half-width">
                        <h5 className="font-medium m-t-10">
                          <a className="linking">Integrity in Everything</a>
                        </h5>
                        <p className="m-t-20">
                          To deliver ambitious results and provide
                          post-execution support with upgrades and enhancements
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Column --> */}
                <div className="col-lg-6 wrap-feature13-box">
                  <div
                    className="card card-shadow"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <ul className="img-inline">
                      <li className="half-width">
                        <img
                          src="./images/services/4.png"
                          alt="wrapkit"
                          className="img-responsive rounded"
                        />
                      </li>
                      <li className="p-20 half-width">
                        <h5 className="font-medium m-t-10">
                          <a className="linking">
                            Best Practices for Best Results
                          </a>
                        </h5>
                        <p className="m-t-20">
                          To help you engineer a reliable product that requires
                          low maintenance and performs optimally.{" "}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ============================================================== -->
                <!-- End Feature 13  -->
                <!-- ============================================================== --> */}

          {/* <!-- ============================================================== -->
                <!-- Feature 39  -->
                <!-- ============================================================== --> */}
          <div className="feature39 spacer wrap-feature39-box">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="/images/about-us/OurDiff.jpg"
                    className="img-fluid"
                    alt="wrapkit"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="card-body">
                    <h2 className="title text-uppercase">
                      Our Differentiators
                    </h2>

                    <h6 className="subtitle m-t-40 m-b-40">
                      It&apos;s not just the technology and tools we use but
                      also how we use them that drives an overall digital
                      transformation in your business that differentiates
                      Aexonic from the rest.
                    </h6>
                    {/* <!-- column  --> */}
                    <div className="d-flex no-block m-b-40">
                      <div className="display-4 m-r-20">
                        <FontAwesomeIcon
                          icon={faShieldHalved}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div>
                        <h4>Expertise You Trust</h4>
                        <h6 className="subtitle">
                          We bring the right expertise with performance that you
                          can experience and measure.
                        </h6>
                      </div>
                    </div>
                    {/* <!-- column  --> */}
                    <div className="d-flex no-block m-b-40">
                      <div className="display-4 m-r-20">
                        <FontAwesomeIcon
                          icon={faRecycle}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div>
                        <h4>Responsive and Reliable</h4>
                        <h6 className="subtitle">
                          We help you drive best practices across industries
                          that build your authority in your domain.
                        </h6>
                      </div>
                    </div>
                    {/* <!-- column  --> */}
                    <div className="d-flex no-block m-b-40">
                      <div className="display-4 m-r-20">
                        <FontAwesomeIcon
                          icon={faDatabase}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div>
                        <h4>Solutions You Need</h4>
                        <h6 className="subtitle">
                          We design & develop solutions and products to cater to
                          the market&apos;s and customers&apos; unique demands.
                        </h6>
                      </div>
                    </div>
                    {/* <!-- column  --> */}
                    <div className="d-flex no-block m-b-40">
                      <div className="display-4 m-r-20">
                        <FontAwesomeIcon
                          icon={faMicrochip}
                          className="text-info pr-3"
                          size="1x"
                        />
                      </div>
                      <div>
                        <h4>Engineering Technological Momentum</h4>
                        <h6 className="subtitle">
                          We help you transform your business by deploying
                          dynamic technologies and tools.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial2 spacer">
            <div className="container">
              <div className="heading"></div>
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  {/* <!-- <span className="label label-success label-rounded">Feature 13</span> --> */}
                  <h2 className="title">Success Stories</h2>
                  <h6 className="subtitle">
                    Explore through our customers how their work-life has been
                    simplified, digitalized and improved together with us.
                  </h6>
                </div>
              </div>
              <div className="owl-carousel owl-theme testi2 m-t-40">
                <div className="item">
                  <div className="row po-relative">
                    <div className="col-lg-6 col-md-6 align-self-center">
                      <button className="btn btn-circle btn-danger btn-md">
                        <i className="fa fa-quote-left"></i>
                      </button>
                      <h3 className="m-t-20 m-b-20">Elon Musk</h3>
                      <p>
                        I was deeply impressed by how quickly they worked and
                        how high the quality was. It was built well and they
                        delivered as expected. A lot of this was able to happen
                        with a high degree of autonomy and minimal feedback
                        through technical and website reviews.
                      </p>
                      <h5 className="m-t-30">Elon Musk</h5>
                      <h6 className="subtitle">CEO</h6>
                    </div>
                    <div className="col-lg-6 col-md-6 image-thumb hidden-md-down">
                      <img
                        src="/images/testimonial/1.jpg"
                        alt="wrapkit"
                        className="circle img-fluid"
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="item">
                  <div className="row po-relative">
                    <div className="col-lg-6 col-md-6 align-self-center">
                      <button className="btn btn-circle btn-danger btn-md">
                        <i className="fa fa-quote-left"></i>
                      </button>
                      <h3 className="m-t-20 m-b-20">Success Stories</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                      <h5 className="m-t-30">Simon Duo</h5>
                      <h6 className="subtitle">Partner, Brevin</h6>
                    </div>
                    <div className="col-lg-6 col-md-6 image-thumb hidden-md-down">
                      <img
                        src="/images/testimonial/2.jpg"
                        alt="wrapkit"
                        className="circle img-fluid"
                      />
                    </div>
                  </div>
                </div> */}
                {/* <div className="item">
                  <div className="row po-relative">
                    <div className="col-lg-6 col-md-6 align-self-center">
                      <button className="btn btn-circle btn-danger btn-md">
                        <i className="fa fa-quote-left"></i>
                      </button>
                      <h3 className="m-t-20 m-b-20">Success Stories</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                      <h5 className="m-t-30">Simon Duo</h5>
                      <h6 className="subtitle">Partner, Brevin</h6>
                    </div>
                    <div className="col-lg-6 col-md-6 image-thumb hidden-md-down">
                      <img
                        src="/images/testimonial/3.jpg"
                        alt="wrapkit"
                        className="circle img-fluid"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* <div className="client2 spacer ">
            <div className="container ">
              <div className="row justify-content-center ">
                <div className="col-md-7 text-center ">
                  <h2 className="title ">Our Partners &amp; Recognitions</h2>
                  <h6 className="subtitle ">
                    We&apos;re strengthened by companies and entrepreneurs who
                    believe in us. Here are some of the industry-leading
                    authorities that have accredited us.
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
          </div> */}
          {/* <!-- ============================================================== --> */}
          {/* <!-- Blog home 2  --> */}
          {/* <!-- ============================================================== --> */}
          <div className="blog-home3 spacer">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                  <h2 className="title">Our Partners &amp; Recognitions</h2>
                  <h6 className="subtitle">
                    We&apos;re strengthened by companies and entrepreneurs who
                    believed in us. Here are some of the industry-leading
                    authorities that have accredited us.
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
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="images/client/partnership.png"
                        alt="wrappixel kit"
                      ></img>
                    </a>
                    <div className="date-pos bg-success-gradiant ">
                      Partnerships and Collaboration
                    </div>
                    <h5 className="font-medium m-t-30">
                      <a href="#" className="link">
                        Techonologies started to change Drastically
                      </a>
                    </h5>
                    <p className="m-t-20">
                      You can relay on our amazing features list and also our
                      customer services will be great experience. Lorem ipsum
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="card"
                        data-aos="flip-up"
                        data-aos-duration="1200"
                      >
                        <a href="#">
                          <img
                            className="card-img-top"
                            src="images/client/logo9.png"
                            alt="wrappixel kit"
                          ></img>
                        </a>
                        <div className="date-pos bg-success-gradiant">
                          JOHN DOE &nbsp; &nbsp; SEPT 15, 2017
                        </div>
                        <h6 className="font-medium m-t-20">
                          <a href="#" className="link">
                            New Seminar on Newest Food Recipe from World&apos;s
                            Best
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="card"
                        data-aos="flip-up"
                        data-aos-duration="1200"
                      >
                        <a href="#">
                          <img
                            className="card-img-top"
                            src="images/client/logo3.png"
                            alt="wrappixel kit"
                          ></img>
                        </a>
                        <div className="date-pos bg-success-gradiant">
                          JOHN DOE &nbsp; &nbsp; SEPT 15, 2017
                        </div>
                        <h6 className="font-medium m-t-20">
                          <a href="#" className="link">
                            New Seminar on Newest Food Recipe from World&apos;s
                            Best
                          </a>
                        </h6>
                      </div>
                    </div>
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
                        <a href="#">
                          <img
                            className="card-img-top"
                            src="images/client/logo5.png"
                            alt="wrappixel kit"
                          ></img>
                        </a>
                        <div className="date-pos bg-success-gradiant">
                          JOHN DOE &nbsp; &nbsp; SEPT 15, 2017
                        </div>
                        <h6 className="font-medium m-t-20">
                          <a href="#" className="link">
                            New Seminar on Newest Food Recipe from World&apos;s
                            Best
                          </a>
                        </h6>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div
                        className="card"
                        data-aos="flip-up"
                        data-aos-duration="1200"
                      >
                        <a href="#">
                          <img
                            className="card-img-top"
                            src="images/client/logo6.png"
                            alt="wrappixel kit"
                          ></img>
                        </a>
                        <div className="date-pos bg-success-gradiant">
                          JOHN DOE &nbsp; &nbsp; SEPT 15, 2017
                        </div>
                        <h6 className="font-medium m-t-20">
                          <a href="#" className="link">
                            New Seminar on Newest Food Recipe from World &apos;s
                            Best
                          </a>
                        </h6>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div
                        className="card"
                        data-aos="flip-up"
                        data-aos-duration="1200"
                      >
                        <a href="#">
                          <img
                            className="card-img-top"
                            src="images/client/logo7.png"
                            alt="wrappixel kit"
                          ></img>
                        </a>
                        <div className="date-pos bg-success-gradiant">
                          JOHN DOE &nbsp; &nbsp; SEPT 15, 2017
                        </div>
                        <h6 className="font-medium m-t-20">
                          <a href="#" className="link">
                            New Seminar on Newest Food Recipe from World &apos;s
                            Best
                          </a>
                        </h6>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div
                        className="card"
                        data-aos="flip-up"
                        data-aos-duration="1200"
                      >
                        <a href="#">
                          <img
                            className="card-img-top"
                            src="images/client/logo8.png"
                            alt="wrappixel kit"
                          ></img>
                        </a>
                        <div className="date-pos bg-success-gradiant">
                          JOHN DOE &nbsp; &nbsp; SEPT 15, 2017
                        </div>
                        <h6 className="font-medium m-t-20">
                          <a href="#" className="link">
                            New Seminar on Newest Food Recipe from World &apos;s
                            Best
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ============================================================== --> */}
          {/* <!-- End Blog home 2  --> */}
          {/* <!-- ============================================================== --> */}

          {/* <!-- Pricing 5  --> */}
          {/* <!-- ============================================================== --> */}
          <div className="pricing5 spacer bg-light">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                  <h2 className="title">Certification</h2>
                  <h6 className="subtitle">
                    We offer 100% satisafaction and Money back Guarantee
                  </h6>
                  <div className="switcher-box m-t-40"></div>
                </div>
              </div>
              <div
                className="row text-center pricing-box"
                style={{ background: "white" }}
              >
                <div className="col-md-4">
                  <div
                    className="card card-shadow"
                    style={{
                      background: "url(/images/pricing/p5-img1.jpg)no-repeat",
                    }}
                  >
                    <div className="card-body">
                      <h6 className="text-white m-t-30 m-b-0"></h6>
                      <h2 className="text-white m-t-0 monthly">
                        Cloud Platform
                      </h2>
                      {/* <h2 className="text-white m-t-0 yearly">$1000</h2> */}
                      <ul className="general-listing only-li">
                        <li>
                          <img
                            src="/images/pricing/aws-icon.png"
                            alt="wrapkit"
                            className="img-fluid"
                          />
                        </li>
                        <li>
                          <img
                            src="/images/pricing/google-cloud-icon.png"
                            alt="wrapkit"
                            className="img-fluid"
                          />
                        </li>
                        <li>
                          <img
                            src="/images/pricing/microsoft-azure-icon.png"
                            alt="wrapkit"
                            className="img-fluid"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 middle-box">
                  <div
                    className="card card-shadow"
                    style={{
                      background: "url(/images/pricing/p5-img2.jpg)no-repeat",
                    }}
                  >
                    <div className="card-body">
                      <h6 className="text-white m-t-30 m-b-0"></h6>
                      <h2 className="text-white m-t-0 monthly">
                        Cyber Security
                      </h2>
                      {/* <h2 className="text-white m-t-0 yearly">$2000</h2> */}
                      <div className="star-plan m-t-20">
                        <img src="/images/pricing/star.png" alt="wrapkit" />
                      </div>
                      <ul className="general-listing only-li">
                        <li>
                          <img
                            src="/images/pricing/aws-icon.png"
                            alt="wrapkit"
                            className="img-fluid"
                          />
                        </li>
                        <li>
                          <img
                            src="/images/pricing/google-cloud-icon.png"
                            alt="wrapkit"
                            className="img-fluid"
                          />
                        </li>
                        <li>
                          <img
                            src="/images/pricing/microsoft-azure-icon.png"
                            alt="wrapkit"
                            className="img-fluid"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="card card-shadow"
                    style={{
                      background: "url(images/pricing/p5-img3.jpg)no-repeat",
                    }}
                  >
                    <div className="card-body">
                      <h6 className="text-white m-t-30 m-b-0"></h6>
                      <h2 className="text-white m-t-0 monthly">
                        Enterprise Solutions
                      </h2>
                      {/* <h2 className="text-white m-t-0 yearly">$3000</h2> */}
                      <ul className="general-listing only-li">
                        <li>
                          <img
                            src="/images/pricing/aws-icon.png"
                            alt="wrapkit"
                            className="img-fluid"
                          />
                        </li>
                        <li>
                          <img
                            src="/images/pricing/google-cloud-icon.png"
                            alt="wrapkit"
                            className="img-fluid"
                          />
                        </li>
                        <li>
                          <img
                            src="/images/pricing/microsoft-azure-icon.png"
                            alt="wrapkit"
                            className="img-fluid"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* //===============================================================// */}
          <div className="blog-home1 spacer  ">
            <div className="container ">
              <div className="row justify-content-center ">
                <div className="col-md-8 text-center ">
                  <h2 className="title ">News</h2>
                  <h6 className="subtitle ">
                    Never miss an update about IT news, digital transformation,
                    and innovation in tech. Subscribe and follow our blogs for
                    more.
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
                        src="https://media.graphassets.com/7L6XaEk2QwifMjTMfttC "
                        alt="wrappixel kit "
                      />
                    </a>
                    <div className="p-30 ">
                      <div className="d-flex no-block font-14 ">
                        <a href="# ">AI</a>
                        <span className="ml-auto ">Sept 18, 2017</span>
                      </div>
                      <h5 className="font-medium m-t-20 ">
                        <a href="# " className="link ">
                          Role of AI (Artificial Intelligence) in Healthcare
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
                        src="https://media.graphassets.com/1x8IvDBSjWnq5eYDlZgg "
                        alt="wrappixel kit "
                      />
                    </a>
                    <div className="p-30 ">
                      <div className="d-flex no-block font-14 ">
                        <a href="# ">Big Data </a>
                        <span className="ml-auto ">Sept 18, 2017</span>
                      </div>
                      <h5 className="font-medium m-t-20 ">
                        <a href="# " className="link ">
                          Big Data – Transforming Business All Over!
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
                        src="https://media.graphassets.com/JeirCCsGQUCfcdTABPlr"
                        alt="wrappixel kit "
                      />
                    </a>
                    <div className="p-30 ">
                      <div className="d-flex no-block font-14 ">
                        <a href="# ">connecting-multiple-platforms</a>
                        <span className="ml-auto ">Sept 18, 2017</span>
                      </div>
                      <h5 className="font-medium m-t-20 ">
                        <a href="# " className="link ">
                          Connecting-multiple-platforms
                        </a>
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

export default Aboutus;
