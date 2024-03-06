import ResponsiveAppBar from "./Header/Header";
import GridBackgroundDemo from "./Background"
import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./About/AboutPage";
import Gallery from "./Gallery/Gallery";
import Team from "./Team/Team";

function App() {
  return (
    <div className="App   ">
    {/* <ResponsiveAppBar/> */}
    <GridBackgroundDemo/>
     </div>
  );
}
export const appRouter = createBrowserRouter([
  
  {
    path:"/",
    element: <App/>,
    
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
        path:'/Gallery',
        element:<Gallery/>
      }

    ])
export default App;
