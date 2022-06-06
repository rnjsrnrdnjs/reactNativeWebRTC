import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import store from "./store/index";
import "react-native-gesture-handler";
import CallScreen from "./components/CallScreen";

import { connect } from "react-redux";
import { joinRoom } from "./store/actions/videoActions";

//const store = createStore(reducer);

function App() {
  useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <CallScreen></CallScreen>
    </Provider>
  );
}

const mapStateToProps = ({ video }) => ({
  video,
});

export default connect(mapStateToProps, { joinRoom })(App);
