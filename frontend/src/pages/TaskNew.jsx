import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskAPI } from "../services/api";

export default function TaskNew() {
    const nav = useNavigate();
    const [form, setForm] = useState({ title: "", description: "", status: 0 });
    const [err, setErr] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        try {
            await TaskAPI.create({
                title: form.title.trim(),
                description: form.description.trim(),
                status: Number(form.status),
            });
            nav("/");
        } catch (e) {
            setErr(e?.message || "Create failed");
        }
    };

    return (
        <form onSubmit={submit} className="card p-3 shadow-sm">
            <h5 className="mb-3">Create Task</h5>
            {err && <div className="alert alert-danger">{err}</div>}
            <input className="form-control mb-2" placeholder="title"
                   value={form.title} onChange={e=>setForm({...form, title:e.target.value})} required />
            <input className="form-control mb-2" placeholder="description"
                   value={form.description} onChange={e=>setForm({...form, description:e.target.value})} required />
            <select className="form-select mb-3" value={form.status}
                    onChange={e=>setForm({...form, status:Number(e.target.value)})}>
                <option value={0}>To Do (0)</option>
                <option value={1}>In Progress (1)</option>
                <option value={2}>Done (2)</option>
                <option value={3}>Failed (3)</option>
            </select>
            <button className="btn btn-success">Create</button>
        </form>
    );
}
