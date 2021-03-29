import React from 'react';
import { Container } from './styles';
import { Image, TouchableOpacity } from 'react-native';

import TypeCircle from '../TypeCircle';


const CategoriesLine = () => {

    const icons = {
        "hero": require('../../assets//icons/hero.svg'),
        "villain": require('../../assets//icons/villain.svg'),
        "antihero": require('../../assets//icons/antihero.svg'),
        "alien": require('../../assets//icons/alien.svg'),
        "human": require('../../assets/icons/human.svg'),
    }

    return(
        <Container>

            <TouchableOpacity>
                <TypeCircle colors={['#005BEA', '#00C6FB']}>
                    <Image source={icons['hero']} tintColor='#FFF' style={{width: 32, height: 32}} />
                </TypeCircle>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <TypeCircle colors={['#ED1D24', '#ED1F69']}>
                    <Image source={icons['villain']} tintColor='#FFF' style={{width: 32, height: 32}} />
                </TypeCircle>
            </TouchableOpacity>

            <TouchableOpacity>
                <TypeCircle colors={['#B224EF', '#7579FF']}>
                    <Image source={icons['antihero']} tintColor='#FFF' style={{width: 32, height: 32}} />
                </TypeCircle>
            </TouchableOpacity>

            <TouchableOpacity>
                <TypeCircle colors={['#0BA360', '#3CBA92']}>
                    <Image source={icons['alien']} tintColor='#FFF' style={{width: 32, height: 32}} />
                </TypeCircle>
            </TouchableOpacity>

            <TouchableOpacity>
                <TypeCircle colors={['#FF7EB3', '#FF758C']}>
                    <Image source={icons['human']} tintColor='#FFF' style={{width: 32, height: 32}} />
                </TypeCircle>
            </TouchableOpacity>

        </Container>
    )
}

export default CategoriesLine;