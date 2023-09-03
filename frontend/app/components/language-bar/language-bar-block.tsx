import React from "react";

export default function LanguageBarBlock(props: {
  percentage: number, 
  styles: string,
  language: string
}) {

  return (
    <div 
      style={{
        width: `${props.percentage}%`
      }}
      className={props.styles}
      >
    </div>
  )
}