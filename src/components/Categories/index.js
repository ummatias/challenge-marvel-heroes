import React from 'react';
import { Container, CategoryName, DetailsText, Header, Category } from './styles';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from '../Card';
import data from '../../assets/application';


const Categories = () => {
    
    const navigation = useNavigation();
    
    return(
        <Container>
            {Object.keys(data).map((item, itemKey) => (
                <Category key={itemKey}>
                    <Header>
                        <CategoryName>{item.charAt(0).toUpperCase() + item.substr(1)}</CategoryName>
                        <TouchableOpacity><DetailsText>Ver Tudo</DetailsText></TouchableOpacity>
                    </Header>

                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {data[item].map((char, key) => (
                            <TouchableOpacity key={key} onPress={ () => { navigation.navigate('Details', {char}) }} >
                                <Card name={char.name} alterEgo={char.alterEgo} imagePath={char.imagePath} />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    
                </Category>
            ))}
        </Container>
    )
}

export default Categories;