import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps180146Navigator from '../features/Maps180146/navigator';
import Additem180145Navigator from '../features/Additem180145/navigator';
import Maps180141Navigator from '../features/Maps180141/navigator';
import UserProfile180137Navigator from '../features/UserProfile180137/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps180146: { screen: Maps180146Navigator },
Additem180145: { screen: Additem180145Navigator },
Maps180141: { screen: Maps180141Navigator },
UserProfile180137: { screen: UserProfile180137Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
