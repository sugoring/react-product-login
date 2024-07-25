import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';

import { queryClient } from './api/instance';
import { AuthProvider } from './provider/Auth';
import { Routes } from './routes';

const App = () => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      import('./mocks');
    }
  }, []);

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
