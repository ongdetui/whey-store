import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Test from '@screens/test';
import NavigationService from './navigationService';
import {RootStackParamList, RouteAuthEnum, RouteBottomTabsEnum} from './route';
import BottomTabs from './BottomTabs';
import LoginScreen from '@screens/auth/login';
import SignUpScreen from '@screens/auth/signup';
import SignUpSuccessScreen from '@screens/auth/signup/SignUpSuccessScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
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
        initialRouteName={RouteAuthEnum.LoginScreen}>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
