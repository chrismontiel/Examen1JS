 import url from "../url";

 async function getData() {
   
        let dataJson = await data.dataJson();
        console.log(dataJson.results);
        return dataJson.results;
        
    
 }

export default  getData;