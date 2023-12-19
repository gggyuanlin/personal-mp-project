import { View } from "@tarojs/components";
import Login from "src/components/Login";
import TabBarContainerView from "src/featrue/TabBarContainerView";
import { Button } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
import DoctorNoPermissionGetMedicine from "./components/DoctorNoPermissionGetMedicine";
import Card from "src/components/Card";
import PermissionGetMedicine from "./components/PermissionGetMedicine";

definePageConfig({
  navigationBarTitleText: "领药",
});
function GetMedicine() {
  return (
    <TabBarContainerView activeKey="getMedicine" className="index px-4">
      {/* <Card title="身份证" colon footer={<View>审核状态： 失败</View>}>
        hello
      </Card> */}
      {/* 进行药品申请 */}
      {/* <ApplyMedicine /> */}
      {/* 医生没有权限获取药品显示这个组件 */}
      {/* <DoctorNoPermissionGetMedicine /> */}
      <PermissionGetMedicine />
    </TabBarContainerView>
  );
}

const ApplyMedicine = () => {
  return (
    <View>
      <Button
        onClick={() =>
          Taro.previewImage({ urls: ["https://img.yzcdn.cn/vant/cat.jpeg"] })
        }
        block
        type="primary"
      >
        申请领药
      </Button>
    </View>
  );
};

export default GetMedicine;
