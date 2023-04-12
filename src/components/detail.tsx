import React from "react";
import {IDetail} from "../misc/interfaces";
import {useNavigate} from 'react-router-dom';

export function Detail({data}: {data: IDetail}) {
    const navigate = useNavigate();

    return (
    <>
        <div className="hcContentContainer">
            <div className="hcBasicSideMargin">
                <div className="justify hcMarginBottom1">
                    <h1>{data.naam}</h1>
                    <div>Plaats: {data.plaats}</div>
                    <div>Levensbeschouwing: {data.levensbeschouwing}</div>
                    <div className="justify">
                        <a className="back" href="#" onClick={_ => navigate(-1)}>&larr; Return to previous page</a>
                    </div>
                </div>
            </div>
        </div>
    </>)
}