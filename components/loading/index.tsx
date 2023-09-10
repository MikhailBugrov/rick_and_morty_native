import React from "react";
import { View, ActivityIndicator } from "react-native";

interface IProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const Loading: React.FC<IProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return <View>{children}</View>;
};

export default Loading;
