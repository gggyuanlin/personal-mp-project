import { useAppDispatch, useAppSelector } from "src/store/hook";
import { updateActiveKey } from "src/store/modules/tabbar";

export const useSwitchTab = () => {
  const activeKey = useAppSelector((state) => state.tabbar.activeKey);
  const dispatch = useAppDispatch();

  const switchAction = (id) => {
    dispatch(updateActiveKey(id));
  };

  return {
    switchAction,
    activeKey,
  };
};
