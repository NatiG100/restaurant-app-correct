import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    header:{
      position:"sticky",
      top:"0px",
      padding:8,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      backgroundColor: "#00171F",
      zIndex:"20000",
      width:"100%",
    },
    text: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    brandLeft:{
      fontWeight:"bold",
      color:"#00A8E8",
    },
    brandRight:{
      color:"#FFFFFF",
      fontWeight:10,
    },
  });
export default styles;  