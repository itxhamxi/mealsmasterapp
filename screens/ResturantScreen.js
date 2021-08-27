import React, { useContext } from "react";
import { StatusBar, FlatList, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { ResturantInfoCard } from "../components/ResturantInfoCard";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../components/Spacer";
import { ResturantsContext } from "../services/ResturantContext";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const ResturantScreen = () => {
  const { resturants, isLoading, error } = useContext(ResturantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <FlatList
        data={resturants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <ResturantInfoCard resturant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
