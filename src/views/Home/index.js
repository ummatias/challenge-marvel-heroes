import React from 'react';
import { Container } from './styles';
import Navbar from '../../components/Navbar';
import CategoriesLine from '../../components/CategoriesLine';
import Banner from '../../components/Banner';
import Categories from '../../components/Categories';

import { ScrollView } from 'react-native';

const Home = () => {
    return(
        <Container>
            <Navbar />
            <ScrollView>
                <Banner />
                <CategoriesLine />
                <Categories />
            </ScrollView>
        </Container>
    )
}

export default Home;