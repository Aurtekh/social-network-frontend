import React from 'react';
import { useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from '../redux/slices/auth';
import { fetchUserDeleteFriends, fetchUserFriends } from '../redux/slices/users';
import { Link } from 'react-router-dom';
import { SkeletonFriendsPage } from '../components/SkeletonFriendsPage';
import { RootState, useAppDispatch } from '../redux/store';
import deleteImgAvatar from '../assets/img/deletedImgAvatar.jpg';
import noAvatar from '../assets/img/noavatar.jpg';

const Friends: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [tabIndex, setTabIndex] = React.useState('0');
  const allInfoMe = useSelector((state: RootState) => state.auth);
  const { userFriends } = useSelector((state: RootState) => state.users);
  const isInfoMeLoading = allInfoMe.status === 'success';
  const isFriendsLoading = userFriends.status === 'success';

  React.useEffect(() => {
    if (!isAuth) {
      dispatch(fetchAuthMe());
    }
  }, []);

  React.useEffect(() => {
    if (isInfoMeLoading === true && allInfoMe.data._id) {
      dispatch(fetchUserFriends(allInfoMe.data._id));
    }
    document.title = 'Друзья';
  }, [isInfoMeLoading]);

  const deleteFriend = (id: string) => {
    if (window.confirm('Вы действительно хотите удалить друга?')) {
      dispatch(fetchUserDeleteFriends(id));
      dispatch(fetchAuthMe());
    }
  };

  return (
    <div className="friends">
      <div className="friends__container">
        <div
          className={`friends__tab ${tabIndex === '0' ? 'active' : ''}`}
          onClick={() => setTabIndex('0')}>
          Все друзья {userFriends.items.length || 0}
        </div>
        {/* <div
        className={`friends__tab ${tabIndex === '1' ? 'active' : ''}`}
        onClick={() => setTabIndex('1')}>
        Заявки в друзья 1
      </div> */}
      </div>
      <div className="line"></div>
      <div className="friends__containerSearch">
        {/* <input className="friends__search" placeholder="Начните вводить имя друга"></input>
      <button className="friends__button">Найти друзей</button> */}
      </div>
      <div className="line-gray"></div>
      <div className="friends__wrapper">
        <div>
          {(!isFriendsLoading ? [...Array(5)] : userFriends.items).map((obj, index) =>
            !isFriendsLoading ? (
              <SkeletonFriendsPage key={index} />
            ) : (
              <div key={index}>
                <div className="friends__containerFriendList">
                  <img
                    className="friends__avatar"
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
                      <div className="friends__name">{obj.fullName}</div>{' '}
                    </Link>
                    <div>Написать сообщение</div>
                  </div>
                  <div
                    className="friends__deleteFriends"
                    onClick={() => deleteFriend(obj._id)}
                    id={obj._id}>
                    Удалить из друзей
                  </div>
                </div>
                <div className="line-gray"></div>
              </div>
            ),
          )}
        </div>
        <div className="friends__containerSort">
          {/* <div className="friends__sortGender">Пол</div>
        <div className="friends__sortGender__radioBtn">
          <input type="radio" value="MALE" name="gender" /> Мужской
          <input type="radio" value="FEMALE" name="gender" /> Женский
          <input type="radio" value="ANY" name="gender" /> Любой
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Friends;
