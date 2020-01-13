import React from 'react';
import "@patternfly/react-core/dist/styles/base.css";
import {BackgroundImage, BackgroundImageSrc} from '@patternfly/react-core';
import sea from './assets/images/sea.jpg'

class Background extends React.Component {
    constructor(props) {
      super(props);
      /**
       * Note: When using background-filter.svg, you must also include #image_overlay as the fragment identifier
       */
      this.images = {
        [BackgroundImageSrc.xs]: sea,
        [BackgroundImageSrc.xs2x]: sea,
        [BackgroundImageSrc.sm]: sea,
        [BackgroundImageSrc.sm2x]: sea,
        [BackgroundImageSrc.lg]: sea
      };
    }
    render() {
      return <BackgroundImage src={this.images} />;
    }
  }

  export default Background;
 