/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { useState, useCallback } from 'react';

import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Linking,
    Button,
    Modal,
    TextInput,
} from 'react-native';
import { images, SIZES, icons } from '../../../constants';
import Feather from 'react-native-vector-icons/Feather';
import { SelectList } from 'react-native-dropdown-select-list';
import ScreenHader from '../../../components/ScreenHaderCopy';
import AppButton from '../../../components/AppButton';
import Hyperlink from 'react-native-hyperlink';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalLayout from '../../../components/ModalLayout';


import { FloatingAction } from 'react-native-floating-action';


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
    const actions = [
        {
            text: 'Report',
            icon: <MaterialIcons name="file-upload" size={24} color="white" />,
            name: 'Report',
            position: 1
        },
        {
            text: 'Review',
            icon: images.clanicon,
            name: 'Review',
            position: 2
        }
    ];
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
    const [vasible, setVasible] = useState(false);
    const [vasibleReport,setVasibleReport]=useState(false);
    return (
        <ImageBackground
            source={images.background} resizeMode="cover"
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
            }}>
            <ScreenHader title="Selected Base" navigation={navigation} onlyBack={true} />
            <View style={styles.container}>
                <Image style={{
                    width: '100%',
                    height: 300,
                    resizeMode: 'stretch',
                }} source={{ uri: 'https://clashofclans.com/uploaded-images-blog/_1440xAUTO_crop_center-center_90/Clash-at-Home_thumbnail_builder_906x506.jpg' }} />
            </View>
            <View style={styles.buttonLine}>
                <View style={{}}>
                    {/* <AppButton
                        onPress={async () => {
                            let url = 'http://maps.apple.com/?ll=37.484847,-122.148386%22';

                            const handlePress = async () => {
                                // Open the custom settings if the app has one
                                await Linking.getInitialURL().then((url) => {
                                    if (url) {
                                        console.log('Initial url is: ' + url);
                                    }
                                }).catch(err => console.error('An error occurred', err));
                                Linking.canOpenURL(url)
                                    .then(supported => {
                                        if (!supported) {
                                            console.log("Can't handle url: " + url);
                                        } else {
                                            return Linking.openURL(url);
                                        }
                                    })
                                    .catch(err => console.error('An error occurred', err));
                            };
                            handlePress();
                        }}
                        text="Copy Link"
                        style={{
                            // width: '40%',
                            backgroundColor: '#445cda'
                        }}
                        // icon={icons.stats}
                        textStyle={{ color: 'white', letterSpacing: 2 }}
                    /> */}
                </View>
                <View style={{}}>
                    <AppButton
                        onPress={async () => {
                            let url = 'http://maps.apple.com/?ll=37.484847,-122.148386%22';

                            const handlePress = async () => {
                                // Open the custom settings if the app has one
                                await Linking.getInitialURL().then((url) => {
                                    if (url) {
                                        console.log('Initial url is: ' + url);
                                    }
                                }).catch(err => console.error('An error occurred', err));
                                Linking.canOpenURL(url)
                                    .then(supported => {
                                        if (!supported) {
                                            console.log("Can't handle url: " + url);
                                        } else {
                                            return Linking.openURL(url);
                                        }
                                    })
                                    .catch(err => console.error('An error occurred', err));
                            };
                            handlePress();
                        }}
                        text="Copy Base"
                        style={{
                            // width: '40%',
                            backgroundColor: '#445cda'
                        }}
                        // icon={icons.stats}
                        textStyle={{ color: 'white', letterSpacing: 2 }}
                    />
                </View>
            </View>
            <FloatingAction
                actions={actions}
                onPressItem={name => {
                    console.log(`selected button: ${name}`);
                    if (name == 'Review') {
                        setVasible(true);
                    }
                    if (name == 'Report') {
                        setVasibleReport(true);
                    }
                }}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={vasible}
                onRequestClose={() => setVasible(!vasible)}
            >
                <ModalLayout onClose={() => setVasible(!vasible)}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 28, color: 'black' }}>
                            Thank You for review! 😀
                        </Text>
                        <View style={{ marginRight: 5, ...styles.textBoxSignSmall }}>
                            <TextInput
                                placeholder="Please Enter review here..."
                                placeholderTextColor='gray'
                                autoCapitalize={'none'}
                                // multiLine: true
                                multiline={true}
                                style={{
                                    height: 'auto',
                                    fontSize: 12,
                                    marginLeft: 20,
                                    color: 'gray',
                                    justifyContent: 'center',
                                    alignItems: 'center', 
                                }}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                        <AppButton
                            onPress={() => { navigation.push('Status') }}
                            text="Submit"
                            style={{
                                // width: '100%',
                                marginTop: 30,
                                paddingHorizontal: 40,
                            }}
                            textStyle={{ color: 'white', letterSpacing: 2,fontFamily:'Mulish-Black',fontSize:20 }}
                        />
                    </View>
                    </View>
                </ModalLayout>
            </Modal>


            <Modal
                animationType="slide"
                transparent={true}
                visible={vasibleReport}
                onRequestClose={() => setVasibleReport(!vasibleReport)}
            >
                <ModalLayout onClose={() => setVasibleReport(!vasibleReport)}>
                    <View style={{ alignItems: 'center' }}>
                    <View style={{ marginRight: 5, ...styles.textBoxSignSmallTitle }}>
                            <TextInput
                                placeholder="Title"
                                placeholderTextColor='gray'
                                autoCapitalize={'none'}
                                // multiLine: true
                                multiline={true}
                                style={{
                                    height: 'auto',
                                    fontSize: 12,
                                    marginLeft: 20,
                                    color: 'gray',
                                    justifyContent: 'center',
                                    alignItems: 'center', 
                                }}
                            />
                        </View>
                        <View style={{ marginRight: 5, ...styles.textBoxSignSmall }}>
                            <TextInput
                                placeholder="Details "
                                placeholderTextColor='gray'
                                autoCapitalize={'none'}
                                // multiLine: true
                                multiline={true}
                                style={{
                                    height: 'auto',
                                    fontSize: 12,
                                    marginLeft: 20,
                                    color: 'gray',
                                    justifyContent: 'center',
                                    alignItems: 'center', 
                                }}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                        <AppButton
                            onPress={() => { navigation.push('Status') }}
                            text="Submit"
                            style={{
                                // width: '100%',
                                marginTop: 30,
                                paddingHorizontal: 40,
                            }}
                            textStyle={{ color: 'white', letterSpacing: 2,fontFamily:'Mulish-Black',fontSize:20 }}
                        />
                    </View>
                    </View>
                </ModalLayout>
            </Modal>

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
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,

    },
    textBoxSignSmall: {
        // flexDirection: 'row',
        height: 300,
        // flex: 1,
        
        borderRadius: 2,
        backgroundColor: 'lightGray',
        elevation: 2,
        marginTop: 20,
        padding:5,
        width:'100%',
    },
    textBoxSignSmallTitle:{
        height: 50, 
        borderRadius: 2,
        backgroundColor: 'lightGray',
        elevation: 2,
        marginTop: 4,
        padding:5,
        width:'100%', 
    }
});
