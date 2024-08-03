import {Pressable, StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../../../config/theme/global-styles';
import {usePermissionStore} from '../../store/permission/usePermissionStore';

export const PermissionsScreen = () => {
  const {permissionStatus, requestLocationPermission} = usePermissionStore();

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Habilitar Ubicación</Text>

      <Pressable
        style={globalStyles.btnPrimary}
        onPress={requestLocationPermission}>
        <Text style={styles.text}>Habilitar localización</Text>
      </Pressable>

      <Text>Estado actual: {permissionStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {color: 'white'},
  textTitle: {fontSize: 16, fontWeight: 'bold'},
});
