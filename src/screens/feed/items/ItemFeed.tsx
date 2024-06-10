import HeartIcon from '@assets/icons/HeartIcon';
import ShareIcon from '@assets/icons/ShareIcon';
import {Block, Text} from '@components';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {WIDTH_SCREEN, getSize} from 'configs/responsive';
import {FC, memo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';

interface IProps {
  heightVideo: number;
}

const ItemFeed: FC<IProps> = ({heightVideo}) => {
  return (
    <Block height={heightVideo} style={styles.container}>
      <Video
        style={styles.video}
        source={require('@assets/images/che-dau-den.mp4')}
        paused={true}
      />
      <Block style={styles.infoVideo}>
        <Text style={styles.title}>
          Công thức nấu cháo ếch singapore và cháo sườn
        </Text>
        <Text style={styles.subTitle}>
          Công thức cháo ếch chuẩn singapore được tối ưu bởi Master Chef Võ Quốc
        </Text>
        <Text style={styles.subTitle} marginBottom={12}>
          #Nộitrợ #quánăn #Đầubếp
        </Text>
      </Block>
      <Block style={styles.action}>
        <TouchableOpacity style={styles.btnAction} activeOpacity={0.5}>
          <HeartIcon />
          <Text style={styles.textAction}>10k</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAction} activeOpacity={0.5}>
          <ShareIcon />
          <Text style={styles.textAction}>Chia sẻ</Text>
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH_SCREEN,
    justifyContent: 'flex-end',
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  infoVideo: {
    paddingHorizontal: getSize.s(12),
  },
  title: {
    fontFamily: Font.Poppins_Bold,
    color: Colors.white,
    fontSize: 16,
    marginBottom: getSize.m(4),
  },
  subTitle: {
    color: Colors.white,
  },
  action: {
    position: 'absolute',
    right: getSize.s(12),
    top: '55%',
  },
  btnAction: {
    alignItems: 'center',
    marginBottom: getSize.m(20),
  },
  textAction: {
    fontSize: 10,
    color: Colors.white,
    fontFamily: Font.Poppins_Medium,
    marginTop: getSize.m(3),
  },
});

export default memo(ItemFeed);
