import {IncomingMessage, ServerResponse, STATUS_CODES} from "http";
import {serviceListEpsodes} from "../services/list-ep-services"
import { serviceFilterEp as serviceFilterEpisode } from "../services/filter-ep-services";
import { StatusCode } from "../utils/status-code";
import { contentType } from "../utils/content-type";

export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {
    const content = await serviceListEpsodes();
    
    res.writeHead(StatusCode.OK,{"content-Type": contentType.JSON });
    res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async(
    req: IncomingMessage, 
    res: ServerResponse
)=>{   

    const content = await serviceFilterEpisode(req.url);

    res.writeHead(StatusCode.OK,{"content-type": contentType.JSON});
    res.end(JSON.stringify(content));
}