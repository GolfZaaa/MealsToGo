import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from 'styled-components/native'

const SafeArea = styled.SafeAreaView`
flex: 1;
margin-Top: ${StatusBar.currentHeight}px;
`

const Searchcontainer = styled.View`
  padding: 16px;
  background-Color: #f1950c;
`

const RestaurantListContainer = styled.View`
flex: 1;
  padding: 16px;
  background-Color: blanchedalmond;
`

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
        <RestaurantListContainer>
        <RestaurantInfoCard/>
        </RestaurantListContainer>
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