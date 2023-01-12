import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_ALL_USERS, DELETE_USER } from '../actions/actions';
import useForm from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonButton,
} from '@ionic/react';
export default function UserTable() {
  const users = useSelector((state) => state.users);
  const usersList = Object.entries(users);
  const error = useSelector((state) => state.usersError);
  const dispatch = useDispatch();
  const { formState, setFormState } = useForm();
  const navigate = useNavigate();
  const editUser = async (e, id) => {
    await setFormState('Save');
    navigate('/editUser/' + id);
  };
  const deleteUser = async (e, id) => {
    dispatch({ type: DELETE_USER, payLoad: id });
  };
  useEffect(() => {
    if (Object.keys(users).length <= 0)
      dispatch({ type: FETCH_ALL_USERS, payLoad: [] });
  }, []);
  return (
    <div className="user_table">
      <h5>App Users</h5>
      {error.error && <h6 className="error user_error">{error.error}</h6>}
      {usersList &&
        usersList.length > 0 &&
        usersList.map((data, i) => {
          const [userkey, userData] = [...data];
          return (
            <IonCard key={`user${userkey}`}>
              <IonCardHeader>
                <IonCardTitle>{userData.name}</IonCardTitle>
                <IonCardSubtitle class="ion-text-wrap">
                  {userData.email}
                </IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                <p>Gender: {userData.gender}</p>
                <p>Status: {userData.status}</p>
                <IonButton onClick={(e) => editUser(e, userkey)}>
                  Edit
                </IonButton>
                <IonButton
                  color="danger"
                  onClick={(e) => deleteUser(e, userkey)}
                >
                  Delete
                </IonButton>
              </IonCardContent>
            </IonCard>
          );
        })}

      {/* <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Gender</td>
            <td>Status</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table> */}
    </div>
  );
}
