import React from 'react';
import { Button, View,Image,ScrollView,TouchableOpacity,StyleSheet, WebView,Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Program',
  };
  render() {
    return (
     <ScrollView style={{marginTop:10,backgroundColor:'F5FCFF'}}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
     
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center',backgroundColor:'yellow'}}>Pattern Programs</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test')}  style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
     
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center',backgroundColor:'yellow'}}>Matrix Multiplication</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('test1')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
     
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center',backgroundColor:'yellow'}}>Largest Element in Array</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test2')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
     
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center',backgroundColor:'yellow'}}>Factorial of a Number</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test3')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
     
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center',backgroundColor:'yellow'}}>Largest Number Among Three Numbers</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test4')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
     
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center',backgroundColor:'yellow'}}>Check Whether a Character is Vowel or Consonant</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test5')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
     
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center',backgroundColor:'yellow'}}>Check Whether a Number is Positive or Negative</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test6')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
     
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center',backgroundColor:'yellow'}}>Check Whether a Number is Prime or Not</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test7')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
     
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center',backgroundColor:'yellow'}}>Check Armstrong Number</Text>
      </TouchableOpacity>  
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test8')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
     
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center',backgroundColor:'yellow'}}>Check Whether a Number is Palindrome or Not </Text>
      </TouchableOpacity>    
      <TouchableOpacity onPress={() => this.props.navigation.navigate('test9')} style={{backgroundColor:'#ffff',marginBottom:20,marginLeft:'2%',width:'96%',shadowColor:'#000',shadowOpacity:0.2,shadowRadius:2,shadowOffSet:{width:3,height:3}}}  >
     
      <Text  style={{paddingLeft:10,alignItems:'center',fontSize:16,fontWeight:'bold',alignSelf:'center',backgroundColor:'yellow'}}>C Program to Find all Roots of a Quadratic Equation</Text>
      </TouchableOpacity>       
              </ScrollView>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Pattern1',
  };
  render() {
    return (
      <WebView
      source={{uri: 'https://www.programiz.com/c-programming/examples/pyramid-pattern'}}
      
    />
    );
  }
}


class Test extends React.Component {
  static navigationOptions = {
    title: 'Matrix Multiplication',
  };
  render() {
    return (
         
      <WebView
      source={{uri: 'https://www.programiz.com/c-programming/examples/matrix-multiplication'}}
    />
     
    );
  }
}

class Test1 extends React.Component {
  static navigationOptions = {
    title: 'Array',
  };
  render() {
    return (
      <WebView
      source={{uri: 'https://www.programiz.com/c-programming/examples/array-largest-element'}}
    />
    );
  }
}

class Test2 extends React.Component {
  static navigationOptions = {
    title: 'Factorial',
  };
  render() {
    return (
      <WebView
      source={{uri: 'https://www.programiz.com/c-programming/examples/factorial'}}
    />  
    );
  }
}

class Test3 extends React.Component {
  static navigationOptions = {
    title: 'Largest Number',
  };
  render() {
    return (
      <WebView
      source={{uri: 'https://www.programiz.com/c-programming/examples/largest-number-three'}}
    />  
    );
  }
}

class Test4 extends React.Component {
  static navigationOptions = {
    title: ' Vowel-Consonant ',
  };
  render() {
    return (
      <WebView
      source={{uri: 'https://www.programiz.com/c-programming/examples/vowel-consonant'}}
    />  
    );
   }
  }
  class Test5 extends React.Component {
    static navigationOptions = {
      title: ' Negative-Positive-Zero ',
    };
    render() {
      return (
        <WebView
        source={{uri: 'https://www.programiz.com/c-programming/examples/negative-positive-zero'}}
      />
      );
     }
    }

    class Test6 extends React.Component {
      static navigationOptions = {
        title: ' Prime-Number ',
      };
      render() {
        return (
          <WebView
          source={{uri: 'https://www.programiz.com/c-programming/examples/prime-number'}}
        />
        );
      }
    }

    class Test7 extends React.Component {
      static navigationOptions = {
        title: ' Armstrong Number ',
      };
      render() {
        return (
          <WebView
           source={{uri: 'https://www.programiz.com/c-programming/examples/check-armstrong-number'}}
        />
        );
   }
  }

  class Test8 extends React.Component {
    static navigationOptions = {
      title: ' Palindrome-Number  ',
    };
    render() {
      return (
        <WebView
        source={{uri: 'https://www.programiz.com/c-programming/examples/palindrome-number'}}
      />
      );
 }
}

class Test9 extends React.Component {
  static navigationOptions = {
    title: ' Quadratic-Roots  ',
  };
  render() {
    return (
      <WebView
      source={{uri: 'https://www.programiz.com/c-programming/examples/quadratic-roots'}}
    />
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    test: Test,
    test1: Test1,
    test2: Test2,
    test3: Test3,
    test4: Test4,
    test5: Test5,
    test6: Test6,
    test7: Test7,
    test8: Test8,
    test9: Test9,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const styles = StyleSheet.create ({
  container: {
     padding: 10,
     marginTop: 3,
     backgroundColor: '#d9f9b1',
     alignItems: 'center',
     color: 'red'
  },
  text: {
     color: '#4f603c'
  }
})