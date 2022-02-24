import React from "react";
import { arrayOflinks } from "../../../utils/ArrayOfLinks";
import "./navigations.scss"

export default function Navigations() {
  return (
    <div className="navigation-background--style">
      <div className="navigation_header--style">
        <h1 className="navigation-header">Bank of Zimbambava</h1>
      </div>
      <section>
        <ul className="navigation_style">
          {arrayOflinks.map((links) => {
                return (
                  <>
                    <li>
                      <a href={links.url}>{links.name}</a>
                    </li>
                  </>
                );
              })
            }
        </ul>
      </section>
    </div>
  );
}
