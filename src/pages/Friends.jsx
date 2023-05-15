import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe } from '../redux/slices/auth';
import { fetchUserDeleteFriends, fetchUserFriends } from '../redux/slices/users';
import { Link } from 'react-router-dom';
import SkeletonFriendsPage from '../components/SkeletonFriendsPage';

const Friends = () => {
  const dispatch = useDispatch();
  const [tabIndex, setTabIndex] = React.useState('0');
  const allInfoMe = useSelector((state) => state.auth);
  const { userFriends } = useSelector((state) => state.users);
  const isInfoMeLoading = allInfoMe?.status === 'success';
  const isFriendsLoading = userFriends.status === 'success';

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  React.useEffect(() => {
    if (isInfoMeLoading === true) {
      dispatch(fetchUserFriends(allInfoMe?.data?._id));
    }
    document.title = allInfoMe.data
      ? `Друзья ${allInfoMe.data?.fullName
          .split(' ')
          .map((item) => item + 'а')
          .join(' ')}`
      : 'Друзья';
  }, [isInfoMeLoading]);

  const deleteFriend = (event) => {
    if (window.confirm('Вы действительно хотите удалить друга?')) {
      dispatch(fetchUserDeleteFriends(event.target.id));
      dispatch(fetchAuthMe());
    }
  };

  return (
    <div className="friends">
      <div className="friends__container">
        <div
          className={`friends__tab ${tabIndex === '0' ? 'active' : ''}`}
          onClick={() => setTabIndex('0')}>
          Все друзья {userFriends.items?.length}
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
                        : '/noavatar.jpg'
                    }
                    // src={
                    //   obj.avatarUrl !== ''
                    //     ? `http://localhost:4444${obj.avatarUrl}`
                    //     : '/noavatar.jpg'
                    // }
                    alt="avatar"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `/deletedImgAvatar.jpg`;
                    }}></img>
                  <div>
                    <Link to={`/id${obj._id}`}>
                      <div className="friends__name">{obj.fullName}</div>{' '}
                    </Link>
                    <div>Написать сообщение</div>
                  </div>
                  <div className="friends__deleteFriends" onClick={deleteFriend} id={obj._id}>
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
