import "./App.css";
import TodoList from "./views/TodoList/TodoList";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
