import {ActivityIndicator, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const myIcon = <Icon name="rocket" size={50} color="#900" />;

export const LoadingScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>LoadingScreen</Text>
      {myIcon}
      <ActivityIndicator size={100} color="rgb(0, 0, 0)" />
    </View>
  );
};
