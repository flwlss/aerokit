import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import AboutPage from "../pages/AboutPage/AboutPage";
import ProductionPage from "../pages/ProductionPage/ProductionPage";
import RepairPage from "../pages/RepairPage/RepairPage";
import RDPage from "../pages/RDPage/RDPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import MainPage from "../pages/MainPage/MainPage";
import ActivityPage from "../pages/ActivityPage/ActivityPage";
import ManagementPage from "../pages/ManagementPage/ManagementPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: 'about',
        element: <AboutPage />,
        children: [
          {
            path: '',
            element: <ActivityPage />
          },
          // {
          //   path: 'management',
          //   element: <ManagementPage />
          // },
        ]
      },
      {
        path: 'production',
        element: <ProductionPage />,
      },
      {
        path: 'repair',
        element: <RepairPage />,
      },
      {
        path: 'rd',
        element: <RDPage />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
    ]
  },
])

