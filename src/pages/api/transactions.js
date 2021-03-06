import { TRANSACTIONS } from '../../constants/endpoints'

export default async (_, res) => {
    
    const response = await fetch(`${TRANSACTIONS}?fromDate=2018-05-01&accountId=${process.env.accountId}`, {
        headers: {
            "x-access-token": process.env.ACESS_TOKEN,
        }
    })
    const transactions = await response.json()
    console.log(transactions)
    res.setHeader('Content-Type', 'application/json')
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.statusCode = 200
    res.end(JSON.stringify(transactions))
}