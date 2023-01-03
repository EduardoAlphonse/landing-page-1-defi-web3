type ButtonProps = {
  title: string;
};

export const Button = ({ title }: ButtonProps) => {
  return (
    <button className="bg-gradient-to-b from-primary-100 to-primary-500 px-8 py-3 rounded-full text-sm text-zinc-900 drop-shadow-[0_12px_15px_rgba(17,160,212,0.4)] hover:drop-shadow-[0_12px_15px_rgba(61,217,201,0.4)] transition duration-300">
      {title}
    </button>
  );
};
