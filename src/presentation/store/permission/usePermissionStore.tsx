import {create} from 'zustand';
import {PermissionStatus} from '../../../infrastructure/interfaces';
import {
  checkLocationPermission,
  requestLocationPermission,
} from '../../../actions/permissions/location';

interface usePermissionStoreProps {
  locationStatus: PermissionStatus;

  requestLocationPermission: () => Promise<PermissionStatus>;
  checkLocationPermission: () => Promise<PermissionStatus>;
}

export const usePermissionStore = create<usePermissionStoreProps>()(set => ({
  locationStatus: 'undetermined',

  requestLocationPermission: async () => {
    const status = await requestLocationPermission();
    set({locationStatus: status});
    return status;
  },

  checkLocationPermission: async () => {
    const status = await checkLocationPermission();
    set({locationStatus: status});
    return status;
  },
}));
