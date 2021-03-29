import React from 'react';
import { Text } from 'react-native';
import { Container } from './styles';

const Banner = () => {
    return(
        <Container>
            <Text style={{fontSize: 14, fontWeight: '600', color: '#B7B7C8', fontFamily: 'Gilroy-Semibold'}}>Bem vindo ao Marvel Heroes</Text>
            <Text style={{fontSize: 32, color: '#313140', fontFamily: 'Gilroy-Heavy'}}>Escolha o seu personagem</Text>
        </Container>
    )
}

export default Banner;