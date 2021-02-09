import axios from 'axios';

export const sendNimaClaimForm = async(data)=>{
    console.log(data);
    return await axios
    .post("https://nimaaaa-project.herokuapp.com/ApplicationClaimForm", data)
    .then((response)=>{
        console.log(response);
        return response;
    })
    .catch((err)=>{
       console.log(err);
       return null;
    })
}