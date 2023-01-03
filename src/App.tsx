import {
  ChartBar,
  Wallet,
  ChartPieSlice,
  ChartLine,
  Wrench,
} from 'phosphor-react';

import { ReactComponent as Avax } from './assets/avax.svg';

import { Button } from './components/Button';
import { CryptoIcon } from './components/CryptoIcon';
import { FeatureCard } from './components/FeatureCard';
import { HowToUseCard } from './components/HowToUseCard';

function App() {
  return (
    <main className="bg-primary-900">
      <div className="max-w-5xl mx-auto px-8 pb-8">
        <div className="flex flex-col min-h-screen">
          <header className="py-8 flex justify-between gap-8 items-center">
            <Avax className="text-green-500" />

            <ul className="gap-8 hidden md:flex">
              <li>Announcements</li>
              <li>Forum</li>
              <li>Docs</li>
              <li>GitHub</li>
              <li>Audit</li>
            </ul>

            <Button title="Lauch App -" />
          </header>

          <div className="flex flex-1 flex-col justify-center items-center text-center">
            <h1 className="text-5xl sm:text-7xl font-semibold text-white">
              DeFi infrastructure in{' '}
              <span className="bg-gradient-to-b from-primary-100 to-primary-500 text-transparent bg-clip-text">
                Web3
              </span>
            </h1>
            <p className="mt-8 mb-16 mx-10 text-center text-zinc-200">
              A complete set of decentralized finance protocols covering assets,
              lending, and trading, serving as DeFi infrastructure in Web3.
            </p>

            <Button title="Lauch App -" />

            <div className="flex gap-4 flex-wrap justify-center mt-8">
              <CryptoIcon name="eth" />
              <CryptoIcon name="avax" />
              <CryptoIcon name="bnb" />
              <CryptoIcon name="doge" />
              <CryptoIcon name="usdt" />
              <CryptoIcon name="btc" />
              <CryptoIcon name="matic" />
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-52">
          <div className="pt-16 bg-gradient-to-b from-primary-800 to-primary-900 rounded-tl-[150px] sm:rounded-tl-full rounded-tr-[150px] sm:rounded-tr-full">
            <h2 className="text-center text-5xl font-semibold text-white">
              How to use dForce
            </h2>

            <p className="mt-8 mb-8 sm:mb-16 px-10 text-center">
              Providing validation service in PoS networks by participating in
              their governance and maintaining the security of the network
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-[1px] bg-gradient-to-b opacity-100 from-primary-100 to-primary-500 rounded-xl">
              <div className="p-4 h-full flex items-start gap-4 rounded-xl bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900">
                <ChartBar
                  className={`w-8 h-8 p-4 rounded-xl box-content text-white bg-[#a457fe]`}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">USX</h3>
                  <p className="mt-2 text-sm leading-loose">
                    An over-collateralized stablecoin with a dual model for
                    minting (pool-based & vault-based).
                  </p>
                </div>
              </div>
            </div>

            <div className="p-[1px] bg-gradient-to-b opacity-100 from-primary-100 to-primary-500 rounded-xl">
              <div className="p-4 h-full flex items-start gap-4 rounded-xl bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900">
                <Wallet
                  className={`w-8 h-8 p-4 rounded-xl box-content text-white bg-[#ff913d]`}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">Lending</h3>
                  <p className="mt-2 text-sm leading-loose">
                    Enabling decentralized lending and borrowing through smart
                    contracts, automating the execution on the protocol.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-[1px] bg-gradient-to-b opacity-100 from-primary-100 to-primary-500 rounded-xl">
              <div className="p-4 h-full flex items-start gap-4 rounded-xl bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900">
                <ChartPieSlice
                  className={`w-8 h-8 p-4 rounded-xl box-content text-white bg-[#30b268]`}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">
                    DF Staking
                  </h3>
                  <p className="mt-2 text-sm leading-loose">
                    A hybrid staking model for DF holders to capture fee income,
                    inflationary rewards, and ecosystem airdrop across the
                    network.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-[1px] bg-gradient-to-b opacity-100 from-primary-100 to-primary-500 rounded-xl">
              <div className="p-4 h-full flex items-start gap-4 rounded-xl bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900">
                <ChartLine
                  className={`w-8 h-8 p-4 rounded-xl box-content text-white bg-[#346aff]`}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">Trading</h3>
                  <p className="mt-2 text-sm leading-loose">
                    Peer-to-Peer marketplace with aggregated liquidity across
                    different platforms with the best price.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-[1px] bg-gradient-to-b opacity-100 from-primary-100 to-primary-500 rounded-xl">
              <div className="p-4 h-full flex items-start gap-4 rounded-xl bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900">
                <Wrench
                  className={`w-8 h-8 p-4 rounded-xl box-content text-white bg-[#f84444]`}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">
                    PoS Staking
                  </h3>
                  <p className="mt-2 text-sm leading-loose">
                    Providing validation service in PoS networks by
                    participating in their governance and maintaining the
                    security of the network, further aligning DeFi
                    infrastructure with the broader blockchain ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-28 md:mt-52">
          <div className="pt-16 bg-gradient-to-b from-primary-800 to-primary-900 rounded-tl-[150px] sm:rounded-tl-full rounded-tr-[150px] sm:rounded-tr-full">
            <h2 className="text-center text-5xl font-semibold text-white">
              Features
            </h2>

            <p className="mt-8 mb-8 sm:mb-32 px-10 text-center">
              A complete set of decentralized finance protocols covering assets,
              lending, and trading, serving as DeFi infrastructure in Web3.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FeatureCard
              image=""
              title="Vault"
            >
              Expanding USX's collateral to a broader category of assets with
              isolated pools and customized risk parameters.
            </FeatureCard>
            <FeatureCard
              image=""
              title="Vault"
            >
              Expanding USX's collateral to a broader category of assets with
              isolated pools and customized risk parameters.
            </FeatureCard>
            <FeatureCard
              image=""
              title="Vault"
            >
              Expanding USX's collateral to a broader category of assets with
              isolated pools and customized risk parameters.
            </FeatureCard>
            <FeatureCard
              image=""
              title="Vault"
            >
              Expanding USX's collateral to a broader category of assets with
              isolated pools and customized risk parameters.
            </FeatureCard>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
