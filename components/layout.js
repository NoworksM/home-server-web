import Head from 'next/head';
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>HomeServer</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
            <main>{props.children}</main>
            <Footer/>
        </div>
    );
}