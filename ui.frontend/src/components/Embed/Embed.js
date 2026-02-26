
import React from "react";

export default function Embed(props) {
  // AEM provides html inside props to render
  return (
    <div
      className="aem-embed-component"
      dangerouslySetInnerHTML={{ __html: props.html }}
    />
  );
}
