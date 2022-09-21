import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/Dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userImg: {
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
  },
  imageContainer: {
    height: vh(100),
    width: vw(100),
  },
  float: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  top: {
    width: '100%',
    position: 'absolute',
    top: vh(100),
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    color: 'black',
  },
  local: {
    flex: 1,
  },
  remoteContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 100,
    elevation: 100,
  },
  remote: {
    width: vw(130),
    height: vh(200),
  },
  joinScreenContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  videoIcon: {
    height: '100%',
    width: '100%',
  },
  videoIconContainer: {
    height: vh(25),
    width: vw(25),
    marginHorizontal: vw(5),
  },
  audioIcon: {
    height: '100%',
    width: '100%',
  },
  audioIconContainer: {
    height: vh(25),
    width: vw(25),
    marginHorizontal: vw(10),
  },
  modalView: {
    margin: 0,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  endcallButton: {
    height: vw(50),
    width: vw(50),
    backgroundColor: '#EB5545',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: vw(30),
    marginTop: vw(20),
  },
  endcallIcon: {
    height: vw(30),
    width: vw(30),
    resizeMode: 'contain',
  },
  roundButtonContainer: {
    alignItems: 'center',
  },
  roundButton: {
    height: vw(50),
    width: vw(50),
    backgroundColor: '#FFFFFF29',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vw(30),
  },
  roundButtonIcon: {
    height: vw(30),
    width: vw(30),
    resizeMode: 'contain',
  },
  buttonText: {color: 'white'},
  buttonParentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: vw(30),
  },
  modalBottomContainer: {
    height: vw(200),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#1E1E1Eb3',
    borderTopLeftRadius: vw(10),
    borderTopRightRadius: vw(10),
  },
  connectingText: {
    fontSize: 21,
    color: '#FFFFFFA8',
  },
  nameText: {
    fontSize: 32,
    color: 'white',
  },
  nameContainer: {
    marginLeft: 10,
  },
  profileImage: {
    backgroundColor: 'white',
    height: vw(60),
    width: vw(60),
    borderRadius: vw(45),
    resizeMode: 'contain',
  },
  profileContainer: {
    position: 'absolute',
    height: vw(80),
    width: 'auto',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: vw(85),
  },
});
