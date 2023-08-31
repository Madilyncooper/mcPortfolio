import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import HomePage from './components/HomePage';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})


function App() {
  const [count, setCount] = useState(0)

  return (
   
    <ApolloProvider client={client}>    
      <Router>
    <Navigation />
    <Routes>
      <Route 
      path='/'
      element={<HomePage />}
      />
    </Routes>
    </Router>
    </ApolloProvider>
  )
}

export default App;
