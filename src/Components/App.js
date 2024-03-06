import ResponsiveAppBar from "./Header/Header";
import GridBackgroundDemo from "./Background"
import { createBrowserRouter,Outlet } from "react-router-dom";
import AboutPage from "./About/AboutPage";
import Gallery from "./Gallery/Gallery";
import Team from "./Team/Team";
import { Children } from "react";

function App() {
  return (
    <div className="App   ">
    <ResponsiveAppBar/>
    <Outlet/>
    
     </div>
  );
}
export const appRouter = createBrowserRouter([
  
  {
    path:"/",
    element: <App/>,
    
    children:[
      {
        path:"/",
        element:<GridBackgroundDemo/>

      },{
        path:"/Home",
        element:<GridBackgroundDemo/>
      },
      {
        path:"/About",
       element:<AboutPage/>
      },
      {
        path:"/Team",
        element:<Team/>
      },
      {
        path:"/Gallery",
        element:<Gallery/>
      },
    ]
  }

    ])
export default App;
