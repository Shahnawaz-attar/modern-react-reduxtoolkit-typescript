import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addUser, fetchUsers } from "../../store";
import { UsersState } from "../../store/slices/userSlices";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

interface Props {}

const UsersList: React.FC<Props> = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState<Error | null>(
    null
  );
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => {
    return state.user;
  });

  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .catch((err: Error) => setLoadingUsersError(err))
      .finally(() => setIsLoadingUsers(false));
  }, []);

  const handleUserAdd = () => {
    dispatch(addUser());
  };

  if (isLoadingUsers) {
    return <div>Loading</div>;
  }

  if (loadingUsersError) {
    return <div>Error fetching data...</div>;
  }

  const renderedUsers = users.users.map(user => {
    return (
      <div
        key={Math.round(Math.random() * 999)}
        className='mb-2 border rounded'
      >
        <div className='flex p-2 justify-between items-center cursor-pointer'>
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='flex flex-row justify-between m-3'>
        <h1 className='m-2 text-xl'>Users</h1>
        <button onClick={handleUserAdd}>+ Add User</button>
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
