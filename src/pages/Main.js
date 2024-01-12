import React from "react";
import { Center, Flex, Modal, Table, Tabs, Text, Title } from "@mantine/core";
import classes from "./index.module.css";

function Main(props) {
  const [notifLinea, setNotifLinea] = React.useState(false);
  const [notifLineaClosed, setNotifLineaClosed] = React.useState(false);

  const [notifKroma, setNotifKroma] = React.useState(false);
  const [notifKromaClosed, setNotifKromaClosed] = React.useState(false);

  var beginTime = Date.now() - 43200000;

  //Linea
  var lineaHistory = Object.values(props.lineaHistory);
  lineaHistory = lineaHistory?.filter((element) => {
    return parseInt(element.timeStamp) * 1000 >= beginTime;
  });

  let linea_expenditure = 0;
  for (let i = 0; i < lineaHistory?.length; i++) {
    if (lineaHistory[i].from === "0xdcbc586cab42a1d193cacd165a81e5fbd9b428d7") {
      linea_expenditure -=
        parseInt(lineaHistory[i].value) +
        (parseInt(lineaHistory[i].gasUsed) *
          parseInt(lineaHistory[i].gasPrice)) /
          10 ** 18;
    } else {
      linea_expenditure +=
        parseInt(lineaHistory[i].value) +
        (parseInt(lineaHistory[i].gasUsed) *
          parseInt(lineaHistory[i].gasPrice)) /
          10 ** 18;
    }
  }

  React.useEffect(() => {
    if (
      (linea_expenditure / parseFloat(props?.lineaTotal)) * 100 <= -10 &&
      notifLinea === false &&
      notifLineaClosed === false
    ) {
      setNotifLinea(true);
    }
  });

  const linea_rows = lineaHistory?.map((element) => (
    <Table.Tr key={element.hash}>
      <Table.Td>{element.blockNumber}</Table.Td>
      <Table.Td>
        {new Date(parseInt(element.timeStamp) * 1000).toString()}
      </Table.Td>
      <Table.Td>{element.hash}</Table.Td>
      <Table.Td>{element.value}</Table.Td>
      <Table.Td>{element.gasUsed}</Table.Td>
      <Table.Td>{element.from}</Table.Td>
    </Table.Tr>
  ));

  //Kroma

  var kromaHistory = Object.values(props.kromaHistory);
  kromaHistory = kromaHistory?.filter((element) => {
    return parseInt(element.timeStamp) * 1000 >= beginTime;
  });

  let kroma_expenditure = 0;
  for (let i = 0; i < kromaHistory?.length; i++) {
    if (kromaHistory[i].from === "0xdcbc586cab42a1d193cacd165a81e5fbd9b428d7") {
      kroma_expenditure -=
        parseInt(kromaHistory[i].value) +
        (parseInt(kromaHistory[i].gasUsed) *
          parseInt(kromaHistory[i].gasPrice)) /
          10 ** 18;
    } else {
      kroma_expenditure +=
        parseInt(kromaHistory[i].value) +
        (parseInt(kromaHistory[i].gasUsed) *
          parseInt(kromaHistory[i].gasPrice)) /
          10 ** 18;
    }
  }

  React.useEffect(() => {
    if (
      (kroma_expenditure / parseFloat(props?.kromaTotal)) * 100 <= -10 &&
      notifKroma === false &&
      notifKromaClosed === false
    ) {
      setNotifKroma(true);
    }
  });

  const kroma_rows = kromaHistory?.map((element) => (
    <Table.Tr key={element.hash}>
      <Table.Td>{element.blockNumber}</Table.Td>
      <Table.Td>
        {new Date(parseInt(element.timeStamp) * 1000).toString()}
      </Table.Td>
      <Table.Td>{element.hash}</Table.Td>
      <Table.Td>{element.value}</Table.Td>
      <Table.Td>{element.gasUsed}</Table.Td>
      <Table.Td>{element.from}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className={classes.wrapper}>
      <Title
        order={1}
        className={classes.title}
        style={{ textAlign: "center" }}
      >
        This is my Crypto Wallet project...
      </Title>

      <div className={classes.content}>
        <Tabs variant="pills" defaultValue="linea">
          <Tabs.List>
            <Tabs.Tab color="gray" value="linea">
              Linea
            </Tabs.Tab>
            <Tabs.Tab color="green" value="kroma">
              Kroma
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="linea">
            <Center
              className={classes.content}
              style={{ flexDirection: "column" }}
            >
              <Text
                size="xl"
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan", deg: 90 }}
              >
                Externally Owned Address
              </Text>
              <Text>Linea: 0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7</Text>
            </Center>
            <Center
              className={classes.content}
              style={{ flexDirection: "column" }}
            >
              <Text
                size="xl"
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan", deg: 90 }}
              >
                Current Account Balance
              </Text>
              <Title order={2}>{props?.lineaTotal} ETH</Title>
            </Center>
            <Center
              className={classes.content}
              style={{ flexDirection: "column" }}
            >
              <Text
                size="xl"
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan", deg: 90 }}
              >
                Percentage Change in Account Balance
              </Text>
              <Text>in last 12 hours</Text>
              <Title order={2}>
                {(linea_expenditure / parseFloat(props?.lineaTotal)) * 100} %
              </Title>
            </Center>
            <Center
              className={classes.content}
              style={{ flexDirection: "column" }}
            >
              <Text
                size="xl"
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan", deg: 90 }}
              >
                Past 12 Hours transaction history
              </Text>

              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Block #</Table.Th>
                    <Table.Th>Timestamp</Table.Th>
                    <Table.Th>Hash</Table.Th>
                    <Table.Th>Value</Table.Th>
                    <Table.Th>Gas Used</Table.Th>
                    <Table.Th>From</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{linea_rows}</Table.Tbody>
              </Table>
            </Center>
          </Tabs.Panel>

          <Tabs.Panel value="kroma">
            <Center
              className={classes.content}
              style={{ flexDirection: "column" }}
            >
              <Text
                size="xl"
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan", deg: 90 }}
              >
                Externally Owned Address
              </Text>
              <Text>Kroma: 0x7afb9de72A9A321fA535Bb36b7bF0c987b42b859</Text>
            </Center>
            <Center
              className={classes.content}
              style={{ flexDirection: "column" }}
            >
              <Text
                size="xl"
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan", deg: 90 }}
              >
                Current Account Balance
              </Text>
              <Title order={2}>{props?.kromaTotal} ETH</Title>
            </Center>
            <Center
              className={classes.content}
              style={{ flexDirection: "column" }}
            >
              <Text
                size="xl"
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan", deg: 90 }}
              >
                Percentage Change in Account Balance
              </Text>
              <Text>in last 12 hours</Text>
              <Title order={2}>
                {(kroma_expenditure / parseFloat(props?.kromaTotal)) * 100} %
              </Title>
            </Center>
            <Center
              className={classes.content}
              style={{ flexDirection: "column" }}
            >
              <Text
                size="xl"
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan", deg: 90 }}
              >
                Past 12 Hours transaction history
              </Text>

              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Block #</Table.Th>
                    <Table.Th>Timestamp</Table.Th>
                    <Table.Th>Hash</Table.Th>
                    <Table.Th>Value</Table.Th>
                    <Table.Th>Gas Used</Table.Th>
                    <Table.Th>From</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{kroma_rows}</Table.Tbody>
              </Table>
            </Center>
          </Tabs.Panel>
        </Tabs>

        <Modal
          opened={notifLinea}
          withCloseButton
          onClose={() => {
            setNotifLinea(false);
            setNotifLineaClosed(true);
          }}
          size="lg"
          centered
          radius="md"
          position={{ left: 20, bottom: 20 }}
          title={
            <Flex direction={"row"} gap={"xs"}>
              <Text>ATTENTION</Text>
            </Flex>
          }
          styles={{
            header: {
              color: "red",
            },
          }}
        >
          <Text size="sm" style={{ marginBottom: 10 }}>
            You have spent more than 10% of your account balance in the last 12
            hours!
          </Text>
        </Modal>

        <Modal
          opened={notifKroma}
          withCloseButton
          onClose={() => {
            setNotifKroma(false);
            setNotifKromaClosed(true);
          }}
          size="lg"
          centered
          radius="md"
          position={{ left: 20, bottom: 20 }}
          title={
            <Flex direction={"row"} gap={"xs"}>
              <Text>ATTENTION</Text>
            </Flex>
          }
          styles={{
            header: {
              color: "red",
            },
          }}
        >
          <Text size="sm" style={{ marginBottom: 10 }}>
            You have spent more than 10% of your account balance in the last 12
            hours!
          </Text>
        </Modal>
      </div>
    </div>
  );
}

export default Main;
