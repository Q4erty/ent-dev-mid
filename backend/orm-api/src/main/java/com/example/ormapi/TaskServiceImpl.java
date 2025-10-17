
package com.example.ormapi;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TaskServiceImpl implements TaskService {

    private final TaskRepository repo;

    public TaskServiceImpl(TaskRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<Task> getAllTasks() {
        return repo.findAll();
    }

    @Override
    public Task getTaskById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Task not found: " + id));
    }

    @Override
    public Task createTask(Task task) {
        task.setId(null);
        return repo.save(task);
    }

    @Override
    public Task updateTask(Long id, Task src) {
        Task t = getTaskById(id);
        t.setTitle(src.getTitle());
        t.setDescription(src.getDescription());
        t.setStatus(src.getStatus());
        return repo.save(t);
    }

    @Override
    public void deleteTask(Long id) {
        if (!repo.existsById(id)) {
            throw new IllegalArgumentException("Task not found: " + id);
        }
        repo.deleteById(id);
    }
}
