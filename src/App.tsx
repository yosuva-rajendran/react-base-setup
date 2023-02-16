import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { AppContextProvider } from './context/AppContextProvider';
import { Router } from './routes/Router';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </QueryClientProvider>
  );
};

export default App;
