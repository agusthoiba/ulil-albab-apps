import { StyleSheet  } from 'react-native';

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    dashboardContainer: {
      // flex: 1,
      fontFamily: 'SFPro-Medium',
      backgroundColor: '#fff',
      // alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 10,
      // margin: 5,
      marginTop: 50,
      width: 'auto',
      minWidth: 334
    },
    dashboardLogo: {
      margin: 10,
      alignItems: 'center',
    },
    wrapper: {
     
    },
    dashboardTop: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor: '#1fb89d',
      // alignItems: 'center',
      borderRadius: 15,
      // margin: 10,
      padding: 15,
      height: 111,
    },
    dashboardTopText: {
      marginLeft: 10
    },
    wrapperNoBack: {
      flex: 2,
      padding: 10,
      alignItems: 'center',
      borderRadius: 15,
      flexDirection: 'row', 	
      justifyContent: 'space-between'
    },
    item: {
      backgroundColor: '#1fb89d',
      width: 'auto',
      minWidth: 150,
      maxWidth: 160,
      height: 200,
      // margin: 5,
      borderRadius: 15,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    itemText: {
      padding: 10,
      fontSize: 15,
      height: 30,
    },
    wrapperBanner: {
      // flex: 0.3,
      padding: 10,
      alignItems: 'center',
      borderRadius: 20,
    },
    
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      // fontSize: 15,
      // lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    textTitle: {
      color: 'white',
      fontSize: 25,
      // lineHeight: 84,
      // fontWeight: 'bold',
      // textAlign: 'left',
      
      // backgroundColor: '#000000c0',
    },

    textSubTitle: {
      color: 'white',
      fontSize: 15,
      textAlign: 'left',
    },
    textBold: {
      color: 'white',
      // fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    itemList: {
      padding: 10,
      fontSize: 15,
      height: 20,
    },
    itemQuranList: {
      padding: 10,
      // fontFamily: 'SFPro-Black',
      fontSize: 12,
      height: 20,
      // borderBottomColor: '#D9D9D9'
    },
    itemQuranListDetail: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      // borderBottomStyle: 'solid',
      borderBottomColor: '#D9D9D9',
      fontFamily: 'SFPro-Thin',
      
    },
    itemQuranListDetailNumber: {
      padding: 10,
      width: 38,
      height: 38,
      backgroundColor: '#C9E2CE',
      borderRadius: 15,
      fontSize: 15,
      alignItems: 'center'
    },
    itemQuranListDetailCaption: {
      paddingLeft: 10,
      flex: 10
    },
    itemQuranListDetailAction: {
      flex: 1
    },
    itemQuranListDetailCaptionName: {
      fontSize: 17
    },
    itemQuranListDetailCaptionAttr: {
      fontFamily: 'SFPro-Thin',
      fontSize: 14,
    },

    itemQuranDetailContainer: {
      // padding: 10,
      
      // justifyContent: 'space-between'
      //height: 20,
      // borderBottomColor: '#D9D9D9'
    },
    itemQuranDetailList: {
      flexDirection: 'row',
      fontSize: 12,
      fontFamily: 'SFPro-Thin',
      marginBottom: 15
      // margin: 5
    },
    itemQuranDetailListOdd: {
      backgroundColor:'#E8F3DE'
    },
    itemQuranDetailListText: {
      paddingLeft: 10,
      flex: 10
    },
    itemQuranDetailListAyatArab: {
      fontFamily: 'SFPro-Thin',
      paddingLeft: 3,
      paddingRight: 3,
      textAlign: 'right',
      
    },
    itemQuranDetailListAyatTerjemahan: {
      fontFamily: 'SFPro-Thin',
      paddingLeft: 3,
      paddingRight: 3
    },
  });
  
export default Styles;
