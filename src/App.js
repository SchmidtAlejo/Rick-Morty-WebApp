import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
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
