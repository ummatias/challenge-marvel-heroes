import React from 'react';
import { Container, Backbar, CharacterImage } from './styles';
import { ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import Movies from '../../components/Movies';
import HeroResume from '../../components/HeroResume';
import Habilidades from '../../components/Habilidades';

const Details = ({route}) => {

    const navigation = useNavigation();

    return(
        <Container>
            <CharacterImage source={route.params.char.imagePath}>
                <LinearGradient colors={['rgba(0, 0, 0, .1)','rgba(0, 0, 0, 0.8)', 'rgb(0, 0, 0)']} style={{flex: 1}}>
                    
                    <Backbar>
                        <TouchableOpacity onPress={ () => { navigation.goBack() } }>
                            <Image source={require('../../assets/icons/back.svg')} tintColor='#FFF'/>
                        </TouchableOpacity>
                    </Backbar>
                        

                    <ScrollView>
                            <HeroResume 
                                alterego={route.params.char.alterEgo} 
                                name={route.params.char.name} 
                                infos={route.params.char.caracteristics} 
                                resume={route.params.char.biography}
                                imagePath={route.params.char.imagePath}
                            />

                            <Habilidades abilities={route.params.char.abilities}/>
                            
                            <Movies movies={route.params.char.movies} />
                    </ScrollView>

                </LinearGradient>
            </CharacterImage>
        </Container>
    )
}

export default Details;