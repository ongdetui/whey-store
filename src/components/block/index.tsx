import {FC, PropsWithChildren} from 'react';
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface IProps extends ViewStyle {
  onLayout?: (event: LayoutChangeEvent) => void;
  collapsable?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Block: FC<PropsWithChildren<IProps>> = ({children, style, ...props}) => {
  return (
    <View
      style={StyleSheet.flatten([props, StyleSheet.flatten(style)])}
      {...props}>
      {children}
    </View>
  );
};

export default Block;
