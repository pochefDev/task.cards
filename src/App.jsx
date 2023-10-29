import { TaskList } from "./Task/TaskList";
import { TaskForm } from "./Task/TaskForm";
import { Footer } from "./Footer/Footer";
export function App() {
  return (
    <main className="bg-gray-950">
      <div className="container mx-auto">
        <TaskForm />
        <TaskList />
        <Footer />
      </div>
    </main>
  );
}