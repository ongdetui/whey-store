import {Block, Text} from '@components';
import NavigationService from '@navigation/navigationService';
import {RouteAppEnum} from '@navigation/route';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {WIDTH_SCREEN, getSize} from 'configs/responsive';
import {FC, memo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Ionicons';
import {toPriceFormat} from 'utils/utils';

interface IProps {
  url?: string;
  name: string;
  category_name: string;
  price: number;
  handleItem: () => void;
  handleAddCart: () => void;
}

const ItemProduct: FC<IProps> = ({
  url,
  name,
  category_name,
  price,
  handleItem,
  handleAddCart,
}) => {
  return (
    <TouchableOpacity
      onPress={handleItem}
      activeOpacity={0.5}
      style={styles.container}>
      <FastImage
        source={{
          uri:
            url ||
            'https://www.wheystore.vn/images/products/2023/12/13/resized/gold-standard-100-whey-5lbs-anh-dai-dien_1702452595.jpg.webp',
        }}
        style={styles.image}
      />
      <Block paddingHorizontal={12}>
        <Text fontFamily={Font.Poppins_SemiBold} numberOfLines={2}>
          {name}
        </Text>
        <Text numberOfLines={1} style={styles.category}>
          {category_name}
        </Text>
        <Text style={styles.textPrice}>{toPriceFormat(price)}đ</Text>
      </Block>
      <TouchableOpacity
        onPress={handleAddCart}
        activeOpacity={0.5}
        style={styles.addCart}>
        <Icon name={'cart-outline'} size={22} color={Colors.mainText} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: getSize.s(6),
    marginBottom: getSize.s(12),
    borderRadius: getSize.m(8),
    width: (WIDTH_SCREEN - getSize.s(36)) / 2,
    backgroundColor: Colors.white,
  },
  image: {
    width: (WIDTH_SCREEN - getSize.s(36)) / 2,
    height: (WIDTH_SCREEN - getSize.s(36)) / 2,
    borderRadius: getSize.m(8),
  },
  category: {
    marginTop: getSize.m(4),
    fontFamily: Font.Poppins_Medium,
    color: Colors.bluePrimary,
    fontSize: 13,
    marginBottom: getSize.m(6),
  },
  textPrice: {
    color: Colors.redHolder,
    fontFamily: Font.Poppins_SemiBold,
    marginBottom: getSize.m(6),
    fontSize: 18,
  },
  addCart: {
    position: 'absolute',
    backgroundColor: Colors.bgBlur,
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    top: 6,
    right: 6,
  },
});

export default memo(ItemProduct);
