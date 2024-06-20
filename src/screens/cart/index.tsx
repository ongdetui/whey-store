import {Block, Container, Text} from '@components';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {WIDTH_SCREEN, getSize} from 'configs/responsive';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ItemCart from './components/ItemCart';
import {keyExtractor} from 'utils/utils';
import {useCallback} from 'react';
import NavigationService from '@navigation/navigationService';
import {RouteAppEnum} from '@navigation/route';

const CartScreen = () => {
  const renderItem = useCallback(() => <ItemCart />, []);

  const handlePurchase = () => {
    NavigationService.navigate(RouteAppEnum.FormPurchaseScreen);
  };

  return (
    <Container>
      <Block style={styles.header}>
        <Icon name={'cart-outline'} size={32} color={Colors.mainText} />
        <Text style={styles.title}>Cart</Text>
      </Block>
      <FlatList
        data={[1, 2, 3, 4, 5, 5, 6, 7, 8]}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <Block style={styles.footer}>
        <Block marginLeft={getSize.s(12)}>
          <Text style={styles.textTitle}>Tổng thanh toán</Text>
          <Text style={styles.textPrice}>đ1.256.000</Text>
        </Block>
        <TouchableOpacity
          onPress={handlePurchase}
          style={styles.btnBuy}
          activeOpacity={0.5}>
          <Text>Mua hàng(2)</Text>
        </TouchableOpacity>
      </Block>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: getSize.s(12),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: getSize.m(12),
  },
  title: {
    fontSize: 24,
    fontFamily: Font.Poppins_SemiBold,
    color: Colors.mainText,
    marginLeft: getSize.m(8),
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    width: WIDTH_SCREEN,
    justifyContent: 'space-between',
  },
  btnBuy: {
    backgroundColor: Colors.yellowSecondary,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: getSize.s(20),
  },
  textTitle: {
    color: Colors.bluePrimary,
    fontFamily: Font.Poppins_Medium,
    fontSize: 15,
  },
  textPrice: {
    color: Colors.redHolder,
    fontSize: 18,
    fontFamily: Font.Poppins_SemiBold,
  },
  contentContainerStyle: {
    paddingBottom: 52,
  },
});

export default CartScreen;
