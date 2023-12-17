import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";
import { Button } from "@antmjs/vantui";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index">
      <Text>Hello world!</Text>
      <Button type="primary">test</Button>
      <View className="text-[#acc855] text-[100px]">Hello world!</View>
    </View>
  );
}
