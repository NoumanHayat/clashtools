/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import DataBuilder from '../Data/DataBuilder.json';
import HomeFarming from '../Data/HomeFarming.json';
import HomeTroll from '../Data/HomeTroll.json';
import HomeTrophy from '../Data/HomeTrophy.json';
import HomeWar from '../Data/HomeWar.json';


export const sendReport = async (photoUrl: string, link: string, issue: string,) => {
  let response;
  try {
    await firestore().collection('Report').add({
      photoUrl: photoUrl,
      link: link,
      issue: issue,
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
export const Action = async () => {
  console.log('Starting...');
  const dataSet = [{}];
  dataSet.pop();
  await firestore()
    .collection('AllData')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        dataSet.push(documentSnapshot.data());
      });
    });
  // await firestore()
  //   .collection('HomeFarming')
  //   .get()
  //   .then(querySnapshot => {
  //     querySnapshot.forEach(documentSnapshot => {
  //       dataSet.push(documentSnapshot.data());
  //     });
  //   });

  console.log(dataSet.length);
}
export const getData = async () => {
  console.log('Starting...');
  const dataSet = [{}];
  dataSet.pop();
  await firestore()
    .collection('AllData')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        dataSet.push(documentSnapshot.data());
      });
    });
  return (dataSet);
} 
export const sendReview = async (photoUrl: string, link: string, review: string,) => {
  let response;
  try {
    await firestore().collection('Review').add({
      photoUrl: photoUrl,
      link: link,
      review: review,
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