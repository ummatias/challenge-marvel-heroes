import React from 'react';
import { Container, Infos, Identity, Resume } from './styles';
import { useNavigation } from '@react-navigation/native';


const HeroResume = ({ alterego, name, infos, resume }) => {

    const icons = {
        'birth' : require('../../assets/icons/age.svg'),
        'height' : require('../../assets/icons/height.svg'),
        'weight' : require('../../assets/icons/weight.svg'),
        'universe' : require('../../assets/icons/universe.svg')
    }

    const navigation = useNavigation();

    return(
        <Container>
            <Identity>
                <Identity.alterego>{alterego}</Identity.alterego>
                <Identity.name>{name}</Identity.name>
            </Identity>

            <Infos>
                {Object.keys(infos).map((info, key) => {
                    if (infos[info] instanceof Object){
                        return(
                        <Infos.Item key={key}>
                            <Infos.Icon source={icons[info]} tintColor='#FFF'/>
                            <Infos.Text key={key}>{
                                info == 'height' ? infos[info]['value'] + infos[info]['unity'].charAt(0) : infos[info]['value'] + infos[info]['unity']
                            }</Infos.Text>
                        </Infos.Item>
                        )
                    }else return (
                        <Infos.Item key={key}>
                            <Infos.Icon source={icons[info]} tintColor='#FFF' />
                            <Infos.Text key={key}>{info == 'birth' ? (2020 - infos[info]) + ' years' : infos[info]}</Infos.Text>
                        </Infos.Item>
                    )
                })}
            </Infos>
            
            <Resume> 
                <Resume.TextE>{resume}</Resume.TextE>
            </Resume>
        </Container>
    )
}

export default HeroResume;