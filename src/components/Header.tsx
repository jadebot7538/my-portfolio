export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-base-200/70 bg-base-100/90 backdrop-blur">
      <div className="navbar mx-auto max-w-6xl px-5 md:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Open navigation menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-box border border-base-200 bg-base-100 p-2 shadow"
            >
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#techstack">Tech Stack</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <a href="#home" className="btn btn-ghost text-xl font-semibold normal-case">
            Roniel
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 px-1 text-sm font-medium">
            <li><a href="#home" className="rounded-full px-3 py-1">Home</a></li>
            <li><a href="#projects" className="rounded-full px-3 py-1">Projects</a></li>
            <li><a href="#techstack" className="rounded-full px-3 py-1">Tech Stack</a></li>
            <li><a href="#experience" className="rounded-full px-3 py-1">Experience</a></li>
            <li><a href="#contact" className="rounded-full px-3 py-1">Contact</a></li>
          </ul>
        </div>

        <div className="navbar-end">
          <label className="flex items-center gap-2 rounded-full border border-base-200 bg-base-200/70 px-3 py-1 text-xs">
            <span className="hidden sm:inline font-medium">Theme</span>
            <input
              type="checkbox"
              value="dark"
              className="toggle theme-controller"
              aria-label="Toggle dark mode"
            />
          </label>
        </div>
      </div>
    </header>
  );
}