import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Container } from './styles';

const TypeCircle = ({ colors, children }) => {
    return(
        <LinearGradient style={{width: 56, height: 56, borderRadius: 56}} colors={colors}>
            <Container>
                {children}
            </Container>
        </LinearGradient>
    )
}

export default TypeCircle;