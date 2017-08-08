package todoweb.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import todoweb.dao.TaskDao;
import todoweb.model.NewTaskParameters;
import todoweb.model.Task;
import todoweb.service.TaskService;

import java.util.Set;

/**
 * Created by mizeligo on 02.08.2017.
 */
@Service
@Transactional
public class TaskServiceImpl implements TaskService {

    private final TaskDao taskDao;

    @Autowired
    public TaskServiceImpl(final TaskDao taskDao) {
        this.taskDao = taskDao;
    }

    @Override
    public Integer saveTask(final NewTaskParameters parameters) {
        final Task task = Task.builder().name(parameters.getName()).details(parameters.getDetails()).build();
        return taskDao.saveTask(task);
    }

    @Override
    public Set<Task> getAllTasks() {
        return taskDao.getAllTasks();
    }

    @Override
    public Set<Task> getTasks(String query) {
        return taskDao.getTasks(query);
    }

    @Override
    public void deleteTask(Integer id) {
        taskDao.deleteTask(id);
    }
}
