import React from "react";
import { Container, Button } from "@nextui-org/react";


export function Header({ children }) {
  return (
    <div>
      {children}
    </div>);
}

Header.Container = function HeaderContainer({ children }) {
  return (<Container css={{
    margin: 0,
    padding: 0,
    background: "#111111",
    maxWidth: "none",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 10
  }}>
    {children}
  </Container>);
};

Header.ButtonGroup = function HeaderButtonGroup({ children }) {
  return (<Button.Group css={{ display: "flex", justifyContent: "center", margin: "0px" }}>
    {children}
  </Button.Group>)
};

Header.Button = function HeaderButton({ children }) {

  return (
    <Button css={{ borderRadius: 0, backgroundColor: 'transparent', marginTop: "5px", marginBottom: "0px", marginRight: "10px", display: "flex", alignItems: "center" }}>
      <h4 style={{
        background: "linear-gradient(112deg, #06B7DB -63.59%, #FF4ECD -20.3%, #0072F5 70.46%)",
        webkitBackgroundClip: "text",
        webkitTextFillColor: "transparent",
      }}>
        {children}
      </h4>
    </Button>)
};
