import {BottomTabCustom} from '@components';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import CartScreen from '@screens/cart';
import ProductsScreen from '@screens/products';
import Test from '@screens/test';
import {RouteBottomTabsEnum} from './route';

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
      initialRouteName={RouteBottomTabsEnum.ProductScreen}>
      <Tab.Screen
        name={RouteBottomTabsEnum.ProductScreen}
        component={ProductsScreen}
      />
      <Tab.Screen
        name={RouteBottomTabsEnum.CartScreen}
        component={CartScreen}
      />
      <Tab.Screen name={RouteBottomTabsEnum.ContactScreen} component={Test} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
