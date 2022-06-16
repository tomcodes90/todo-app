function Header({ sun }) {
  return (
    <header className="header">
      <div className="title">Todo</div>
      <div className="theme">
        <img src={sun} alt="sun icon" />
      </div>
    </header>
  );
}

export default Header;
