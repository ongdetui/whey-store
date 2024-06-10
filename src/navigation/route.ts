export enum RouteAuthEnum {
  LoginScreen = 'LoginScreen',
}

export enum RouteBottomTabsEnum {
  FeedScreen = 'FeedScreen',
  DeliciousScreen = 'DeliciousScreen',
  AccountScreen = 'AccountScreen',
}

export type RootStackParamList = {
  [RouteAuthEnum.LoginScreen]: {};
};
