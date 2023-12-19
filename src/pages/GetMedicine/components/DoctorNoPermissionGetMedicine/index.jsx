import TabBarContainerView from "src/featrue/TabBarContainerView";
import { Image, Button } from "@antmjs/vantui";
import { Text } from "@tarojs/components";

const DoctorNoPermissionGetMedicine = () => {
  return (
    <TabBarContainerView>
      <Image
        round
        width="50px"
        height="50px"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      ></Image>

      <Text>您暂时为获得参与活动资格。</Text>

      <Button block>web管理端激活资格</Button>
    </TabBarContainerView>
  );
};

export default DoctorNoPermissionGetMedicine;
