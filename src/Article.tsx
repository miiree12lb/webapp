import React from "react";
// @ts-ignore
import "./css/root.css";
import pdf from "./assets/documents/Article.pdf"

export default function Article(){
    return (<>
        <div id="pdf">
            <embed src={pdf} type="application/pdf" width="100%" height="500px"scrollbar="1" />
        </div>
        
    </>);
}