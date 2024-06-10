import Colors from 'configs/colors';
import {HEIGHT_SCREEN} from 'configs/responsive';
import {ChangeEventHandler, FC, PropsWithChildren} from 'react';
import {
  LayoutChangeEvent,
  StatusBar,
  StatusBarStyle,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {Edges, SafeAreaView} from 'react-native-safe-area-context';

interface IProps {
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  edges?: Edges;
  onLayout?: (event: LayoutChangeEvent) => void;
  barStyle?: StatusBarStyle;
}

const Container: FC<PropsWithChildren<IProps>> = ({
  children,
  backgroundColor,
  style,
  edges,
  onLayout,
  barStyle,
}) => {
  return (
    <SafeAreaView
      onLayout={onLayout}
      edges={edges || ['top']}
      style={StyleSheet.flatten([
        styles.container,
        backgroundColor ? {backgroundColor} : undefined,
        StyleSheet.flatten(style),
      ])}>
      <StatusBar
        barStyle={barStyle || 'dark-content'}
        translucent
        backgroundColor={backgroundColor || Colors.white}
      />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default Container;
