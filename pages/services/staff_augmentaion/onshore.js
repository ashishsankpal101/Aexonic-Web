import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faLayerGroup,
  faFlask,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

const Onshore = () => {
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
        <title>Aexonic : Services / Staff Augmentation / Onshore</title>
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
                                  <a className="cursor-pointer dropdown-item active_menu">
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
                  <h1 className="title banner-text">Onshore development</h1>
                  <h6 className="subtitle op-8 banner-text">
                    Offload your work to us and focus more on your core business
                    strategy.
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
                    We Work with You As Technology Partner
                  </h2>
                  <h6 className="subtitle">
                    Software outsourcing has become a go-to business strategy
                    for businesses of all sizes and domains. Onshore outsourcing
                    can reduce costs while maintaining the process visibility
                    and accessibility necessary to meet your business
                    requirements.
                    <br />
                    <br />
                    At Aexonic, our onshore outsourcing services typically
                    include custom software development, technical support
                    services, mobile application development, web development,
                    data analytics.
                  </h6>
                </div>
                <div className="col-lg-5">
                  <div className="row wrap-feature-12">
                    <div className="col-md-12">
                      <img
                        src="https://img.freepik.com/free-vector/developer-laptop-computer-with-open-robotic-soft-open-automation-architecture-open-source-robotics-soft-free-development-concept-bright-vibrant-violet-isolated-illustration_335657-474.jpg?w=2000"
                        className="rounded img-responsive m-t-3"
                        alt="wrapkit "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="bg-light spacer feature3">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Our Offerings</h2>
                  <h6 className="subtitle">
                    With utmost efficiency and sincerity, we help you build
                    products, services, and experiences that make your company
                    the best in your field.
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
                          icon={faLightbulb}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a href="javascript:void(0)" className="linking">
                            Strategy &amp; Innovation
                          </a>
                        </h5>
                        <p className="m-t-20">
                          With strategic mentoring, auditing, and professional
                          coaching services to assist you with the latest cloud,
                          mobile, and enterprise services.
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
                          icon={faLayerGroup}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a href="javascript:void(0)" className="linking">
                            Product &amp; Experience
                          </a>
                        </h5>
                        <p className="m-t-20">
                          We brainstorm, develop, and assist you in building the
                          most advanced IT products. Product experience is a
                          subset of the entire user experience.
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
                          icon={faFlask}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a href="javascript:void(0)" className="linking">
                            Scalable solutions
                          </a>
                        </h5>
                        <p className="m-t-20">
                          Our team identifies the most challenging business
                          challenges you might be facing and works to develop
                          solutions to achieve your ultimate business objectives
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
                          icon={faSnowflake}
                          className="text-info pr-3"
                          size="3x"
                        />
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">
                          <a href="javascript:void(0)" className="linking">
                            Brand Design &amp; Systems
                          </a>
                        </h5>
                        <p className="m-t-20">
                          We help you become more competitive and encourage you
                          to use technology to the maximum potential. The
                          branding style and assets are important in brand
                          design system.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div
            className="spacer feature21 wrap-feature21-box"
            style={{
              backgroundImage: " url(/images/onshore/onshoreBanner.jpg)",
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
                      We Create New Way For Your Business Growth
                    </h2>
                    <p className="op-8">
                      IT outsourcing is growing fast in every industry vertical,
                      as outsourcing firms are becoming more sophisticated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer feature6">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">
                    We incubate new possibilities for your business
                  </h2>
                  <h6 className="subtitle">
                    Our onshore development center works as your internal
                    development team to craft tech solutions and make your work
                    processes agile.
                  </h6>
                </div>
              </div>

              <div className="row m-t-40">
                <div className="col-md-4 wrap-feature6-box">
                  <div
                    className="card bg-success-gradiant text-white"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div className="card-body">
                      <h6 className="font-medium text-white">
                        Follow The Same Time Zone
                      </h6>
                      <p className="m-t-20">
                        No deadline delay due to time zone differences. We work
                        as per your working hours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 wrap-feature6-box">
                  <div
                    className="card bg-info-gradiant text-white"
                    data-aos="fade-down"
                    data-aos-duration="1200"
                  >
                    <div className="card-body">
                      <h6 className="font-medium text-white">Proximity</h6>
                      <p className="m-t-20">
                        If your outsourcer is only a few miles away you can
                        always have a face-to-face interaction.
                        {/* making
                        collaboration faster. */}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 wrap-feature6-box">
                  <div
                    className="card bg-danger-gradiant text-white"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <div className="card-body">
                      <h6 className="font-medium text-white">Communication</h6>
                      <p className="m-t-20">
                        We get familiarized with your work culture and ensure
                        transparency in communication with efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light spacer feature12">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="m-b-30 m-t-20">
                    Key benefits of Onshore development
                  </h2>
                  <h4 className="text-muted font-light">
                    We at Aexonic focus on delivering operational excellence,
                    service excellence and making the digital platforms
                    future-ready!
                  </h4>
                  <div className="row">
                    <div className="col-md-6 m-t-30">
                      <h5 className="font-medium">Real-Time Collaboration</h5>
                      <p>
                        We assumed that the collaboration is much smoother and
                        effective as there is no time-zone difference.
                      </p>
                    </div>
                    <div className="col-md-6 m-t-30">
                      <h5 className="font-medium">No Language Barrier</h5>
                      <p>
                        Our team Speak the same language and understanding the
                        same culture will significantly contribute to the
                        project&apos;s success.
                      </p>
                    </div>
                    <div className="col-md-6 m-t-30">
                      <h5 className="font-medium">In-Person Meetings</h5>
                      <p>
                        Aexonic team can have live, in-person meetings if our
                        outsourcing partner is nearby. We all have used to
                        online meetings and remote working that in-person
                        meetings might feel unnecessary.
                      </p>
                    </div>
                    <div className="col-md-6 m-t-30">
                      <h5 className="font-medium">
                        Local Developers Understand The Local Market
                      </h5>
                      <p>
                        We are serving a local audience, working with a local
                        outsourcing partner they&apos;ll likely understand your
                        market better than someone in another country.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6" style={{ marginTop: "10rem" }}>
                  <div className="row wrap-feature-12 ">
                    <div className="col-md-6 ">
                      <div className="row">
                        <div className="col-md-12">
                          <img
                            src="https://img.freepik.com/premium-photo/futuristic-industry-4-0-engineering-concept_31965-4075.jpg?w=826"
                            className="rounded img-shadow img-responsive"
                            alt="wrapkit"
                          />
                        </div>
                        <div className="col-md-12">
                          <img
                            src="https://img.freepik.com/free-photo/woman-touching-power-button-virtual-screen-smart-home-technology_53876-104196.jpg?w=900&t=st=1666961878~exp=1666962478~hmac=6949bcdb577333cbf15ee19268b1a823b13975d02ad856797e3b48734fc2d686"
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
                            src="https://img.freepik.com/free-photo/businessman-with-light-bulb-his-hand_1232-891.jpg?w=996&t=st=1666961920~exp=1666962520~hmac=a38645b943baf318628ca9c3893ffb26e15e1a8fcb3b1952d4b1629c2a40fa0b"
                            className="rounded img-shadow img-responsive"
                            alt="wrapkit"
                          />
                        </div>
                        <div className="col-md-12">
                          <img
                            src="https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595843.jpg?w=900&t=st=1666961958~exp=1666962558~hmac=7598ba5dc299595edb24e91a713c3837433fd6e58f3451c0d5206cb56ce46501"
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
    </div>
  );
};

export default Onshore;
