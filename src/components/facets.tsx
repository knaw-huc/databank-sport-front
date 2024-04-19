import React from "react";
import {FreeTextFacet, ListFacet, FacetsParams} from '@knaw-huc/browser-base-react';

export default function Facets({registerFacet, unregisterFacet, setFacet, searchValues}: FacetsParams) {
    return <>
        <FreeTextFacet registerFacet={registerFacet} unregisterFacet={unregisterFacet} setFacet={setFacet}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Sport"
                   field="sports.sport"
                   url="http://localhost:5000/facet"
                   flex={false}
                   usePost={false}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Type"
                   field="type"
                   url="http://localhost:5000/facet"
                   flex={false}
                   usePost={false}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Plaats"
                   field="plaats"
                   url="http://localhost:5000/filter-facet"
                   flex={false}
                   usePost={false}
                   addFilter={true}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Provincie"
                   field="provincie.provincie"
                   url="http://localhost:5000/filter-facet"
                   flex={false}
                   usePost={false}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Landelijke bond"
                   field="landelijk.naam"
                   url="http://localhost:5000/filter-facet"
                   flex={false}
                   usePost={false}
                   addFilter={true}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Regionale bond"
                   field="lokaal.naam"
                   url="http://localhost:5000/filter-facet"
                   flex={false}
                   usePost={false}
                   addFilter={true}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Levensbeschouwing"
                   field="levensbeschouwing"
                   url="http://localhost:5000/filter-facet"
                   flex={false}
                   usePost={false}
                   searchValues={searchValues}/>

        {/*
        <ListFacet parentCallback={sendCandidateHandler}
                   name="Provincie"
                   field="provincie.provincie"
                   url="http://localhost:5000/facet"
                   flex={true}
        />
        <FilteredListFacet parentCallback={sendCandidateHandler}
                           name="Landelijke bond"
                           field="landelijk.naam"
                           url="http://localhost:5000/filter-facet"/>
        <FilteredListFacet parentCallback={sendCandidateHandler}
                           name="Regionale bond"
                           field="lokaal.naam"
                           url="http://localhost:5000/filter-facet"/>
        <ListFacet parentCallback={sendCandidateHandler}
                   name="Levensbeschouwing"
                   field="levensbeschouwing"
                   url="http://localhost:5000/facet"
                   flex={false}
        />*/}
    </>;
}
