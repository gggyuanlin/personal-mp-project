import { View } from "@tarojs/components";
import Login from "src/components/Login";
import TabBarContainerView from "src/featrue/TabBarContainerView";
import { Button } from "@antmjs/vantui";

function GetMedicine() {
  return (
    <TabBarContainerView activeKey="getMedicine" className="index">
      <ApplyMedicine />
    </TabBarContainerView>
  );
}

const ApplyMedicine = () => {
  return (
    <View>
      <Button block type="primary">
        申请领药
      </Button>
    </View>
  );
};

export default GetMedicine;
