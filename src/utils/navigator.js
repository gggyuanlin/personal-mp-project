import Taro from "@tarojs/taro";

const route = (name, { redirect, packages, params }) => {
  const prefixPath = packages ? `${packages}-packages` : "pages";
  const suffixPath = "index";
  const url = `/${prefixPath}/${name}/${suffixPath}`;
  console.log(url);
  const method = redirect ? Taro.redirectTo : Taro.navigateTo;
  let query = params ? queryStringify(params) : "";
  if (query) {
    query = `?${query}`;
  }
  method({
    url: `${url}${query}`,
  });
};

const queryStringify = (params) => {
  const query = Object.keys(params).reduce((acc, key) => {
    const value = params[key];
    if (typeof value === "string" || typeof value === "number") {
      return `${acc}${key}=${value}&`;
    }
    return acc;
  }, "");
  // remove the '&' in trail
  return query.slice(0, -1);
};

export const gotoLogin = () => {
  route("Login", { redirect: false });
};

export const gotoHome = () => {
  Taro.switchTab({ url: "/pages/index/index" });
};

export const gotoMy = () => {
  Taro.switchTab({ url: "/pages/My/index" });
};

export const gotoGetMedicine = () => {
  Taro.switchTab({ url: "/pages/GetMedicine/index" });
};

export const gotoExchangeCertificate = () => {
  Taro.switchTab({ url: "/pages/ExchangeCertificate/index" });
};

export const gotoPatientSignUp = () => {
  route("PatientSignUp", { redirect: false, packages: "doctor" });
};
