package org.narxoz.sqlapi.service;

import org.narxoz.sqlapi.model.Task;
import org.narxoz.sqlapi.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public List<Task> getAllTasks() {
        return repository.findAll();
    }

    public Task getTaskById(Long id) {
        return repository.findById(id);
    }

    public void createTask(Task task) {
        repository.save(task);
    }

    public void updateTask(Long id, Task task) {
        repository.update(id, task);
    }

    public void deleteTask(Long id) {
        repository.delete(id);
    }
}
