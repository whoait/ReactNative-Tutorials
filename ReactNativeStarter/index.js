import { AppRegistry } from 'react-native';
import App from './App';
import LoginScreenV1 from './screens/LoginScreenV1';
import LoginScreenV2 from './screens/LoginScreenV2';
import LoginScreenV3 from './screens/LoginScreenV3';

import FlexBasic from './screens/FlexLayout/Basic';
import RegisterScreenV1 from './screens/RegisterScreenV1';
import RegisterScreenV2 from './screens/RegisterScreenV2';
import RegisterScreenV3 from './screens/RegisterScreenV3';

import ModalScreen from './screens/ModalScreen';
import CameraRollScreen from './screens/CameraRollScreen';
import PropsAndState from './screens/PropsAndState';
import MainStackNavigator from './navigators/MainStackNavigator';
import MainTabNavigator from './navigators/MainTabNavigator';
import AppNavigator from './navigators/AppNavigator';

import ComponentExample from './screens/ComponentExample';
import StateExample from './screens/StateExample';
import LoginScreen from './screens/LoginScreen';
import Complex from './screens/FlexLayout/Complex';

console.disableYellowBox = true;

// AppRegistry.registerComponent('ReactNativeStarter', () => App);

// LOGIN SCREENS
// AppRegistry.registerComponent('ReactNativeStarter', () => LoginScreen);
// AppRegistry.registerComponent('ReactNativeStarter', () => LoginScreenV1);
// AppRegistry.registerComponent('ReactNativeStarter', () => LoginScreenV2);
// AppRegistry.registerComponent('ReactNativeStarter', () => LoginScreenV3);

// FLEX
// AppRegistry.registerComponent('ReactNativeStarter', () => FlexBasic);
// AppRegistry.registerComponent('ReactNativeStarter', () => Complex);

// PROPS AND STATE
// AppRegistry.registerComponent('ReactNativeStarter', () => PropsAndState);
// AppRegistry.registerComponent('ReactNativeStarter', () => ComponentExample);
// AppRegistry.registerComponent('ReactNativeStarter', () => StateExample);

// CORE COMPONENTS
// import ActionSheetIOSScreen from './screens/CoreComponents/IOS/ActionSheetIOSScreen';
// AppRegistry.registerComponent('ReactNativeStarter', () => ActionSheetIOSScreen);

// import DatePickerIOSScreen from './screens/CoreComponents/IOS/DatePickerIOSScreen';
// AppRegistry.registerComponent('ReactNativeStarter', () => DatePickerIOSScreen);

// import ModalExamples from './screens/CoreComponents/ModalExamples';
// AppRegistry.registerComponent('ReactNativeStarter', () => ModalExamples);


// import ScrollViewExamples from './screens/CoreComponents/ScrollViewExamples';
// AppRegistry.registerComponent('ReactNativeStarter', () => ScrollViewExamples);

// LIST VIEW
// import FlatListExamples from './screens/CoreComponents/FlatListExamples';
// AppRegistry.registerComponent('ReactNativeStarter', () => FlatListExamples);


// import SectionListExamples from './screens/CoreComponents/SectionListExamples';
// AppRegistry.registerComponent('ReactNativeStarter', () => SectionListExamples);

// import SectionListAdvancedExamples from './screens/CoreComponents/SectionListAdvancedExamples';
// AppRegistry.registerComponent('ReactNativeStarter', () => SectionListAdvancedExamples);


// import PickerExamples from './screens/CoreComponents/Android/PickerExamples';
// AppRegistry.registerComponent('ReactNativeStarter', () => PickerExamples);

// REGISTER SCREENS
// AppRegistry.registerComponent('ReactNativeStarter', () => RegisterScreenV1);
// AppRegistry.registerComponent('ReactNativeStarter', () => RegisterScreenV2);
// AppRegistry.registerComponent('ReactNativeStarter', () => RegisterScreenV3);

// NAVIGATORS
AppRegistry.registerComponent('ReactNativeStarter', () => AppNavigator);
// AppRegistry.registerComponent('ReactNativeStarter', () => MainTabNavigator);

// MODAL SCREENS
// AppRegistry.registerComponent('ReactNativeStarter', () => ModalScreen);

// CAMERA
// AppRegistry.registerComponent('ReactNativeStarter', () => CameraRollScreen);


// import MainScreen from './screens/Gallery/MainScreen';
// AppRegistry.registerComponent('ReactNativeStarter', () => MainScreen);

// import SimpleGallery from './screens/SimpleGallery';
// AppRegistry.registerComponent('ReactNativeStarter', () => SimpleGallery);

