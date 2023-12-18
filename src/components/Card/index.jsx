import { View } from "@tarojs/components";

const Card = ({ ...viewProps }) => {
  return <View {...viewProps} className={viewProps.className + " p-4"}></View>;
};

export default Card;
