import PropTypes from "prop-types";
import React from "react";

import { View } from "react-native";
import styles from "./styles";

const Container = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

Container.propTypes = {
  // we make it 'any' not 'element' to make the container accept several children not one
  children: PropTypes.any
};

export default Container;
