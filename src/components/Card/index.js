import React from 'react';
import { Container, CharacterImage, AlterEgo, Name } from './styles';

const Card = ({name="", alterEgo="", imagePath}) => {
    return(
        <CharacterImage source={imagePath} imageStyle={{ borderRadius: 20 }}>
            <Container>
                <AlterEgo>{alterEgo}</AlterEgo>
                <Name>{name}</Name>
            </Container>
        </CharacterImage>
    )
}

export default Card;