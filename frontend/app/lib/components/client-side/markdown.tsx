"use client";

import style from "./markdown-styles.module.css";
import Markdown from "react-markdown";

interface Props {
  payload: any;
  styles?: string;
}
export function MarkdownC(props: Props) {
  console.log("markdown payload", props.payload);

  if (!props.payload) {
    return <div> Waiting un undefined props </div>;
  }
  return <Markdown className={`${style.reactMarkDown} ${props.styles ?? ""}`}>{props.payload}</Markdown>;
}
