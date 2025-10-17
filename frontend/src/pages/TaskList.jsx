import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TaskAPI } from "../services/api";

export default function TaskList() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState("");

    const load = async () => {
        try {
            setLoading(true);
            const { data } = await TaskAPI.list();
            setItems(data);
        } catch (e) {
            setErr(e?.message || "Failed to load");
        } finally {
            setLoading(false);
        }
    };

    const remove = async (id) => {
        if (!confirm(`Delete task #${id}?`)) return;
        try {
            await TaskAPI.remove(id);
            load();
        } catch (e) {
            alert("Delete failed");
        }
    };

    useEffect(() => { load(); }, []);

    if (loading) return <div>Loading…</div>;
    if (err) return <div className="alert alert-danger">{err}</div>;

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Tasks</h5>
                <button className="btn btn-outline-secondary btn-sm" onClick={load}>Refresh</button>
            </div>

            <div className="row g-3">
                {items.map(t => (
                    <div key={t.id} className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{t.title}</h5>
                                <p className="text-muted small">{t.description}</p>
                                <span className="badge bg-secondary mb-3">status: {t.status}</span>
                                <div className="mt-auto d-flex gap-2">
                                    <Link to={`/tasks/${t.id}`} className="btn btn-outline-primary btn-sm">View</Link>
                                    <Link to={`/tasks/${t.id}/edit`} className="btn btn-outline-secondary btn-sm">Edit</Link>
                                    <button className="btn btn-outline-danger btn-sm" onClick={() => remove(t.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {items.length === 0 && <p className="text-muted">No tasks yet.</p>}
            </div>
        </>
    );
}
