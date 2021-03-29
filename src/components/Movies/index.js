import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../Card';
import { Container, Header } from './styles';

const Movies = ({ movies }) => {
    return(
        <Container>
            <Header>Movies</Header>
            
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {movies.map((item, key) => (
                    <Card key={key} imagePath={item} />
                ))}
            </ScrollView>
        </Container>
    )
}

export default Movies