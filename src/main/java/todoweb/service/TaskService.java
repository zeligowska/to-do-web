package todoweb.service;

import todoweb.model.NewTaskParameters;
import todoweb.model.Task;

import java.util.Set;

/**
 * Created by mizeligo on 20.07.2017.
 */
public interface TaskService {
    Integer saveTask(final NewTaskParameters parameters);

    Set<Task> getAllTasks();

    Set<Task> getTasks(final String query);

    void deleteTask(Integer id);
}
