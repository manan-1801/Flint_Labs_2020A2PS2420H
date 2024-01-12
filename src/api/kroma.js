export const kromabalance = async (url) => {
  try {
    const response = await fetch(
      "https://api.kromascan.com/api?module=account&action=balance&address=0x7afb9de72A9A321fA535Bb36b7bF0c987b42b859&tag=latest&apikey=6GSYSC8CTK8MF5SHW124AZJWK2CARINCSJ",
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

export const kromahistory = async (url) => {
  try {
    const response = await fetch(
      "https://api.kromascan.com/api?module=account&action=txlist&address=0x7afb9de72A9A321fA535Bb36b7bF0c987b42b859&startblock=0&endblock=latest&page=1&offset=500&sort=desc&apikey=6GSYSC8CTK8MF5SHW124AZJWK2CARINCSJ",
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
