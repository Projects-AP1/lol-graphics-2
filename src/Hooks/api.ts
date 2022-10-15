import {api} from './config';
import {SummonerData, UserProps} from '@Interfaces/index';

export const InsertSummoner = async(props : SummonerData) : Promise<any> => 
    await api.post('sumonnerSave' , {...props})


export  const getSumonnerGrath = async() : Promise<any> => 
    await api.get('getSumonnerGrath')

export const GetSummoner = async(name : String) : Promise<any> => 
    await api.post('/sumonnerApiByName', {name: name});

export const SaveUser = async(user : UserProps) : Promise<any> => 
      await api.post('/userSave', user)

