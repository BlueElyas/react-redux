import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppShell from "../components/AppShell";
import store from "./store";
import { Provider } from "react-redux";
import StateRedux from "../pages/StateRedux";

function App() {
  console.log(store.getState());
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppShell />}>
              <Route index element={<StateRedux />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
