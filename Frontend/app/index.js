import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc'

import NavBar from './components/NavBar.js'
import page from './page/index.js'


const Home = () => {

    return (
        <View style={tw`flex bg-green-600 h-60`}>
            <Text style={tw``}>Home</Text>
            <Text>Homefewddsafd</Text>
            
            <page.AllInOneSearch />

            <View style={`absolute inset-x-0 bottom-0 mb-0`}>
                <NavBar/>
            </View>
            
        </View>
    )

}

export default Home;