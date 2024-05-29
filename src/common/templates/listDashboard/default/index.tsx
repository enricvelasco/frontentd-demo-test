import { FC } from 'react';
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import { Link } from 'react-router-dom';

export interface DashboardListModel {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

export interface ListDashboardTemplateProps {
  list: DashboardListModel[]
}

export const ListDashboardTemplate: FC<ListDashboardTemplateProps> = ({
  list,
}) => {
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map(({ image, id, description, title, link }, index) => (
        <Link to={link} key={id}>
          <Card className="py-4" isPressable>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{title}</p>
              <small className="text-default-500">{description}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt={title}
                className="object-cover rounded-xl"
                src={image}
                width={270}
              />
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  );
};
