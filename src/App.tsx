import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import UserItemPage from "./components/UserItemPage";
import TodosPage from "./pages/TodosPage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <div className="App">
      {/* <Card
        width="100px"
        height="100px"
        variant={CardVariant.outlined}
        onClick={(num) => console.log("click", num)}
      >
        <button>button</button>
        <p>text</p>
      </Card> */}
      {/* <UserList users={users} /> */}
      {/* <EventsExample /> */}

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/users/:id" element={<UserItemPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
