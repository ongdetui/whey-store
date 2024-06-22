import {Product} from 'models/product';

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

export enum RouteAppEnum {
  FormPurchaseScreen = 'FormPurchaseScreen',
  DetailProductScreen = 'DetailProductScreen',
  OrderSuccessScreen = 'OrderSuccessScreen',
}

export type RootStackParamList = {
  [RouteAuthEnum.LoginScreen]: {};
  [RouteAuthEnum.SignUpScreen]: {};
  [RouteAuthEnum.SignUpSuccessScreen]: {};
  [RouteBottomTabsEnum.BottomTabs]: {};
  [RouteBottomTabsEnum.BottomTabs]: {};
  [RouteAppEnum.FormPurchaseScreen]: {};
  [RouteAppEnum.DetailProductScreen]: Product;
  [RouteAppEnum.OrderSuccessScreen]: {};
};
