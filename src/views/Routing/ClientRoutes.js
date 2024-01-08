import Dashboard from "views/Client/Dashboard/index";
import Pricing from "views/Client/Pricing/index";

const ClientRoutes = [{
        path: "/",
        name: "Client Dashboard",
        element: < Dashboard / > ,
    },
    {
        path: "/pricing",
        name: "Pricing Plan",
        element: < Pricing / > ,
    },
];

export default ClientRoutes;