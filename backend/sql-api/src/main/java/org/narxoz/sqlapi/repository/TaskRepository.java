package org.narxoz.sqlapi.repository;

import org.narxoz.sqlapi.model.Task;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class TaskRepository {

    private final JdbcTemplate jdbcTemplate;

    public TaskRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Task> findAll() {
        List<Task> tasks = new ArrayList<>();

        SqlRowSet rows = jdbcTemplate.queryForRowSet("SELECT * FROM tasks");

        while (rows.next()) {
            Task task = new Task();
            task.setId(rows.getLong("id"));
            task.setTitle(rows.getString("title"));
            task.setDescription(rows.getString("description"));
            task.setStatus(rows.getString("status"));
            tasks.add(task);
        }

        return tasks;
    }

    public Task findById(Long id) {
        SqlRowSet rows = jdbcTemplate.queryForRowSet("SELECT * FROM tasks WHERE id = ?", id);

        if (rows.next()) {
            Task task = new Task();
            task.setId(rows.getLong("id"));
            task.setTitle(rows.getString("title"));
            task.setDescription(rows.getString("description"));
            task.setStatus(rows.getString("status"));
            return task;
        }

        return null;
    }

    public int save(Task task) {
        return jdbcTemplate.update(
                "INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)",
                task.getTitle(),
                task.getDescription(),
                task.getStatus()
        );
    }

    public int update(Long id, Task task) {
        return jdbcTemplate.update(
                "UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?",
                task.getTitle(),
                task.getDescription(),
                task.getStatus(),
                id
        );
    }

    public int delete(Long id) {
        return jdbcTemplate.update("DELETE FROM tasks WHERE id = ?", id);
    }
}
