import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import About from "../components/about"
import Markets from "../components/markets";
import Transact from "../components/transact"
import Wallets from "../components/wallets"
import Sequence from "../components/sequence";

export default function Home() {
  return (
    <div>
      <Header />
      <Sequence />
      <About />
      <Transact />
      <Markets />
      <Wallets />
      <Footer />
    </div>
  )
}

