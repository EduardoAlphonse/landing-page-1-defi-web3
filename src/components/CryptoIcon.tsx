import { ReactComponent as Etherium } from '../assets/eth.svg';
import { ReactComponent as Avax } from '../assets/avax.svg';
import { ReactComponent as Binance } from '../assets/bnb.svg';
import { ReactComponent as Doge } from '../assets/doge.svg';
import { ReactComponent as Tether } from '../assets/usdt.svg';
import { ReactComponent as Bitcoin } from '../assets/btc.svg';
import { ReactComponent as Matic } from '../assets/matic.svg';

type CryptoIconProps = {
  // Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  name: 'eth' | 'avax' | 'bnb' | 'doge' | 'usdt' | 'btc' | 'matic';
};

const style =
  'text-zinc-400 w-8 h-8 p-2 rounded-full box-content bg-primary-900';

const icon = {
  eth: <Etherium className={style} />,
  avax: <Avax className={style} />,
  bnb: <Binance className={style} />,
  doge: <Doge className={style} />,
  usdt: <Tether className={style} />,
  btc: <Bitcoin className={style} />,
  matic: <Matic className={style} />,
};

export const CryptoIcon = ({ name }: CryptoIconProps) => {
  return (
    <div className="p-[1px] rounded-full bg-gradient-to-b opacity-100 from-primary-100 to-primary-500">
      {icon[name]}
    </div>
  );
};
