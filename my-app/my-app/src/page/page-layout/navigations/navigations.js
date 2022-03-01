import React from "react";
import { Link } from "react-router-dom";
import { arrayOflinks } from "../../../utils/ArrayOfLinks";
import "./navigations.scss"

export default function Navigations() {
  return (
    <div className="navigation-background--style">
      <div className="navigation_header--style">
        <Link to="/"className="navigation-header">Bank of Zimbambava</Link>
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
