import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import './theme/light.css';
import './theme/dark.css';
import setTheme from 'utilities/theme-setter';
import useLocalStorage from 'hooks/use-storage';
import { pageActions } from 'pages/page-slice';
import getResourceId from 'utilities/get-resource-id';
import {
  DashboardPage,
  WelcomePage,
  ShowPokemonPage,
  ShowAPokemonPage,
  ShowTop5PokemonPage,
  ShowMovesPage,
  ShowAMove,
  ShowTMs,
  ShowATM,
  ShowHMs,
  ShowAnHM,
  NotFoundPage,
} from 'pages';

const App = () => {
  const dispatch = useDispatch();
  const { isTriggered } = useSelector((state) => state.sidebar);
  const [storage] = useLocalStorage();
  const { pathname: currentPath } = useLocation();
  const { currentPage } = useSelector((state) => state.page);

  useEffect(() => {
    document.body.style.overflowY = (isTriggered && 'hidden') || null;
    document.querySelector('body').style.overflowY = (isTriggered && 'hidden') || null;
  }, [isTriggered]);

  useEffect(() => {
    setTheme(dispatch, storage.theme);
  }, [dispatch, storage]);

  useEffect(() => {
    if (!currentPage) return;
    const resourceId = getResourceId(currentPath);
    dispatch(pageActions.setCurrentPageId(resourceId));
  }, [currentPage, currentPath, dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to={'/docs'} />} />
        <Route element={<DashboardPage />}>
          <Route path="/docs" element={<WelcomePage />} />
          <Route path="/docs/show-pokemon" element={<ShowPokemonPage />} />
          <Route path="/docs/show-a-pokemon" element={<ShowAPokemonPage />} />
          <Route path="/docs/show-top-5-pokemon" element={<ShowTop5PokemonPage />} />
          <Route path="/docs/show-moves" element={<ShowMovesPage />} />
          <Route path="/docs/show-a-move" element={<ShowAMove />} />
          <Route path="/docs/show-tms" element={<ShowTMs />} />
          <Route path="/docs/show-a-tm" element={<ShowATM />} />
          <Route path="/docs/show-hms" element={<ShowHMs />} />
          <Route path="/docs/show-an-hm" element={<ShowAnHM />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
