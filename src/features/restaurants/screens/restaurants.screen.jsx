import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const Searchcontainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blanchedalmond;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext);

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
          data={restaurantContext.restaurants}
          renderItem={() => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          )}
          keyExtractor={(item,index) => index}
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
