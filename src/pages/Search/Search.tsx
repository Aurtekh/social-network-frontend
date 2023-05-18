import React from 'react';
import debounce from 'lodash.debounce';
import { SearchSkeleton } from './Skeleton';
import { useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import {
  fetchSearchUsers,
  fetchUserAddFriends,
  fetchUserDeleteFriends,
} from '../../redux/slices/users';
import { Link } from 'react-router-dom';
import { fetchAuthMe, selectIsAuth } from '../../redux/slices/auth';
import { RootState, useAppDispatch } from '../../redux/store';

import deleteImgAvatar from '../../assets/img/deletedImgAvatar.jpg';
import noAvatar from '../../assets/img/noavatar.jpg';

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);
  const allInfoMe = useSelector((state: RootState) => state.auth.data);
  const { users } = useSelector((state: RootState) => state.users);
  const isUsersLoading = users.status === 'loading';
  const [value, setValue] = React.useState('');
  const isInfoMeLoading = allInfoMe.status === 'loading';
  React.useEffect(() => {
    if (!isAuth) {
      dispatch(fetchAuthMe());
    }
    document.title = 'Поиск друзей';
  }, []);

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(fetchSearchUsers(str));
    }, 350),
    [],
  );

  const onChangeInput = (event: { target: { value: React.SetStateAction<string> } }) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value || 'empty');
  };

  const FriendDelOrAdd = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if ((event.target as HTMLElement).innerHTML === 'Удалить из друзей') {
      dispatch(fetchUserDeleteFriends((event.target as HTMLElement).id));
      (event.target as HTMLElement).innerHTML = 'Добавить в друзья';
    } else if ((event.target as HTMLElement).innerHTML === 'Добавить в друзья') {
      dispatch(fetchUserAddFriends((event.target as HTMLElement).id));
      (event.target as HTMLElement).innerHTML = 'Удалить из друзей';
    }
  };

  if (isInfoMeLoading) {
    return <div>загрузка</div>;
  }
  return (
    <div className="search">
      <div className="search__container">
        <div className="search__nav">Люди</div>
      </div>
      <div className="line-gray"></div>
      <div className="search__peopleFound">Люди {users.items.length || 0}</div>
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
        {value &&
          (isUsersLoading ? [...Array(2)] : users.items).map((obj, index) =>
            isUsersLoading ? (
              <SearchSkeleton key={index} />
            ) : (
              <div key={index}>
                <div className="search__containerFriendList">
                  <img
                    className="search__avatar"
                    src={
                      obj.avatarUrl !== ''
                        ? `${process.env.REACT_APP_API_URL}${obj.avatarUrl}`
                        : noAvatar
                    }
                    alt="avatar"
                    onError={(e) => {
                      const { target } = e;
                      if (target instanceof HTMLImageElement) {
                        target.onerror = null;
                        target.src = deleteImgAvatar;
                      }
                    }}></img>
                  <div>
                    <Link to={`/id${obj._id}`}>
                      <div className="search__name">{obj.fullName}</div>
                    </Link>
                    <div className="search__city">{obj.city || ''}</div>
                  </div>

                  {allInfoMe._id === obj._id ? (
                    <div>Это вы</div>
                  ) : allInfoMe.friends.includes(obj._id) ? (
                    <button
                      className="search__button"
                      onClick={(event) => FriendDelOrAdd(event)}
                      id={obj._id}>
                      Удалить из друзей
                    </button>
                  ) : (
                    <button
                      className="search__button"
                      onClick={(event) => FriendDelOrAdd(event)}
                      id={obj._id}>
                      Добавить в друзья
                    </button>
                  )}
                </div>
                <div className="line-gray"></div>
              </div>
            ),
          )}
      </div>
    </div>
  );
};
