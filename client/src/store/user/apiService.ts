import axios from 'axios';

export const addUser =async(email:string)=>{
    const response  = await axios.post('http://localhost:3001/api/user/addUser',{email})
    if(response.data.isSuccess === false  )
        {
            alert(response.data.message)
        }
        else{
            alert(response.data.message)
        }
    return response.data
}