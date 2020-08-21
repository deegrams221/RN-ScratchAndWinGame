import { FontAwesome } from '@expo/vector-icons';
import { Button } from 'native-base';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// TODO: set a limit so users can only click 5 scratch items

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
    return 'circle';
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
        <View style={styles.topbar}>
          <Text style={styles.toptext}>Scratch and Win Game!</Text>
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
                this.scratchItem(5);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(5)}
                size={50}
                color={this.scratchItemColor(5)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(6);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(6)}
                size={50}
                color={this.scratchItemColor(6)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(7);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(7)}
                size={50}
                color={this.scratchItemColor(7)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(8);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(8)}
                size={50}
                color={this.scratchItemColor(8)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(9);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(9)}
                size={50}
                color={this.scratchItemColor(9)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemrow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(10);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(10)}
                size={50}
                color={this.scratchItemColor(10)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(11);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(11)}
                size={50}
                color={this.scratchItemColor(11)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(12);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(12)}
                size={50}
                color={this.scratchItemColor(12)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(13);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(13)}
                size={50}
                color={this.scratchItemColor(13)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(14);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(14)}
                size={50}
                color={this.scratchItemColor(14)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemrow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(15);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(15)}
                size={50}
                color={this.scratchItemColor(15)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(16);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(16)}
                size={50}
                color={this.scratchItemColor(16)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(17);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(17)}
                size={50}
                color={this.scratchItemColor(17)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(18);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(18)}
                size={50}
                color={this.scratchItemColor(18)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(19);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(19)}
                size={50}
                color={this.scratchItemColor(19)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemrow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(20);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(20)}
                size={50}
                color={this.scratchItemColor(20)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(21);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(21)}
                size={50}
                color={this.scratchItemColor(21)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(22);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(22)}
                size={50}
                color={this.scratchItemColor(22)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(23);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(23)}
                size={50}
                color={this.scratchItemColor(23)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(24);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(24)}
                size={50}
                color={this.scratchItemColor(24)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Button
          onPress={() => {
            this.showAllItemBtn();
          }}
          full
          success
          style={styles.button}
        >
          <Text style={styles.buttontext}>Show All Coupons</Text>
        </Button>
        <Button
          onPress={() => {
            this.resetGameBtn();
          }}
          full
          primary
          style={styles.button}
        >
          <Text style={styles.buttontext}>Reset Game</Text>
        </Button>
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
  topbar: {
    backgroundColor: '#8b78e6',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    marginVertical: 20,
  },
  toptext: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFF',
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
  button: {
    marginVertical: 15,
  },
  buttontext: {
    color: '#FFF',
    fontSize: 25,
  },
});
