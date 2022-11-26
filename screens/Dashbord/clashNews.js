/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { } from 'react';

import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { images, SIZES } from '../../constants';
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
                            <Text>Hello</Text>
                        </View>}
                    <View style={styles.textArea}>
                        <Text style={{ fontSize: 23, color: 'black' }}>Here we Go!</Text>
                        <Text>We will remove extra Barracks and Dark Barracks buildings and
                            only keep one of each. The highest level building will be kept,
                            and in case all the highest level buildings are under construction
                            you will keep the one with the shortest upgrade time left.</Text>
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

    return (
        <ImageBackground
            source={images.background} resizeMode="cover"
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
            }}>
            {/* <ScrollView > */}
            <View style={{ flex: 1 }}>
                <FlatList
                    data={DATA}
                    renderItem={CustomCard}
                    keyExtractor={item => item.id}
                />
            </View>
        </ImageBackground >

    );
};

export default Screen;
const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: '#F7F7FE', borderRadius: 10,
        padding: 10, margin: 10, shadowColor: 'black',
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
        padding: 10,
    },

});
