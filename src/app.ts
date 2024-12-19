import * as http from "http";

import {getFilterEpisodes as getFilterEpisodes, getListEpisodes} from './controllers/podcast-controller'
import { routes } from "./routs/routs";
import { Httpmethod } from "./utils/http-metods";

 export const app = async (
    request: http.IncomingMessage, 
    response: http.ServerResponse
)=> {

    const [baseUrl, queryString] = request.url?.split("?") ?? ["",""];

    //listar podcast
    if(request.method === Httpmethod.GET && baseUrl===routes.LIST){
       await getListEpisodes(request, response);
    }
    if (request.method === Httpmethod.GET && baseUrl ===routes.ESPISODES){
        await getFilterEpisodes(request, response);
    }
}