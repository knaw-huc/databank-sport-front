import React from "react";
import {FreeTextFacet, ListFacet, ISendCandidate} from 'browser-base-react';

export default function Facets({sendCandidateHandler}: { sendCandidateHandler: ISendCandidate }) {
    return <>
        <FreeTextFacet add={sendCandidateHandler}/>
        <ListFacet parentCallback={sendCandidateHandler}
                   name="Sport"
                   field="sports.sport"
                   url="http://localhost:5000/facet"/>
        <ListFacet parentCallback={sendCandidateHandler}
                   name="Plaats"
                   field="plaats"
                   url="http://localhost:5000/facet"/>
        <ListFacet parentCallback={sendCandidateHandler}
                   name="Provincie"
                   field="provincie"
                   url="http://localhost:5000/facet"/>
        <ListFacet parentCallback={sendCandidateHandler}
                   name="Levensbeschouwing"
                   field="levensbeschouwing"
                   url="http://localhost:5000/facet"/>
    </>;
}
