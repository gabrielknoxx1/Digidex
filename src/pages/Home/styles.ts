import styled from 'styled-components/native';
import {Form} from '@unform/mobile'


export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 16px;
`;

export const Header = styled.Image`
  margin: 32px 16px 32px 20px;
  padding: 16px;

`;

export const Grid = styled.SafeAreaView`
  flex-direction: row;
  flex-flow: row wrap;
  
  
`;

export const Card = styled.TouchableOpacity`
width: 150px;
height: 289px;
background: #87A8AB;
border: 1px solid #1E2019;
border-radius: 8px;
align-items: center;
justify-content: space-around;
margin-top: 32px;
margin-left: 32px;
`;



export const DigimonFoto = styled.Image`
  width: 125px;
  height: 125px;
  border-radius: 8px;
`;
export const DigimonTitle = styled.Text`
  font-size: 12px;
  color: #26292C;
  
`;

export const DigimonNome = styled.Text`
  font-size: 18px;
  color: #26292C;
`;

export const DigimonLevel = styled.Text`
  font-size: 12px;
  color: #26292C;
`;
export const DigimonNivel = styled.Text`
  font-size: 18px;
  color: #26292C;
`;


export const Formu = styled(Form)`
  width: 360px;
  height: 60px;
  flex-direction: row;
  align-items: center;

`;

export const Button = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  /* background-color: #000; */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  right: 60px;
  top: -4px;
  border-radius: 10px;
`;