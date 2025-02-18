import { createBrowserRouter, RouterProvider } from "react-router-dom";

import EstiloGlobal, { Wallpaper, AppArea, WorkArea } from "./Styles";
import SideBar from "./Components/SideBar";
import Clist from "./Components/Clist";
import New from "./Pages/New";
import Editing from "./Pages/Edit";

const route = createBrowserRouter([{
  path: '/',
  element: <Clist />   
},
{
  path: '/novo',
  element: <New />
},
{
  path: '/editing',
  element: <Editing />
}
])

  function App() {
  
    return (
      <>
        <EstiloGlobal />
        <Wallpaper />
        <AppArea>
          <WorkArea>
            <aside>
            <SideBar/>
            </aside>
            <main>
              <RouterProvider router={route} />
            </main>
          </WorkArea>
        </AppArea>
      </>
    );
  }
  
  export default App
