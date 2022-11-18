import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const LifeAtAexonic = () => {
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
        <title>Aexonic : Life At Aexonic</title>
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
                        className="nav-link dropdown-toggle active"
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
                            <a className="dropdown-item active_menu">
                              Life@aexonic
                            </a>
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
                  <h1 className="title banner-text">Life@Aexonic</h1>
                  <h6 className="subtitle op-8 banner-text">
                    We are a team of people united by a passion to use tech for
                    the greater good.
                  </h6>
                </div>
                {/* <!-- Column --> */}
              </div>
            </div>
          </div>
          {/* <!-- ============================================================== -->
            <!-- Testimonial 9 -->
            <!-- ============================================================== --> */}

          <div className="bg-light feature28">
            <div className="row justify-content-center spacer">
              <div className="col-md-7 text-center">
                <h2 className="title">Life at Aexonic</h2>
                <h6 className="subtitle">
                  At Aexonic India we believe that our growth comes from our
                  people, and we encourage a culture that stimulates both
                  personal and professional growth in every employee.
                </h6>
              </div>
            </div>
            <div className="wrap-feature-28s row">
              {/* <div className="col-lg-6 bg-cover" style="background-image:url(../assets/images/features/feature28/img1.jpg)"></div> */}
              <div
                className="col-lg-6 bg-cover"
                style={{
                  backgroundImage:
                    "url(/images/life-at-aexonic/work-from-home.jpg)",
                }}
              ></div>
              <div className="col-lg-6">
                <div className="side-content both-space">
                  {/* <span className="label label-info label-rounded">Great Feature 28</span> */}
                  <h2 className="title">Working From Home, Together</h2>
                  <h6 className="subtitle">
                    We maintain our commitment to providing a safe and secure
                    work environment to our associates. All teams transitioned
                    seamlessly to a work-from-home model right from the first
                    week of the pandemic. While we have not been able to meet
                    face to face throughout the year, it did not slow us down.
                    We continue to engage, collaborate, and celebrate
                    achievements and special occasions. Many initiatives have
                    been introduced to stay connected virtually.
                  </h6>
                </div>
              </div>
            </div>
            <div className="wrap-feature-28 row">
              <div className="col-lg-6">
                <div className="side-content both-space text-right pull-right">
                  {/* <span className="label label-info label-rounded">Great Feature 28</span> */}
                  <h2 className="title">Connect Over Coffee</h2>
                  <h6 className="subtitle">
                    Connect Over Coffee was launched in 2020 to bring teams
                    together for unfiltered conversations in the safe space of a
                    team huddle. The initiative is modeled as an experience for
                    associates, where they connect with their colleagues outside
                    of the regular scope of work. Teams engage and bond over a
                    broad range of topics ranging from health and fitness, to
                    movies, books, and financial planning.
                  </h6>
                </div>
              </div>
              {/* <div className="col-lg-6 bg-cover" style="background-image:url(../assets/images/features/feature28/img2.jpg)"></div> */}
              <div
                className="col-lg-6 bg-cover"
                style={{
                  backgroundImage:
                    "url(/images/life-at-aexonic/Connect-Over-Coffee.jpg)",
                }}
              ></div>
              <div className="col-md-12 text-center"></div>
            </div>
            <div className="wrap-feature-28s row">
              {/* <div className="col-lg-6 bg-cover" style="background-image:url(../assets/images/features/feature28/img1.jpg)"></div> */}
              <div
                className="col-lg-6 bg-cover"
                style={{
                  backgroundImage: "url(/images/life-at-aexonic/boss.jpg)",
                }}
              ></div>
              <div className="col-lg-6">
                <div className="side-content both-space">
                  {/* <span className="label label-info label-rounded">Great Feature 28</span> */}
                  <h2 className="title">Be Your Own Boss</h2>
                  <h6 className="subtitle">
                    You have complete freedom to manage your work and take
                    charge of your deliverables. Acquire leadership skills by
                    showcasing ownership and accountability in your daily tasks.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ex, dignissimos sit aliquam vel quo nulla vero maiores iure
                    facere eveniet perferendis rem illum beatae mollitia a
                    nihil. Amet, labore voluptates.
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ============================================================== -->
                <!-- End Feature 29 -->
                <!-- ============================================================== --> */}

          {/* <div className="spacer  team4">
            <div className="container">
              <div className="row justify-content-center m-b-30">
                <div className="col-md-7 text-center">
                  <h2 className="title">Our Priorities</h2>
                  <h6 className="subtitle">
                    You can tell a lot about a team by the way it works. On Team
                    Aexonic, four competencies define the framework for our
                    entire organization.
                  </h6>
                </div>
              </div>
              <div className="row m-t-30">
                <div className="col-lg-3 m-b-30">
                  <div className="row">
                    <div className="col-md-12 pro-pic">
                      <img
                        src="https://www.entrata.com/img/company_pages/careers/growth_icon.svg"
                        alt="wrapkit"
                        className="img-responsive"
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="p-t-10">
                        <h5 className="title font-medium">Work for growth</h5>
                        <h6 className="subtitle"></h6>
                        <p>
                          Aexonic&apos;s teams cultivate a mindset that
                          prioritizes growth, and not just for the organization.
                          A focus on personal and career development helps drive
                          the innovation that is essential to our success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 m-b-30">
                  <div className="row">
                    <div className="col-md-12 pro-pic">
                      <img
                        src="	https://www.entrata.com/img/company_pages/careers/fast_icon.svg"
                        alt="wrapkit"
                        className="img-responsive"
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="p-t-10">
                        <h5 className="title font-medium">Work fast</h5>
                        <h6 className="subtitle"></h6>
                        <p>
                          The pace of technology is always increasing, creating
                          an urgency in everything we do. Aexonic embraces a
                          dynamic, high-energy environment because we
                          understand: slowing down is not an option.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 m-b-30">
                  <div className="row">
                    <div className="col-md-12 pro-pic">
                      <img
                        src="	https://www.entrata.com/img/company_pages/careers/purpose_icon.svg"
                        alt="wrapkit"
                        className="img-responsive"
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="p-t-10">
                        <h5 className="title font-medium">Work with purpose</h5>
                        <h6 className="subtitle"></h6>
                        <p>
                          Our work impacts thousands of communities and millions
                          of renters across the globe. You might say we&apos;re
                          obsessed with our customers, and you&apos;d be right.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 m-b-30">
                  <div className="row">
                    <div className="col-md-12 pro-pic">
                      <img
                        src="https://www.entrata.com/img/company_pages/careers/together_icon.svg"
                        alt="wrapkit"
                        className="img-responsive"
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="p-t-10">
                        <h5 className="title font-medium">Work together</h5>
                        <h6 className="subtitle"></h6>
                        <p>
                          A diversity of perspectives reveals solutions that
                          might otherwise go unseen. We prioritize teamwork and
                          collaboration to make certain every angle is covered.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className=" spacer feature3">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Our Priorities</h2>
                  <h6 className="subtitle">
                    You can tell a lot about a team by the way it works. On Team
                    Aexonic, four competencies define the framework for our
                    entire organization.
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
                        <i className="icon-Double-Circle display-2 text-success-gradiant"></i>
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">Work For Growth</h5>
                        <p className="m-t-20">
                          Aexonic&apos;s teams cultivate a mindset that
                          prioritizes growth, and not just for the organization.
                          A focus on personal and career development helps drive
                          the innovation that is essential to our success.
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
                        <i className="icon-Stopwatch display-2 text-success-gradiant"></i>
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">Work Fast</h5>
                        <p className="m-t-20">
                          The pace of technology is always increasing, creating
                          an urgency in everything we do. Aexonic embraces a
                          dynamic, high-energy environment because we.
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
                        <i className="icon-Thumbs-UpSmiley display-2 text-success-gradiant"></i>
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">Work With Purpose</h5>
                        <p className="m-t-20">
                          Our work impacts thousands of communities and millions
                          of renters across the globe. You might say we&apos;re
                          obsessed with our customers, and you&apos;d be right.
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
                        <i className="icon-Window-2 display-2 text-success-gradiant"></i>
                      </div>
                      <div className="align-self-center">
                        <h5 className="font-medium">Work Together</h5>
                        <p className="m-t-20">
                          A diversity of perspectives reveals solutions that
                          might otherwise go unseen. We prioritize teamwork and
                          collaboration to make certain every angle is covered.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                    We aim big but start small. Our values are defined by who we
                    are individually and what we can do collectively.
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
                        {/* <h5 className="font-medium m-t-10"><a className="linking">Optimum Client Satisfaction</a></h5> */}
                        <h5 className="font-medium m-t-10">
                          <a className="linking">Encourage Initiatives</a>
                        </h5>
                        <p className="m-t-20">
                          Lead by example.We equip you to make intelligent
                          decisions when challenges arise.
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
                          <a className="linking">Mutual Respect </a>
                        </h5>
                        <p className="m-t-20">
                          Recognize differences and celebrate diversity. We
                          promote a positive work culture by nurturing your
                          strengths.
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
                          <a className="linking"> Open Communication</a>
                        </h5>
                        <p className="m-t-20">
                          Transparency from the top down. We empower everyone to
                          share their thoughts without any hesitations.
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
                          <a className="linking">Fun to Work </a>
                        </h5>
                        <p className="m-t-20">
                          Use your talent to turn the tasks into targets.
                          We&apos;re driven by the energy to innovate and have
                          fun.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ============================================================== --> */}
          {/* <!-- Blog home 2  --> */}
          {/* <!-- ============================================================== --> */}
          <div className="blog-home3 spacer">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                  <h2 className="title">At Aexonic, you can</h2>
                  <h6 className="subtitle">
                    We&apos;re strengthened by companies and entrepreneurs who
                    believe in us. Here are some of the industry-leading
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
                    <img
                      style={{ height: "50.8vh" }}
                      className="card-img-top"
                      src="/images/life-at-aexonic/Growth.jpg"
                      alt="wrappixel kit"
                    ></img>

                    <div className="date-pos bg-success-gradiant ">
                      Your growth is our responsibility!
                    </div>
                    <h4 className="font-medium m-t-30">
                      Your growth is our responsibility!
                    </h4>
                    <p className="m-t-20">
                      You can relay on our amazing features list and also our
                      customer services will be great experience. Lorem ipsum
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
                          src="/images/life-at-aexonic/WFA.jpg"
                          alt="wrappixel kit"
                        ></img>

                        <div className="date-pos bg-success-gradiant">
                          Work from anywhere
                        </div>
                        <h4 className="font-medium m-t-20">
                          Work from anywhere
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
                          src="/images/life-at-aexonic/Firm.jpg"
                          alt="wrappixel kit"
                        ></img>

                        <div className="date-pos bg-success-gradiant">
                          21st-century firm
                        </div>
                        <h4 className="font-medium m-t-20">
                          21st-century firm
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
                          src="/images/life-at-aexonic/Awesome.jpg"
                          alt="wrappixel kit"
                        ></img>

                        <div className="date-pos bg-success-gradiant">
                          Be awesome
                        </div>
                        <h4 className="font-medium m-t-20">Be awesome</h4>
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
                          src="/images/life-at-aexonic/impact.jpg"
                          alt="wrappixel kit"
                        ></img>

                        <div className="date-pos bg-success-gradiant">
                          Make an impact
                        </div>
                        <h4 className="font-medium m-t-20">Make an impact</h4>
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

          {/* ================================= */}
          <div className="spacer bg-light feature1">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">Celebrations at Aexonic</h2>
                  <h6 className="subtitle">
                    The team that celebrates and works together achieves great
                    things together!
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

          {/* ================================= */}

          <div className=" spacer feature1">
            <div className="container">
              {/* <!-- Row  --> */}
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title">How We Work</h2>
                  <h6 className="subtitle">
                    The Aexonic leadership believes in autonomous work. Everyone
                    has the flexibility to present their ideas and, most
                    importantly, walk their talk.
                  </h6>
                </div>
              </div>
              {/* <!-- Row  --> */}
              <div className="row m-t-40">
                <div
                  className="col-lg-12"
                  data-aos="flip-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="images/how_we_work.png"
                    className="rounded img-responsive"
                    alt="wrapkit"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ============================================================== -->
                <!-- End Feature 29 -->
                <!-- ============================================================== --> */}

          <div className="bg-light spacer team4">
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
                        <h5 className="title font-medium">Vikas Ranjan</h5>
                        <h6 className="subtitle">Chief Technology Officer</h6>
                        <p>
                          You can relay on our amazing features list and also
                          our customer services will be great experience.
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
                          You can relay on our amazing features list and also
                          our customer services will be great experience.
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
                        <h5 className="title font-medium">Abhishek Prasad</h5>
                        <h6 className="subtitle">Director</h6>
                        <p>
                          You can relay on our amazing features list and also
                          our customer services will be great experience.
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

          {/* <!-- Call-to-Action 1  -->
                <!-- ============================================================== --> */}
          <div
            className="spacer bg-light c2a1 content-overlay-image-yellow"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #000, transparent),url(https://images.unsplash.com/photo-1517953377824-516f2dca803b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1789&q=80)",
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="title text-white font-medium">
                    We&apos;re driving positive change for people and
                    communities across the world.
                  </h2>
                  <p className="font-light text-white op-8">
                    You can relay on our amazing features list and also our
                    customer services will be great experience for you without
                    doubt
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

export default LifeAtAexonic;
