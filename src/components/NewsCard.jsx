import { Link } from "react-router-dom";

function NewsCard({ article }) {
  return (
    <div className="news-card">

      <img
        src={article.image}
        alt={article.title}
        className="news-image"
      />

      <div className="news-content">

        <span className="category">
          {article.category}
        </span>

        <h3>{article.title}</h3>

        <p>{article.description}</p>

        <div className="card-bottom">
          <span>{article.date}</span>

          <Link to={`/article/${article.id}`}>
            Read More →
          </Link>
        </div>

      </div>

    </div>
  );
}

export default NewsCard;