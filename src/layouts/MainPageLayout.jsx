import {Switch} from '@headlessui/react';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route, useRouteMatch} from 'react-router-dom';
import ScreenWidthWrapper from '../components/ScreenWidthWrapper';
import HistoryPage from '../pages/HistoryPage';
import MainPage from '../pages/MainPage';
import {getIncome} from '../store/incomeSlice';

const MainPageLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadPostData = () => {
      dispatch(getIncome());
    };
    loadPostData();
  }, [dispatch]);
  const {path} = useRouteMatch();
  return (
    <ScreenWidthWrapper>
      <Switch>
        <Route
          path={path + '/history'}
          component={HistoryPage}
        />
        <Route
          exact
          path={path}
          component={MainPage}
        />
      </Switch>
      {/* {children} */}
    </ScreenWidthWrapper>
  );
};

export default MainPageLayout;
