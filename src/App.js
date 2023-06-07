import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Episode from "./Pages/Episode";
import Location from "./Pages/Location";
import Navigation from "./components/Navigation";
import Character, { LoaderCharacter } from "./Pages/Character";
import Error from './Pages/Error'

const router = createBrowserRouter([
  {
    path: "/Rick-Morty-WebApp/",
    element: <Navigation />,
    children:[
      {
        index: true,
        path: "/Rick-Morty-WebApp/",
        element: <Home />
      },
      {
        path: "/Rick-Morty-WebApp/favorites/",
        element: <Favorites/>,
      },
      {
        path: "/Rick-Morty-WebApp/character/:characterId",
        element: <Character />,
        loader: LoaderCharacter
      },
      {
        path: "/Rick-Morty-WebApp/episode/",
        element: <Episode />
      },
      {
        path: "/Rick-Morty-WebApp/location/",
        element: <Location />
      },
      {
        path:'/Rick-Morty-WebApp/*',
        element: <Error/> 
      }
    ]
  },
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
