import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const careers = () => {
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
        <title>Aexonic : Career</title>
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
                    src="images/aexonic-logo_8.png"
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
                    {/* <li className="nav-item dropdown">
                                            <Link href="/industry">
                                                <a className="nav-link dropdown-toggle" id="h6-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Industries
                                                </a>
                                            </Link>

                                        </li> */}

                    <li className="nav-item dropdown">
                      {" "}
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
                          className="nav-link dropdown-toggle active"
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
              backgroundImage: "url(images/services/Banner/team_aug.jpeg)",
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
                  <h1 className="title banner-text">Careers</h1>
                  <h6 className="subtitle op-8 banner-text">
                    We are a team of passionate people who love what we do.
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
                  {/* <!-- <div className="col-md-12 text-center m-b-40"><img src="images/services.jpg" alt="wrapkit" className="img-fluid" /></div> --> */}
                  <h2 className="m-b-30 m-t-20">Our Culture</h2>
                  <h6 className="subtitle">
                    We are proud of having a team-first culture.
                    <br></br> <br></br> We are a group of diverse individuals
                    united by a vision to empower businesses with our
                    high-quality product development and transformation
                    services.
                    <br></br> <br></br> We design, test, and deploy technologies
                    to architect a robust product engineering methodology that
                    accelerates businesses&apos; growth. If you are excited
                    about working in a high-paced environment, and with global
                    clients, then Aexonic welcomes you!
                    <br></br> <br></br>At Aexonic, customer and employee success
                    are the top two priorities. Together, they strengthen our
                    ethos and reflect our external and internal army of brand
                    ambassadors. We work smart and celebrate together.
                    <br></br> <br></br>We prioritize innovation, transformation,
                    and growth. If you want to take your career to new heights,
                    join Aexonic.
                  </h6>
                </div>
                <div className="col-lg-5">
                  <div className="row wrap-feature-12">
                    <div className="col-md-12">
                      <img
                        src="./images/graphic-designing.png"
                        className="rounded img-responsive m-t-3"
                        alt="wrapkit "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer feature43 bg-light">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-5"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <h2 className="title">What we look for</h2>
                  <h6 className="subtitle">
                    Aexonic favors people who can walk their talk. Those who can
                    work in a team and still own their work autonomously. You
                    are detail-oriented, adaptable to new changes, and take
                    action. This is what strengthens Aexonic as a team.
                  </h6>
                </div>
                <div className="col-lg-6 ml-auto">
                  <div className="row wrap-feature43-box">
                    <div
                      className="col-md-6"
                      data-aos="fade-right"
                      data-aos-duration="1200"
                    >
                      <h2 className="text-success-gradiant display-5">
                        <i className="icon-Car-Wheel"></i>
                      </h2>
                      <h5 className="title">Critical Thinking </h5>
                      <h6 className="subtitle">
                        You acknowledge and implement it. You have a growth
                        mindset and aspire to be better.
                      </h6>
                    </div>
                    <div
                      className="col-md-6"
                      data-aos="fade-left"
                      data-aos-duration="1200"
                    >
                      <h2 className="text-success-gradiant display-5">
                        <i className="icon-Target"></i>
                      </h2>
                      <h5 className="title">Right amount of ambition </h5>
                      <h6 className="subtitle">
                        Your eyes are on the prize. You are an ambitious and
                        fast learner.
                      </h6>
                    </div>
                    <div
                      className="col-md-6"
                      data-aos="fade-right"
                      data-aos-duration="1200"
                    >
                      <h2 className="text-success-gradiant display-5">
                        <i className="icon-Mouse-3"></i>
                      </h2>
                      <h5 className="title"> Keep on learning</h5>
                      <h6 className="subtitle">
                        You work until it&apos;s right. And be accountable for
                        it.
                      </h6>
                    </div>
                    <div
                      className="col-md-6"
                      data-aos="fade-left"
                      data-aos-duration="1200"
                    >
                      <h2 className="text-success-gradiant display-5">
                        <i className="icon-Car-Wheel"></i>
                      </h2>
                      <h5 className="title">Be curious about everything</h5>
                      <h6 className="subtitle">
                        You light the room with new ideas. You have a knack for
                        innovative products.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ============================================================== -->
                <!-- Features 21  -->
                <!-- ============================================================== --> */}
          {/* <div className="spacer feature21 wrap-feature21-box" style="background-image:url(images/bg1.jpg)"> */}
          <div
            className="spacer feature21 wrap-feature21-box"
            style={{ backgroundImage: "url(images/bg1.jpg)" }}
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
                      Don&apos;t go by Queue, Create your Own Way Faster
                    </h2>
                    <p className="op-8">
                      Don&apos;t just come up with an "out-of-the-box" idea.
                      Create your own box and design it with your energy.
                    </p>{" "}
                    <a
                      className="btn btn-info-gradiant btn-md btn-arrow m-t-20"
                      data-toggle="collapse"
                      href="#"
                    >
                      <span>
                        Join Us <i className="ti-arrow-right"></i>
                      </span>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ============================================================== -->
                <!-- Features 21  -->
                <!-- ============================================================== --> */}
          <div className="spacer feature24 bg-light ">
            <div className="container ">
              {/* <!-- Row --> */}
              <div className="row justify-content-center ">
                <div className="col-md-7 text-center ">
                  {/* <!-- <span className="label label-success label-rounded ">Feature 24</span> --> */}
                  <h2 className="title ">Why Join Aexonic?</h2>
                  <h6 className="subtitle ">
                    Working at Aexonic is not just about having a job that makes
                    your ends meet. Here, you have the opportunity to explore
                    your curiosity, fulfill your ambitions, and take success
                    into your own hands.
                  </h6>
                </div>
              </div>
              {/* <!-- Row --> */}
              <div className="row wrap-feature-24 ">
                {/* <!-- Column --> */}
                <div className="col-lg-3 col-md-6 ">
                  <div className="card card-shadow ">
                    <a className="service-24 ">
                      {" "}
                      <i className="icon-Target "></i>
                      <h6 className="ser-title ">Greater opportunities</h6>
                    </a>
                  </div>
                </div>
                {/* <!-- Column -->
                        <!-- Column --> */}
                <div className="col-lg-3 col-md-6 ">
                  <div className="card card-shadow ">
                    <a className="service-24 ">
                      {" "}
                      <i className="icon-Car-Wheel "></i>
                      <h6 className="ser-title ">Diverse skillsets</h6>
                    </a>
                  </div>
                </div>
                {/* <!-- Column -->
                        <!-- Column --> */}
                <div className="col-lg-3 col-md-6 ">
                  <div className="card card-shadow ">
                    <a className="service-24 ">
                      {" "}
                      <i className="icon-Mouse-3 "></i>
                      <h6 className="ser-title ">Peer-to-peer learning</h6>
                    </a>
                  </div>
                </div>
                {/* <!-- Column -->
                        <!-- Column --> */}
                <div className="col-lg-3 col-md-6 ">
                  <div className="card card-shadow ">
                    <a className="service-24 ">
                      {" "}
                      <i className="icon-Eyeglasses-Smiley "></i>
                      <h6 className="ser-title ">Unity in diversity </h6>
                    </a>
                  </div>
                </div>
                {/* <!-- Column -->
                        <!-- Column --> */}
                <div className="col-lg-3 col-md-6 ">
                  <div className="card card-shadow ">
                    <a className="service-24 ">
                      {" "}
                      <i className="icon-Target-Market "></i>
                      <h6 className="ser-title ">Flexible with uncertainty</h6>
                    </a>
                  </div>
                </div>
                {/* <!-- Column -->
                        <!-- Column --> */}
                <div className="col-lg-3 col-md-6 ">
                  <div className="card card-shadow ">
                    <a className="service-24 ">
                      {" "}
                      <i className="icon-Laptop-Phone "></i>
                      <h6 className="ser-title ">Prioritize creativity</h6>
                    </a>
                  </div>
                </div>
                {/* <!-- Column -->
                        <!-- Column --> */}
                <div className="col-lg-3 col-md-6 ">
                  <div className="card card-shadow ">
                    <a className="service-24 ">
                      {" "}
                      <i className="icon-Full-Bag "></i>
                      <h6 className="ser-title ">Connect globally </h6>
                    </a>
                  </div>
                </div>
                {/* <!-- Column -->
                        <!-- Column --> */}
                <div className="col-lg-3 col-md-6 ">
                  <div className="card card-shadow ">
                    <a className="service-24 ">
                      {" "}
                      <i className="icon-Eyeglasses-Smiley "></i>
                      <h6 className="ser-title ">
                        Nurture your innate talents
                      </h6>
                    </a>
                  </div>
                </div>
                {/* <!-- Column --> */}
              </div>
            </div>
          </div>

          <div className="spacer feature1">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Life at Aexonic</h2>
                  <h6 className="subtitle">
                    Our holy space is where ideas are brainstormed and executed.
                  </h6>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col-lg-6">
                  <div className="row wrap-feature-12">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <img
                            src="/images/life-at-aexonic/farewell party_1.jpeg"
                            className="rounded img-shadow img-responsive"
                            alt="wrapkit"
                          />
                        </div>
                        <div className="col-md-12">
                          <img
                            src="/images/life-at-aexonic/Team Outing_1.png"
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
                            src="/images/life-at-aexonic/ganeshCele2.png"
                            className="rounded img-shadow img-responsive"
                            alt="wrapkit"
                          />
                        </div>
                        <div className="col-md-12">
                          <img
                            src="/images/life-at-aexonic/ganeshCele.png"
                            className="rounded img-shadow img-responsive"
                            alt="wrapkit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row wrap-feature-12">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <img
                            src="/images/life-at-aexonic/trip.jpeg"
                            className="rounded img-shadow img-responsive"
                            alt="wrapkit"
                          />
                        </div>
                        <div className="col-md-12">
                          <img
                            src="/images/life-at-aexonic/life-at-aexonic 1.jpg"
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
                            src="/images/life-at-aexonic/farewell party_2.png"
                            className="rounded img-shadow img-responsive"
                            alt="wrapkit"
                          />
                        </div>
                        <div className="col-md-12">
                          <img
                            src="/images/life-at-aexonic/Team outing_2.jpeg"
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

          {/* <!-- Call-to-Action 1  -->
                <!-- ============================================================== --> */}
          <div
            className="spacer bg-light c2a1 content-overlay-image-yellow"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #000, transparent),url(https://images.unsplash.com/photo-1517953377824-516f2dca803b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1789&q=80",
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title text-white font-medium">
                    Explore your path at Aexonic
                  </h2>
                  <p className="font-light text-white op-8">
                    No matter where you began your career, if you come to
                    Aexonic, odds are you'll stay.
                  </p>
                  <a
                    className="btn btn-danger-gradiant btn-md btn-arrow m-t-20 text-uppercase"
                    href="#"
                  >
                    <span>
                      join us now<i className="ti-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ============================================================== -->
                <!-- End Call-to-Action 1  --> */}

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

export default careers;
