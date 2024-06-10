import {useCallback, useState} from 'react';
import {LayoutChangeEvent} from 'react-native';
import {keyExtractor} from 'utils/utils';
import ItemFeed from './items/ItemFeed';
import {Container} from '@components';
import {HEIGHT_SCREEN} from 'configs/responsive';
import Colors from 'configs/colors';
import Animated from 'react-native-reanimated';
import {FlashList} from '@shopify/flash-list';

const FlashListAnimated = Animated.createAnimatedComponent(FlashList);

const FeedScreen = () => {
  const [heightVideo, setHightVideo] = useState<number>(HEIGHT_SCREEN);
  const renderItemFeed = useCallback(
    () => <ItemFeed heightVideo={heightVideo} />,
    [heightVideo],
  );

  const handleHeightVideo = ({nativeEvent}: LayoutChangeEvent) =>
    setHightVideo(nativeEvent.layout.height);

  return (
    <Container
      edges={[]}
      backgroundColor={Colors.black}
      barStyle="light-content"
      onLayout={handleHeightVideo}>
      <FlashListAnimated
        data={[1, 2, 3, 4]}
        keyExtractor={keyExtractor}
        renderItem={renderItemFeed}
        showsVerticalScrollIndicator={false}
        decelerationRate={'fast'}
        snapToInterval={heightVideo}
        disableScrollViewPanResponder={true}
        estimatedItemSize={heightVideo}
        disableIntervalMomentum={true}
      />
    </Container>
  );
};

export default FeedScreen;
