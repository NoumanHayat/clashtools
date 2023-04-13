/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
export const sendReport = async (baseId: string, title: string, details: string,) => {
  let response;
  try {
    await firestore().collection('Report').add({
      baseId: baseId,
      title: title,
      details: details,
      status: false,
    }).then(function () {
      // console.log({ status: 'success', message: 'User Added Successfully!' })
    }).catch((Error) => {
      console.log({ status: 'fail', message: Error });
    })
  } catch (error) {
    return ({ status: 'fail', message: error })
  }
  return ({ status: 'success', message: 'success' });
}
// export const getUrl = async (baseId: string,title: string,details: string,) => {
//   console.log('------------------------------------');
//   const url = await storage().ref('/Th8Home/Th8War').listAll();
//   url._items.forEach(async (e)=>{
//     await e.getDownloadURL().then((es)=>{
//       console.log(e.path)
//       console.log(es)
//     })
//   })
// } 
export const Action = async () => {
  const d = new Date();
  console.log(d);
}