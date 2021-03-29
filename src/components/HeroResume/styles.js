import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`

export const Identity = styled.View`
    flex: 0.80;
    height: 450px;;
    padding: 0 23px;
    padding-right: 150px;
    justify-content: flex-end;
`

Identity.name = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: white;
    font-family: 'Gilroy-Heavy';
`

Identity.alterego = styled.Text`
    font-size: 16px;
    color: white;
    font-family: 'Gilroy-Medium';

`
export const Infos = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 40px 23px;
`
Infos.Icon = styled.Image`
    height: 24px;
    width: 24px;
    margin-bottom: 15px;
`

Infos.Item = styled.View`
    justify-content: center;
    align-items: center;
`
Infos.Text = styled.Text`
    color: #FFF;
    font-size: 12px;
`

export const Resume = styled.View`
    padding: 0 23px;
    height: 180px;;
`

Resume.TextE = styled.Text`
    font-size: 14px;
    color: #FFF;
    text-align: justify;
    font-family: 'Gilroy-Medium';

`