import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const myIcon = <Icon name="rocket" size={50} color="#900" />;

export const LoadingScreen = () => {
  return (
    <View>
      <Text>LoadingScreen</Text>
      {myIcon}
    </View>
  );
};
