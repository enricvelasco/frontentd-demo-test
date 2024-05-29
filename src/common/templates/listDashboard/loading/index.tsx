import { Card, Skeleton } from '@nextui-org/react';

export const ListDashboardLoadingTemplate = () => {
  const list = new Array(20).fill(null);
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((value, index) => (
        <Card className="w-[200px] space-y-5 p-4" radius="lg" key={index}>
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"/>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"/>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"/>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"/>
            </Skeleton>
          </div>
        </Card>
      ))}
    </div>
  );
};
