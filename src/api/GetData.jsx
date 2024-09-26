import axios from 'axios';

// First texhnique

// const api = "https://jsonplaceholder.typicode.com/posts";

// const getdata = async()=>{
// try {
//     const res = await axios.get(api)
//     return res;
// } catch (error) {
//     console.log(error)
// }
// }

// useEffect(()=>{
// getdata()
// },[])

// 2nd type that will be used
const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com"
})

export const getpost = () =>{
    return api.get('/posts')
}
export const deletePost = (id) =>{
 return api.delete(`/posts/${id}`);
}
export const postData = (data)=>{
    return api.post('/posts',data)
}