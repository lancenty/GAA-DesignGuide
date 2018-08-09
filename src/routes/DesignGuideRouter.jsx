// @material-ui/icons
import IntroIcon from "@material-ui/icons/Home";
import Widgets from "@material-ui/icons/Widgets";
import TextFormat from "@material-ui/icons/TextFormat";
import PhotoLibrary from "@material-ui/icons/PhotoLibrary";
import FormatColor from "@material-ui/icons/FormatColorFill";
import WritingIcon from "@material-ui/icons/BorderColor";
import ChartIcon from "@material-ui/icons/ShowChart";
import WireframeIcon from "@material-ui/icons/ViewQuilt";
import LocationOn from "@material-ui/icons/LocationOn";

import Introduction from "views/Introduction/Introduction.jsx";
import Color from "views/Color/Color.jsx";
import Typography from "views/Typography/Typography.jsx";
import Writing from "views/Writing/Writing.jsx";
import Components from "views/Components/Components.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import Charts from "views/Charts/Charts.jsx";
import Wireframes from "views/Wireframes/Wireframes.jsx";


const DesignGuideRouter = [
    {
        path: "/introduction",
        sidebarName: "Introduction",
        navbarName: "Introduction",
        icon: IntroIcon,
        component: Introduction
    },
    {
        path: "/color",
        sidebarName: "Color",
        navbarName: "Color",
        icon: FormatColor,
        component: Color
    },
    {
        path: "/typography",
        sidebarName: "Typography",
        navbarName: "Typography",
        icon: TextFormat,
        component: Typography
    },
    {
        path: "/writing",
        sidebarName: "Writing",
        navbarName: "Writing",
        icon: WritingIcon,
        component: Writing
    },
    {
        path: "/images",
        sidebarName: "Imagery",
        navbarName: "Imagery",
        icon: PhotoLibrary,
        component: Icons
    },
    {
        path: "/components",
        sidebarName: "Components",
        navbarName: "Components",
        icon: Widgets,
        component: Components
    },
    {
      path: "/charts",
      sidebarName: "Charts",
      navbarName: "Charts",
      icon: ChartIcon,
      component: Charts
    },
    {
        path: "/maps",
        sidebarName: "Maps",
        navbarName: "Maps",
        icon: LocationOn,
        component: Maps
    },
    {
      path: "/wireframes",
      sidebarName: "Wireframes",
      navbarName: "Wireframes",
      icon: WireframeIcon,
      component: Wireframes
    },

        { redirect: true, path: "/", to: "/introduction", navbarName: "Redirect" }
    ];

    export default DesignGuideRouter;
