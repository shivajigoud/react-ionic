import { axios } from 'axios';
const userAPI = () => {
  const fetchAllUsers = async () => {
    try {
      const response = await fetch('https://gorest.co.in/public/v2/users');
      return { response };
    } catch (error) {
      return { error };
    }
  };
  const createUser = async (user) => {
    try {
      const response = await fetch(
        'https://gorest.co.in/public/v2/users',
        { method: 'post' },
        { data: JSON.stringify(user) }
      );
      return { response };
    } catch (error) {
      return { error };
    }
  };
  const updateUser = async (id, user) => {
    try {
      const response = await fetch(
        'https://gorest.co.in/public/v2/users/',
        { method: 'post' },
        { data: JSON.stringify(user) }
      );
      return { response };
    } catch (error) {
      return { error };
    }
  };
  const deleteUser = async (id) => {
    try {
      const response = await fetch('https://gorest.co.in/public/v2/users/', {
        method: 'post',
      });
      return { response };
    } catch (error) {
      return { error };
    }
  };
  const fetchUser = async (id) => {
    try {
      const response = await fetch(
        'https://gorest.co.in/public/v2/users/' + id
      );
      return { response };
    } catch (error) {
      return { error };
    }
  };
  return { fetchAllUsers, createUser, updateUser, deleteUser, fetchUser };
};

export default userAPI();
