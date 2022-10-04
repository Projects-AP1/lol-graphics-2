import {api} from './config';
import {SummonerData} from '@Interfaces/index';

export const InsertSummoner = async(props : SummonerData) : Promise<any> => 
    await api.post('sumonnerSave' , {...props})
