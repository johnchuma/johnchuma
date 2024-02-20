import axios from "axios";
import { server_url } from "../utils/endpoint";
import { getUser } from "../utils/local_storage";



  export const postBlog = async (data) => {
    try {
      const formData = new FormData();
      console.log(data.file)
      formData.append('file', data.file); 
      delete data.file;
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
      const user = getUser()
      const response = await axios.post(`${server_url}/blog/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
          'Authorization': `Bearer ${user && user.ACCESS_TOKEN}`
        },
      });
     return response.data.body
    } catch (error) { 
      console.log(error.response)
      return error.response;
    }
  };
  
  export const getBlogs = async (page,limit) => {
    try {
      const user = getUser()
        const response = await axios.get(`${server_url}/blog/?page=${page}&limit=${limit}`,{
            headers: {
                'Content-Type': 'multipart/form-data', 
                'Authorization': `Bearer ${user && user.ACCESS_TOKEN}`
              },
        });
       return response.data.body
      } catch (error) { 
        console.log(error.response)
        return error.response;
      }
  };

  export const getBlog = async (uuid) => {
    try {
      const user = getUser()
        const response = await axios.get(`${server_url}/blog/${uuid}`,{
            headers: {
                'Content-Type': 'multipart/form-data', 
                'Authorization': `Bearer ${user && user.ACCESS_TOKEN}`
              },
        });
       return response.data.body
      } catch (error) { 
        console.log(error.response)
        return error.response;
      }
  };

  export const updateBlog = async (uuid) => {
    try {
      const user = getUser()
        const response = await axios.patch(`${server_url}/blog/${uuid}`,{
            headers: {
                'Content-Type': 'multipart/form-data', 
                'Authorization': `Bearer ${user && user.ACCESS_TOKEN}`
              },
        });
       return response.data.body
      } catch (error) { 
        console.log(error.response)
        return error.response;
      }
  };

  
  export const deleteBlog = async (uuid) => {
    try {
      const user = getUser()
        const response = await axios.delete(`${server_url}/blog/${uuid}`,{
            headers: {
                'Content-Type': 'multipart/form-data', 
                'Authorization': `Bearer ${user && user.ACCESS_TOKEN}`
              },
        });
       return response.data.body
      } catch (error) { 
        console.log(error.response)
        return error.response;
      }
  };