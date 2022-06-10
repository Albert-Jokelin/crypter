import { Container, Grid, Image, Text, Spacer } from "@nextui-org/react";
import React from "react"
import image from "./.../../../../images/ethereum.gif"

export default function About() {
  return (
    <Container fluid responsive>
      <Text h1>
        What is crypter?
      </Text>
      <Spacer y={2.0} />
      <Grid.Container justify="space-evenly" css={{}}>
        <Grid xl={2} alignContent="flex-start" >
          <Text h3>
            Crypter is an application that allows you to quickly send ethereum to anyone, anywhere.
            <br />
            <br />
            By connecting your MetaMask wallet, the transaction is seemless.
            <br/>
            <br />
            You can also track the crypto markets by scrolling down to the 'Markets' pane.
            <br/>
            <br />
            This application was built using ReactJS and Solidity.
          </Text>
        </Grid>
        <Grid xl={2}>
          <Image showSkeleton height={300} src={image} />
        </Grid>
      </Grid.Container>
    </Container>
  )
}
