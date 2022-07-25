var request=new XMLHttpRequest();

//Opening a connection

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

//request sending
request.send();

request.onload=function(){

    var array_object=JSON.parse(request.response);
    //console.log(array_object)

    for (let i=0;i<array_object.length;i++){

        console.log(array_object[i].name+"\t"+array_object[i].region+"\t"+array_object[i].subregion+"\t"+array_object[i].population);
    }
    

}