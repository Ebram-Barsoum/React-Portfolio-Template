import Layout from './Components/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Portfolio from './Components/Portfolio';
import Notfound from './Components/Notfound';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';


function App() {
  const routes = createBrowserRouter([{
      path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'React-Portfolio-template', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      {path:'*', element: <Notfound/>}
    ]
  }]);

  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
