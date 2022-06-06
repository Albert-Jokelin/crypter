import React, { useContext } from "react";
import { Button, Container, Card, Input, Spacer, Text, Tooltip } from '@nextui-org/react'
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../../context/TransactionContext"
//import { shortenAddress } from "../utils/shortenAddress";
//import { Loader } from ".";

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    isLoading,
    sendTransaction,
    handleChange,
    formData, } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <Container fluid responsive>
      <Text h1>
        Zip. Zap. Zoom.
      </Text>
      <Text h4>
        Send eth anytime, anywhere blazingly fast! ✈️🌏
      </Text>
      <Spacer y={1.0} />
      {!currentAccount && (
        <Button
          onClick={connectWallet}
          color="gradient"
          icon={<AiFillPlayCircle className="text-white mr-2" />}
          Xlarge
        >
          <p>Connect Wallet</p>
        </Button>
      )}

      {currentAccount && (
        <Button
          disabled
          color="gradient"
          icon={<AiFillPlayCircle className="text-white mr-2" />}
          Xlarge
        >

          <p>Wallet connected!</p>
        </Button>
      )}

      <Card cover css={{ maxWidth: "27vw", marginLeft: "auto", marginRight: "auto" }}>
        <Card.Body>
          <Card.Image
            src="https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000"
            css={{ maxWidth: "35vw", }}
            alt="Card image background"
          />

          <SiEthereum fontSize={30} color="#fff" style={{ position: "absolute", zIndex: 1, alignSelf: "flex-start", marginLeft: "1vw", marginTop: "1.5vh" }} />
          <Tooltip content={"This is your ethereum card!"} style={{ position: "absolute", zIndex: 1, alignSelf: "flex-end", marginRight: "1vw", marginTop: "1.5vh" }}>
            <BsInfoCircle fontSize={25} color="#000" />
          </Tooltip>

          <div style={{ position: "absolute", zIndex: 1, marginLeft: "1vh", bottom: "2.5vh" }}>
            <Text h4 css={{}}>
              Ethereum Account
            </Text>
            <Text h5>
              {/*shortenAddress(*/currentAccount}
            </Text>
          </div>

        </Card.Body>

      </Card>
      <Spacer y={2.0} />
      <Card>
        <Input underlined placeholder="Address To" name="addressTo" type="text" onChange={handleChange} />
        <Spacer y={0.5} />
        <Input underlined placeholder="Amount (ETH)" name="amount" type="number" onChange={handleChange} />
        <Spacer y={0.5} />
        <Input underlined placeholder="Enter Message" name="message" type="text" onChange={handleChange} />
        <Spacer y={2.0} />
        {isLoading
          ? /*<Loader />*/ <h1>Loader</h1>
          : (
            <Button
              type="button"
              onClick={handleSubmit}
              className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
            >
              Send now
            </Button>
          )}
      </Card>

    </Container>
  );
};

export default Welcome;
