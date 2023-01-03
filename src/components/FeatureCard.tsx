import { ReactNode } from 'react';

type FeatureCardProps = {
  image: string;
  title: string;
  children: ReactNode;
};

export const FeatureCard = ({ image, title, children }: FeatureCardProps) => {
  return (
    <div className="even:mb-[60px] even:mt-[-60px] p-[1px] bg-gradient-to-b opacity-100 from-primary-100 to-primary-500 rounded-xl overflow-hidden">
      <div className="p-8 h-full flex flex-col items-start gap-8 rounded-xl bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 bg-primary-500"
        />

        <h2 className="text-3xl font-semibold text-white">{title}</h2>

        <p className="text-sm leading-loose text-zinc-200">{children}</p>
      </div>
    </div>
  );
};
