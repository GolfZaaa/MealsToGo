import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import * as React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={styles.search}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={{ backgroundColor: "pink", flex: 1, padding: 16 }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    padding: 16,
    backgroundColor: "green",
  },
});
