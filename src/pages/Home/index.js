import React from 'react';

import HomeBanner from 'components/HomeBanner';
import LogoClouds from 'components/LogoClouds';
import FeatureSections from 'components/FeatureSections';
import CTASection from 'components/CTASection';

function Home() {
  return (
    <>
      <div className="max-w-7xl7 mx-auto">
        <HomeBanner />
      </div>
      <FeatureSections />
      <CTASection />
      <LogoClouds />
    </>
  );
}

export default Home;
