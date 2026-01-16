import { useState, useEffect } from "react";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";
import "./Portfolio.css";

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = ["All", "Wedding", "Engagement", "Pre-Wedding", "Reception"];

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === activeFilter)
      );
    }
  }, [activeFilter, portfolioItems]);

  const fetchPortfolioItems = async () => {
    try {
      setLoading(true);
      const mockData = [
        {
          id: "1",
          title: "Magical Garden Wedding",
          description: "A beautiful outdoor ceremony surrounded by nature",
          image_url: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
          category: "Wedding",
          couple_names: "Sarah & John",
          location: "Garden Paradise, Istanbul",
          date: "2025-06-15",
          featured: true,
        },
        {
          id: "2",
          title: "Romantic Engagement",
          description: "Capturing the beginning of forever",
          image_url: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
          category: "Engagement",
          couple_names: "Emma & Michael",
          location: "Bosphorus, Istanbul",
          date: "2025-05-20",
          featured: false,
        },
        {
          id: "3",
          title: "Sunset Beach Ceremony",
          description: "A dreamy beachside wedding at golden hour",
          image_url: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
          category: "Wedding",
          couple_names: "Ayşe & Mehmet",
          location: "Çeşme Beach, İzmir",
          date: "2025-07-10",
          featured: true,
        },
        {
          id: "4",
          title: "Pre-Wedding Photoshoot",
          description: "Love story captured in historic streets",
          image_url: "https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg",
          category: "Pre-Wedding",
          couple_names: "Zeynep & Can",
          location: "Balat, Istanbul",
          date: "2025-04-12",
          featured: false,
        },
        {
          id: "5",
          title: "Elegant Reception",
          description: "A grand celebration of love and family",
          image_url: "https://images.pexels.com/photos/2306277/pexels-photo-2306277.jpeg",
          category: "Reception",
          couple_names: "Elif & Burak",
          location: "Grand Hotel, Ankara",
          date: "2025-08-05",
          featured: false,
        },
        {
          id: "6",
          title: "Classic Engagement Shoot",
          description: "Timeless moments captured with elegance",
          image_url: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg",
          category: "Engagement",
          couple_names: "Selin & Arda",
          location: "Sultanahmet, Istanbul",
          date: "2025-03-28",
          featured: true,
        },
      ];

      setPortfolioItems(mockData);
      setError(null);
    } catch (err) {
      setError("Failed to load portfolio items. Please try again later.");
      console.error("Error fetching portfolio:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  if (loading) {
    return (
      <div className="portfolio-page">
        <div className="loading-message">Loading portfolio...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="portfolio-page">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="portfolio-page">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h1>Our Portfolio</h1>
          <p>
            Discover our collection of beautiful moments captured for couples
            celebrating their special days
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-button ${
                activeFilter === category ? "active" : ""
              }`}
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredItems.length === 0 ? (
          <div className="empty-message">
            No portfolio items found for this category.
          </div>
        ) : (
          <div className="portfolio-grid">
            {filteredItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
