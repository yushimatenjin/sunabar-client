import { BALANCES } from '../../constants/endpoints'
export default async (_, res) => {
    
    const response = await fetch(BALANCES, {
        headers: {
            "x-access-token": process.env.ACESS_TOKEN
        }
    })
    const balances = await response.json()
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(balances))
}