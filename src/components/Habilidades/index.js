import React from 'react';
import SkillBar from '../SkillBar';
import { Container, Header } from './styles';

const Habilidades = ({abilities}) => {

    return(
        <Container>
            <Header>Abilities</Header>

            {Object.keys(abilities).map((item, key) => (
                <SkillBar
                    key={key}
                    name={item.charAt(0).toUpperCase() + item.substr(1)}
                    progress={abilities[item]}
                />
            ))}
        </Container>
    )
}

export default Habilidades; 