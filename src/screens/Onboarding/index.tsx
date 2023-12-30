import { Image, View } from 'react-native';
import React, { useRef, useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import SwiperFlatList from 'react-native-swiper-flatlist';

import type { PublicNavigatorParamList } from 'navigation/types';
import type { ONBOARDING } from 'constants/screen-names';
import { LOGIN, SIGNUP } from 'constants/screen-names';
import assets from 'assets';
import Typography from 'components/Typography';
import Button from 'components/Button';
import Storage from 'utils/storage';
import { ONBOARDING_COMPLETE } from 'constants/storage';
import { Colors } from 'styles';
import ArrowRight from 'assets/svgs/arrow-right.svg';
import { moderateScale } from 'utils/styles';

import styles from './styles';

const screens = [
  {
    id: 1,
    title: 'Explore a wide range of\nproducts',
    subtitle:
      'Explore a wide range of products at your fingertips. QuickMart offers an extensive collection to suit your needs.',
    image: assets.images.onboarding1,
  },
  {
    id: 2,
    title: 'Unlock exclusive offers\nand discounts',
    subtitle:
      'Get access to limited-time deals and special promotions available only to our valued customers.',
    image: assets.images.onboarding2,
  },
  {
    id: 3,
    title: 'Safe and secure\n payments',
    subtitle:
      ' QuickMart employs industry-leading encryption and trusted payment gateways to safeguard your financial information.',
    image: assets.images.onboarding3,
  },
];

export type OnboardingProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof ONBOARDING
>;

export type OnboardingScreen = React.FC<OnboardingProps>;

type OnboardingItemProps = {
  index: number;
  item: (typeof screens)[0];
  onNext: () => void;
  onLogin: () => void;
};

const OnboardingItem: React.FC<OnboardingItemProps> = ({
  item,
  index,
  onNext,
  onLogin,
}) => (
  <View style={styles.item}>
    <View style={styles.banner}>
      <View style={styles.bannerTop}>
        {index === 0 ? (
          <Image key="logo" source={assets.images.logo} />
        ) : (
          <Image key="arrow-left" source={assets.images.arrowLeft} />
        )}
        <Typography
          variant="body2"
          style={{ color: Colors.cyan, fontWeight: 'normal' }}
        >
          Skip for now
        </Typography>
      </View>
      <View style={styles.bannerContent}>
        <Image source={item.image} style={styles.image} />
      </View>
    </View>
    <View style={styles.content}>
      <Typography variant="heading2" style={styles.title}>
        {item.title}
      </Typography>
      <Typography variant="body2" style={styles.subtitle}>
        {item.subtitle}
      </Typography>
      {index === screens.length - 1 ? (
        <View style={styles.buttonContainer}>
          <Button
            variant="outlined"
            title="Login"
            style={{
              button: { ...styles.button, flex: 1, borderColor: Colors.grey50 },
            }}
            onPress={onLogin}
          />
          <Button
            variant="contained"
            title="Get Started"
            style={{
              button: {
                ...styles.button,
                flex: 1,
              },
            }}
            onPress={onNext}
            IconRight={
              <ArrowRight
                width={moderateScale(20)}
                height={moderateScale(20)}
              />
            }
          />
        </View>
      ) : (
        <Button
          variant="contained"
          title="Next"
          style={{ button: styles.button }}
          onPress={onNext}
        />
      )}
    </View>
  </View>
);

const Onboarding: OnboardingScreen = ({ navigation }) => {
  const [swipeIndex, setSwipeIndex] = useState(0);
  const swiperRef = useRef<SwiperFlatList>(null);

  const onNextPress = async (index: number) => {
    if (index === screens.length - 1) {
      await Storage.set(ONBOARDING_COMPLETE, true);
      return navigation.navigate(SIGNUP);
    }
    return swiperRef.current?.scrollToIndex({ index: swipeIndex + 1 });
  };

  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay={false}
        autoplayLoop={false}
        index={swipeIndex}
        ref={swiperRef}
        onChangeIndex={({ index }) => setSwipeIndex(index)}
        paginationStyle={styles.pagination}
        paginationStyleItem={styles.paginationItem}
        paginationStyleItemActive={styles.paginationItemActive}
        paginationStyleItemInactive={styles.paginationItemInactive}
        showPagination
        data={screens}
        renderItem={({ item, index }) => (
          <OnboardingItem
            item={item}
            index={index}
            onNext={() => onNextPress(index)}
            onLogin={() => navigation.navigate(LOGIN)}
          />
        )}
      />
    </View>
  );
};
export default Onboarding;
