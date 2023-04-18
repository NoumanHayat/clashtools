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
import { useData } from './../../hooks';

import { FloatingAction } from 'react-native-floating-action';


// import { TouchableOpacity } from 'react-native-gesture-handler';

const Screen = ({ navigation,route }) => {
    console.log(route.params);
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
    const [status, setStatus] = useState('All');
    const data = [
        { key: '2', value: 'Base Link does not work' },
        { key: '3', value: 'Base link does match image' },
        { key: '5', value: 'Something else' },
    ];

    const [selected, setSelected] = useState('Appliances');
    const setStatusFilter = (status) => {
        setStatus(status);
    }
    const [vasible, setVasible] = useState(false);
    const [vasibleReport, setVasibleReport] = useState(false);
    const { Action } = useData();
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
                    height: 250,
                    resizeMode: 'stretch',
                }} source={{ uri: route.params.photoUrl }} />
            </View>
            <View style={styles.buttonLine}>
                <View style={{}}>
                    <AppButton
                        onPress={async () => {
                            const handlePress = async () => {
                                Action();
                            };
                            handlePress();
                        }}
                        text="Action "
                        style={{
                            // width: '40%',
                            backgroundColor: '#445cda'
                        }}
                        // icon={icons.stats}
                        textStyle={{ color: 'white', letterSpacing: 2 }}
                    />
                </View>
                <View style={{}}>
                    <AppButton
                        onPress={async () => {
                            let url = route.params.link;

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
                                textStyle={{ color: 'white', letterSpacing: 2, fontFamily: 'Mulish-Black', fontSize: 20 }}
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
                        {/* <View style={{ marginRight: 5, ...styles.textBoxSignSmallTitle }}>
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
                        </View> */}
                        <Text style={{color:'black'}}>What would you like to report?</Text>
                        <View>
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            inputStyles={{color: 'gray'}}
                            dropdownTextStyles={{color: 'gray'}}
                             boxStyles={styles.dropdownBox}
                            save="value"
                            search={false}
                            searchPlaceholder={'Selected'}
                            arrowicon={<View >
                                <Feather name="chevron-down" size={24} color="black" />
                            </View>
                            }
                        />
                    </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <AppButton
                                onPress={() => { console.log('ok'); test(); }}
                                text="Submit"
                                style={{
                                    // width: '100%',
                                    marginTop: 30,
                                    paddingHorizontal: 40,
                                }}
                                textStyle={{ color: 'white', letterSpacing: 2, fontFamily: 'Mulish-Black', fontSize: 20 }}
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
        padding: 5,
        width: '100%',
    },
    textBoxSignSmallTitle: {
        height: 50,
        borderRadius: 2,
        backgroundColor: 'lightGray',
        elevation: 2,
        marginTop: 4,
        padding: 5,
        width: '100%',
    },
    dropdownBox: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: 'white',
        marginBottom: 0,
        borderWidth:1
    }
});
