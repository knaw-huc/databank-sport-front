import React, {createElement} from 'react';
import logo from './logo.svg';
import './assets/css/sport_style.css';
import {BrowserBase} from "browser-base-react";
import type { RouteObject } from 'react-router-dom';
import Facets from "./components/facets";
import ListItem from "./components/listItem";
import {Detail} from "./components/detail";
import {Header} from "./components/pageHeader";
import {Literatuur} from "./components/literatuur";
import {Colofon} from "./components/colofon";
import {rootPage} from "./components/rootPage";
import {Gymnastiek} from "./components/sport/gymnastiek";
import {Hockey} from "./components/sport/hockey";
import {Korfbal} from "./components/sport/korfbal";
import {Schaken} from "./components/sport/schaken";
import {Tennis} from "./components/sport/tennis";
import {Voetbal} from "./components/sport/voetbal";

const header = <Header/>

function App() {
    const routes: RouteObject[] = [
        { path: '/literatuur', element: <Literatuur/> },
        { path: '/colofon', element: <Colofon/> },
        { path: '/gymnastiek', element: <Gymnastiek/>},
        { path: '/hockey', element: <Hockey/>},
        { path: '/korfbal', element: <Korfbal/>},
        { path: '/schaken', element: <Schaken/>},
        { path: '/tennis', element: <Tennis/>},
        { path: '/voetbal', element: <Voetbal/>}
    ]
  return (
   <div>
        <BrowserBase
            searchUrl="http://localhost:5000/browse"
            getFetchUrl={id => 'http://localhost:5000/detail?rec=' + id}
            title="Databank Sport"
            description="Sportverenigingen in Nederland tot 1940"
            headerElement={header}
            rootElement={rootPage}
            childRoutes={routes}
            detailComponent={Detail}
            resultItemComponent={ListItem}
            facetsComponent={Facets}
            withPaging={true}
            pageLength={50} />
   </div>
  );
}

export default App;
