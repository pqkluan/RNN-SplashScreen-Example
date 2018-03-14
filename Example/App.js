import { Navigation } from "react-native-navigation";
import WelcomeScreen from "./src/screens/WelcomeScreen";

const WelcomeScreenID = "pqkluan.Welcome";
Navigation.registerComponent(WelcomeScreenID, () => WelcomeScreen);

export const startApp = () => {
  let j = 0;
  for (let i = 0; i < 909000000; i++) {
    j += i;
  }
  console.log(j)
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
