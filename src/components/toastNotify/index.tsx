import Block from '@components/block';
import Text from '@components/text';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {WIDTH_SCREEN, getSize} from 'configs/responsive';
import React, {FC, memo} from 'react';
import {StyleSheet} from 'react-native';
import {ToastProps} from 'react-native-toast-notifications/lib/typescript/toast';

const ToastNotify: FC<ToastProps> = props => {
  return (
    <Block style={styles.container}>
      {props.warningIcon && props.type === 'warning' && (
        <Block marginRight={8}>{props.warningIcon}</Block>
      )}
      {props.successIcon && props.type === 'success' && (
        <Block marginRight={8}>{props.successIcon}</Block>
      )}
      <Text style={styles.textMessage}>{props.message}</Text>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: getSize.m(12),
    padding: getSize.m(8),
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: WIDTH_SCREEN - getSize.s(24),
    marginBottom: getSize.m(8),
  },
  textMessage: {
    fontSize: getSize.m(12, 0.3),
    fontFamily: Font.Poppins_Regular,
    color: Colors.mainText,
    flex: 1,
  },
});

export default memo(ToastNotify);
