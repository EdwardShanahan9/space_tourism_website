import MainLayout from "./layout/MainLayout/MainLayout";
import { NavbarContextProvider } from "./context/NavbarContext/NavbarContext";

function App() {
  return (
    <>
      <NavbarContextProvider>
        <MainLayout />
      </NavbarContextProvider>
    </>
  );
}

export default App;
