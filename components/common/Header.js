/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Link from "next/link";
import $ from "jquery";

const Header = () => {
  useEffect(() => {
    var lastScrollTop = 0;
    $(window).scroll(function (event) {
      var st = $(this).scrollTop();
      if (st > lastScrollTop) {
        // downscroll code
        $("nav.navbar").addClass("scrolling-down");
      } else {
        $("nav.navbar").removeClass("scrolling-down");
      }
      lastScrollTop = st;
    });
    var timer;

    $(".nav-item.dropdown")
      .on("mouseover", function (e) {
        clearTimeout(timer);
        openSubmenu();
      })
      .on("mouseleave", function () {
        timer = setTimeout(closeSubmenu, 200);
      });

    $(".navbar-nav li.nav-item:not(.dropdown) > a, a.text-reset").on(
      "click",
      function () {
        closeSubmenu();
        $(".navbar-toggler").click();
      }
    );
    function openSubmenu() {
      $(".dropdown-menu").addClass("show");
    }
    function closeSubmenu() {
      $(".dropdown-menu").removeClass("show");
    }
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-reveal fixed-top">
      <div className="container-lg">
        <Link href="/">
          <a className="navbar-brand d-lg-none">
            <img
              // src="/images/emotify-color-logo.svg"
              src="/images/header_icon/aexonic-logo.png"
              height="36"
              alt="Emotify"
            />
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse mt-4 mt-lg-0"
          id="navbarSupportedContent"
        >
          <Link href="/">
            <a className="navbar-brand d-none d-lg-block ">
              <img
                // src="/images/emotify-color-logo.svg"
                src="/images/header_icon/aexonic-logo.png"
                height="36"
                alt="Emotify"
              />
            </a>
          </Link>
          <ul className="navbar-nav justify-content-center w-100">

          <li className="nav-item">
              <Link href="/home" role="button">
                <a
                  className="nav-link"
                  id="pagesDropdown"
                  // aria-haspopup="true"
                  // aria-expanded="false"
                >
                  Home
                </a>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="landingsDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                data-toggle="dropdown"
              >
                Services
              </a>

              <div
                className="dropdown-positioner"
                data-popper-placement="bottom"
                style={{
                  position: "absolute",
                  inset: "0px auto auto 0px",
                  margin: 0,
                  transform: "translate(-124px, 48px)",
                }}
              >
                <div
                  className="dropdown-menu dropdown-menu-lg dropdown-menu-flush"
                  aria-labelledby="landingsDropdown"
                >
                  <div className="align-items-center no-gutters">
                    <div className="row dropdown-menu-col">
                      <div className="col-md-12 p-6">
                        <Link href="/engage">
                          <a className="d-flex text-decoration-none text-reset">
                            <div className="icon icon-md text-primary-light">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g fill="none" fillRule="evenodd">
                                  <path d="M0 0h24v24H0z"></path>
                                  <path
                                    d="M18 14a3 3 0 110-6 3 3 0 010 6zm-9-3a4 4 0 110-8 4 4 0 010 8z"
                                    fill="#335EEA"
                                    opacity=".3"
                                  ></path>
                                  <path
                                    d="M17.601 15c3.407.038 6.188 1.76 6.397 5.4.009.147 0 .6-.542.6H19.6c0-2.25-.744-4.328-1.999-6zm-17.6 5.2C.388 15.426 4.26 13 8.983 13c4.788 0 8.722 2.293 9.015 7.2.012.195 0 .8-.751.8H.727c-.25 0-.747-.54-.726-.8z"
                                    fill="#335EEA"
                                  ></path>
                                </g>
                              </svg>
                            </div>

                            <div className="ml-3">
                              <p className="font-weight-bold font-size-lg mb-0">
                                Engage
                              </p>

                              <span className="text-muted">
                                Modern audience engagement tools for your
                                website
                              </span>
                            </div>
                          </a>
                        </Link>
                        <Link href="#">
                          <a className="d-flex text-decoration-none text-reset mt-5">
                            <div className="icon icon-md text-primary-light">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M0 0h24v24H0z"></path>
                                  <path
                                    d="M16.374 19.939l5.849-8.773A.75.75 0 0021.599 10H17V4.477a.75.75 0 00-1.374-.416l-5.849 8.773A.75.75 0 0010.401 14H15v5.523a.75.75 0 001.374.416z"
                                    fill="#335EEA"
                                  ></path>
                                  <path
                                    d="M4.5 5h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 010-3zm0 12h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 010-3zm-2-6h4a1.5 1.5 0 010 3h-4a1.5 1.5 0 010-3z"
                                    fill="#335EEA"
                                    opacity=".3"
                                  ></path>
                                </g>
                              </svg>
                            </div>

                            <div className="ml-3">
                              <p className="font-weight-bold font-size-lg mb-0">
                                Pulse
                                <span className="badge badge-primary-soft ml-2">
                                  Coming soon
                                </span>
                              </p>

                              <span className="text-muted">
                                Serve engaging polls and quizzes to your
                                audience
                              </span>
                            </div>
                          </a>
                        </Link>
                        <Link href="#">
                          <a className="d-flex text-decoration-none text-reset mt-5">
                            <div className="icon icon-md text-primary-light">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g fill="none" fillRule="evenodd">
                                  <path d="M0 0h24v24H0z"></path>
                                  <path
                                    d="M6 2h12a1 1 0 011 1v10a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1zm7.8 2c-.644 0-1.397.73-1.8 1.2-.403-.47-1.156-1.2-1.8-1.2-1.14 0-1.8.889-1.8 2.02C8.4 7.273 9.6 8.6 12 10c2.4-1.4 3.6-2.7 3.6-3.9 0-1.131-.66-2.1-1.8-2.1z"
                                    fill="#335EEA"
                                    opacity=".3"
                                  ></path>
                                  <path
                                    d="M3.793 6.573L12 12.5l8.207-5.927a.5.5 0 01.793.405V17a2 2 0 01-2 2H5a2 2 0 01-2-2V6.978a.5.5 0 01.793-.405z"
                                    fill="#335EEA"
                                  ></path>
                                </g>
                              </svg>
                            </div>

                            <div className="ml-3">
                              <p className="font-weight-bold font-size-lg mb-0">
                                Connect
                                <span className="badge badge-primary-soft ml-2">
                                  Coming soon
                                </span>
                              </p>

                              <span className="text-muted">
                                Offer creative space to brands and earn more
                                revenue
                              </span>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/pricing" role="button">
                <a
                  className="nav-link"
                  id="pagesDropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Technology
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a
                  className="nav-link"
                  id="pagesDropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">
                <a
                  className="nav-link"
                  id="pagesDropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog
                </a>
              </Link>
            </li>
          </ul>
          {/* <Link href="/register/new">
            <a className="btn btn-primary-light lift">Sign up</a>
          </Link>
          <Link href="/users/sign_in">
            <a className="btn btn-white lift ml-3">Sign in</a>
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
