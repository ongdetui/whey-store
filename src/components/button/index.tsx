import Block from '@components/block';
import Colors from 'configs/colors';
import {getSize} from 'configs/responsive';
import {FC, PropsWithChildren, memo} from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

interface IProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
  styleContainer?: StyleProp<ViewStyle>;
  rightIcon?: string;
  sizeRightIcon?: number;
  colorRightIcon?: string;
  isRightIcon?: boolean;
  colors?: string[];
  isLoading?: boolean;
  onPress?: () => void;
}

const Button: FC<PropsWithChildren<IProps>> = ({
  children,
  style,
  sizeRightIcon,
  rightIcon,
  colorRightIcon,
  isRightIcon = true,
  styleContainer = {},
  colors,
  isLoading,
  onPress,
  ...props
}) => {
  const handleButton = () => onPress?.();
  return (
    <TouchableOpacity
      {...props}
      onPress={handleButton}
      activeOpacity={0.5}
      style={styleContainer}>
      <LinearGradient
        style={StyleSheet.flatten([styles.container, style])}
        colors={colors || ['#5669FF', '#BF56FF']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        {children}
        {isRightIcon && (
          <Block style={styles.iconRight}>
            {isLoading ? (
              <MaterialIndicator size={getSize.m(20)} color={Colors.mainText} />
            ) : (
              <Icon
                name={rightIcon || 'arrow-forward-outline'}
                size={sizeRightIcon || getSize.m(24)}
                color={colorRightIcon || Colors.white}
              />
            )}
          </Block>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: getSize.m(58),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: getSize.m(12),
    justifyContent: 'center',
  },
  iconRight: {
    position: 'absolute',
    right: getSize.m(12),
  },
});

export default memo(Button);
