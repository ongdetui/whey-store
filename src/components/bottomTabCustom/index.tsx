import FeedIcon from '@assets/icons/FeedIcon';
import FireIcon from '@assets/icons/FireIcon';
import ProfileIcon from '@assets/icons/ProfileIcon';
import {Block, Text} from '@components';
import NavigationService from '@navigation/navigationService';
import {RouteBottomTabsEnum} from '@navigation/route';
import Colors from 'configs/colors';
import {getSize} from 'configs/responsive';
import {FC, memo, useMemo} from 'react';
import {LayoutChangeEvent, StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/Ionicons';

interface IProps {
  index: number;
}

const BottomTabCustom: FC<IProps> = ({index}) => {
  const tabs = useMemo(
    () => [
      {
        name: 'Products',
        icon: (color: string) => (
          <Icon name={'bag-handle-outline'} size={24} color={color} />
        ),
        screen: RouteBottomTabsEnum.ProductScreen,
      },
      {
        name: 'Cart',
        icon: (color: string) => (
          <Icon name={'cart-outline'} size={24} color={color} />
        ),
        screen: RouteBottomTabsEnum.CartScreen,
      },
      {
        name: 'Contact',
        icon: (color: string) => (
          <Icon name={'call-outline'} size={24} color={color} />
        ),
        screen: RouteBottomTabsEnum.ContactScreen,
      },
    ],
    [],
  );

  const values = tabs.map(() => ({
    width: useSharedValue(0),
    translateX: useSharedValue(0),
  }));

  const styleIndicator = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(values[index].translateX.value, {
            damping: 14,
          }),
        },
      ],
      opacity: values[index].width.value === 0 ? 0 : 1,
      width: withTiming(values[index].width.value),
    };
  }, [index]);

  const handleTab = (screen: RouteBottomTabsEnum) => {
    NavigationService.navigate(screen);
  };

  return (
    <Block style={styles.container}>
      {tabs.map((tab, indexTab) => (
        <TouchableOpacity
          onPress={() => handleTab(tab.screen)}
          activeOpacity={0.5}
          style={styles.tab}
          key={indexTab}>
          <Block
            style={styles.contentTab}
            onLayout={(event: LayoutChangeEvent) => {
              event.target.measure((fx, fy, width, height, px, py) => {
                const value = values[indexTab]!;
                value.translateX.value = px;
                value.width.value = width;
              });
            }}>
            {tab.icon(indexTab === index ? Colors.white : Colors.bgButton)}
            <Text
              fontSize={13}
              marginTop={6}
              color={indexTab === index ? Colors.white : Colors.bgButton}>
              {tab.name}
            </Text>
          </Block>
        </TouchableOpacity>
      ))}
      <Animated.View style={[styles.indicator, styleIndicator]} />
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.bluePrimary,
    paddingBottom: getSize.v(10),
    paddingTop: getSize.v(6),
    paddingHorizontal: getSize.s(30),
  },
  tab: {
    alignItems: 'center',
    minWidth: getSize.s(60),
  },
  contentTab: {
    alignItems: 'center',
  },
  indicator: {
    backgroundColor: Colors.white,
    height: getSize.m(4),
    borderTopLeftRadius: getSize.m(10),
    borderTopRightRadius: getSize.m(10),
    position: 'absolute',
    bottom: 0,
  },
});

export default memo(BottomTabCustom);
