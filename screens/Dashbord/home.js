/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { useCallback} from 'react';

import {
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
    Linking,
    Button

} from 'react-native';
import { images, SIZES } from '../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FAB, Card } from 'react-native-elements';
// import { TouchableOpacity } from 'react-native-gesture-handler';
const Screen = ({ navigation }) => {
    const OpenSettingsButton = ({children}) => {
        const handlePress = useCallback(async () => {
          // Open the custom settings if the app has one
          await Linking.openSettings();
        }, []);
      
        return <Button title={children} onPress={handlePress} />;
      };
    return (
        <ImageBackground
            source={images.background} resizeMode="cover"
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
            }}>
            <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 35, color: 'black', fontWeight: "bold" }}>Clash Of Clan Tools</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    {/* <View style={{ width: '50%' }}>
                        <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { navigation.push("attack Strategies"); }}>
                                <View style={{ alignItems: 'center', padding: 20,paddingBottom:0 }}>
                                    <Card.Image
                                        style={{ width: 80, height: 70 }}
                                        resizeMode="cover"
                                        source={images.cocattack}
                                    />
                                </View>
                                <Card.Title>attack strategies</Card.Title>
                            </TouchableOpacity>
                        </Card>
                    </View> */}
                    <View style={{ width: '50%', alignSelf: 'flex-start' }}>
                        <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { navigation.push("Builder Hall Base"); }}>
                                <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                    <Card.Image
                                        style={{ width: 70, height: 70 }}
                                        resizeMode="cover"
                                        source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/4/43/Builder_Hall9.png' }}
                                    />
                                </View>
                                <Card.Title>Builder Base</Card.Title>
                            </TouchableOpacity>
                        </Card>
                    </View>
                    <View style={{ width: '50%' }}>
                        <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { navigation.push("Town hall Base"); }}>
                                <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                    <Card.Image
                                        style={{ width: 70, height: 70 }}
                                        resizeMode="cover"
                                        source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Giga_Inferno15-5.png' }}
                                    />
                                </View>
                                <Card.Title>TownHall base</Card.Title>
                            </TouchableOpacity>
                        </Card>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {/* <View style={{ width: '50%', alignSelf: 'flex-start' }}>
                        <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { navigation.push("Builder Hall Base"); }}>
                                <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                    <Card.Image
                                        style={{ width: 70, height: 70 }}
                                        resizeMode="cover"
                                        source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/4/43/Builder_Hall9.png' }}
                                    />
                                </View>
                                <Card.Title>Builder Base</Card.Title>
                            </TouchableOpacity>
                        </Card>
                    </View> */}
                    <View style={{ width: '50%' }}>
                        {/* <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { navigation.push("Clash News"); }}>
                                <View style={{ alignItems: 'center', padding: 20,paddingBottom:10 }}>
                                    <Card.Image
                                        style={{ width: 70, height: 60 }}
                                        resizeMode="cover"
                                        source={images.cocsetting}
                                    />
                                </View>
                                <Card.Title>COC News</Card.Title>
                            </TouchableOpacity>
                        </Card> */}
                    </View>
                </View>

            </View>
            <FAB onPress={() => { alert("Ok"); }} icon={<MaterialIcons name="settings" size={24} color="white" />} placement={"right"} />
        </ImageBackground >
    );
};

export default Screen;