import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/navigation/StackNavigator';
import {PermissionsChecker} from './presentation/provider/PermissionsChecker';

export const MapsApp = () => {
  return (
    <NavigationContainer>
      <PermissionsChecker>
        <StackNavigator />
      </PermissionsChecker>
    </NavigationContainer>
  );
};
