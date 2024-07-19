import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function ActionButton({ color, icon, label, path }) {
  return (
    <TouchableOpacity
      style={{ alignItems: "center" }}
      activeOpacity={0.7}
      onPress={() => {
        if (path) {
          router.navigate(path);
        }
      }}
    >
      <View
        style={[
          styles.actionButton,
          { backgroundColor: color ? color : "#7b48f4" },
        ]}
      >
        <MaterialIcons
          name={icon ? icon : "attach-money"}
          size={32}
          color="white"
        />
      </View>
      <Text style={styles.text.actionText}>{label ? label : "Label"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  action: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  actionButton: {
    width: 68,
    height: 68,
    borderRadius: 68,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    actionText: {
      color: "#fff",
    },
  },
});
