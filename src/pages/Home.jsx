import { useState } from "react";
import newsData from "../data/newsData";
import NewsCard from "../components/NewsCard";
import CategoryFilter from "../components/CategoryFilter";

function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    ...new Set(newsData.map((article) => article.category))
  ];

  const filteredNews = newsData.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">TECHNOLOGY NEWS</p>

          <h1>
            Stay Updated With
            <br />
            <span>Technology</span>
          </h1>

          <p>
            Discover the latest news and developments
            across the world of technology.
          </p>
        </div>
      </section>

      <main className="container">
        <div className="section-header" id="latest">
          <div>
            <h2>Latest Technology News</h2>
            <p>Explore the latest stories from the tech world.</p>
          </div>

          <input
            type="text"
            placeholder="🔎 Search news..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="news-grid">
          {filteredNews.length > 0 ? (
            filteredNews.map((article) => (
              <NewsCard
                key={article.id}
                article={article}
              />
            ))
          ) : (
            <div className="no-results">
              <h3>No articles found</h3>
              <p>Try another search term or category.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;