import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({children}) {
  // const {width, height} = useWindowDimensions('');

  // const paddingDistance = height < 380 ? 6 : 24;
  // const marginDistance = height < 380 ? 6 : 24;

  return (
    <View style={[styles.container,
      // {padding: paddingDistance, margin: marginDistance}
    ]}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    // fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
  },
})