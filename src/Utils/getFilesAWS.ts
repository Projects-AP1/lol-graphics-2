import { s3Config } from "../Configs3/s3Config";
import {
  paginateListObjectsV2,
  S3Client,
} from "@aws-sdk/client-s3";


    
 export const getAllS3Files = async () => {
    const client = new S3Client(s3Config);
    const s3Opts = { Bucket: "imgslol" };
    const totalFiles = [];
    try{
      for await (const data of paginateListObjectsV2({ client }, s3Opts)) {
        totalFiles.push(...(data.Contents ?? []));
      }
    }catch(err){
      console.log(err)
    }
    

    return totalFiles;
  };

  export const  getImgAws = async (imgName: string) => {
    var totalFiles = await getAllS3Files();

    var [objectFile] = totalFiles.filter((el)=> el.Key == imgName);

    return "https://imgslol.s3.sa-east-1.amazonaws.com/" + objectFile.Key;
  };
