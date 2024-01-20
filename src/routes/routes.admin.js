
import {LoginAdmin} from "../pages/Admin"
import {AdminLayout}  from "../layouts";

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: LoginAdmin,
    },
];

export default routesAdmin;