import {Block, Container, Text} from '@components';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {getSize} from 'configs/responsive';
import {Fragment, useCallback} from 'react';
import {FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {keyExtractor} from 'utils/utils';
import ItemProduct from './components/ItemProduct';
import {useSelector} from 'react-redux';
import {IRootState} from '@redux/stores';
import {UserState} from '@redux/slices/user.slice';

const ProductsScreen = () => {
  const {top} = useSafeAreaInsets();
  const {email} = useSelector<IRootState, UserState>(state => state.user);

  const renderItem = useCallback(({item}) => <ItemProduct url={item} />, []);

  return (
    <Container backgroundColor={Colors.bgBlur} edges={[]}>
      <FlatList
        ListHeaderComponent={
          <Fragment>
            <Block style={styles.header} paddingTop={top}>
              <Block>
                <Text style={styles.textHello}>Hello,</Text>
                <Text style={styles.textEmail}>{email}</Text>
              </Block>
              <Icon
                name={'person-circle-outline'}
                color={Colors.bluePrimary}
                size={getSize.m(32)}
              />
            </Block>
            <Block style={styles.search}>
              <Block flexDirection="row" alignItems="center" flex={1}>
                <Icon
                  name={'search-outline'}
                  color={Colors.mainText}
                  size={24}
                />
                <TextInput
                  style={styles.inputSearch}
                  placeholderTextColor={'#00000080'}
                  placeholder="Whey protein..."
                />
              </Block>
              <TouchableOpacity activeOpacity={0.5}>
                <Icon
                  name="options-outline"
                  color={Colors.mainText}
                  size={26}
                />
              </TouchableOpacity>
            </Block>
          </Fragment>
        }
        keyExtractor={keyExtractor}
        data={[
          'https://wheyshop.cdn.vccloud.vn/wp-content/uploads/2022/03/vitaxtrong-iso-pro-5lbs-2-3kg-2-280x280.webp',
          'https://wheyshop.cdn.vccloud.vn/wp-content/uploads/2022/02/vitaxtrong-100-pure-creatine-5000-500g-280x280.webp',
          'https://wheyshop.cdn.vccloud.vn/wp-content/uploads/2016/10/biotech-hyper-mass-8-8lbs-4kg-280x280.webp',
          'https://wheyshop.cdn.vccloud.vn/wp-content/uploads/2016/10/pre-workout-the-curse-280x280.webp',
        ]}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: getSize.s(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: getSize.v(20),
  },
  textHello: {
    fontSize: 22,
    fontFamily: Font.Poppins_SemiBold,
    color: Colors.bluePrimary,
  },
  textEmail: {
    fontFamily: Font.Poppins_Regular,
    fontSize: 15,
    color: Colors.bluePrimary,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    height: 48,
    borderRadius: 24,
    marginHorizontal: getSize.s(12),
    paddingHorizontal: getSize.s(12),
    marginBottom: getSize.v(20),
  },
  inputSearch: {
    fontSize: 14,
    fontFamily: Font.Poppins_Regular,
    color: Colors.mainText,
    marginLeft: getSize.s(8),
  },
  contentContainerStyle: {
    paddingHorizontal: getSize.s(6),
  },
});

export default ProductsScreen;
