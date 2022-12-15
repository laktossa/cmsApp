import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "./routes/router";
import stores from "../src/stores/reducers";

function App() {
  return (
    <div className="App h-screen ">
      <Provider store={stores}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
