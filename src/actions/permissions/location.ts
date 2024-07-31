import {Platform} from 'react-native';
import {
  openSettings,
  PERMISSIONS,
  request,
  PermissionStatus as RNPermissionStatus,
} from 'react-native-permissions';
import {PermissionStatus} from '../../infrastructure/interfaces';

export const requestLocationPermission =
  async (): Promise<PermissionStatus> => {
    let status: RNPermissionStatus = 'unavailable';

    if (Platform.OS === 'ios') {
      status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if (Platform.OS === 'android') {
      status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
      throw new Error(`Platform Not Supported`);
    }

    if (status === 'blocked') {
      await openSettings();
      // TODO: checkLocationPermission
    }

    const permissionMapper: Record<RNPermissionStatus, PermissionStatus> = {
      unavailable: 'unavailable',
      blocked: 'blocked',
      denied: 'denied',
      granted: 'granted',
      limited: 'limited',
    };

    return permissionMapper[status] ?? 'unavailable';
  };
