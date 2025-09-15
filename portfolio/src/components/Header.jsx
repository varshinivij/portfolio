export default function Header(){
  return (
    <header className="site-header">
      <div className="header-inner" style={{ justifyContent: 'flex-end' }}>
        <nav className="nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </nav>
      </div>
    </header>
  );
}
