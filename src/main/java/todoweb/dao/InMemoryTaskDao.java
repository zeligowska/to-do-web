package todoweb.dao;

import org.springframework.stereotype.Repository;
import todoweb.model.Task;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Created by mizeligo on 02.08.2017.
 */
@Repository
public class InMemoryTaskDao implements TaskDao {

    private final Set<Task> tasks = new HashSet<>();
    private Integer id = 0;

    @Override
    public Integer saveTask(final Task task) {
        id++;
        final Task newTask = Task.builder().id(id).name(task.getName()).details(task.getDetails()).build();
        tasks.add(newTask);
        return id;
    }

    @Override
    public Set<Task> getAllTasks() {
        return tasks;
    }

    @Override
    public Set<Task> getTasks(final String query) {
        return tasks.stream().filter(task -> task.getName().contains(query) || task.getDetails().contains(query)).collect(Collectors.toSet());
    }

    @Override
    public void deleteTask(final Integer id) {
        tasks.removeIf(task -> task.getId().equals(id));
    }
}