import Head from "next/head";
import { React, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCropSimple,
  faCoins,
  faRocket,
  faGlobe,
  faTruckFast,
  faKitMedical,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";

const Professional = () => {
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
        <title>Aexonic : Industries / Professional Services</title>
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
                            <a className="dropdown-item">
                              Technology and Software
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/professional_service">
                            <a className="dropdown-item active_menu">
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
                  <h1 className="title banner-text">Professional Services</h1>
                  <h6 className="subtitle op-8 banner-text">
                    We are a team of passionate people who love what we do.
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
                    Navigate your Next in Professional Services
                  </h2>
                  <h6 className="subtitle">
                    Aexonic supports professional services organizations by
                    designing and implementing solutions for the smooth delivery
                    of audit, tax, and legal services while leveraging new and
                    emerging technologies.
                    <br />
                    <br />
                    Our partners with professional services organizations to
                    navigate business challenges and drive business
                    transformation. We automate processes, modernize IT
                    infrastructure, integrate systems, and distill business
                    insights to empower professionals.
                  </h6>
                </div>
                <div className="col-lg-5">
                  <div className="row wrap-feature-12">
                    <div className="col-md-12">
                      <img
                        src="https://img.freepik.com/free-vector/communication-flat-icon_1262-18771.jpg?w=740&t=st=1669120392~exp=1669120992~hmac=d746a343df00cabb51a5ca130383d76daf045438ced94dc36e5a7c24fffb1407"
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
            className="spacer feature42"
            style={{
              backgroundImage:
                "linear-gradient(255deg, #000000, transparent), url(https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80)",
            }}
          >
            <div className="row justify-content-center">
              <div
                className="col-md-10 col-lg-7 text-center"
                data-aos="fade-up"
              >
                <h2 className="title text-white">
                  Our roles in the professional services sector
                </h2>
                <div className="row wrap-feature43-box">
                  <div
                    className="col-md-6"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <h2 className="text-white display-5">
                      <FontAwesomeIcon
                        icon={faCropSimple}
                        className=" pr-3 "
                        size="1x"
                      />
                    </h2>
                    <h5 className="title text-blue">Consulting</h5>
                    <h6 className="text-white">
                      working with businesses to reduce costs or reorganise for
                      maximum efficiency
                    </h6>
                  </div>
                  <div
                    className="col-md-6"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <h2 className="text-white display-5">
                      <FontAwesomeIcon
                        icon={faCoins}
                        className=" pr-3 "
                        size="1x"
                      />
                    </h2>
                    <h5 className="title text-blue">Financial Advisory </h5>
                    <h6 className="text-white">
                      Advising businesses on investments and how to best manage
                      their money
                    </h6>
                  </div>
                  <div
                    className="col-md-6"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <h2 className="text-white display-5">
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className=" pr-3 "
                        size="1x"
                      />
                    </h2>
                    <h5 className="title text-blue">Optimize audit</h5>
                    <h6 className="text-white">
                      We combine deep data analytics with machine learning to
                      optimize the workforce for audit services
                    </h6>
                  </div>
                  <div
                    className="col-md-6"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <h2 className="text-white display-5">
                      <FontAwesomeIcon
                        icon={faRocket}
                        className=" pr-3 "
                        size="1x"
                      />
                    </h2>
                    <h5 className="title text-blue">Corporate Solutions</h5>
                    <h6 className="text-white">
                      Our digital solutions focus on talent transformation by
                      supporting learning and collaboration.
                    </h6>
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
                    src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    className="img-fluid"
                    alt="wrapkit"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="card-body">
                    <h2 className="title text-uppercase">
                      Aexonic experts discuss how cloud services transform the
                      business landscape
                    </h2>
                    <p className="m-t-40 m-b-40">
                      We drive operational excellence at professional services
                      organizations
                    </p>

                    <div className="d-flex no-block m-b-40">
                      <div className="display-4 m-r-20">
                        <FontAwesomeIcon
                          icon={faTruckFast}
                          className="text-info pr-3 "
                          size="1x"
                        />
                      </div>
                      <div>
                        <h4>Consumer Packaged Goods, Retail and Logistics</h4>
                        <h6 className="subtitle">
                          Our aimed is understanding the cloud initiatives for
                          Consumer Packaged Goods, Retail and Logistics
                          companies.
                        </h6>
                      </div>
                    </div>

                    <div className="d-flex no-block m-b-40">
                      <div className="display-4 m-r-20">
                        <FontAwesomeIcon
                          icon={faKitMedical}
                          className="text-info pr-3 "
                          size="1x"
                        />
                      </div>
                      <div>
                        <h4>Healthcare</h4>
                        <h6 className="subtitle">
                          Aexonic understanding the cloud initiatives for
                          Healthcare and Life Sciences companies.
                        </h6>
                      </div>
                    </div>

                    <div className="d-flex no-block m-b-40">
                      <div className="display-4 m-r-20">
                        <FontAwesomeIcon
                          icon={faIndustry}
                          className="text-info pr-3 "
                          size="1x"
                        />
                      </div>
                      <div>
                        <h4>Manufacturing</h4>
                        <h6 className="subtitle">
                          Manufacturers expect operational outcomes from their
                          cloud programs such as a standardized and integrated
                          technology landscape, reduced time to market.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer bg-light feature2">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Our offerings</h2>
                  <h6 className="subtitle">
                    Our offerings for professional services organizations are
                    based on three principles:
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
                      src="https://img.freepik.com/free-vector/sphere-grid-wave-with-binary-code-ai-artificial-intelligence-logo-hand-machine-learning-concept_127544-855.jpg?w=900&t=st=1669121333~exp=1669121933~hmac=6834a373693215939c6b44b41fc86eb920944e162cac629800f1f0122d0f0e35"
                      alt="wrappixel kit"
                    />
                    <div className="card-body text-center">
                      <h5 className="font-medium">
                        Artificial intelligence (AI)
                      </h5>
                      <p className="m-t-20">
                        Processes a huge volume of structured and unstructured
                        data sets, distills actionable business insights, and
                        automates processes by capitalizing on cognitive
                        solutions.
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
                      src="https://img.freepik.com/free-photo/teamwork-designers_1098-13045.jpg?w=900&t=st=1669121548~exp=1669122148~hmac=36fee04de2dc9fae0ab02e25b452d2718be85db7869ecec8ba5b09d922ba6a34"
                      alt="wrappixel kit"
                    />
                    <div className="card-body text-center">
                      <h5 className="font-medium">Always-on learning</h5>
                      <p className="m-t-20">
                        Enables continuous assimilation and sharing of knowledge
                        with an immersive learning platform. Learning is the
                        process of acquiring new, or modifying existing,
                        knowledge, behaviors.
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
                      src="https://img.freepik.com/free-photo/focused-businesspeople-reading-documents-with-statistics-successful-concentrated-office-employers-suits-meeting-office-room-studying-reports-teamwork-business-management-concept_74855-7250.jpg?w=900&t=st=1669121605~exp=1669122205~hmac=9e961044adb14f0e7451b371da1082158517c8f33dfcbc96e20f32723af8a1e5"
                      alt="wrappixel kit"
                    />
                    <div className="card-body text-center">
                      <h5 className="font-medium">Agile digital at scale</h5>
                      <p className="m-t-20">
                        Enhances performance through microservices-based
                        integration, blockchain networks, and real-time data
                        analytics. Agile helps you familiarize yourself with
                        complex software and IT skills.
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

export default Professional;
