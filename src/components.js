import React from 'react';
import PropTypes from 'prop-types';
import * as components from '@mdxp/components';
import Prism from '@theme-ui/prism';

const Pre = ({children}) => <React.Fragment>{children}</React.Fragment>;

Pre.propTypes = {
  children: PropTypes.node
};

export default {
  ...components,
  pre: Pre,
  code: Prism
};
