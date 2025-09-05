import chefClaudeIcon from "../assets/chef-claude-icon.png";

function Header() {
  return (
    <header>
      <img className="header-icon" src={chefClaudeIcon} />
      <h1 className="header-title">Chef Claude</h1>
    </header>
  );
}

export default Header;
