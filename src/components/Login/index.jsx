import { Text, View } from "@tarojs/components";
import TabBarContainerView from "src/featrue/TabBarContainerView";
import { Image, Button } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
import utils from "src/utils";

definePageConfig({
  navigationBarTitleText: "我的",
  navigationStyle: "custom",
});
function Login() {
  return (
    <View>
      <View className="flex flex-col items-center gap-[36px]">
        <Image
          round
          width="50px"
          height="50px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <Text>My</Text>
      </View>

      <View className=" flex flex-col items-center gap-[36px] mt-[48px]">
        <Button onClick={utils.navigator.gotoPatientSignUp} type="primary">
          患者登录
        </Button>
        <Button type="primary">医生1登录 </Button>
        <Button type="primary">药店工作人员登录</Button>
        <Button type="primary">公益专员登录</Button>
      </View>
    </View>
  );
}

export default Login;
