import React from 'react'
import {Routes, BrowserRouter, Route} from "react-router-dom"
import {map} from "lodash";
import routes from "./routes";


export function Navigation() {
    console.log(routes)
    return(
        <BrowserRouter>
            <Routes>
                {map(routes,
                    (route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <route.layout>
                                    <route.component/>
                                </route.layout>
                            }
                        />
                    ))}
            </Routes>
        </BrowserRouter>
    )
}

