import {promises as fsPromises} from 'fs'

export  const getPizza = (halfChoice) => {
 
    const path = 'data/halfPizza.json'
    const event = fsPromises.readFile(path, "utf-8").then(data =>  {
        return JSON.parse(data)
    })
    .catch(error=> console.log(error))
    return event;
}

