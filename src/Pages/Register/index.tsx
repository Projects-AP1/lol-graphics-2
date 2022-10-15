import { useCallback, useState, useRef} from 'react';
import {Form} from '@unform/web';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import {debounce} from 'lodash';
import Button from "@mui/material/Button";

import {BasicInput} from '@Components/Form/index';
import {SaveUser, GetSummoner} from '@Hooks/api';
import {UserProps} from '@Interfaces/index';
import {RedirectToLogin} from '@Auth/index';
import usePreventForm from '@Utils/usePreventForm';

import schema from './schema';

export default function Register() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const formRef = useRef(null);

    usePreventForm({formRef});

    const handleSaveUser = useCallback(async(payload : UserProps)=> {
        setIsLoading(true);
        try{
            const {data : {puuid}} = await GetSummoner(payload.username);
            payload.puuid = puuid;
            const userSaved = await SaveUser(payload);
            console.log(userSaved)
            if(userSaved.status === 200){
                return toast.success('Usuário cadastrado com sucesso');
            };
        }catch(err : any){
            if(err.response.status === 400){
                return toast .error('Usuário já cadastrado');
            }
            if (err instanceof Yup.ValidationError) {
                console.log(formRef)
            };
        }
        
/*         setIsLoading(true);
        try{
            await schema.validate(payload, {abortEarly: false});
            const {data} = await SaveUser(payload);
            if(data?.success) {
                RedirectToLogin();
                return toast.success('Usuário criado');
            };
            return toast.error("Username ou email já registrados");
        }catch (err) {
            console.log(err);
            const validationErrors = {};
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach((error) => {
                  validationErrors[error.path] = error.message;
                });
                formRef.current.setErrors(validationErrors);
            };
        }finally{
            setIsLoading(false);
        } */
    }, [schema, formRef]);

    return <div className="d-flex vh-100 vw-100 justify-content-center align-items-center">
            <Form 
            className="d-flex flex-column gap-3" 
            onSubmit={debounce(handleSaveUser, 300)} 
            ref={formRef}
            >
                <h2>Cadastro</h2>
                <BasicInput label='Email' name="email"/>
                <BasicInput label='Username' name="username"/>
                <BasicInput label='Password' name="passwordUser" type="password" />
                <Button
                    type="submit"
                    variant="contained"
                    className="p-3 rounded-0"
                >
                {isLoading ? "loading..." : "Search"}
                </Button>
            </Form>
    </div>
};