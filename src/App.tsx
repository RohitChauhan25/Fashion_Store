import Routes from "routes";
import { useEffect } from "react";
import Loader from "Components/Loader";
import { useSelector } from "react-redux";

function App() {
  const { loaderReducer } = useSelector((state: any) => state);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loaderReducer]);

  console.log(loaderReducer);

  return (
    <>
      {loaderReducer?.loader && <Loader />}
      <Routes />
    </>
  );
}

export default App;
