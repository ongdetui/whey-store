import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteAuthEnum, RouteBottomTabsEnum} from './route';
import Test from '@screens/test';
import {BottomTabCustom} from '@components';
import FeedScreen from '@screens/feed';

const Tab = createBottomTabNavigator();

const tabCustom = (props: BottomTabBarProps) => (
  <BottomTabCustom index={props.state.index} />
);

const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBar={tabCustom}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={RouteBottomTabsEnum.FeedScreen}>
      <Tab.Screen
        name={RouteBottomTabsEnum.FeedScreen}
        component={FeedScreen}
      />
      <Tab.Screen name={RouteBottomTabsEnum.DeliciousScreen} component={Test} />
      <Tab.Screen name={RouteBottomTabsEnum.AccountScreen} component={Test} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
