import { Link, useParams } from "react-router-dom";
import newsData from "../data/newsData";

function ArticleDetails() {
  const { id } = useParams();

  const article = newsData.find(
    (item) => item.id === Number(id)
  );

  if (!article) {
    return (
      <div className="not-found">
        <h2>Article Not Found</h2>

        <Link to="/">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="article-page">

      <Link to="/" className="back-link">
        ← Back to News
      </Link>

      <span className="category">
        {article.category}
      </span>

      <h1>{article.title}</h1>

      <div className="article-meta">
        By {article.author} • {article.date}
      </div>

      <img
        src={article.image}
        alt={article.title}
        className="article-image"
      />

      <p className="article-description">
        {article.description}
      </p>

      <div className="article-content">
        <p>{article.content}</p>
      </div>

    </main>
  );
}

export default ArticleDetails;