import React, { useState, useEffect } from "react"
import { Container, Progress, Text, Spacer, Card, Table, Image } from '@nextui-org/react'

export default function Markets() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false)
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://pure-woodland-29790.herokuapp.com/coins`)
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setData(data);
          console.log(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  //console.log(data.data)
  const columns = [
    {
      key: "iconUrl",
      label: "ICON"
    },
    {
      key: "name",
      label: "NAME"
    },
    {
      key: "symbol",
      label: "SYMBOL"
    },
    {
      key: "price",
      label: "PRICE (USD)"
    },
    {
      key: "change",
      label: "CHANGE"
    },

  ]
  // Function to display the icon
  function renderSwitch(param, obj) {
    switch (param) {
      case 'iconUrl':
        return (<Image src={obj[param]} css={{ maxWidth: "30px" }} />);
      case 'change':
        if (obj[param] < 0)
          return (<Text color="error">{obj[param]}</Text>)
        else
          return (<Text color="success">{obj[param]}</Text>)
      default:
        return (obj[param]);
    }
  }

  if (isLoaded === false)
    return (
      <Container fluid responsive>
        <Spacer y={1.0} />
        <Text h1>
          Market
        </Text>
        <Text h3>Track the crypto market. With Ease</Text>
        <Spacer y={1} />
        <Progress
          indeterminated
          shadow
          value={50}
          color="gradient"

        />
        <Text css={{ textAlign: 'center' }} >Please wait while we load the data</Text>
      </Container>
    )
  if (error)
    return (
      <Container fluid responsive>
        <Spacer y={1.0} />
        <Text h1>
          Market
        </Text>
        <Text h3>Track the crypto market. With ease</Text>
        <Spacer y={1} />
        <Card css={{ mw: "330px", marginLeft: "auto", marginRight: "auto" }}>
          <Text b color="error">ERROR</Text>
          <Text b>
            An error was encountered whilst retrieving the data.
          </Text>
        </Card>
      </Container>
    )
  else
    return (
      <Container fluid responsive>
        <Spacer y={1.0} />
        <Text h1>
          Market
        </Text>
        <Text h3>Track the crypto market. With ease</Text>
        <Spacer y={1} />
        <Table
          bordered
          selectionMode="single"
          color="grey"
          css={{
            height: "auto",
            minWidth: "100%",
            zIndex: 1
          }}>
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column key={column.key}>{column.label}</Table.Column>
            )}
          </Table.Header>
          <Table.Body>
            {Object.values(data.data.coins).map((coin, i) => {
              return (
                <Table.Row key={i}>
                  {(columnKey) =>
                    <Table.Cell>
                      {renderSwitch(columnKey, coin)}
                    </Table.Cell>
                  }
                </Table.Row>
              );
            })}
          </Table.Body>
          <Table.Pagination
            shadow
            noMargin
            align="center"
            rowsPerPage={10}
            onPageChange={(page) => console.log({ page })}
          />
        </Table>
      </Container>
    )
}
