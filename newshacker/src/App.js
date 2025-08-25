//  import React, { Component } from 'react';
//  import logo from './logo.svg';
//  import './App.css';
//  class App extends Component {
//    state = {
//     count: 0
//   };

//   handleAdd = () => {
//     const num = parseInt(document.getElementById("num").value);
//     this.setState({ count: num });
//   };

//   renderNames = () => {
//     const elements = [];
//     for (let i = 0; i < this.state.count; i++) {
//       elements.push(<h1 key={i}>purushoth</h1>);
//     }
//     return elements;
//   };

//  render() {
//   //  const msg = "Welcome to React";
//   //  var name="purushoth"
//   //  let advise="All is well"

//   //  function display(){
//   //   let x=1;
//   //   if(x=="1")
//   //   {
//   //    let x=2;
//   //     console.log("x inside if block: " + x);
//   //   }
//   //   console.log("x outside if block: " + x);

//   //  }
//   //  return (
//   //    <div className="App">
//   //      <header className="App-header">
//   //        <img src={logo} className="App-logo" alt="logo" />
//   //        <h1 className="App-title">{msg}</h1>
//   //        <h2 className="App-title">Hello {name}!</h2>
//   //        <h3>{advise}</h3>
//   //         <button onClick={display}>Display</button>
//   //      </header>
//   //      <p className="App-intro">
//   //        To get started, edit <code>src/App.js</code> and save to reload.
//   //      </p>
//   //    </div>
//   //  );

//   return (

//     <div className="text-alignment:center;">

//       <input type="number" id="num"/>
//       <button onClick={this.handleAdd}>Add</button>
//       {this.renderNames()}
//     </div>

//   );
//  }
//  }
//  export default App;


// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     articles: [],
//     page: 0,
//     searchTerm: "",
//     isLoading: false,
//   };

//   componentDidMount() {
//     this.fetchArticles();
//   }

//   fetchArticles = () => {
//     const { page, searchTerm } = this.state;
//     this.setState({ isLoading: true });

//     fetch(
//       `https://hn.algolia.com/api/v1/search?query=${searchTerm}&page=${page}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState((prevState) => ({
//           articles: [...prevState.articles, ...data.hits],
//           isLoading: false,
//         }));
//       })
//       .catch((error) => {
//         console.error("Error fetching articles:", error);
//         this.setState({ isLoading: false });
//       });
//   };

//   handleSearch = (event) => {
//     this.setState(
//       { searchTerm: event.target.value, articles: [], page: 0 },
//       () => {
//         this.fetchArticles();
//       }
//     );
//   };
//   handleLoadMore = () => {
//     this.setState(
//       (prevState) => ({ page: prevState.page + 1 }),
//       () => {
//         this.fetchArticles();
//       }
//     );
//   };

//   render() {
//     const { articles, isLoading } = this.state;

//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>Articles</h1>
//           <input
//             type="text"
//             placeholder="Search articles..."
//             onChange={this.handleSearch}
//           />
//         </header>
//         <main>
//           {articles.length > 0 ? (
//             <ul>
//               {articles.map((article) => (
//                 <li key={article.objectID}>
//                   <a
//                     href={article.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {article.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No articles found.</p>
//           )}
//           {isLoading && <p>Loading...</p>}
//           {!isLoading && (
//             <button onClick={this.handleLoadMore}>Load More</button>
//           )}
//         </main>
//       </div>
//     );
//   }
// }
// export default App;

import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    articles: [],
    page: 0,
    searchTerm: "",
    isLoading: false,
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async () => {
    const { page, searchTerm } = this.state;
    this.setState({ isLoading: true });

    try {
      const response = await axios.get("https://hn.algolia.com/api/v1/search", {
        params: {
          query: searchTerm,
          page: page,
        },
      });

      this.setState((prevState) => ({
        articles: [...prevState.articles, ...response.data.hits],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching articles:", error);
      this.setState({ isLoading: false });
    }
  };

  handleSearch = async (event) => {
    await this.setState({
      searchTerm: event.target.value,
      articles: [],
      page: 0,
    });
    this.fetchArticles();
  };

  handleLoadMore = async () => {
    await this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
    this.fetchArticles();
  };

  render() {
    const { articles, isLoading } = this.state;

    return (
      <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
        <header>
          <h1>Hacker News Articles</h1>
          <input
            type="text"
            placeholder="Search articles..."
            onChange={this.handleSearch}
            style={{ padding: "8px", width: "300px", marginBottom: "20px" }}
          />
        </header>

        <main>
          {articles.length > 0 ? (
            <ul>
              {articles.map((article) => (
                <li key={article.objectID} style={{ margin: "10px 0" }}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title || "Untitled"}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No articles found.</p>
          )}

          {isLoading && <p>Loading...</p>}

          {!isLoading && articles.length > 0 && (
            <button onClick={this.handleLoadMore} style={{ padding: "10px" }}>
              Load More
            </button>
          )}
        </main>
      </div>
    );
  }
}

export default App;

