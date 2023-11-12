import { Gitgraph, GitgraphProps, GitgraphOptions, Orientation, templateExtend, TemplateName } from "@gitgraph/react"
import React from "react";

// type GitGraphOptions = Pick<GitgraphProps, "options">
export const MainProjectGraph = () => {
  const ref = React.useRef<Gitgraph | null>(null);

  const opts = {
    orientation: Orientation.HorizontalReverse,
    template: templateExtend(TemplateName.Metro, {
      colors: ["red", "blue", "green"]
    })
  }

  return (
    <Gitgraph options={opts} ref={ref}>
      {
        (gitgraph) => {
        const master = gitgraph.branch("master");

        master.commit("Initial commit");
        }
      }
    </Gitgraph>
  )
}