import React from "react"
import { Card, Container, Text, Spacer } from "@nextui-org/react"
import image from "./.../../../../images/MetaMask_Fox.png"

export default function Wallets() {
  return(
    <Container fluid responsive>
      <Spacer y={2.0} />
      <Text h1>
        Supported wallets
      </Text>
      <Text h3> Here are some of the wallets supported by crypter</Text>
      <Spacer y={3.0} />
      <Card hoverable css={{maxWidth:"20vw", marginLeft: "auto", marginRight:"auto"}}>
        <Card.Image
        src={ image }
        height={140}
        />
        <Card.Footer >
          <Text h3 css={{marginLeft: "auto", marginRight: "auto"}}>MetaMask</Text>
        </Card.Footer>
      </Card>
      <Spacer y={2.0} />
    </Container>
    )
}
