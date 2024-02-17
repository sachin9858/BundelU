import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
  return (
    <View className="flex flex-1">
      <View className="flex  flex-col justify-evenly items-center bg-white h-screen px-10 ">
        <Animatable.Text animation="zoomInDown">
          <Text className="text-center font-Bold text-3xl   text-black font-medium">
            Welcome
          </Text>
        </Animatable.Text>

        <View className="flex flex-col justify-center items-center">
          <Animatable.Image
            animation="slideInDown"
            source={{
              uri: 'data:image/png;base64,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',
            }}
            resizeMode="contain"
            className="h-64 w-64 opacity-25"
          />

          <View className="absolute top-24 flex flex-row  w-full  justify-center">
            <Animatable.Text animation="zoomInDown">
              <Text className="text-primary font-Regular font-bold text-4xl   opacity-100 text-center  ">
                BU
              </Text>
              <Text className=" font-bold text-4xl   text-black opacity-100  font-Regular ">
                NDEL U
              </Text>
            </Animatable.Text>
          </View>

          <Text className="text-center text-black font-Bold my-8 absolute top-28">
            Made with ❤️ By BUians for the world
          </Text>
        </View>
        <Animatable.Text animation="zoomInDown">
          <Text className="my-10 text-clip text-sm font-Regular font-medium">
            Bundel U is one stop platform where user can attend different
            mock-exams with ease of our mobiles and web app.This is not just
            provides the mock-exams, it gives user better understanding of the
            topic.
          </Text>
        </Animatable.Text>
        <Animatable.View animation="zoomInDown" className="w-full">
          <TouchableOpacity className="bg-primary   py-4  rounded-xl">
            <Text className="text-white text-center font-Bold ">Continue</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});