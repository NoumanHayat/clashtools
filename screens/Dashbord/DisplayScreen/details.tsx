/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';

import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native';
import { images, SIZES, icons } from '../../../constants';
import Feather from 'react-native-vector-icons/Feather';
import { SelectList } from 'react-native-dropdown-select-list';
import ScreenHader from '../../../components/ScreenHaderCopy';
import AppButton from '../../../components/AppButton';


// import { TouchableOpacity } from 'react-native-gesture-handler';
const CustomCard = (props) => {
    return (
        <TouchableOpacity onPress={() => {
            alert('Press');
        }}>
            <View style={styles.cardStyle}>
                <View>
                    {true ? (<Image style={styles.imageStyle} source={{ uri: 'https://clashofclans.com/uploaded-images-blog/_1440xAUTO_crop_center-center_90/Clash-at-Home_thumbnail_builder_906x506.jpg' }} />) :
                        <View>
                            <Text>Image is unable to load</Text>
                        </View>}
                    <View style={styles.textArea}>
                        <View>
                            <Text style={{ fontSize: 20, color: 'black' }}>Town Hall</Text>
                            <Text style={{ fontSize: 13, color: 'gray' }}>Town Hall 15</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, color: 'black' }}>Category</Text>
                            <Text style={{ fontSize: 13, color: 'gray' }}>Farming</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, alignItems: 'flex-end' }}>
                        <AppButton
                            onPress={() => { alert('Working'); }}
                            text="Copy Link"
                            style={{
                                // width: '40%',
                            }}
                            icon={icons.stats}
                            textStyle={{ color: 'white', letterSpacing: 2 }}
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};
const DATA = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id: '3',
        title: 'Third Item',
    },
    {
        id: '4',
        title: 'First Item',
    },
    {
        id: '5',
        title: 'Second Item',
    },
    {
        id: '6',
        title: 'Third Item',
    },
    {
        id: '7',
        title: 'First Item',
    },
    {
        id: '8',
        title: 'Second Item',
    },
    {
        id: '9',
        title: 'Third Item',
    },
    {
        id: '10',
        title: 'First Item',
    },
];

const Screen = ({ navigation }) => {
    const home = true
    const [status, setStatus] = useState('All');
    const tablist = [
        { status: 'All' },
        { status: 'FARMING' },
        { status: 'TROPHY' },
        { status: 'WAR' },
        { status: 'TROLL' },
    ];
    const data = [
        { key: '2', value: 'Appliances' },
        { key: '3', value: 'Cameras' },
        { key: '5', value: 'Vegetables' },
        { key: '6', value: 'Diary Products' },
        { key: '7', value: 'Drinks' },
    ];
    const [selected, setSelected] = useState('Appliances');
    const setStatusFilter = (status) => {
        setStatus(status);
    }

    return (
        <ImageBackground
            source={images.background} resizeMode="cover"
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
            }}>
            <ScreenHader title="Base" navigation={navigation} onlyBack={true} />
            <View style={styles.container}>
                <Image style={{
                    width: '100%',
                    height: 300,
                    resizeMode: 'stretch',
                }} source={{ uri: 'https://clashofclans.com/uploaded-images-blog/_1440xAUTO_crop_center-center_90/Clash-at-Home_thumbnail_builder_906x506.jpg' }} />
            </View>
            <View style={styles.buttonLine}>
                <View style={{}}>
                    <AppButton
                        onPress={() => { alert('Working'); }}
                        text="Copy Link"
                        style={{
                            // width: '40%',
                            backgroundColor:'#445cda'
                        }}
                        // icon={icons.stats}
                        textStyle={{ color: 'white', letterSpacing: 2 }}
                    />
                </View>
                <View style={{}}>
                    <AppButton
                        onPress={() => { alert('Working'); }}
                        text="Share Base"
                        style={{
                            // width: '40%',
                            backgroundColor:'#445cda'
                        }}
                        // icon={icons.stats}
                        textStyle={{ color: 'white', letterSpacing: 2 }}
                    />
                </View>
            </View>
        </ImageBackground >

    );
};

export default Screen;
const styles = StyleSheet.create({
    container: {
        // flex: 0.5,
        // marginHorizontal: 20
    },
    buttonLine: {
        flexDirection:'row',
        justifyContent:'space-between',
        margin:20,
        
    }
});
