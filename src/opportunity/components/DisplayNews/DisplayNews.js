import React from "react";
import GetNewsInput from "./components/GetNewsInput";
import NewsList from "./components/NewsList";

export default class DisplayNews extends React.Component {
  render() {
    return (
      <div>
        <h4 style={{ marginTop: "2rem" }} className="text-center">
          Search News
        </h4>
        <GetNewsInput />
        <NewsList />
      </div>
    );
  }
}
