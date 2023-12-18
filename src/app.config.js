export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/Login/index",
    "pages/My/index",
    "pages/GetMedicine/index",
    "pages/ExchangeCertificate/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  subPackages: [
    {
      root: "doctor-packages",
      pages: ["PatientSignUp/index"],
    },
  ],
  tabBar: {
    color: "#FFFFFF",
    selectedColor: "#000000",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    custom: true,
    list: [
      {
        text: "首页",
        pagePath: "pages/index/index",
      },
      {
        text: "领药",
        pagePath: "pages/GetMedicine/index",
      },
      {
        text: "兑换券",
        pagePath: "pages/ExchangeCertificate/index",
      },
      {
        text: "我的",
        pagePath: "pages/My/index",
      },
    ],
  },
});
