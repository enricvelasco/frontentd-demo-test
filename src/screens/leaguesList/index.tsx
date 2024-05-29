import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetLeagues } from '../../core/domain/league/repositories/getLeagues';
import { DashboardListModel, ListDashboardTemplate } from '../../common/templates/listDashboard/default/index';
import { LeagueModel } from '../../core/domain/league/models/index';

const leagueModelToDashboardItemModel = (leagueList: LeagueModel[]): DashboardListModel[] => {
  return leagueList.map(({ id, code, name, image, countryId }) => ({
    id,
    link: `/team/${code}`,
    title: name,
    image,
    description: code,
  }));
};

export const LeaguesListScreen = () => {
  const { countryID } = useParams();
  console.log('LISTSTART:::', countryID);
  const [list, setList] = useState<DashboardListModel[]>([]);

  useEffect(() => {
    console.log('LIST:::', list);
  }, [list]);

  useEffect(() => {
    GetLeagues().then((values) => setList(leagueModelToDashboardItemModel(values)));
  }, []);

  return (
    <>
      <ListDashboardTemplate list={list} />
    </>
  );
};
