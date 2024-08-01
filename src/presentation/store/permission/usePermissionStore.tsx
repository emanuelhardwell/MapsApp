import {create} from 'zustand';
import {PermissionStatus} from '../../../infrastructure/interfaces';
import {
  checkLocationPermission,
  requestLocationPermission,
} from '../../../actions/permissions/location';

interface usePermissionStoreProps {
  permissionStatus: PermissionStatus;

  requestLocationPermission: () => Promise<PermissionStatus>;
  checkLocationPermission: () => Promise<PermissionStatus>;
}

export const usePermissionStore = create<usePermissionStoreProps>()(set => ({
  permissionStatus: 'undetermined',

  requestLocationPermission: async () => {
    const status = await requestLocationPermission();
    set({permissionStatus: status});
    return status;
  },

  checkLocationPermission: async () => {
    const status = await checkLocationPermission();
    set({permissionStatus: status});
    return status;
  },
}));
