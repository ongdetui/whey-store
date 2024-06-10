import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {FC, PropsWithChildren} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as TextNative,
  TextProps,
  TextStyle,
} from 'react-native';

interface IProps extends TextStyle {
  style?: StyleProp<TextStyle>;
  color?: string;
  numberOfLines?: number;
  textProps?: TextProps;
}

const Text: FC<PropsWithChildren<IProps>> = ({
  children,
  style,
  numberOfLines,
  textProps = {},
  ...props
}) => {
  return (
    <TextNative
      numberOfLines={numberOfLines}
      style={StyleSheet.flatten<TextStyle>([
        styles.text,
        props,
        StyleSheet.flatten(style),
      ])}
      {...textProps}>
      {children}
    </TextNative>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: Colors.mainText,
    fontFamily: Font.Poppins_Regular,
  },
});

export default Text;
