import * as repository from '../repository/testRepository.js'

export const getTest = async (req,res) => {

    const id = req.params.id
    console.log("테스트 아이디",id);
    const test = await repository.getTest(id)
    res.json(test);
    res.end()
}