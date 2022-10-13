import { Dimensions, StyleSheet, useWindowDimensions, View } from "react-native";

import Colors from "../../constants/colors";

function Card({children}) {
  // const {width, height} = useWindowDimensions('');
  
  // const marginTopDistance = height < 380 ? 10 : 36;
  
  return (
    <View style={[styles.card, 
      // {marginTop: marginTopDistance}
    ]}>{children}</View>
  );
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16, 
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    // for IOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
})