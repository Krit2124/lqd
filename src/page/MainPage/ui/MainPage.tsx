import { BuildWalletSection } from '@/widgets/BuildWalletSection';
import { LetsStartSection } from '@/widgets/LetsStartSection';
import { ServersSection } from '@/widgets/ServersSection';
import React from 'react';

const MainPage = () => {
  return (
    <div>
      <ServersSection isWorking={true} />
      <BuildWalletSection />
      <LetsStartSection />
    </div>
  );
};

export default MainPage;