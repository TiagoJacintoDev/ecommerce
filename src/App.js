import { useQuery } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Category from './pages/Category';
import Home from './pages/Home';
import { api } from './services/api';

export default function App() {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery(['categories'], async () => {
    const response = await api.get('categories');
    return response.data;
  });

  return (
    <>
      <Header categories={categories} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories/:category' element={<Category />} />
      </Routes>
    </>
  );
}
