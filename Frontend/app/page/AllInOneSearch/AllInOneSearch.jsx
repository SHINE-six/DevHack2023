import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';


const AllInOneSearch = () => {
    const [data, setData] = useState([]);

    const fetchApi = async () => {
        console.log("Hi, I am here");
        try {
            const response = await axios.get('http://192.168.0.160/api')
            console.log(response.data);
            console.log("Bye, call me");
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchApi();
    },[])
    
    return (
        <View>
            <TouchableOpacity>
                <Text> Dont press me</Text>
            </TouchableOpacity>
        </View>
    )

}

export default AllInOneSearch;