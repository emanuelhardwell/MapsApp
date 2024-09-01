import {PropsWithChildren, useEffect} from 'react';
import {AppState} from 'react-native';
import {usePermissionStore} from '../store/permission/usePermissionStore';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../navigation/StackNavigator';

export const PermissionsChecker = ({children}: PropsWithChildren) => {
  const {locationStatus, checkLocationPermission} = usePermissionStore();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    if (locationStatus === 'granted') {
      // navigation.navigate('MapScreen'); //ya no existe el metodo -> replace() es por eso que usamos reset()
      navigation.reset({
        // index: 0,
        routes: [{name: 'MapScreen'}],
      });
    } else if (locationStatus !== 'undetermined') {
      // navigation.navigate('PermissionsScreen');
      navigation.reset({
        routes: [{name: 'PermissionsScreen'}],
      });
    }
  }, [locationStatus]);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      //   console.log('nextAppState', nextAppState);
      if (nextAppState === 'active') {
        checkLocationPermission();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return <>{children}</>;
};
