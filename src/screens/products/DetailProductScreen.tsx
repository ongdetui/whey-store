import {Block, Container} from '@components';
import {useToastMessage} from '@hooks/useToastMessage';
import NavigationService from '@navigation/navigationService';
import {UserState} from '@redux/slices/user.slice';
import {IRootState} from '@redux/stores';
import {addCart, listOrderList} from '@services/cart.service';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {WIDTH_SCREEN, getSize} from 'configs/responsive';
import {Product} from 'models/product';
import {useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {toPriceFormat} from 'utils/utils';

const DetailProductScreen = ({route}) => {
  const product: Product = route.params;
  const {showSuccessTop} = useToastMessage();
  const {id} = useSelector<IRootState, UserState>(state => state.user);

  const handleAddCart = async () => {
    try {
      const {data} = await listOrderList(id);
      await addCart(
        {
          order_id: data?.metadata?.rows?.[0]?.id,
          productId: product.id,
          quantity: 1,
        },
        id,
      );
      showSuccessTop('Thêm thành công sản phẩm vào giỏ hàng');
    } catch (error) {}
  };

  return (
    <Container backgroundColor={Colors.bgBlur} edges={['top']}>
      <Block style={styles.tabBar}>
        <TouchableOpacity
          onPress={NavigationService.goBack}
          activeOpacity={0.5}
          style={styles.btnBack}>
          <Icon
            name={'chevron-back-outline'}
            color={Colors.bluePrimary}
            size={22}
          />
        </TouchableOpacity>
        <Text style={styles.textTabBar}>Chi tiết sản phẩm</Text>
      </Block>
      <ScrollView style={styles.content}>
        <FastImage
          source={{
            uri: JSON.parse(product.images)?.[0]?.url,
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.textPrice}>{toPriceFormat(product.price)}đ</Text>
        <Block
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          marginTop={8}>
          <Text style={styles.textAmount}>Số lượng</Text>
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
        <Block
          flexDirection="row"
          alignItems="center"
          marginBottom={12}
          marginTop={22}>
          <TouchableOpacity
            onPress={handleAddCart}
            style={styles.btnAddCart}
            activeOpacity={0.5}>
            <Text style={styles.textBtn}>Thêm vào giỏ</Text>
          </TouchableOpacity>
        </Block>
        <Text style={styles.title}>Mô tả sản phẩm</Text>
        <Text style={styles.description}>{product.description}</Text>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    alignItems: 'center',
    marginVertical: getSize.m(12),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textTabBar: {
    fontFamily: Font.Poppins_SemiBold,
    color: Colors.bluePrimary,
    fontSize: 16,
  },
  btnBack: {
    position: 'absolute',
    left: getSize.s(12),
    padding: 4,
  },
  content: {
    paddingHorizontal: getSize.s(12),
  },
  image: {
    width: WIDTH_SCREEN - getSize.s(24),
    height: WIDTH_SCREEN - getSize.s(24),
    borderRadius: 20,
  },
  title: {
    marginTop: 12,
    fontFamily: Font.Poppins_SemiBold,
    color: Colors.bluePrimary,
    fontSize: 16,
  },
  textPrice: {
    color: Colors.redHolder,
    fontFamily: Font.Poppins_Bold,
    fontSize: 22,
    marginTop: 12,
  },
  btnLess: {
    borderWidth: 1,
    borderColor: Colors.bluePrimary,
    width: 26,
    height: 26,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  btnAmount: {
    width: 26,
    height: 26,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: Colors.bluePrimary,
    borderBlockColor: Colors.bluePrimary,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  btnPlus: {
    borderWidth: 1,
    borderColor: Colors.bluePrimary,
    width: 26,
    height: 26,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  textAmount: {
    fontFamily: Font.Poppins_Medium,
    fontSize: 16,
    color: Colors.black,
  },
  btnAddCart: {
    height: 52,
    borderRadius: 12,
    backgroundColor: Colors.bluePrimary,
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnBuyNow: {
    height: 52,
    borderRadius: 12,
    backgroundColor: Colors.redHolder,
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: getSize.s(12),
  },
  textBtn: {
    fontFamily: Font.Poppins_SemiBold,
    fontSize: 14,
    color: Colors.white,
  },
  description: {
    fontFamily: Font.Poppins_Regular,
    color: Colors.mainText,
    fontSize: 14,
    marginTop: 12,
    marginBottom: 50,
  },
});

export default DetailProductScreen;
