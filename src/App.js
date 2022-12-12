import { useState } from 'react';
import {
  ApolloProvider,
} from '@apollo/client';
import { Box, Button, Typography } from '@mui/material';
import {
  useNavigate,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import createApolloClient from './ApolloClient';
import GetStarted from './pages/GetStarted';

function Homepage() {
  const navigate = useNavigate();
  return (
    <Box
      className="App"
      sx={{
        display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center', height: '400px',
      }}
    >
      <Typography variant="h1">Welcome to DnD Character Builder!</Typography>
      <div>
        <Typography variant="h5">Our builder takes all the math out of rolling or re-specing your character so that you can just focus on the fun stuff.</Typography>
      </div>
      <Button variant="contained" onClick={() => navigate('/get-started')}>Get Started</Button>
    </Box>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/get-started',
    element: <GetStarted />,
  },
]);

function App() {
  const [client] = useState(createApolloClient());
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
