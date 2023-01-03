import { ReactNode } from 'react';
import { IconProps } from 'phosphor-react';

type HowToUseCardProps = {
  title: string;
  children: ReactNode;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  colorIndex: number;
};

export const HowToUseCard = ({
  title,
  children,
  icon: Icon,
  colorIndex = 0,
}: HowToUseCardProps) => {
  const colors = ['#a457fe', '#ff913d', '#30b268', '#346aff', '#f84444'];

  const bgColor = `bg-[${colors[colorIndex]}]`;

  return (
    <div className="p-[1px] bg-gradient-to-b opacity-100 from-primary-100 to-primary-500 rounded-xl">
      <div className="p-4 flex items-start gap-4 rounded-xl bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900">
        <div className={bgColor}>
          <Icon className={`w-8 h-8 p-4 rounded-xl box-content text-white`} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-loose">{children}</p>
        </div>
      </div>
    </div>
  );
};
