package todoweb.dao;

import todoweb.model.Task;

import java.util.Set;

/**
 * Created by mizeligo on 02.08.2017.
 */
public interface TaskDao {
    Integer saveTask(final Task task);

    Set<Task> getAllTasks();

    Set<Task> getTasks(final String query);

    void deleteTask(final Integer id);
}
