import { NavLink, Routes, Route, Link } from "react-router-dom";
import TaskList from "./pages/TaskList.jsx";
import TaskView from "./pages/TaskView.jsx";
import TaskNew from "./pages/TaskNew.jsx";
import TaskEdit from "./pages/TaskEdit.jsx";

export default function App() {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary mb-4">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">Task Manager</NavLink>
                    <Link to="/tasks/new" className="btn btn-light btn-sm">+ New Task</Link>
                </div>
            </nav>

            <div className="container">
                <Routes>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/tasks/new" element={<TaskNew />} />
                    <Route path="/tasks/:id" element={<TaskView />} />
                    <Route path="/tasks/:id/edit" element={<TaskEdit />} />
                </Routes>
            </div>
        </>
    );
}
