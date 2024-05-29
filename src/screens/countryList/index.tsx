import { ListDashboardTemplate } from '../../common/templates/listDashboard/default/index';
import { ListDashboardLoadingTemplate } from '../../common/templates/listDashboard/loading/index';
import { useCountryList } from './resources/useCountryList';

export const CountryListScreen = () => {
  const { list, isLoading } = useCountryList();
  return (
    <>
      {isLoading && <ListDashboardLoadingTemplate />}
      {!isLoading && <ListDashboardTemplate list={list} />}
    </>
  );
};
