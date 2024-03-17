"use client"

import Markdown from 'react-markdown';

interface Props {
    payload: any
}
export function MarkdownC(props: Props) {
    console.log("markdown payload", props.payload);

    if(!props.payload) { return (<div> Waiting un undefined props </div>) }
    return ( <Markdown>{props.payload}</Markdown>)

}
