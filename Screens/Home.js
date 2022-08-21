import React from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView , ScrollView} from 'react-native'

// wind
import { TailwindProvider } from 'tailwindcss-react-native';

import {ChatAltIcon, PhotographIcon, VideoCameraIcon} from 'react-native-heroicons/outline'
import ShowData from './ShowData';

const Home = ({navigation, route, props}) => {

    const handleDifficultyPress = () => {
        // console.log("tap", name),
        /* 
        used to navigate throughout different categories of furniture
        navigation is declared in the main component 
        */
          navigation.navigate(ShowData, { title: ShowData });
      };

    return (
            <SafeAreaView style={{ backgroundColor: "white", marginTop: 25 }}>
                <View className="items-center border-b-4 border-gray-300">
                    <Text  className="my-3 text-xl text-gray-400">Inspire Me</Text>
                </View>
                
        {/* // <TailwindProvider> */}
            <ScrollView className="border-20 border-orange-100 border-solid">
                <TouchableOpacity className="items-center my-20  place-items-center border-20 border-orange-100 border-solid"  onPress={handleDifficultyPress}>
                    <View className="bg-orange-100 w-150 p-50 rounded-[35px]  place-items-center">
                        <Text className="text-orange-300 font-bold p-10 py-10 text-xl">Motivational Quote</Text>
                        <View className="items-center  ">
                            <ChatAltIcon size={200} color="#fb923c"/>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity className="items-center   place-items-center border-20 border-blue-100 border-solid"  onPress={handleDifficultyPress} title="Quote">
                    <View className="bg-blue-50 w-150 p-50 rounded-[35px]  place-items-center">
                        <Text className="text-blue-300 font-bold p-10 py-10 text-xl">Motivational Image</Text>
                        <View className="items-center  ">
                        <PhotographIcon size={200} color="#3b82f6"/>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity className="items-center my-20  place-items-center border-20 border-orange-100 border-solid"  onPress={handleDifficultyPress} title="Quote">
                    <View className="bg-purple-100 w-150 p-50 rounded-[35px]  place-items-center">
                        <Text className="text-purple-300 font-bold p-10 py-10 text-xl">Improvement Videos</Text>
                        <View className="items-center  ">
                            <VideoCameraIcon size={200} color="#6366f1"/>
                        </View>
                    </View>
                </TouchableOpacity>
                
            </ScrollView>

            
            </SafeAreaView>
        // </TailwindProvider>
    )
}

export default Home
