import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import About from "../components/about"
import Markets from "../components/markets";
import Transact from "../components/transact"
import Wallets from "../components/wallets"
import Sequence from "../components/sequence";
import { TransactionsProvider } from "../context/TransactionContext";

export default function Home() {
  return (
    <TransactionsProvider>
      <Header />
      <div id='home'>
        <Sequence />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="transact">
        <Transact />
      </div>
      <div id="markets">
        <Markets />
      </div>
      <div id="wallets">
        <Wallets />
      </div>
      <Footer />
    </TransactionsProvider>
  )
}

