import { View, Text } from "@tarojs/components";

const Card = ({ title, colon = false, children, footer, ...viewProps }) => {
  return (
    <View {...viewProps} className={viewProps.className + " p-4"}>
      {/* head */}
      {title && (
        <View>
          <Text>
            {title}
            {colon ? ":" : ""}
          </Text>
        </View>
      )}
      {/* body */}
      {children}
      {/* footer */}
      <View>{footer}</View>
    </View>
  );
};

export default Card;
