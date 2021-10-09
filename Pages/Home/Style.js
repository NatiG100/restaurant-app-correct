import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fcfcfc',
      height:"100%",
    },
    menuList:{
      // flex:5,
      backgroundColor:"#fff"
    },
    homeHeader:{
      padding:8,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      backgroundColor: "#00171F",
    },
    text: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    brand:{
      fontSize:"40px",
    },
    brandLeft:{
      fontWeight:"bold",
      color:"#00A8E8",
    },
    brandRight:{
      color:"#FFFFFF",
      fontWeight:10,
    },
    menuItemIcon:{
      width: 50,
      height:50,
    },
  });
export default styles;  