import {Block, Container} from '@components';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {WIDTH_SCREEN, getSize} from 'configs/responsive';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import NavigationService from '@navigation/navigationService';

const DetailProductScreen = () => {
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
            uri: 'https://wheyshop.cdn.vccloud.vn/wp-content/uploads/2022/03/vitaxtrong-iso-pro-5lbs-2-3kg-2-280x280.webp',
          }}
          style={styles.image}
        />
        <Text style={styles.title}>
          Rule1 Essential Amino 9 + Energy 30 servings
        </Text>
        <Text style={styles.textPrice}>680,000đ</Text>
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
          <TouchableOpacity style={styles.btnAddCart} activeOpacity={0.5}>
            <Text style={styles.textBtn}>Thêm vào giỏ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnBuyNow} activeOpacity={0.5}>
            <Text style={styles.textBtn}>Mua hàng ngay</Text>
          </TouchableOpacity>
        </Block>
        <Text style={styles.title}>Mô tả sản phẩm</Text>
        <Text style={styles.description}>
          Rule1 Essential Amino 9 + Energy 30 servings là một trong những sản
          phẩm bổ sung 9 loại amino acid thiết yếu, hỗ trợ phục hồi, tổng hợp
          protein để xây dựng cơ bắp ưu việt hơn. Với công thức đột phá, hương
          vị bùng nổ, sản phẩm này chắc chắn sẽ đem lại cho người dùng những
          trải nghiệm tuyệt vời. Essential Amino 9 + Energy 30 được nghiên cứu
          và sản xuất bởi hãng Rule One Proteins – thương hiệu thực phẩm bổ sung
          đình đám tại Hoa Kỳ. Ưu điểm nổi bật Bổ sung hàm lượng axit amin đậm
          đặc Một serving của Rule1 Essential Amino 9 + Energy chứa tới 7.5g EAA
          và 5g BCAA. Đây là hàm lượng axit amin được đánh giá là cao hơn hẳn so
          với các sản phẩm cùng phân khúc. Với 9 loại axit amin này có tác dụng
          phục hồi cơ bắp, tái tạo mô cơ bắp hiệu quả để xây dựng phát triển cơ
          bắp tối ưu hơn. Bổ sung thêm 500mg điện giải Thành phần có thêm 500mg
          điện giải sẽ giúp bù nước, bù khoáng, cân bằng lượng nước có trong cơ
          thể. Từ đó giúp cơ thể gia tăng thể lực và tăng sức bền hiệu quả hơn.
          Công dụng Cung cấp, bổ sung nguồn axit amin thiết yếu cho cơ thể Hỗ
          trợ tăng tổng hợp protein để nuôi và phát triển cơ bắp Hỗ trợ phục hồi
          cơ bắp sau những buổi tập mệt mỏi Giảm đau nhức hiệu quả, gia tăng
          hiệu suất tập luyện Bổ sung chất điện giải, bù nước, bù khoáng cho cơ
          thể Hỗ trợ gia tăng sức bền Phòng ngừa dị hóa và mất cơ Hướng dẫn sử
          dụng Pha 1 - 2 muỗng Rule1 Essential Amino 9 + Energy 30 với 500ml
          nước và sử dụng ngay trong lúc tập để đạt hiệu quả tốt nhất. Có thể
          dùng EAA Rule1 trước, sau tập hoặc bất kỳ thời gian nào trong ngày.
        </Text>
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
