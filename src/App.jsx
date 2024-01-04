
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

import * as General from "@/pages/general";
import GeneralLayout from "@/layouts/GeneralLayout";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        
        <Route element={<GeneralLayout />}>
          <Route path="/" element={<General.Home />} />
          <Route path="/signup" element={<General.SignUp />} />
        </Route>

      </Route>
    )
  );

  return <RouterProvider router={router} />;
  
}

export default App
