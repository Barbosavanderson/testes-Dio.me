import fastify from "fastify";
import { request } from "http";
import cors from "@fastify/cors"

const server = fastify({logger: true});
server.register(cors,{
    origin:"*",
    // metodos: Get, Post, delete...
});


const teams = [
    { id: 1, name: "Ferrari", base: "Roma, Italy" },
    { id: 2, name: "McLaren", base: "Brackley, Reino Unido" },
    { id: 3, name: "Red Bull", base: "Munique, Alemanha" },
    { id: 4, name: "Mercedes", base: "Stuttgart, Alemanha" },
    { id: 5, name: "Renault", base: "Paris, França" },
    { id: 6, name: "Williams", base: "Grove, Reino Unido" },
    { id: 7, name: "Aston Martin", base: "Gaydon, Reino Unido" }
];

const drivers = [
    { id: 1, name: "Anakin Skywalker", team: "Red Bull" },
    { id: 2, name: "Tony Stark", team: "McLaren" },
    { id: 3, name: "Bruce Wayne", team: "Ferrari" },
    { id: 4, name: "Peter Parker", team: "Mercedes" },
    { id: 5, name: "Clark Kent", team: "Renault" },
    { id: 6, name: "Diana Prince", team: "Williams" },
    { id: 7, name: "Barry Allen", team: "Aston Martin" },
    { id: 8, name: "Natasha Romanoff", team: "Red Bull" },
    { id: 9, name: "Steve Rogers", team: "McLaren" },
    { id: 10, name: "Hal Jordan", team: "Ferrari" },
    { id: 11, name: "Bruce Banner", team: "Mercedes" },
    { id: 12, name: "Arthur Curry", team: "Renault" },
    { id: 13, name: "Victor Stone", team: "Williams" },
    { id: 14, name: "Oliver Queen", team: "Aston Martin" }
];


server.get("/teams", async(request, response)=>{
    response.type("application/json").code(200)
    return{teams}
});

server.get("/drivers", async(request, response)=>{
    response.type("application/json").code(200);
   return{drivers}
});

interface DriverParams{
    id:string;
}

server.get<{Params: DriverParams}>(
    "/drivers/:id",
    async(request, response)=>{
      const id = parseInt(request.params.id);
      const driver = drivers.find( (d) =>d.id === id);

    if(!driver){
        response.type("application/json").code(404);
        return{message:" Drive not found"}
    }else{
        response.type("application/json").code(200);
        return{driver};
    }
}
);

server.listen({port:3333}, ()=>{
    console.log("server init");
}
); 
