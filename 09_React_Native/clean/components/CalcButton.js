'use strict';

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Color from '../colors';

const CalcBtn = ({onPress, styleContainer, disabled, title}) => {
  const _style = disabled
    ? {
      backgroundColor: colors.GREY,
    }
    : {};

  return (
    <TouchableOpacity
      onPress={disabled ? () => {} : onPress}
      style={{...styles.commonButton, ...styles[styleContainer], _style}}
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.5}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CalcBtn;

const styles = StyleSheet.create({
  commonButton: {
    flex: 1,
    margin: 10,
    height: 50,
    borderWidth: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: Color.BLACK,
  },
  numericButton: {
    backgroundColor: Color.NUMERIC_BUTTON_BG,
  },
  clearButton: {
    color: Color.TEXT_COLOR,
    backgroundColor: Color.CLEAR_BUTTON_BG,
  },
  operationButton: {
    backgroundColor: Color.OPERATION_BUTTON_BG,
  }
});
