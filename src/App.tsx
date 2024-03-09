import { useState } from "react";
import NavBar from "./components/NavBar";
import ProfileContainer from "./components/ProfileContainer";
import SearchBox from "./components/SearchBox";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <div className={`${isDarkMode && "dark"}`}>
        <div className="mx-auto mt-[31px] flex min-w-[375px] flex-col items-center justify-center bg-pale-white font-space-mono dark:bg-black">
          <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <SearchBox />
          <ProfileContainer />
        </div>
      </div>
    </>
  );
}

export default App;
