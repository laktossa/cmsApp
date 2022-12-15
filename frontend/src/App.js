import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/router";

function App() {
  return (
    <div className="App h-screen bg-blue-200">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
