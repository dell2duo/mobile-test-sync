import * as React from "react";
import { View, Text } from "react-native";

export const DetailsScreen = ({ route }) => {
  const { user } = route.params;
  console.log(route.params);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 16,
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          width: "100%",
          borderRadius: 8,
          padding: 16,
        }}
      >
        <Text style={{ fontSize: 16 }}>
          Name:{" "}
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{user.name}</Text>
        </Text>
        <Text style={{ fontSize: 16 }}>
          City:{" "}
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{user.city}</Text>
        </Text>
        <Text style={{ fontSize: 16 }}>
          Current job position:{" "}
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {user.position}
          </Text>
        </Text>
        <Text style={{ fontSize: 16 }}>
          School:{" "}
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {user.schoolName}
          </Text>
        </Text>
      </View>
    </View>
  );
};
