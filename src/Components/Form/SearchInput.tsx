import React from 'react';
import { InputGroup, InputGroupText, Input } from 'reactstrap';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function BasicInput ({placeholder, onChange} : any) {
    return (
      <>
        <InputGroup>
            <InputGroupText addonType="prepend">
                <SearchOutlinedIcon />
            </InputGroupText>
            <Input placeholder={placeholder} onChange={onChange}/>
        </InputGroup>
      </>
    )
};