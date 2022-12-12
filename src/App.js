import './App.css';
import { useState } from 'react';
import {
  ApolloProvider,
} from '@apollo/client';
import createApolloClient from './ApolloClient';

function App() {
  const [client] = useState(createApolloClient());
  return (
    <ApolloProvider client={client}>
      <div className="App" />
    </ApolloProvider>
  );
}

export default App;
