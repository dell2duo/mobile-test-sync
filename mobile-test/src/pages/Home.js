import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import { useQuery } from "@tanstack/react-query";

export const HomeScreen = ({ navigation }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://dev.api.syncremote.co/api/v1/admin/users").then((res) =>
        res.json()
      ),
  });

  const seeDetails = (user) => {
    navigation.navigate("Details", { user });
  };

  if (isLoading)
    return (
      <View>
        <Text>Loading users...</Text>
      </View>
    );

  if (error)
    return (
      <View>
        <Text>{"An error has occurred: " + error.message}</Text>
      </View>
    );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView style={{ flex: 1, width: "100%", padding: 16 }}>
        {data.users.map((user) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 16,
              backgroundColor: "white",
              borderRadius: 8,
              marginBottom: 8,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {user.name || "No name registered"}
            </Text>
            <TouchableOpacity onPress={() => seeDetails(user)}>
              <Text style={{ color: "blue" }}>Details...</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
