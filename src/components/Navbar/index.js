import React from 'react';
import { Container } from './styles';
import { Image, TouchableOpacity } from 'react-native';

const Navbar = () => {

    return(
        <Container>
            <TouchableOpacity><Image source={require('../../assets//icons/menu.svg')} tintColor='#313140' /></TouchableOpacity>
            <Image source={require('../../assets//icons/marvel.svg')} style={{height: 26, width: 71}} tintColor='#ED1D24'/>
            <TouchableOpacity><Image source={require('../../assets//icons/search.svg')} tintColor='#313140' /></TouchableOpacity>
        </Container>
    )
}

export default Navbar;