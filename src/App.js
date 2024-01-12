import React from "react";
import "@mantine/core/styles.css";

import { createTheme, MantineProvider } from "@mantine/core";
import Main from "./pages/Main";
import { lineabalance, lineahistory } from "./api/linea";
import { kromabalance, kromahistory } from "./api/kroma";

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  const [lineaTotal, setLineaTotal] = React.useState(0);
  const [lineaHistory, setLineaHistory] = React.useState(0);
  const [kromaTotal, setKromaTotal] = React.useState(0);
  const [kromaHistory, setKromaHistory] = React.useState(0);

  React.useEffect(async () => {
    let lineaTotalResp = await lineabalance();
    setLineaTotal(parseInt(lineaTotalResp.result) / 10 ** 18);
    let lineaHistoryResp = await lineahistory();
    setLineaHistory(lineaHistoryResp.result);

    let kromaTotalResp = await kromabalance();
    setKromaTotal(parseInt(kromaTotalResp.result) / 10 ** 18);
    let kromaHistoryResp = await kromahistory();
    setKromaHistory(kromaHistoryResp.result);
  }, []);
  return (
    <MantineProvider theme={theme}>
      <div className="App">
        <Main
          lineaTotal={lineaTotal}
          lineaHistory={lineaHistory}
          kromaTotal={kromaTotal}
          kromaHistory={kromaHistory}
        />
      </div>
    </MantineProvider>
  );
}

export default App;
