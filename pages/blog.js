import Head from 'next/head'
import React from "react";
import Image from 'next/image'
import Link from "next/link";
import { GraphQLClient, gql } from 'graphql-request'


export const getStaticProps = async () => {
    const endpoint = 'https://api-ap-northeast-1.graphcms.com/v2/ckwd1jfl7534301xphe7uasbp/master'
    const graphQLClient = new GraphQLClient(endpoint);
    const query = gql`
    {
        posts{
          title
          slug
          date
          excerpt
          content{
            markdown
          }
          coverImage {
            url
            width
            height
          }
          seo {
            id
          }
          
          tags
          author {
            id
          }
        }
      }
  `
    const data = await graphQLClient.request(query)
    return {
        props: {
            data,
        }
    }
}
export function Blog({ data }) {

    // console.log(data)
    const [show, setShow] = React.useState();

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
                <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png" />
                <title>Aexonic : Blog</title>
            </Head>

            {/* <!-- Preloader - style you can find in spinners.css --> */}

            {/* <div className="preloader">
                    <div className="loader">
                        <div className="loader__figure"></div>
                        <p className="loader__label">Aexonic</p>
                    </div>
                    </div> */}

            <div id="main-wrapper">
                {/* <!-- Top header  --> */}
                <div className="topbar">
                    {/* <!-- Header 5  --> */}
                    <div className="header5">
                        <div className="container po-relative">
                            <nav className="navbar navbar-expand-lg hover-dropdown h5-nav-bar">
                                <a className="navbar-brand"><img className="header-icon" src="images/aexonic-logo_8.png" alt="Aexonic" /></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#h5-info" aria-expanded="false" aria-label="Toggle navigation"><span className="ti-menu"></span></button>
                                <div className="collapse navbar-collapse" id="h5-info">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown mega-dropdown">
                                            <Link href="/">
                                                <a className="nav-link dropdown-toggle" id="h6-mega-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Home
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown mega-dropdown"> <a className="nav-link dropdown-toggle" id="h6-mega-dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Services <i className="fa fa-angle-down m-l-5"></i>
                                        </a>
                                            <div className="dropdown-menu b-none font-14 animated fadeInUp" aria-labelledby="h6-mega-dropdown1">
                                                <div className="row">
                                                    <div className="col-lg-3 inside-bg hidden-md-down">
                                                        <div className="bg-img" style={{ backgroundImage: "url(/images/mega-bg2.jpg)" }}>
                                                            <h3 className="text-white font-light">Create anything <br />with our amazing <br />sections</h3>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4">
                                                        <ul className="list-style-none">
                                                            <li>
                                                                <h6 className="f-w-500 active cursor-pointer">Product Engineering</h6>
                                                            </li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank ">SaaS Platforms</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Software Engineering</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Mobile and Web Apps</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">API Ecosystem</a></li>

                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4">
                                                        <ul className="list-style-none">
                                                            <li>
                                                                <h6 className="f-w-500 active cursor-pointer">Digital Transformation</h6>
                                                            </li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Machine Learning &amp; AI</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Data and Analytics</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Internet of Things (IoT)</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Chatbot and Automation</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Cloud and DevOps</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Technology Consulting</a></li>
                                                        </ul>
                                                    </div>
                                                    {/* <div className="col-lg-2 col-md-4">
                                                        <ul className="list-style-none">
                                                            
                                                          
                                                        </ul>
                                                    </div> */}
                                                    <div className="col-lg-3 col-md-4">
                                                        <ul className="list-style-none">
                                                            <li>
                                                                <h6 className="f-w-500 active cursor-pointer">Staff Augmentation</h6>
                                                            </li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Onshore</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Offshore</a></li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">Nearshore</a></li>
                                                            <li>
                                                                <h6 className="f-w-500 active cursor-pointer">Enterprise Solutions</h6>
                                                            </li>
                                                            <li><a className='cursor-pointer dropdown-item' target="_blank">SAP</a></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>

                                        <li className="nav-item dropdown">  <Link href="/industry"><a className="nav-link dropdown-toggle" id="h6-dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Industries <i className="fa fa-angle-down m-l-5"></i>
                                        </a></Link>
                                            <ul className="b-none dropdown-menu font-14 animated fadeInUp">

                                                <li>
                                                    <Link href="/industries/banking">
                                                        <a className="dropdown-item">Banking and FinTech</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="industries/supplychain">
                                                        <a className="dropdown-item">Supply Chain and Logistics</a>
                                                    </Link>
                                                </li>
                                                <li> <Link href="industries/hospitality">
                                                    <a className="dropdown-item">Hospitality and Travel</a>
                                                </Link>
                                                </li>
                                                <li> <Link href="industries/healthcare">
                                                    <a className="dropdown-item">Healthcare</a>
                                                </Link>
                                                </li>
                                                <li> <Link href="industries/manifacturing">
                                                    <a className="dropdown-item">Manufacturing</a>
                                                </Link>
                                                </li>
                                                <li> <Link href="industries/retail">
                                                    <a className="dropdown-item">Retail and e-commerce</a>
                                                </Link>
                                                </li>
                                                <li> <Link href="industries/technology">
                                                    <a className="dropdown-item">Technology and Software</a>
                                                </Link>
                                                </li>
                                                <li> <Link href="industries/professional_service">
                                                    <a className="dropdown-item">Professional Services</a>
                                                </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <Link href="/careers">
                                                <a className="nav-link dropdown-toggle" id="h6-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Careers
                                                </a>
                                            </Link>

                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link href="/aboutus">
                                                <a className="nav-link dropdown-toggle" id="h6-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    About Us
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item dropdown "> <a className="nav-link dropdown-toggle active" id="h6-dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                                <li> <Link href="/blog">
                                                    <a className="dropdown-item active_menu">Blogs</a>
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
                    {/* <!-- End Header 5  --> */}
                </div>
                <div className="container-fluid ">
                    {/* <!-- Static Slider 10  --> */}
                    <div className="banner-innerpage" style={{ backgroundImage: "url(images/services/Banner/saas_dev.jpeg)" }}>
                        <div className="container">
                            {/* <!-- Row  --> */}
                            <div className="row justify-content-center ">
                                {/* <!-- Column --> */}
                                <div className="col-md-6 align-self-center text-center" data-aos="fade-down" data-aos-duration="1200">
                                    <h1 className="title banner-text">Blog</h1>
                                    <h6 className="subtitle op-8 banner-text">Our custom approach ensures the perfect fit for your technology initiatives.</h6>
                                </div>
                                {/* <!-- Column --> */}
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        {/* <!-- ============================================================== -->
                <!-- Blog example  -->
                <!-- ============================================================== --> */}
                        {/* <div className="spacer">
                            <div className="container">
                               
                                {data?.posts?.map((item) => (
                                    <div key={item.title} className="row justify-content-center">
                                        <div className="col-md-8">
                                            
                                            <div className="mini-spacer">
                                               
                                                <a><img src={item.coverImage.url} alt="wrapkit" className="img-fluid" /></a>
                                                <ul className="text-uppercase m-t-40 list-inline font-13 font-medium">
                                                    <li><a>{item.slug} </a></li>
                                                    <li><a>&nbsp;&nbsp;/ {item.date}</a></li>
                                                    <li><a className="text-info"> &nbsp;&nbsp; / NEWS</a></li>
                                                </ul>
                                                <h2 className="title font-light">{item.title}<a className="link"></a></h2>
                                                <p style={{ height: "200px", overflow: "hidden" }} className="m-t-30 m-b-30">{item.content.markdown}</p>

                                                <Link href="">
                                                    <a className="font-13">CONTINUE READING</a>
                                                </Link>


                                            </div>

                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div> */}


                        <div className="blog-home1 spacer bg-light ">
                            <div className="container ">

                                <div className="row justify-content-center ">

                                    <div className="col-md-8 text-center ">
                                        {/* <h2 className="title ">News</h2> */}
                                        <h6 className="subtitle ">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                    </div>

                                </div>


                                <div className="row m-t-40 ">
                                    {data?.posts?.map((item) => (
                                        <div key={item.title} className="col-md-4 ">
                                            <div className="card card-shadow blog_card_height" data-aos="flip-left " data-aos-duration="1200 ">
                                                <a href="# ">
                                                    <img className="card-img-top blog_image" src={item.coverImage.url}  alt="wrappixel kit " />
                                                    </a>
                                                <div className="p-30 ">
                                                    <div className="d-flex no-block font-14 ">
                                                        <a style={{width: "200px"}} href="# ">{item.slug}</a>
                                                        <span className="ml-auto ">{item.date}</span>
                                                    </div>
                                                    <h5 className="font-medium m-t-20 "><a href="# " className="link ">{item.title}</a></h5>
                                                 
                                                </div>
                                                
                                            </div>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>


                        {/* <!-- ============================================================== -->
                <!-- End Blog example -->
                <!-- ============================================================== --> */}
                    </div>
                    {/* <!-- footer 4  --> */}

                    <div className="footer4 spacer ">
                        <div className="container ">
                            <div className="row ">
                                <div className="col-lg-3 col-md-6 m-b-30 ">
                                    <h5 className="m-b-20 ">Address</h5>
                                    <p> 503, Pride Icon, Kharadi, Pune, India  411014</p>
                                </div>
                                <div className="col-lg-3 col-md-6 m-b-30 ">
                                    <h5 className="m-b-20 ">Phone</h5>
                                    <p>Reception : +205 123 4567
                                        <br />Office : +207 235 7890</p>
                                </div>
                                <div className="col-lg-3 col-md-6 m-b-30 ">
                                    <h5 className="m-b-20 ">Email</h5>
                                    <p>Office : <a className="link ">info@aexonic.com</a>
                                        <br />Site : <a className="link ">http://www.aexonic.com/</a></p>
                                </div>
                                <div className="col-lg-3 col-md-6 ">
                                    <h5 className="m-b-20 ">Social</h5>
                                    <div className="round-social light ">
                                        <a className="link "><i className="fa fa-facebook "></i></a>
                                        <a className="link "><i className="fa fa-twitter "></i></a>
                                        <a className="link "><i className="fa fa-linkedin "></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="f4-bottom-bar ">
                                <div className="row ">
                                    <div className="col-md-12 ">
                                        <hr />
                                        <nav style={{ paddingLeft: "0px !important" }} className="navbar navbar-expand-lg h1-nav ">
                                            <a className="navbar-brand m-b-11 " ><img src="./images/aexonic-logo_5.png " alt="Aexonic " width="120 " /></a>
                                            <button className="navbar-toggler " type="button " data-toggle="collapse " data-target="#header1 " aria-expanded="false " aria-label="Toggle navigation ">
                                                <span className="ti-menu "></span>
                                            </button>
                                            <div className="collapse navbar-collapse " id="header1 ">
                                                <span className="hidden-lg-down ">?? 2020 All rights reserved.</span>
                                                <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                                                    <li className="nav-item"><a className="nav-link " href="# ">Home</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">Services</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">Industries</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">Careers</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">About Us</a></li>
                                                    <li className="nav-item "><a className="nav-link active" href="# ">More</a></li>
                                                    <li className="nav-item "><a className="nav-link " href="# ">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End footer 4  --> */}
                    <a className="bt-top btn btn-circle btn-lg btn-info" href="#top"><i className="ti-arrow-up"></i></a>

                    {/* <!-- End Page wrapper  --> */}

                </div>
            </div>
            {/* <!-- ============================================================== -->
            <!-- End Wrapper -->
            <!-- ============================================================== --> */}
        </div>
    )
}

export default Blog;