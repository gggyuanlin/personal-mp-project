import { Button } from "@antmjs/vantui";
import { CoverView, Text, View } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./index.scss";
import TabBarContainerView from "src/featrue/TabBarContainerView";
import Card from "src/components/Card";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <TabBarContainerView activeKey="index" className="index">
      {/* <Image
        round
        width="50px"
        height="50px"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      >
      </Image> */}

      <View className="h-full flex flex-col">
        <View
          className=" pt-[320px] bg-cover bg-no-repeat flex-grow"
          style={{
            backgroundImage: "url(https://img.yzcdn.cn/vant/cat.jpeg)",
          }}
        >
          <Card className="border-solid border-yellow-200 border rounded-md mx-6">
            <Text className=" text-white text-2xl block">领药说明</Text>
            <Text className=" text-white block">
              因为药品的特殊性因为药品的特殊性因为药品的特殊性因为药品的特殊性因为药品的特殊性因为药品的特殊性因为药品的特殊性
            </Text>
          </Card>

          <Card className="border-solid border-yellow-200 border rounded-md mx-6">
            <Text className=" text-white text-2xl block">领药说明</Text>
            <Text className=" text-white block">
              因为药品的特殊性因为药品的特殊性因为药品的特殊性因为药品的特殊性因为药品的特殊性因为药品的特殊性因为药品的特殊性
            </Text>
          </Card>

          <View className="flex flex-row gap-6 justify-center">
            <View>
              <Button
                onClick={() => {
                  Taro.chooseImage();
                }}
                type="primary"
              >
                我自己用药
              </Button>
            </View>
            <View>
              <Button type="primary">转增亲属朋友</Button>
            </View>
          </View>
        </View>
      </View>
    </TabBarContainerView>
  );
}
