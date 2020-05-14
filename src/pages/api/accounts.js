import { ACCOUNTS } from '../../constants/endpoints'
export default async (_, res) => {
    
    const response = await fetch(ACCOUNTS , {
        headers: {
            "x-access-token": process.env.ACESS_TOKEN
        }
    })
    const accounts = await response.json()
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(accounts))
}