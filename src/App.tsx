import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { GlobalStyle } from "./styles/GlobalStyle";

import Login from "./routes/Login";
import Welcome from "./routes/Welcome";
import ErrorPage from "./routes/ErrorPage";
import PrivateRoute from "./routes/PrivateRoute";
import DetailsMotorbike from "./routes/DetailsMotorbike";
import EditProfile from "./routes/EditProfile";
import EditAndAnnounceSales from "./routes/EditAndAnnounceSales";
import FinalizeMotorbikePurchase from "./routes/FinalizeMotorbikePurchase";
import MotorbikeSearch from "./routes/MotorbikeSearch";
import RegisterUser from "./routes/RegisterUser";

import { ThemeProvider } from "@mui/material/styles";
import { themeMaterial } from "./styles/ThemeMaterialUI";

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute><Welcome /></PrivateRoute>,
      errorElement: <ErrorPage />
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/detalhes/:id",
      element: <PrivateRoute><DetailsMotorbike /></PrivateRoute>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/anunciar_vendas",
      element: <PrivateRoute><EditAndAnnounceSales /></PrivateRoute>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/editar_perfil",
      element: <PrivateRoute><EditProfile /></PrivateRoute>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/editar_anuncio/:id",
      element: <PrivateRoute><EditAndAnnounceSales /></PrivateRoute>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/finalizar_compra/:id",
      element: <PrivateRoute><FinalizeMotorbikePurchase /></PrivateRoute>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/search/:name_motorbike",
      element: <PrivateRoute><MotorbikeSearch /></PrivateRoute>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/cadastro_usuario",
      element: <RegisterUser />,
      errorElement: <ErrorPage />,
    }
  ]);

  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={themeMaterial}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </div>
  )
}

export default App
