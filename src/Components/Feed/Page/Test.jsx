import * as React from "react";
import * as JSURL from "jsurl";
// import type { NavigateOptions } from "react-router-dom";
import { Routes, Route, Link, useSearchParams } from "react-router-dom";
import {useQueryParam} from '../../../hooks/useQueryParam'

export function Test() {
  return (
    <div className="text-light">
      <h1>Custom Query Parsing Example</h1>

      <p>
        This example demonstrates how to store a complex data structure in a URL
        query parameter.
      </p>

      <p>
        Each time a field in the form below changes, the URL is updated with a
        serialized version of the form's values. To see the effect this has,
        manipulate some fields in the form. Then, copy the URL in the address
        bar and paste it into a new tab in your browser to see the form in the
        exact same state as when you left it!
      </p>

      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

function Home() {
  let [filter, setFilter] = useQueryParam("filter");

  if (!filter) {
    filter = { category: [], dateFrom: undefined, dateTo: undefined, tags: [] };
  }

  function handleChange(event) {
    let form = event.currentTarget;
    let formData = new FormData(form);

    // This complex data structure is preserved in the URL in the
    // `filter` query parameter each time a value in the form changes!
    let filter = {
      category: formData.getAll("category"),
      dateFrom: formData.get("dateFrom"),
      dateTo: formData.get("dateTo"),
      tags: formData.getAll("tags"),
    };

    setFilter(filter, { replace: true });
  }

  return (
    <div>
      <form onChange={handleChange}>
        <p>What would you like on your pizza?</p>

        <p>
          <label>
            <input
              defaultChecked={filter.category.includes("films")}
              type="checkbox"
              name="category"
              value="films"
            />{" "}
            films
          </label>
          <br />
          <label>
            <input
              defaultChecked={filter.category.includes("games")}
              type="checkbox"
              name="category"
              value="games"
            />{" "}
            games
          </label>
          <br />
          <label>
            <input
              defaultChecked={filter.category.includes("books")}
              type="checkbox"
              name="category"
              value="books"
            />{" "}
            books
          </label>
          <br/>
          <label>
            <input
              defaultChecked={filter.category.includes("music")}
              type="checkbox"
              name="category"
              value="music"
            />{" "}
            music
          </label>
        </p>

        <p>
          <label>
          
            <input type="date" name="dateFrom" defaultValue={filter.dateFrom} id="" />
            Date From
          </label>
          <br />
          <label>
            <input type="date" name="dateTo" defaultValue={filter.dateTo} id="" />
            Date To
          </label>
          <br />
          {/* <label>
            <input
              type="radio"
              name="crust"
              value="deep-dish"
              defaultChecked={pizza.crust === "deep-dish"}
            />{" "}
            Deep Dish
          </label> */}
        </p>

        <p>
          {/* <label>
            <input
              type="checkbox"
              name="extraSauce"
              defaultChecked={pizza.extraSauce}
            />{" "}
            Extra Sauce
          </label> */}
        </p>
      </form>

      <hr />

      <p>The current form values are:</p>

      <pre>{JSON.stringify(filter || {}, null, 2)}</pre>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
