const Header = () => {
  return (
    <header className="w-full py-6 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
          <span className="text-white font-bold text-lg">TS</span>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-foreground">TempShare</h1>
          <p className="text-sm text-muted-foreground">Quick temporary photo & video sharing</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
