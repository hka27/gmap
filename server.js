var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.get('/', function (req, res) {
   res.send('Hello World');
})

app.post('/',(req, res)=>{
    const {location_lat, location_long }= req.body.location //coordinate=0,0 // nearest 1
    const n = req.body.numberOfRestaurants
    // const {location_lat, location_long }={location_lat:0,location_long:0}
    // const n = 1
    console.log(req.body)
    console.log(location_lat, location_long, n)
    const list=[
        {
            name:'res1',
            coordinate:{
                lat: 41.40338,
                long: 2.17403
            }
        }, 
        {
            name:'res2',
            coordinate:{
                lat:45.40338,
                long:6.17403
            }
        }
    ]

    const dist_arr= []
    list.forEach(el=>{
        const dist = distance(el.coordinate.lat, el.coordinate.long, location_lat, location_long)
        dist_arr.push({name:el.name, distance:dist})
    })
    //dist_arr = []
    console.log(dist_arr)
    // const sorted_dist_arr = dist_arr.sort((a,b)=>a.distance - b.distance )
    // const res_arr = sorted_dist_arr.sort(0,n)
    res_arr = {
        name:'res2',
        coordinate:{
            lat:45.40338,
            long:6.17403
        }
    }
    res.json(res_arr)
})
function distance(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p)/2 + 
            c(lat1 * p) * c(lat2 * p) * 
            (1 - c((lon2 - lon1) * p))/2;
  
    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}
var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})