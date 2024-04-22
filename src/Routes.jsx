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
import { loadAllCoffee } from "./Components/PopularProducts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} loader={loadAllCoffee} />
      <Route path="coffee-add-new" element={<AddCoffeePage />} />
      <Route path="coffee-details" element={<CoffeeDetailsPage />} />
      <Route path="coffee-edit" element={<EditCoffeePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

export default router;
