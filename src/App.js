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
    path: "/",
    element: <Navigation />,
    children:[
      {
        index: true,
        path: "/",
        element: <Home />
      },
      {
        path: "favorites",
        element: <Favorites/>,
      },
      {
        path: "character/:characterId",
        element: <Character />,
        loader: LoaderCharacter
      },
      {
        path: "episode/",
        element: <Episode />
      },
      {
        path: "location/",
        element: <Location />
      },
      {
        path:'*',
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
