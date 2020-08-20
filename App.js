import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// get array of length 25
var itemArray = new Array(25).fill('empty');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rdmNum: '',
    };
  }

  // when app loads up
  // generate random number method
  componentDidMount() {
    this.setState({ rdmNum: this.generateRdmNum });
  }

  // generate random number
  generateRdmNum = () => {
    let rdmNum = Math.floor(Math.random() * 25);
    this.setState({ rdmNum, isScratched: true });
    return rdmNum;
  };

  // what happens when someone clicks on the number -> lucky or unlucky
  scratchItem = (itemNum) => {
    if (this.state.rdmNum === itemNum) {
      itemArray[itemNum] = 'lucky';
    } else {
      itemArray[itemNum] = 'unlucky';
    }
    this.forceUpdate();
  };

  // find the correct icon
  scratchItemIcon = (itemNum) => {
    if (itemArray[itemNum] === 'lucky') {
      return 'dollar';
    } else if (itemArray[itemNum] === 'unlucky') {
      return 'frown-0';
    }
    return 'cross';
  };

  // find the correct color
  scratchItemColor = () => {
    if (itemArray[itemNum] === 'lucky') {
      return 'green';
    } else if (itemArray[itemNum] === 'unlucky') {
      return 'red';
    }
    return 'black';
  };

  // Button -> reveal all icons
  showAllItemBtn = () => {
    itemArray.fill('unlucky');
    itemArray[this.state.rdmNum] = 'lucky';
    this.forceUpdate();
  };

  // Button -> reset the game
  resetGameBtn = () => {
    this.setState({ rdmNum: this.generateRdmNum() }, () => {
      itemArray.fill('empty');
      this.forceUpdate();
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.containerText}>new app yaya</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    fontSize: 30,
  },
});
