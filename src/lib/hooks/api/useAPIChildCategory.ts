import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'

//custom hook for calling APIS for child category
const useAPIChildCategory = () => {
  const URL_PREFIX = '/admin/category/child'
  const axiosAuth = useAxiosAuth()

  //API create new child category
  const createNewChildCategory = async (parentCategoryId: number, nameCreate: string) => {
    try {
      const session = await getSession();
      const headers = {
        Authorization: `Bearer ${session?.user.jwtToken}`,
      }
      const url = URL_PREFIX
      const body = {
        pcategory_id: parentCategoryId,
        name: nameCreate,
      };
      const response = await axiosAuth.post(url, body, { headers })
      return response.data
    }
    catch (e: any) {
      throw new Error("Error create child category: " + e.message);
    }
  }

  //api update by id
  const updateChildCategoryById = async (id: number, nameUpdate: string) => {
    try {
      const session = await getSession();
      const headers = {
        Authorization: `Bearer ${session?.user.jwtToken}`,
      }
      const url = URL_PREFIX
      const body = {
        ccategory_id: id,
        name: nameUpdate,
      };
      const response = await axiosAuth.put(url, body, { headers })
      return response.data;
    } catch (error: any) {
      throw new Error("Error updating category: " + error.message);
    }
  };

  //API delete by id
  const deleteChildCategoryById = async (id: number) => {
    try {
      const session = await getSession();
      const headers = {
        Authorization: `Bearer ${session?.user.jwtToken}`,
      }
      const url = `${URL_PREFIX}/delete/${id}`
      const response = await axiosAuth.delete(url, { headers })
      return response
    }
    catch (error: any) {
      throw new Error("Error deleting child category: " + error.message);
    }
  }

  return {
    createNewChildCategory,
    updateChildCategoryById,
    deleteChildCategoryById,
  }
}

export default useAPIChildCategory
