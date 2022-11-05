import './App.css';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div>
      <AboutPage></AboutPage>
      <ArticlePage></ArticlePage>
      <ArticlesListPage></ArticlesListPage>
      <HomePage></HomePage>
      <NotFoundPage></NotFoundPage>
    </div>
  );
}

export default App;
