import React from 'react';
import { Image } from 'react-native';
import {  Container, SkillName } from './styles';

const bar = {
    "white": require('../../assets/icons/white-bar.svg'),
    "gray": require('../../assets/icons/gray-bar.svg')
}


const SkillBar = ({name, progress}) => {

    const barfile = []

    for (let index = 0; index < (progress/2); index++) {
        barfile.push(bar['white'])
    }
    if ((progress/2) < 50){
        for (let index = (progress/2); index <= 50; index++){
            barfile.push(bar['gray'])
        }
    }

    return (
        <Container>
            <SkillName><SkillName.Text>{name}</SkillName.Text></SkillName>
            {barfile.map((item, index) => (
                <Image source={item} key={index} style={{marginRight: 2.4, height: 12, width: 3.5}}/>
            ))}
        </Container>
    )
}

export default SkillBar;