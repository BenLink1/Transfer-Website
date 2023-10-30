import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//The js file
import Home from "./pages/Home"
import Forms from "./pages/Forms"
import Search from "./pages/Search"
import Layout from "./pages/Layout"


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="Search" element={<Search />} />
                    <Route path="Forms" element={<Forms />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>);

}

function Error() {
    //Too lazy making another file, if path is unknown call this
    return (
        <>
            <h>404 ERROR</h>
        </>);
}

export default App;

