import React from 'react';
import PropTypes from 'prop-types';
import * as components from '@mdxp/components';
import {Step} from '@mdxp/core';
import Prism from '@theme-ui/prism';

const Pre = ({children}) => <React.Fragment>{children}</React.Fragment>;

Pre.propTypes = {
  children: PropTypes.node
};

const StepTransition = (props) => (
  <Step
    styles={{
      before: {opacity: 0},
      after: {opacity: 1, transition: 'all 0.2s ease-out'}
    }}
    {...props}
  />
);

export default {
  ...components,
  pre: Pre,
  code: Prism,
  StepTransition
};
