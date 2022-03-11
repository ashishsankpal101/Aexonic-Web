import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="/assets/node_modules/aos/dist/aos.css" rel="stylesheet" />
                    <link href="/assets/node_modules/bootstrap-touch-slider/bootstrap-touch-slider.css" rel="stylesheet" media="all" />
                    <link href="/assets/node_modules/owl.carousel/dist/assets/owl.theme.green.css" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    {/* <!-- Template Main JS File --> */}
                    {/* <!-- ============================================================== -->
                    <!-- All Jquery -->
                    <!-- ============================================================== --> */}
                    <script src="/assets/node_modules/jquery/dist/jquery.min.js"></script>
                    {/* <!-- Bootstrap popper Core JavaScript --> */}
                    {/* <script src="/assets/node_modules/popper/dist/popper.min.js"></script> */}
                    <script src="/assets/node_modules/bootstrap/js/bootstrap.min.js"></script>
                    {/* <!-- This is for the animation --> */}
                    {/* <script src="/assets/node_modules/aos/dist/aos.js"></script> */}
                    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
                    {/* <!--Custom JavaScript --> */}
                    <script src="js/custom.min.js"></script>
                    {/* <!-- ============================================================== -->
                    <!-- This page plugins -->
                    <!-- ============================================================== --> */}
                    <script src="js/jquery.touchSwipe.min.js"></script>
                    <script src="/assets/node_modules/bootstrap-touch-slider/bootstrap-touch-slider.js"></script>
                    <script src="/assets/node_modules/owl.carousel/dist/owl.carousel.min.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument