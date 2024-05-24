import * as repository from '../repository/menuRepository.js'
export const getPizza = async(req,res) => {
    const halfChoice = req.body

    const event =  await repository.getPizza(halfChoice);
   
    res.json(event);
    res.end();
}