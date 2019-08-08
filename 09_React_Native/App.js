/**
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Switch,
  TextInput,
  Text,
  Alert,
  View,
} from 'react-native';

import Colors from './colors';

import CalcBtn from './components/CalcButton';

const initState = {
  result: '0',
  allOperations: [20, 30, 40],
  currentNumber: '',
  hex: true
};

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      ...initState
    }
  }

  numericFn = (title) => {
    Alert.alert('title', title);
    // const { currentNumber: _currNumber } = this.state;
    // const currentNumber = _currNumber ? _currNumber : '';

    // this.setState({
    //   currentNumber: `${currentNumber}${title}`,
    // })
  };

  clearFn = () => {
    this.setState(initState);
  };

  sumOperationFn = () => {
    {
      const { currentNumber, allOperations } = this.state;
      allOperations.push(currentNumber);
      this.setState({
        allOperations,
        currentNumber: 0
      });
    }
  };

  switchFn = (val) => {
    this.setState({
      hex: val,
    });
  };

  hexDisabler = () => this.state.hex;

  buttonsCfg = [
    [
      {title: '1', style: 'numericButton', actionFunc: this.numericFn, disabled: false,},
      {title: '2', style: 'numericButton', actionFunc: this.numericFn, disabled: false,},
      {title: '3', style: 'numericButton', actionFunc: this.numericFn, disabled: false,},
      {title: '4', style: 'numericButton', actionFunc: this.numericFn, disabled: false,},
    ],
    [
      {title: '5', style: 'numericButton', actionFunc: this.numericFn, disabled: false,},
      {title: '6', style: 'numericButton', actionFunc: this.numericFn, disabled: false,},
      {title: '7', style: 'numericButton', actionFunc: this.numericFn, disabled: false,},
      {title: '8', style: 'numericButton', actionFunc: this.numericFn, disabled: false,},
    ],
    [
      {title: '9', style: 'numericButton', actionFunc: this.numericFn, disabled: false,},
      {title: '0', style: 'numericButton', actionFunc: this.numericFn, disabled: false,},
      {title: 'A', style: 'numericButton', actionFunc: this.numericFn, disabled: this.hexDisabler,},
      {title: 'B', style: 'numericButton', actionFunc: this.numericFn, disabled: this.hexDisabler,},
    ],
    [
      {title: 'C', style: 'numericButton', actionFunc: this.numericFn, disabled: this.hexDisabler,},
      {title: 'D', style: 'numericButton', actionFunc: this.numericFn, disabled: this.hexDisabler,},
      {title: 'E', style: 'numericButton', actionFunc: this.numericFn, disabled: this.hexDisabler,},
      {title: 'F', style: 'numericButton', actionFunc: this.numericFn, disabled: this.hexDisabler,},
    ]
  ];

  render() {
    const {result, allOperations, currentNumber} = this.state;
    const resString = result.toString();
    const currentNumberString = currentNumber.toString();
    const allOperationsString = allOperations.join(' + ');

    return (
      <SafeAreaView style={styles.container}>

        {/*DISPLAYS*/}
        <View style={styles.headerContainer}>
          <Text style={styles.textStyle}>Result:</Text>
          <TextInput
            style={styles.inputStyle}
            value={resString}
          />
          <Text style={styles.textStyle}>All operaions:</Text>
          <TextInput
            style={styles.inputStyle}
            value={allOperationsString}
          />
          <Text style={styles.textStyle}>Current number:</Text>
          <TextInput
            style={styles.inputStyle}
            value={currentNumberString}
          />
        </View>

        {/*OPERATIONS*/}
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonsLine}>
            <CalcBtn
              onPress={this.clearFn}
              title={'AC'}
              styleContainer={'clearButton'}/>
            <Switch
              value={this.state.hex}
              onValueChange={this.switchFn}
            />
            <CalcBtn
              onPress={this.sumOperationFn}
              title={'+'}
              styleContainer={'operationButton'}/>
            <CalcBtn
              onPress={() => {}}
              title={'='}
              styleContainer={'operationButton'}/>
          </View>
        </View>

        {/*NUMBERS*/}
        <View style={styles.buttonsContainer}>
          {
            this.buttonsCfg.map((line) => (
              <View style={styles.buttonsLine}>
                {line.map((btn) => (
                  <CalcBtn
                    onPress={btn.actionFunc}
                    title={btn.title}
                    styleContainer={btn.style}/>
                ))}
              </View>
            ))
          }
        </View>

      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.CONTAINER_MAIN,
    padding: 8,
    paddingTop: 25
  },
  headerContainer: {},
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 25
  },
  inputStyle: {
    backgroundColor: Colors.INPUT_BACKGROUND,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'column',
  },
  buttonsLine: {
    flexDirection: 'row',
    height: 'auto',
  }
});
