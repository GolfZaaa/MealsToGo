import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, StatusBar,FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from 'styled-components/native'
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const Searchcontainer = styled.View`
padding: ${(props) => props.theme.space[3]};
`

const RestaurantListContainer = styled.View`
flex: 1;
  padding: 16px;
  background-Color: blanchedalmond;
`

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;


export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SafeArea>
        <Searchcontainer>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </Searchcontainer>
        {/* <RestaurantListContainer> */}
        <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />

        
        {/* </RestaurantListContainer> */}
      </SafeArea>
    </>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    // search: {
    //   padding: 16,
    //   backgroundColor: "blanchedalmond",
    // },
    // list: {
    //     flex: 1,
    //     padding: 16,
    //     backgroundColor: "beige",
    //   },
  });