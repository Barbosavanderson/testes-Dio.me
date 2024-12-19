import{repositoryPodcast} from "../repositories/podcast-repository";

export const serviceListEpsodes = async () =>{
   const data = await repositoryPodcast();
   
return data;
};