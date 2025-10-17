import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { TaskAPI } from "../services/api";

export default function TaskView() {
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const [err, setErr] = useState("");

    useEffect(() => {
        TaskAPI.get(id)
            .then(res => setTask(res.data))
            .catch(e => setErr(e?.message || "Failed to load"));
    }, [id]);

    if (err) return <div className="alert alert-danger">{err}</div>;
    if (!task) return <div>Loading…</div>;

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h4 className="card-title">{task.title}</h4>
                <p className="text-muted">{task.description}</p>
                <p><b>Status:</b> {task.status}</p>
                <div className="d-flex gap-2">
                    <Link to={`/tasks/${id}/edit`} className="btn btn-secondary">Edit</Link>
                    <Link to="/" className="btn btn-outline-primary">Back</Link>
                </div>
            </div>
        </div>
    );
}
