const express = require('express')
const Queue = require('./helpers/queue')
const app = express()

app.use(express.json())

let q = new Queue();

app.post('/webhook', (req, res) => {

    const { admin_graphql_api_id, status } = req.body
    const webhook_id = req.header('x-shopify-webhook-id')

    res.sendStatus(200)

    console.log('\n========== ⚡ Received Webhook Response ⚡ ==========')
    console.log(`\nWebhook ID Header => ${webhook_id}`)
    console.log(`Bulk Operation ID => ${admin_graphql_api_id}`)
    console.log(`Status => ${status}`)

    q.enqueue(webhook_id);
    console.log('\n========== ⚡ Queue Items ⚡ ==========\n')
    q.print();
    console.log(q.getLength());
})



app.listen(8080, () => {
    console.log('🚀 listening on port 8080')
})



