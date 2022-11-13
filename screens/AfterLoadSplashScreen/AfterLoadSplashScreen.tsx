import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, values } from '../../constants';
import { StatusBar, View } from 'react-native';
import FastImage, { Source } from 'react-native-fast-image';
import AppText from '../../components/AppText';
import LinearGradient from 'react-native-linear-gradient';
import styles from './AfterLoadSplashScreen.styles';

const slides: { key: string; title: string; text: string; image: Source; backgroundColor: string }[] = [
  {
    key: 'one',
    title: 'Base Layout',
    text: "Do you want new bases everyday?\n\nThen you are at the right place.Here our team with many clasher share there bases everyday.",
    image: values.barbarian,
    backgroundColor: '#59b2ab'
  },
  {
    key: 'two',
    title: 'Attack stages',
    text: 'Do you want to improve your attack strategy?\n\n or you want to push rank here you can get  attack strategy of top players. ',
    image: values.wizard,
    backgroundColor: '#febe29'
  },
  {
    key: 'three',
    title: 'Clan Promotion!',
    text: 'Want to Recruit permanent new players or temporary players for CWl!!\n\n Come and promote your can here.',
    image: values.king,
    backgroundColor: '#22bcb5'
  }
];

type AfterLoadSplashScreenProps = { onGetStarted: () => void };
const AfterLoadSplashScreen = ({ onGetStarted }: AfterLoadSplashScreenProps): JSX.Element => {
  const renderStep = ({ item }: { item: typeof slides[number] }): JSX.Element => (
    <LinearGradient
      style={styles.containerGradient}
      useAngle={true}
      angle={90}
      colors={[COLORS.lightPrimary, COLORS.primary, COLORS.primary, COLORS.lightPrimary]}
    >
      <View style={styles.mainView}>
        <StatusBar backgroundColor={COLORS.primary} />
        <View style={styles.itemsCentered}>
          <FastImage source={item.image} style={styles.imageSize} />
          <View style={styles.sliderContainer}>
            {slides.map((s) => (
              <View
                key={`slide_mark_${s.key}`}
                style={{
                  flex: s.key === item.key ? 2 : 1,
                  backgroundColor: s.key === item.key ? COLORS.white : COLORS.gray,
                  marginHorizontal: 2,
                  height: 7,
                  borderRadius: 5
                }}
              />
            ))}
          </View>
          <AppText style={styles.title} fontWeight="SemiBold">
            {item.title}
          </AppText>
          <AppText style={styles.text}>{item.text}</AppText>
        </View>
      </View>
    </LinearGradient>
  );

  return <AppIntroSlider renderItem={renderStep} data={slides} onDone={onGetStarted} showPrevButton showSkipButton />;
};

export default AfterLoadSplashScreen;
