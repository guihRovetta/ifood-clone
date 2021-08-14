import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';

import { fetchFonts } from './src/global/config/LoadFonts';
import Routes from './src/routes';

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  if (!isFontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsFontLoaded(true)}
        onError={(error) => console.error(error)}
      />
    );
  }

  return <Routes />;
}
