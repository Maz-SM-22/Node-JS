const https = require('https'); 

const options = {
    hostname: 'u50g7n0cbj.execute-api.us-east-1.amazonaws.com',
    path: '/v2/cities?country=ES', 
    method: 'GET'
}

// const req = https.request(options, res => {
//     console.log(`STATUS: ${res.statusCode}`)

//     res.on('data', d => {
//         process.stdout.write(d)
//     })
// });

// req.on('error', error => {
//     console.log(error); 
// })

// req.end(); 

options.path = '/v2/cities?city=Barcelona'; 

const req = https.request(options, res => {
    console.log(`STATUS: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d); 
    })
});

req.on('error', error => {
    console.log(error); 
})

req.end(); 