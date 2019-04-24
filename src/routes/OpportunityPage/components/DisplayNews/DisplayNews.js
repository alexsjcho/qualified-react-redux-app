import React from "react";
import NewsSearchBar from "./components/NewsSearchBar";
import NewsList from "./components/NewsList";
import newsAPI from "../../../../shared/components/newsAPI/newsAPI";

export default class DisplayNews extends React.Component {
  state = {
    newsItems: []
  };

  onSearchQuerySubmit = async searchQuery => {
    const response = await newsAPI.get("/baseURL", {
      params: {
        q: searchQuery
      }
    });
    this.setState({
      newsItems: response.data.items
    });
  };

  render() {
    return (
      <div>
        <h4 style={{ marginTop: "2rem" }} className="text-center">
          Search News
        </h4>
        <NewsSearchBar OnFormSubmit={this.onSearchQuerySubmit} />
        <NewsList />
      </div>
    );
  }
}
