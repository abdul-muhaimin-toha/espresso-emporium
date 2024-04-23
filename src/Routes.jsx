import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "./Pages/HomePage";
import AddCoffeePage from "./Pages/AddCoffeePage";
import CoffeeDetailsPage from "./Pages/CoffeeDetailsPage";
import EditCoffeePage from "./Pages/EditCoffeePage";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="coffee-add-new" element={<AddCoffeePage />} />
      <Route path="coffee-details/:id" element={<CoffeeDetailsPage />} />
      <Route path="coffee-edit/:id" element={<EditCoffeePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

export default router;
