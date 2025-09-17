export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* LEFT: boxed links */}
        <div className="footer-links" aria-label="Profile links">
          <a
            href="https://www.linkedin.com/in/varshinivij"
            target="_blank" rel="noopener noreferrer"
            className="footer-card" aria-label="LinkedIn profile"
          >
            <span className="footer-label">LinkedIn</span>
            <span className="footer-username">@varshinivij</span>
            <span className="footer-arrow" aria-hidden>↗</span>
          </a>

          <a
            href="https://github.com/varshinivij"
            target="_blank" rel="noopener noreferrer"
            className="footer-card" aria-label="GitHub profile"
          >
            <span className="footer-label">GitHub</span>
            <span className="footer-username">@varshinivij</span>
            <span className="footer-arrow" aria-hidden>↗</span>
          </a>
        </div>

        {/* RIGHT: maker line */}
        <p className="footer-madeby">@2025 Made by Varshini Vijay</p>
      </div>
    </footer>
  );
}
