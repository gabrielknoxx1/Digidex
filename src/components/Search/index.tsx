import React, {useState, useCallback, useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import {useField } from '@unform/core'
import api from '../../services/api';


import { Container, Content } from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

interface InputValueReference {
  value: string;
}

const search: React.FC<InputProps> = ({name,...rest}) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue, fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({value: defaultValue});
  const [search, setSearch] = useState('');



  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path:'value',
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      }
    })

  },[]);
 
  
  return (
    <Container>
      <Content
        ref={inputElementRef}
        placeholderTextColor="#1E2019" {...rest}
        defaultValue={defaultValue}
        onChangeText={value =>{
          inputValueRef.current.value = value;
        }}
      />
      
    </Container>
  );
};

export default search;
