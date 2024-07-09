import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import RootLayout from "./components/layout/RootLayout";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import AboutUs from "./components/aboutUs/AboutUs";
import Classes from "./components/classes/Classes";
import ClassInfo from "./components/classes/ClassInfo";
import TimeTable from "./components/timetable/TimeTable";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="about" element={<AboutUs />}></Route>
      <Route path="classes">
        <Route index element={<Classes />}></Route>
        <Route path=":id" element={<ClassInfo />}></Route>
      </Route>
      <Route path="timetable" element={<TimeTable />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
