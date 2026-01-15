import "./PortfolioCard.css";

const PortfolioCard = ({ item }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="portfolio-card">
      <img
        src={item.image_url}
        alt={item.title}
        className="portfolio-card-image"
      />

      {item.featured && (
        <div className="portfolio-card-featured">Featured</div>
      )}

      <div className="portfolio-card-category">{item.category}</div>

      <div className="portfolio-card-overlay">
        <div className="portfolio-card-content">
          <h3 className="portfolio-card-title">{item.title}</h3>

          {item.couple_names && (
            <p className="portfolio-card-couple">{item.couple_names}</p>
          )}

          {item.description && (
            <p className="portfolio-card-description">{item.description}</p>
          )}

          <div className="portfolio-card-info">
            {item.location && (
              <div className="portfolio-card-info-item">
                <span className="portfolio-card-info-icon">📍</span>
                <span>{item.location}</span>
              </div>
            )}

            {item.date && (
              <div className="portfolio-card-info-item">
                <span className="portfolio-card-info-icon">📅</span>
                <span>{formatDate(item.date)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
