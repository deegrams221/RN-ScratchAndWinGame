import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
      return 'frown-o';
    }
    return 'minus-circle';
  };

  // find the correct color
  scratchItemColor = (itemNum) => {
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
        <View>
          <Text>new app yaya</Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.itemrow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(0);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(0)}
                size={50}
                color={this.scratchItemColor(0)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(1);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(1)}
                size={50}
                color={this.scratchItemColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(2);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(2)}
                size={50}
                color={this.scratchItemColor(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(3);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(3)}
                size={50}
                color={this.scratchItemColor(3)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(4);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(4)}
                size={50}
                color={this.scratchItemColor(4)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemrow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(0);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(0)}
                size={50}
                color={this.scratchItemColor(0)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(1);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(1)}
                size={50}
                color={this.scratchItemColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(2);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(2)}
                size={50}
                color={this.scratchItemColor(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(3);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(3)}
                size={50}
                color={this.scratchItemColor(3)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(4);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(4)}
                size={50}
                color={this.scratchItemColor(4)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemrow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(0);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(0)}
                size={50}
                color={this.scratchItemColor(0)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(1);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(1)}
                size={50}
                color={this.scratchItemColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(2);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(2)}
                size={50}
                color={this.scratchItemColor(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(3);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(3)}
                size={50}
                color={this.scratchItemColor(3)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(4);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(4)}
                size={50}
                color={this.scratchItemColor(4)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemrow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(0);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(0)}
                size={50}
                color={this.scratchItemColor(0)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(1);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(1)}
                size={50}
                color={this.scratchItemColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(2);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(2)}
                size={50}
                color={this.scratchItemColor(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(3);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(3)}
                size={50}
                color={this.scratchItemColor(3)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(4);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(4)}
                size={50}
                color={this.scratchItemColor(4)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemrow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(0);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(0)}
                size={50}
                color={this.scratchItemColor(0)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(1);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(1)}
                size={50}
                color={this.scratchItemColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(2);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(2)}
                size={50}
                color={this.scratchItemColor(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(3);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(3)}
                size={50}
                color={this.scratchItemColor(3)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(4);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(4)}
                size={50}
                color={this.scratchItemColor(4)}
              />
            </TouchableOpacity>
          </View>
        </View>
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
  grid: {},
  itemrow: {
    flexDirection: 'row',
  },
  item: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: '#000',
    minWidth: 70,
  },
});
