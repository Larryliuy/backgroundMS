let Mock = require('mockjs');
let data = Mock.mock({'list|1-100':[{
    'id|+1': 1000 ,
    'name|1': ['larry','Jane','jackson','loohong','Miss zhou'],
    // 'nameD':'@name',
    'number|1000000000-10000000000': 1000000000,
    'age|1-100': 100,
    'color': '@color'
}]});

export default data
/*
let dataOne = '';
fetch('/data.json',{
           method:'POST',
           credentials: "include", //是需要发送cookie，如果不发送，验证权限等信息时会导致500错误
           headers:{
               'Content-Type': 'application/json',
               'Accept': 'application/json'
           },
           body:{}
       })/!*.then(function (response) {
           return response.json();
       })*!/.then(function (data) {
            dataOne = data;
           console.log(data)
       }).catch(err=>console.log(err))

export default dataOne;*/
