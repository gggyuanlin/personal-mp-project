import { Text, View } from "@tarojs/components";
import TabBarContainerView from "src/featrue/TabBarContainerView";
import { Image, Button } from "@antmjs/vantui";
import Login from "src/components/Login";

function My() {
  return (
    <TabBarContainerView activeKey="my" className="index">
      <Login />
    </TabBarContainerView>
  );
}

export default My;
