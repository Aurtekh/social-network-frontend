import React from 'react';
import debounce from 'lodash.debounce';
import { SearchSkeleton } from './Skeleton';

import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { fetchSearchUsers } from '../../redux/slices/users';
export const Search = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const isUsersLoading = users.status === 'loading';

  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    document.title = 'Поиск друзей';
  }, []);

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(fetchSearchUsers(str));
    }, 350),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value || 'empty');
  };

  return (
    <div className="search">
      <div className="search__container">
        <div className="search__nav">Люди</div>
      </div>
      <div className="line-gray"></div>
      <div className="search__peopleFound">Люди {users?.items?.length || 0}</div>
      <div className="line-gray"></div>
      <div className="search__container">
        <TextField
          value={value}
          onChange={onChangeInput}
          size="small"
          margin="dense"
          type="text"
          className="search__searchField"
          placeholder="Начните вводить любое имя"
        />
      </div>
      <div className="line-gray"></div>
      <div>
        {(isUsersLoading ? [...Array(5)] : users.items).map((obj, index) =>
          isUsersLoading ? (
            <SearchSkeleton key={index} />
          ) : (
            <div key={index}>
              <div className="search__containerFriendList">
                <img
                  className="search__avatar"
                  //                   src={
                  //                     obj?.avatarUrl !== ''
                  //     ? `${process.env.REACT_APP_API_URL}${obj?.avatarUrl}`
                  //     : '/noavatar.jpg'
                  // }
                  src={
                    obj?.avatarUrl !== ''
                      ? `http://localhost:4444${obj?.avatarUrl}`
                      : '/noavatar.jpg'
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    // e.target.src = `${process.env.REACT_APP_API_URL}/deletedImgAvatar.jpg`;
                    e.target.src = `/deletedImgAvatar.jpg`;
                  }}></img>
                <div>
                  <div className="search__name">{obj?.fullName}</div>
                  <div className="search__city">{obj?.city || ''}</div>
                </div>
                <button className="search__button">Добавить в друзья</button>
              </div>
              <div className="line-gray"></div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};
