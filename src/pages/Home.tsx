import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UiBox from '../components/ui/UiBox';

const Home = () => {
  return (
    <>
      <div className="container">
        <UiBox idName="con01" title="컨텐츠1">
          uibox
        </UiBox>

        <UiBox idName="con02" title="컨텐츠2">
          uibox2
        </UiBox>
      </div>
    </>
  );
};

export default Home;
