import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';
import qs from 'qs';

function reqs() {
    for (let i = 0; i < 1000; i++) {
        axios
            .post('http://192.168.0.2:1337/api/fakerdatas', {
                data: {
                    title: 'i',
                    image_url: `https://images.unsplash.com/photo-1580171564226-0add5ce9f76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
                },
            })
            .then((res) => console.log(res, 'response from scroll'))
            .catch((err) => console.error(err, 'ERR in scroll'));
    }
}

export function InfiniteScroll() {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    // useEffect(() => reqs(), []);

    const query = qs.stringify(
        {
            pagination: {
                page: currentPage,
                pageSize: 20,
            },
        },
        {
            encodeValuesOnly: true,
        }
    );

    useEffect(() => {
        setLoading(true);

        // .post('http://172.30.1.11:1337/api/fakerdatas?_limit=10', {
        axios
            .get(`http://ec2-13-125-214-253.ap-northeast-2.compute.amazonaws.com:1337/api/fakerdatas?${query}`)
            .then((res) => {
                console.log(JSON.stringify(res.data.data), 'response from scroll');
                setInfo([...info, ...res.data.data]);
                setLoading(false);
            })
            .catch((err) => console.error(err, 'ERR in scroll'));
    }, [currentPage]);

    function ItemToRender(info) {
        return (
            <View key={info.item.attributes.title} style={{ alignItems: 'center' }}>
                <Text style={{ color: 'brown' }}>{info.index + 1}</Text>
                <Text>{info.item.attributes.title}</Text>
                <Image style={{ width: 200, height: 100 }} source={{ uri: info.item.attributes.image_url }} />
            </View>
        );
    }

    function LoaderComponent() {
        return <View style={{ marginVertical: 16, alignItems: 'center' }}>{loading && <ActivityIndicator />}</View>;
    }

    const loadMore = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <FlatList
            data={info}
            renderItem={ItemToRender}
            keyExtractor={info.index}
            ListFooterComponent={LoaderComponent}
            onEndReached={loadMore}
            onEndReachedThreshold={0.6}
        />
    );
}
