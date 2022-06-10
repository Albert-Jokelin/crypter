import { Container, Spacer } from "@nextui-org/react";
import React from "react";

export default function Footer() {
  return(
    <Container css={{marginLeft: "auto", marginRight:"auto", width:"fit-content", height: "30px"}}>
      <Spacer y={2.0} />
      Made with <span role="img" aria-label="world"> ❤️ </span> by Albert Jokelin
    </Container>
    )
}
