import {
    Platform,
    SafeAreaView,
    StatusBar,
} from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  paddingTop: ${Platform.OS === "android" ? StatusBar.currentHeight + 1 : 0}px;  
`;