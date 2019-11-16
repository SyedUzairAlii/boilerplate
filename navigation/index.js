import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import first screen from component 

import MyScreen from '../src/screens/App/App'
const StackNavigator = createStackNavigator({
    MyScreen: {
        screen: MyScreen
    },
}, {
    navigationOptions: {
        drawerLockMode: 'locked-closed'
    }
}
);

const Navigation = createAppContainer(StackNavigator)
export default Navigation;