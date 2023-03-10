import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './components/RootLayout/RootLayout';
import FreshNewsPage from './Pages/FreshNewsPage/FreshNewsPage';
import SingleNewsDetailsPage from './Pages/SingleNewsDetailsPage/SingleNewsDetailsPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';

const App: FC = () => {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<FreshNewsPage />} />
          <Route path="/news" element={<FreshNewsPage />} />
          <Route path="/news/:id" element={<SingleNewsDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
};

export default App;
