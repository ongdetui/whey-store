import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Test from '@screens/test';
import NavigationService from './navigationService';
import {
  RootStackParamList,
  RouteAppEnum,
  RouteAuthEnum,
  RouteBottomTabsEnum,
} from './route';
import BottomTabs from './BottomTabs';
import LoginScreen from '@screens/auth/login';
import SignUpScreen from '@screens/auth/signup';
import SignUpSuccessScreen from '@screens/auth/signup/SignUpSuccessScreen';
import FormPurchaseScreen from '@screens/cart/FormPurchaseScreen';
import DetailProductScreen from '@screens/products/DetailProductScreen';
import {useSelector} from 'react-redux';
import {IRootState} from '@redux/stores';
import {UserState} from '@redux/slices/user.slice';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const {isLogin} = useSelector<IRootState, UserState>(state => state.user);
  const ref = (refNavigation: any) => {
    NavigationService.setTopLevelNavigator(refNavigation);
  };

  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          orientation: 'portrait',
          animation: 'slide_from_right',
        }}
        initialRouteName={
          isLogin ? RouteBottomTabsEnum.BottomTabs : RouteAuthEnum.LoginScreen
        }>
        <Stack.Screen
          name={RouteAuthEnum.LoginScreen}
          component={LoginScreen}
        />
        <Stack.Screen
          name={RouteBottomTabsEnum.BottomTabs}
          component={BottomTabs}
        />
        <Stack.Screen
          name={RouteAuthEnum.SignUpScreen}
          component={SignUpScreen}
        />
        <Stack.Screen
          name={RouteAuthEnum.SignUpSuccessScreen}
          component={SignUpSuccessScreen}
        />
        <Stack.Screen
          name={RouteAppEnum.FormPurchaseScreen}
          component={FormPurchaseScreen}
        />
        <Stack.Screen
          name={RouteAppEnum.DetailProductScreen}
          component={DetailProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
