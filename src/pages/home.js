import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import About from "../components/about"
import Markets from "../components/markets";
import Transact from "../components/transact"
import Wallets from "../components/wallets"
import { Spline } from 'react-spline';


export default function Home() {
  return (
    <div>
      <Header />
      <Spline scene="https://prod.spline.design/nhhYREQ2AgMD9DjP/scene.splinecode" />
      <About />
      <Transact />
      <Markets />
      <Wallets />
      <Footer />
    </div>
  )
}

