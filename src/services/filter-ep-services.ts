import { filterpodcastmodel } from "../models/filter-podcast-models";
import { repositoryPodcast } from "../repositories/podcast-repository"
import { StatusCode } from "../utils/status-code";


export const serviceFilterEp = async (podcastName: string | undefined

):Promise<filterpodcastmodel>=>{

    let responseFormat: filterpodcastmodel= { 
        statusCode:0,
        body:[],
    };
    
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    if(data){
        responseFormat.statusCode = StatusCode.OK
    }else{
        responseFormat.statusCode = StatusCode.NO_CONTENT;
    }
    responseFormat.body = data;

    return responseFormat;
}