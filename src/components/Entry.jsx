import React from "react";

import Detail from "./Detail";
function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          <Detail detailInfo={props.emoji} />
        </span>
        <span>
          {" "}
          <Detail detailInfo={props.name} />
        </span>
      </dt>
      <dd>
        <Detail detailInfo={props.meaning} />
      </dd>
    </div>
  );
}
export default Entry;
