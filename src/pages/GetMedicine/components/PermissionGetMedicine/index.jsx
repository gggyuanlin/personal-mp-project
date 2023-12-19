import TabBarContainerView from "src/featrue/TabBarContainerView";
import { Image, Button, Row, Col } from "@antmjs/vantui";
import { Text, View } from "@tarojs/components";

const PermissionGetMedicine = () => {
  return (
    <TabBarContainerView>
      <Text className="block">您暂时为获得参与活动资格 111111.</Text>

      <Row gutter={24}>
        <Col span="12">
          <Button type="primary" block>
            自用领药申请aa
          </Button>
        </Col>
        <Col span="12">
          <Button type="primary" block>
            转增他人
          </Button>
        </Col>
      </Row>

      <View className="flex justify-center">
        <Button type="primary">授权他人操作</Button>
      </View>

      <View className="flex flex-col items-center">
        <Text className="block">你已授权XXX账号代操作</Text>
        <Button type="primary">取消授权</Button>
      </View>
    </TabBarContainerView>
  );
};

export default PermissionGetMedicine;
