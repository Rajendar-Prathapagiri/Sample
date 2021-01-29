import axios from 'axios';


export const postData = (url,obj) => {
    debugger
   const svcconfig = {
       headers: { Pragma: 'no-cache' }
    }
    const payload=axios.post(url,obj,svcconfig)
             .then(response => {
               console.log("postdata1",response)
                return response;
             })
             .catch(error => {
                return   { error:error, statusText: "error"};
             })
     return payload;
    }

    export const postData1 = (url,obj) => {
      debugger
     const svcconfig = {
      headers: {'Authorization': `Bearer ${localStorage.getItem("hrviteToken")}`}

      }
      const payload=axios.post(url,obj,svcconfig)
               .then(response => {
                 console.log("postdata1",response)
                  return response;
               })
               .catch(error => {
                  return   { error:error, statusText: "error"};
               })
       return payload;
      }

      export const updateData = (url,obj) => {
         debugger
        const svcconfig = {
         headers: {'Authorization': `Bearer ${localStorage.getItem("hrviteToken")}`}
   
         }
         const payload=axios.put(url,obj,svcconfig)
                  .then(response => {
                    console.log("postdata1",response)
                     return response;
                  })
                  .catch(error => {
                     return   { error:error, statusText: "error"};
                  })
          return payload;
         }
   


    export const getData = (url) => {
      debugger
     const svcconfig = {
         headers: {'Authorization': `Bearer ${localStorage.getItem("hrviteToken")}`}
      }
      const payload=axios.get(url,svcconfig)
               .then(response => {
                 console.log("getdata1",response)
                  return response;
               })
               .catch(error => {
                  return   { error:error, statusText: "error"};
               })
       return payload;
      }