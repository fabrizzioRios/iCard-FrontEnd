
import {HomeAdmin} from "../pages/Admin"
import {AdminLayout}  from "../layouts";

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin,
    },

];

export default routesAdmin;