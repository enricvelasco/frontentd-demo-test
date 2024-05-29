import { createBrowserRouter } from 'react-router-dom';
import { CountryListScreen } from '../screens/countryList/index';
import { NotFoundScreen } from '../screens/notFound/index';
import { LeaguesListScreen } from '../screens/leaguesList/index';

export const navigationRouter = createBrowserRouter([
  {
    path: '*',
    // element: <Redirect to={'/countries'} />,
    errorElement: <NotFoundScreen />,
  },
  {
    path: '/countries',
    element: <CountryListScreen />,
  },
  {
    path: '/leagues/:countryID',
    element: <LeaguesListScreen />,
  },
]);
