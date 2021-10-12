import React, { useEffect, useState } from "react";
import { wrapper } from "../store/store";
import MasterLayout from "~/components/layouts/MasterLayout";
import { CookiesProvider } from "react-cookie";
import "swiper/swiper-bundle.min.css";
import "antd/dist/antd.compact.min.css";
import "~/public/static/css/bootstrap.min.css";
import "~/public/static/fonts/feather-font/css/iconfont.css";
import "~/public/static/fonts/Linearicons/Font/demo-files/demo.css";
import "~/public/static/fonts/font-awesome/css/font-awesome.min.css";
import "~/public/static/css/style.min.css";
import "~/public/static/css/slick.min.css";
import "~/styles/scss/home-1.scss";
import "~/styles/platform/custom.scss";
import "~/styles/platform/themes/home-one.scss";
import Head from "next/head";
import swell from 'swell-js'
swell.init('sailfish-e-commerce-limited', 'pk_392OXy2LAsQCLz7F9EQHEQ5tnVhAak6x')

function App({ Component, pageProps }) {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [description, setDesc] = useState('');
    const [price, setPrice] = useState('');
    useEffect(() => {
        setTimeout(function () {
            document.getElementById("__next").classList.add("ps-loaded");
        }, 100);
        getProduct();
    });
    const getProduct = async () => {
        await swell.products.list({
            category: '',
            limit: 25,
            page: 1
        }).then((response) => {
            setName(response.results[0].name);
            setSlug(response.results[0].slug);
            setDesc(response.results[0].description);
            setPrice(response.results[0].price);
        })
    };
    return (
        <CookiesProvider>
            <MasterLayout>
                <h5>Product Name: {name}</h5>
                <h5>Slug: {slug}</h5>
                <h5>Description: {description}</h5>
                <h5>Price: {price}</h5>
                <Component {...pageProps} />
            </MasterLayout>
        </CookiesProvider>
    );
}

export default wrapper.withRedux(App);
