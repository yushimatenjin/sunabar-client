import { BALANCES } from '../../constants/endpoints'
export default async (_, res) => {
    
    const response = await fetch(BALANCES, {
        headers: {
            "x-access-token": process.env.ACESS_TOKEN
        }
    })
    const balances = await response.json()
    res.setHeader('Content-Type', 'application/json')
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.statusCode = 200
    res.end(JSON.stringify(balances))
}