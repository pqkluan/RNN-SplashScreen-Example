import { Navigation } from "react-native-navigation";
import WelcomeScreen from "./src/screens/WelcomeScreen";

const WelcomeScreenID = "pqkluan.Welcome";
Navigation.registerComponent(WelcomeScreenID, () => WelcomeScreen);

export const startApp = () => {
  // start the app
  Navigation.startSingleScreenApp({
    screen: {
      screen: WelcomeScreenID,
      title: "Welcome",
      navigatorStyle: {}
    },
    animationType: "fade"
  });
};
// setTimeout(() => startApp(), 1000);

startApp();
