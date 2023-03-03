//import testData from '../app-mapbox/src/Components/MapComponent/testData.json';
const e = require('express');
const express = require('express')
const app = express()
const port = 4000
const fs = require('fs');
const cors = require('cors')


app.get('/', (req, res) => {
 res.send('Hello World!')
})

app.get('/fetchCaseFatality', cors(), (req, res) => {
    res.download('./case_fatality_ratio.json')
})

app.get('/fetchTotalDeaths', cors(), (req, res) => {
    res.download('./deaths.json')
})


app.use(express.json());

app.post('/updatedata',(req,res)=>{
    //console.log(req.body);
    fs.readFile('../app-mapbox/src/Components/MapComponent/testData.json','utf8',function(err,data){
        if(err){
            console.log(err);
        }else{
            var obj = JSON.parse(data);
            obj.features.push(req.body);
            var json = JSON.stringify(obj, null, 2);
            fs.writeFile('../app-mapbox/src/Components/MapComponent/testData.json', json, 'utf8', err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Done');
                }
            });
        }
    })
    res.send(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})