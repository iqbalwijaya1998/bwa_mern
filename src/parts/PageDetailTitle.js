import React from "react";
import Fade from "react-reveal/Fade";

import Breadcrumb from "elements/Breadcrumb";

export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="row align-item-center">
          <div className="col-12" style={{ marginTop: 50 }}>
            <Breadcrumb data={breadcrumb} />
          </div>
          <div className="col-12 text-center">
            <h1 className="h2">{data.title}</h1>
            <span className="text-gray-400">
              {data.city}, {data.country}
            </span>
          </div>
        </div>
      </Fade>
    </section>
  );
}
