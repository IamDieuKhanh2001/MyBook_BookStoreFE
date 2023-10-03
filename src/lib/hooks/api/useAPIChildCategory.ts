import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'

//custom hook for calling APIS for child category
const useAPIChildCategory = () => {
  const axiosAuth = useAxiosAuth()

  //API create new child category
  const createNewChildCategory = async (parentCategoryId: number, nameCreate: string) => {
    try {
      const url = "/admin/child_category"
      const body = {
        pcategory_id: parentCategoryId,
        name: nameCreate,
      };
      const response = await axiosAuth.post(url, body)
      return response.data
    }
    catch (e: any) {
      throw new Error("Error create child category: " + e.message);
    }
  }

  //api update by id
  const updateChildCategoryById = async (id: number, nameUpdate: string) => {
    try {
      const url = "/admin/child_category"
      const body = {
        ccategory_id: id,
        name: nameUpdate,
      };
      const response = await axiosAuth.put(url, body)
      return response.data;
    } catch (error: any) {
      throw new Error("Error updating category: " + error.message);
    }
  };

  //API delete by id
  const deleteChildCategoryById = async (id: number) => {
    try {
      const url = `/admin/child_category/delete/${id}`
      const response = await axiosAuth.delete(url)
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
