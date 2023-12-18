import { Tabbar, TabbarItem } from "@antmjs/vantui";
import { View } from "@tarojs/components";
import PageBodyWithTabBar from "src/components/PageBodyWithTabBar";
import { NoLoginTabbarConfig } from "src/config/tabbar";
import utils from "src/utils";
import { updateActiveKey } from "src/store/modules/tabbar";
import { useSwitchTab } from "./useSwitchTab";

const tabBarChangeHandler = (tabKey) => {
  switch (tabKey) {
    case "index":
      utils.navigator.gotoHome();
      break;
    case "getMedicine":
      utils.navigator.gotoGetMedicine();
      break;
    case "exchangeCertificate":
      utils.navigator.gotoExchangeCertificate();
      break;
    case "my":
      utils.navigator.gotoMy();
      break;

    default:
      break;
  }
};

function TabBarContainerView({ children, onChange, ...viewProps }) {
  const { switchAction, activeKey } = useSwitchTab();
  return (
    <View {...viewProps}>
      <PageBodyWithTabBar>{children}</PageBodyWithTabBar>
      <Tabbar
        onChange={({ detail }) => {
          switchAction(detail);
        }}
        activeColor="red"
        active={activeKey}
        safeAreaInsetBottom
      >
        {NoLoginTabbarConfig.map((item) => {
          return (
            <TabbarItem {...item} key={item.id} name={item.id}>
              {item.text}
            </TabbarItem>
          );
        })}
      </Tabbar>
    </View>
  );
}

export default TabBarContainerView;
