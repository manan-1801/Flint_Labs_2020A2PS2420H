export const lineabalance = async (url) => {
  try {
    const response = await fetch(
      "https://api.lineascan.build/api?module=account&action=balance&address=0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7&tag=latest&apikey=52AKWKZ4M46V5TSGCBN7ED3YFDTNKX2JCUx",
      { method: "GET" }
    );
    let data;
    try {
      data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }

    return data;
  } catch (e) {
    console.log(e);
    return {
      status: 0,
      data: { error: "Please check you internet connection!" },
    };
  }
};

export const lineahistory = async (url) => {
  try {
    const response = await fetch(
      "https://api.lineascan.build/api?module=account&action=txlist&address=0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7&startblock=0&endblock=latest&page=1&offset=500&sort=desc&apikey=52AKWKZ4M46V5TSGCBN7ED3YFDTNKX2JCUx",
      { method: "GET" }
    );
    let data;
    try {
      data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }

    return data;
  } catch (e) {
    console.log(e);
    return {
      status: 0,
      data: { error: "Please check you internet connection!" },
    };
  }
};
