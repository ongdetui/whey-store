import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg width={22} height={22} fill="none" {...props}>
    <Path
      fill={props.color || '#E1E1E1'}
      fillRule="evenodd"
      d="m6.242 9.936.075.218c.155.455.28.784.435 1.117.31.663.636 1.073.87 1.15.798.267 1.545-.231 1.545-.963 0-.115-.033-.244-.109-.417a4.432 4.432 0 0 0-.203-.391c-.044-.077-.24-.409-.29-.499-.735-1.28-1.015-2.356-.76-3.885.35-2.1 1.274-3.58 2.785-4.335a.917.917 0 0 1 1.31.64c.283 1.419.7 2.53 1.237 3.337.32.48.605.738 1.178 1.121.39.254.617.407.857.581.37.27.71.56 1.06.909 1.52 1.52 2.101 2.692 2.101 4.314a7.334 7.334 0 1 1-13.898-3.27s1.12-2 1.807.373ZM5.5 12.833a5.5 5.5 0 1 0 11 0c0-1.085-.363-1.816-1.565-3.018-.488-.488-.594-.566-1.636-1.26-.758-.506-1.213-.919-1.687-1.63-.472-.707-.856-1.56-1.156-2.558-.404.53-.686 1.256-.843 2.201-.175 1.053 0 1.728.542 2.672.045.078.24.412.291.502.121.21.211.383.289.558.172.388.265.761.265 1.158 0 2.019-2.004 3.354-3.956 2.704-.632-.211-1.125-.68-1.544-1.352v.023Z"
      clipRule="evenodd"
    />
  </Svg>
);
const FireIcon = memo(SvgComponent);
export default FireIcon;