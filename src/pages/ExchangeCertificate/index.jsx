import Login from "src/components/Login";
import TabBarContainerView from "src/featrue/TabBarContainerView";
import { View } from "@tarojs/components";

function ExchangeCertificate() {
  return (
    <TabBarContainerView activeKey="exchangeCertificate" className="index">
      <EmptyCertificate />
    </TabBarContainerView>
  );
}

const EmptyCertificate = () => {
  return (
    <View className="flex h-full items-center justify-center">
      您暂无兑换券
    </View>
  );
};

export default ExchangeCertificate;
