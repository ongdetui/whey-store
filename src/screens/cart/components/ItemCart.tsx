import {Block, Text} from '@components';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {WIDTH_SCREEN, getSize} from 'configs/responsive';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Ionicons';

const ItemCart = () => {
  return (
    <Block style={styles.container}>
      <TouchableOpacity style={styles.btnCheck} activeOpacity={0.5}>
        <Icon name={'checkmark'} color={Colors.bluePrimary} size={18} />
      </TouchableOpacity>
      <FastImage
        source={{
          uri: 'https://wheyshop.cdn.vccloud.vn/wp-content/uploads/2022/03/vitaxtrong-iso-pro-5lbs-2-3kg-2-280x280.webp',
        }}
        style={styles.image}
      />
      <Block flex={1}>
        <Text>
          Rule1 Essential Amino 9 + Energy 30 servings Blue Razz Lemonde
        </Text>
        <Block
          marginTop={getSize.m(20)}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Text style={styles.textPrice}>430.000đ</Text>
          <Block flexDirection="row" alignItems="center">
            <TouchableOpacity style={styles.btnLess} activeOpacity={0.5}>
              <Text>-</Text>
            </TouchableOpacity>
            <Block style={styles.btnAmount}>
              <Text>1</Text>
            </Block>
            <TouchableOpacity style={styles.btnPlus} activeOpacity={0.5}>
              <Text>+</Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: getSize.s(12),
    paddingVertical: getSize.v(4),
    borderBottomColor: Colors.bgBlur,
    borderBottomWidth: 1,
  },
  btnCheck: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.bluePrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: WIDTH_SCREEN * 0.3,
    height: WIDTH_SCREEN * 0.3,
  },
  textPrice: {
    color: Colors.redHolder,
    fontFamily: Font.Poppins_SemiBold,
    fontSize: 18,
  },
  btnLess: {
    borderWidth: 1,
    borderColor: Colors.bluePrimary,
    width: 22,
    height: 22,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnAmount: {
    width: 22,
    height: 22,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: Colors.bluePrimary,
    borderBlockColor: Colors.bluePrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPlus: {
    borderWidth: 1,
    borderColor: Colors.bluePrimary,
    width: 22,
    height: 22,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ItemCart;
