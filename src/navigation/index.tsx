import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Test from '@screens/test';
import NavigationService from './navigationService';
import {RootStackParamList, RouteAuthEnum} from './route';
import BottomTabs from './BottomTabs';

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
        <Stack.Screen name={RouteAuthEnum.LoginScreen} component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
