import { ScrollView, View } from "@tarojs/components";
import styles from "./index.module.scss";

const PageBodyWithTabBar = ({ children, scrollIntoView }) => {
  return (
    <View className={styles.body}>
      <ScrollView
        className={styles.scrollView}
        scrollY
        scrollIntoView={scrollIntoView}
        scrollIntoViewAlignment="center"
        scrollWithAnimation
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default PageBodyWithTabBar;
