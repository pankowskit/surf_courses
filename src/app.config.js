import Comingsoon from "./views/comingsoon";
import Error from "./views/error";
import Home from "./views/home";
import Privacy from "./views/privacy";
import Shop from "./views/shop";
import Trips from "./views/trips";

const ERRORS = {
    "401":{
        backLink: "/",
        backName:"Home",
        code:"401",
        text: "You are not authorized to access this resource"
    },
    "404":{
        backLink: "/",
        backName:"Home",
        code:"404",
        text: "Page not found"
    }
}

const PATHS = [
    {menuItem:true,menuName:"Home",path:"/",component:<Home/>},
    {menuItem:true,menuName:"Trips",path:"/trips",component:<Trips/>},
    {menuItem:true,menuName:"Shop",path:"/shop",component:<Shop/>},
    {menuItem:false,menuName:"",path:"/comingsoon",component:<Comingsoon/>},
    {menuItem:false,menuName:"",path:"/privacy",component:<Privacy/>},
    {menuItem:false,menuName:"",path:"*",component:<Error errorData={ERRORS['404']}/>}
];

export {
    ERRORS,
    PATHS
}