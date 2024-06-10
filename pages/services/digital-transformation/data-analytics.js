import Head from "next/head";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faLightbulb,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

const DataAnalytics = () => {
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
        <title>Aexonic : Services / Data Analytics</title>
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
                      {" "}
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
                                {" "}
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
                                  <a className="cursor-pointer dropdown-item active_menu">
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
                      {" "}
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
                  <h1 className="title banner-text">Data and Analytics</h1>
                  <h6 className="subtitle op-8 banner-text">
                    Helping you make informed and recession-proof decisions with
                    results-driven data and analytics solutions.
                  </h6>
                </div>
                {/* <!-- Column --> */}
              </div>
            </div>
          </div>
          {/* <!-- ============================================================== -->
                        <!-- Testimonial 9 -->
                        <!-- ============================================================== --> */}

          <div className="feature28">
            <div className="row justify-content-center spacer">
              <div className="col-md-7 text-center">
                <h2 className="title">Key Features of Data Analytics</h2>
                <h6 className="subtitle">
                  With decades of experience in helping startups,
                  small-and-medium-sized businesses, and enterprises streamline
                  large chunks of data into surprisingly simple processes.
                </h6>
              </div>
            </div>
            <div className="wrap-feature-28s row">
              {/* <div className="col-lg-6 bg-cover" style="background-image:url(../assets/images/features/feature28/img1.jpg)"></div> */}
              <div
                className="col-lg-6 bg-cover"
                style={{
                  backgroundImage:
                    "url(https://img.freepik.com/premium-photo/big-data-technology-business-finance-concept_31965-3535.jpg?w=996)",
                }}
              ></div>
              <div className="col-lg-6">
                <div className="side-content both-space">
                  {/* <span className="label label-info label-rounded">Great Feature 28</span> */}
                  <h2 className="title">Data management services</h2>
                  <h6 className="subtitle">
                    The value of data can easily be lost amidst data
                    redundancies complex technology landscapes. We can simplify
                    your environments while managing and governing the data to
                    best fit your analytics needs. To ensure maximum security
                    and data quality, our experts help in Master Data
                    Management, Data Cleansing, Data Migration, Data
                    Integration, Data Masking and synthetization.
                  </h6>
                </div>
              </div>
            </div>
            <div className="wrap-feature-28 row">
              <div className="col-lg-6">
                <div className="side-content both-space text-left pull-right">
                  {/* <span className="label label-info label-rounded">Great Feature 28</span> */}
                  <h2 className="title">Advanced analytics & visualization</h2>
                  <h6 className="subtitle">
                    In the area of advanced analytics, the ability to implement
                    new business use cases quickly is crucial. We help you adopt
                    predictive and prescriptive analytic capabilities to truly
                    unlock the power of data using advanced visualization. Our
                    advisors you throughout your analytics strategy, aligning
                    your roadmap and strategic business needs.
                  </h6>
                </div>
              </div>
              {/* <div className="col-lg-6 bg-cover" style="background-image:url(../assets/images/features/feature28/img2.jpg)"></div> */}
              <div
                className="col-lg-6 bg-cover"
                style={{
                  backgroundImage:
                    "url(https://img.freepik.com/free-photo/teenager-dressed-white-t-shirt-using-virtual-reality-glasses-with-graph-charts-numbers-lines-technology-concept_613910-5097.jpg?t=st=1666058268~exp=1666058868~hmac=90e6841d7b218059c9731e235c9e83e0785322972c8ae477ee2403a77f4b38cd)",
                }}
              ></div>
              <div className="col-md-12 text-center"></div>
            </div>
            <div className="wrap-feature-28s row">
              {/* <div className="col-lg-6 bg-cover" style="background-image:url(../assets/images/features/feature28/img1.jpg)"></div> */}
              <div
                className="col-lg-6 bg-cover"
                style={{
                  backgroundImage:
                    "url(https://img.freepik.com/premium-vector/cloud-technology-concept-online-computing-technology-big-data-flow-processing-concept_82984-793.jpg?w=996)",
                }}
              ></div>
              <div className="col-lg-6">
                <div className="side-content both-space">
                  {/* <span className="label label-info label-rounded">Great Feature 28</span> */}
                  <h2 className="title">
                    Data insight & analytics on Public Cloud platforms
                  </h2>
                  <h6 className="subtitle">
                    Make the best of Public Cloud data platforms like Azure and
                    AWS. We help you get on top of advanced capabilities such as
                    data lakes, advanced statistical techniques, Machine
                    Learning (ML) and Artificial Intelligence (AI). Our
                    standardized data platform services help shorten the ramp-up
                    time of future architecture and services.
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div
            className="spacer feature21 wrap-feature21-box"
            style={{
              backgroundImage:
                " url(https://dynamicconsultantsgroup.com/blogs/wp-content/uploads/2017/11/hero_1259x472.jpg)",
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
                      we help you to fast-track your digital transformation
                      journey.
                    </h2>

                    <strong>
                      Our data management and advanced analytics experts help
                      you transform existing data landscapes into a modernized,
                      lean, agile and future-ready ecosystem.
                    </strong>
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
                      icon={faDatabase}
                      className=" pr-3"
                      size="1x"
                    />
                  </div>

                  <h4 className="box-title">Stronger business impact</h4>
                  <p className="op-8">
                    Realize how processes have been implemented compared to
                    design. Understand what causes the most significant
                    deviations in productivity.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 bg-primary">
                <div className="wrap-feature10-box text-center">
                  <div className="display-4 m-b-20">
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      className=" pr-3"
                      size="1x"
                    />
                  </div>
                  <h4 className="box-title">Better process efficiency</h4>
                  <p className="op-8">
                    Data driven automation helps you automate the right things
                    at the right time. Automation operates 24/7/365 without
                    errors, creating measurable cost savings in real time.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 bg-orange">
                <div className="wrap-feature10-box text-center">
                  <div className="display-4 m-b-20">
                    <FontAwesomeIcon
                      icon={faLightbulb}
                      className=" pr-3"
                      size="1x"
                    />
                  </div>

                  <h4 className="box-title">
                    Steady improvement and innovation
                  </h4>
                  <p className="op-8">
                    Data and automation can engine new products and services. We
                    help you achieve steady improvement to boost customer
                    satisfaction and revenue.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer bg-light">
            <div className="container">
              {/* <!-- Row  --> */}
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">How can we help you?</h2>
                  <h6 className="subtitle">
                    Data analytics can help an organization with everything from
                    personalizing a marketing pitch for an individual customer
                    to identifying and mitigating risks to its business
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
                        src="https://img.freepik.com/free-photo/paper-analysis_1098-15678.jpg?w=900&t=st=1666083745~exp=1666084345~hmac=a99837a9e4bad8c529935776ce7cb4a3f13471f163d43ca817b04793fbf3f1bb"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="card-body">
                      <h5 className="font-medium m-b-0">
                        Data management & analytics
                      </h5>
                      <p className="m-b-0 m-t-20 font-14">
                        Become data-driven by mastering data governance and
                        analytics. We help you to predict and solve real
                        business problems and enable new services for your
                        business needs.Data is being generated in all parts of
                        organizations at increasing speed
                      </p>
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
                        src="https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?w=900&t=st=1666083953~exp=1666084553~hmac=9d6deb485c6f4a71d55cbc0e79fbac09d73a7b31dc94108a721d2eb9d8b5455a"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="card-body">
                      <h5 className="font-medium m-b-0">
                        Intelligent automation and robotics
                      </h5>
                      <p className="m-b-0 m-t-20 font-14">
                        Intelligent business process management and automation
                        services save you money, improve accuracy and increase
                        productivity. Automation has been used for years, but
                        the full business potential has yet to be realized.
                      </p>
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
                        src="https://img.freepik.com/free-photo/hand-using-laptop-computer-with-virtual-screen-document-online-approve-paperless-quality-assurance-erp-management-concept_616485-61.jpg?w=900&t=st=1666084869~exp=1666085469~hmac=a276e1f4cf699ec4cd186b9192759f1040797aad2a8864058fc7a72f73c793f1"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="card-body">
                      <h5 className="font-medium m-b-0">
                        Data integration and API management
                      </h5>
                      <p className="m-b-0 m-t-20 font-14">
                        Create a business ecosystem that connects internal and
                        external partners. We help you react to market needs,
                        increase transformation velocity, and leverage the value
                        of data flows.
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

export default DataAnalytics;
