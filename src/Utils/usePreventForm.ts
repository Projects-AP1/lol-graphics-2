import {useEffect} from 'react';

export default function usePreventForm({formRef} : any){

    useEffect(()=> {
        document.body.addEventListener('keypress', (event) => {
            const {key} = event;
            if(key === 'Enter'){
                event.preventDefault();
                formRef.current?.submitForm();
            };
        });
    }, []);
}