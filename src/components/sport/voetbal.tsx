import React from "react";
import {SportMenu} from "./sportMenu";

export function Voetbal() {

    return (
        <>
            <div className="hcContentContainer">
                <div className="hcBasicSideMargin hcMarginBottom1">
                    <h1>Voetbal</h1>
                </div>
                <div className="hcLayoutFacet-Result hcBasicSideMargin">
                    <div className="hcLayoutFacets">
                        <SportMenu/>
                    </div>
                    <div className="hcLayoutResults">
                        <div>Bladiebla</div>
                    </div>
                </div>
            </div>
        </>
    )
}