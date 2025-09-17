export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-links">
          <a 
            href="https://www.linkedin.com/in/varshinivij" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-card"
          >
            <span className="footer-label">LinkedIn</span>
            <span className="footer-username">@varshinivij</span>
            <span className="footer-arrow">↗</span>
          </a>
          
          <a 
            href="https://github.com/varshinivij" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-card"
          >
            <span className="footer-label">GitHub</span>
            <span className="footer-username">@varshinivij</span>
            <span className="footer-arrow">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
