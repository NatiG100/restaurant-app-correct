// import React, { useState } from 'react';

// import {
//     Text,
//     TouchableOpacity
// } from 'react-native';

// import styles from "./Style";
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import {RNCamera} from 'react-native-camera';
// const ScanQR = () =>{
//     const [data, setData] = useState("");
//     const gotData = (e)=>{
//         setData(e.data);
//     }
//     return (
//         <QRCodeScanner
//             onRead={gotData} 
//             flashMode={RNCamera.Constants.FlashMode.torch}
//             topContent={
//                 <Text style={styles.centerText}>
//                     {data}
//                     <Text style={styles.textBold}>Scan the QR code to see the menu.</Text>
//                 </Text>
//             }
//             bottomContent={
//                 <TouchableOpacity style={styles.buttonTouchable}>
//                     <Text style={styles.buttonText}>OK. Got it!</Text>
//                 </TouchableOpacity>
//             }
//         />
//     );
// }

// export default ScanQR;