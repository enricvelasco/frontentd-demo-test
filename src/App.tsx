import './App.css';
import { RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { navigationRouter } from './navigation/index';
import { Providers } from './common/providers';

function App () {
  return (
    <Providers>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <RouterProvider router={navigationRouter} />
        </NextThemesProvider>
      </NextUIProvider>
    </Providers>
  );
}

export default App;
