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
const CustomCard = ({ navigation }) => {
    return (
        // <TouchableOpacity onPress={() => {
        //     alert('Press');
        // }}>
        <View style={styles.cardStyle}>
            <View>
                {true ? (
                    <Image style={styles.imageStyle} source={{ uri: 'https://clashofclans.com/uploaded-images-blog/_1440xAUTO_crop_center-center_90/Clash-at-Home_thumbnail_builder_906x506.jpg' }} />) :
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
                        onPress={() => { navigation.push('details') }}
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
        // </TouchableOpacity>
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
    // const data = [
    //     { key: '2', value: 'Appliances' },
    //     { key: '3', value: 'Cameras' },
    //     { key: '5', value: 'Vegetables' },
    //     { key: '6', value: 'Diary Products' },
    //     { key: '7', value: 'Drinks' },
    // ];
    // const [selected, setSelected] = useState('Appliances');
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
            <ScreenHader title="Chats" navigation={navigation} onlyBack={true} />
            {home ? <><View style={{ marginHorizontal: 10 }}>
                <ScrollView horizontal style={styles.listTab}>
                    {tablist.map((tab) => {
                        return (
                            <TouchableOpacity key={tab.status} style={[styles.btnTab, tab.status === status && styles.tnTabActive]}
                                onPress={() => { setStatusFilter(tab.status); }}>
                                <Text style={[styles.textTab, tab.status === status && styles.tnTabTextActive]}>{tab.status}</Text>
                            </TouchableOpacity>);
                    })}
                </ScrollView>
            </View>
            {/* <View style={{ padding: 10, marginHorizontal: 10 }}>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={data}
                        inputStyles={{ color: 'gray' }}
                        dropdownTextStyles={{ color: 'gray' }}
                        boxStyles={styles.dropdownBox}
                        dropdownStyles={{ marginTop: 4 }}
                        save="value"
                        search={false}
                        searchPlaceholder={'Selected'}
                        arrowicon={<View>
                            <Feather name="chevron-down" size={24} color="black" />
                        </View>} />
                </View> */}
                </> 
                : <Text></Text>}

            {/* <ScrollView > */}

            <View style={{ flex: 1 }}>
                <FlatList
                    data={DATA}
                    renderItem={
                        ({ item }) => <CustomCard navigation={navigation} />
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        </ImageBackground >

    );
};

export default Screen;
const styles = StyleSheet.create({
    tnTabActive: {
        backgroundColor: 'black'
    },
    tnTabTextActive: {
        color: 'white',
    },
    btnTab: {
        width: 100,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#E9EBEB',
        padding: 10,
        justifyContent: 'center',
        marginLeft: 5,
        // backgroundColor: 'rgba(61, 38, 69, 0.2)'

    },
    container: {
        // margin: 30,
        // marginBottom: 10,
        // marginTop: 0,
    },
    cardStyle: {
        backgroundColor: '#F7F7FE', borderRadius: 10,
        padding: 10, margin: 20, shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 10,
    },
    imageStyle: {
        width: '100%',
        height: 200,
        borderRadius: 1,
    }, textArea: {
        padding: 8,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dropdownBox: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 5,
        // margin: 10,
        backgroundColor: '#ffff',
        marginBottom: 0,
        // borderWidth:0,
    },
    listTab: {
        flexDirection: 'row',
        // marginBottom: 20,
        // alignSelf: 'center',
        // marginTop: 19,
        borderRadius: 5,
        // backgroundColor: 'white',
        paddingLeft: 6,
        paddingRight: 6,
        // paddingTop: 4,
        // paddingBottom: 4,
    },
    textTab: {
        fontSize: 15,
        color: 'black',
    },

});
