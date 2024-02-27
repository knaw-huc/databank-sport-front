import React from "react";
import {FreeTextFacet, ListFacet, FilteredListFacet, ISendCandidate} from 'browser-base-react';

export default function Facets({sendCandidateHandler}: { sendCandidateHandler: ISendCandidate }) {
    return <>
        <FreeTextFacet add={sendCandidateHandler}/>
        <ListFacet parentCallback={sendCandidateHandler}
                   name="Sport"
                   field="sports.sport"
                   url="http://localhost:5000/facet"
        flex={false}/>
        <FilteredListFacet parentCallback={sendCandidateHandler}
                   name="Plaats"
                   field="plaats"
                   url="http://localhost:5000/filter-facet"/>
        <ListFacet parentCallback={sendCandidateHandler}
                   name="Provincie"
                   field="provincie"
                   url="http://localhost:5000/facet"
        flex={true}/>
        <ListFacet parentCallback={sendCandidateHandler}
                   name="Levensbeschouwing"
                   field="levensbeschouwing"
                   url="http://localhost:5000/facet"
        flex={false}/>
    </>;
}
