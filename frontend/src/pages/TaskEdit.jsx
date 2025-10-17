import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TaskAPI } from "../services/api";

export default function TaskEdit() {
    const { id } = useParams();
    const nav = useNavigate();
    const [form, setForm] = useState({ title: "", description: "", status: 0 });
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState("");

    useEffect(() => {
        TaskAPI.get(id)
            .then(res => setForm(res.data))
            .catch(e => setErr(e?.message || "Failed to load"))
            .finally(() => setLoading(false));
    }, [id]);

    const submit = async (e) => {
        e.preventDefault();
        try {
            await TaskAPI.update(id, {
                title: form.title.trim(),
                description: form.description.trim(),
                status: Number(form.status),
            });
            nav(`/tasks/${id}`);
        } catch (e) {
            setErr(e?.message || "Update failed");
        }
    };

    if (loading) return <div>Loading…</div>;

    return (
        <form onSubmit={submit} className="card p-3 shadow-sm">
            <h5 className="mb-3">Edit Task #{id}</h5>
            {err && <div className="alert alert-danger">{err}</div>}
            <input className="form-control mb-2" value={form.title}
                   onChange={e=>setForm({...form, title:e.target.value})} required />
            <input className="form-control mb-2" value={form.description}
                   onChange={e=>setForm({...form, description:e.target.value})} required />
            <select className="form-select mb-3" value={form.status}
                    onChange={e=>setForm({...form, status:Number(e.target.value)})}>
                <option value={0}>To Do (0)</option>
                <option value={1}>In Progress (1)</option>
                <option value={2}>Done (2)</option>
                <option value={3}>Failed (3)</option>
            </select>
            <button className="btn btn-primary">Save</button>
        </form>
    );
}
