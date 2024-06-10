import * as React from 'react';
import {memo} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={31} height={30} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M20.67 3.128a7.582 7.582 0 0 0-5.166 1.818 7.582 7.582 0 0 0-5.166-1.818c-2.248-.007-4.38.96-5.813 2.636-1.23 1.445-2.52 4.061-1.666 8.326 1.364 6.807 11.58 12.394 12.012 12.624a1.33 1.33 0 0 0 1.258 0c.435-.234 10.652-5.82 12.012-12.624.853-4.265-.434-6.875-1.665-8.326-1.43-1.675-3.56-2.642-5.806-2.636Zm4.692 10.532c-.938 4.688-7.754 9.049-9.854 10.294-2.1-1.245-8.916-5.605-9.854-10.294-.646-3.224.238-5.097 1.094-6.101a4.874 4.874 0 0 1 3.72-1.684c1.542-.112 3.031.568 3.923 1.79.219.39.64.636 1.1.638h.014a1.282 1.282 0 0 0 1.1-.626c.891-1.232 2.388-1.917 3.937-1.802a4.874 4.874 0 0 1 3.725 1.684c.854 1.004 1.738 2.877 1.092 6.101h.003Z"
      clipRule="evenodd"
    />
  </Svg>
);
const HeartIcon = memo(SvgComponent);
export default HeartIcon;