import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'

import { EmojiHappyIcon } from 'react-native-heroicons/solid'
import Home from './Home';

const ShowData = ({navigation, props}) => {

    const handleDifficultyPress = () => {
        // console.log("tap", name),
        /* 
        used to navigate throughout different categories of furniture
        navigation is declared in the main component 
        */
          navigation.navigate(Home, { title: Home });
      };
    // word
    let things = ['You are amazing', 'Your day will be awesome', 'You will have a productive day'];
    let thing = things[Math.floor(Math.random()*things.length)];

    console.log(thing)

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1,  marginTop: 25}}>

                <View className="items-center border-b-4 border-gray-300">
                    <Text   className="my-3 text-xl text-gray-400">Motivational Quote</Text>
                </View>

            
            <View className="items-center mt-20 bg-white">
                <View className="items-center my-10  place-items-center border-20 border-orange-100 border-solid"  title="Quote">
                        <View className="bg-orange-100 w-150 p-50 rounded-[35px]  place-items-center">
                            <Text className="text-orange-300 font-bold p-10 py-10 text-xl">{thing}</Text>
                            <View className="items-center  ">
                                <EmojiHappyIcon size={200} color="#fb923c"/>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity className="items-center  place-items-center border-20 border-orange-100 border-solid "  onPress={handleDifficultyPress} title="Quote">
                    <View className="bg-orange-100 w-150 p-50 rounded-[35px]  place-items-center">
                        <Text className="text-orange-300 font-bold p-10 py-10 text-xl">Return Home</Text>
                        
                    </View>
                </TouchableOpacity>
            </View>
            

            
            
        </SafeAreaView>
        
    )
}

export default ShowData
