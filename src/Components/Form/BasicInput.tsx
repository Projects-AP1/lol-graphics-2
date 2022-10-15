import { useRef, useEffect} from "react";
import TextField from "@mui/material/TextField";
import {useField} from '@unform/core';

import {BasicInputProps} from '@Interfaces/index';

export default function BasicInput ({label, variant="outlined", onChange, id, name, type="text"} : BasicInputProps){
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref : any) => {
        return ref.current?.value
      },
      setValue: (ref : any, value : any) => {
        ref.current.value = value
      },
      clearValue: (ref : any) => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField]);
  
    return <>
    <TextField
      inputRef={inputRef}
      id={id}
      label={label}
      variant={variant}
      onChange={onChange}
      name={fieldName}
      type={type}
      defaultValue={defaultValue}
    />
    {error && <span className="error">{error}</span>}
    </> 
}