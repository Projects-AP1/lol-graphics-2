import {api} from './config';
import {SummonerData} from '@Interfaces/index';

export const InsertSummoner = async(props : SummonerData) : Promise<any> => 
    await api.post('sumonnerSave' , {...props})


export  const getSumonnerGrath = async() : Promise<any> => 
    await api.get('getSumonnerGrath')

export const GetSummoner = async(name : String) : Promise<any> => 
    await api.post('/sumonnerApiByName', {
        name: name,
      })

