import React from "react";
import GetNewsInput from "./components/GetNewsInput";
import NewsList from "./components/NewsList";

export default class DisplayNews extends React.Component {
  render() {
    return (
      <div>
        <h3>DisplayNews</h3>
        <GetNewsInput />
        <NewsList />
      </div>
    );
  }
}
