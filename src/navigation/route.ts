export enum RouteAuthEnum {
  LoginScreen = 'LoginScreen',
  SignUpScreen = 'SignUpScreen',
  SignUpSuccessScreen = 'SignUpSuccessScreen',
}

export enum RouteBottomTabsEnum {
  BottomTabs = 'BottomTabs',
  ProductScreen = 'ProductScreen',
  CartScreen = 'CartScreen',
  ContactScreen = 'ContactScreen',
}

export type RootStackParamList = {
  [RouteAuthEnum.LoginScreen]: {};
  [RouteAuthEnum.SignUpScreen]: {};
  [RouteAuthEnum.SignUpSuccessScreen]: {};
  [RouteBottomTabsEnum.BottomTabs]: {};
};
