import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          
          <Route path="/about" element={<AboutPage/>} />
          
          <Route path="/articles" element={<ArticlePage/>} />

          <Route path="/articles/:articleId" element={<ArticlesListPage/>} />


          <Route path="/" element={<HomePage/>}/>

          <Route path="/notfound" element={<NotFoundPage/>} />
          
          
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
