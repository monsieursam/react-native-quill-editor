import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  WebViewQuillEditor  from './WebViewQuillEditor';

export default class App extends React.Component {

  getDeltaCallback = response => {
    console.log('getDeltaCallback');

    const html = converter.convert(); 
    console.log(html);
  };

  onDeltaChangeCallback = delta => {
    console.log('onDeltaChangeCallback: ++ ', delta);
  };

  render() {
    return (
      <View style={{
          ...StyleSheet.absoluteFillObject,
          flex: 1,
          padding: 5,
        }}>
        <WebViewQuillEditor
          ref={component => (this.webViewQuillEditor = component)}
          getDeltaCallback={this.getDeltaCallback}
          onDeltaChangeCallback={this.onDeltaChangeCallback}
          backgroundColor={'#fffbea'}
        />
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
});
