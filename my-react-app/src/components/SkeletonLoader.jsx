/**
 * SkeletonLoader Component
 * Displays animated skeleton loading placeholders while data is being fetched
 * Improves perceived performance and user experience
 */
function SkeletonLoader() {
  return (
    <div className="skeleton-container">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="skeleton-card">
          <div className="skeleton-info">
            <div className="skeleton-line skeleton-name"></div>
            <div className="skeleton-line skeleton-symbol"></div>
          </div>
          <div className="skeleton-price">
            <div className="skeleton-line skeleton-main-price"></div>
            <div className="skeleton-line skeleton-small-price"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonLoader;
