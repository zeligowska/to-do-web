package todoweb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;
import todoweb.controller.requests.NewTaskRequest;
import todoweb.model.Task;
import todoweb.service.TaskService;

import javax.validation.Valid;
import java.util.Set;

/**
 * Created by mizeligo on 02.08.2017.
 */

@RestController
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @RequestMapping(value = "/newtask", method = RequestMethod.POST)
    public Integer addTask(@RequestBody @Valid final NewTaskRequest request) {
        return taskService.saveTask(request);
    }

    @RequestMapping(value = "/tasks", method = RequestMethod.GET)
    public Set<Task> getTasks() {
        return taskService.getAllTasks();
    }

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public Set<Task> searchTask(@RequestParam String query) {
        return taskService.getTasks(query);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public void deleteTask(@RequestParam Integer id) {
        taskService.deleteTask(id);
    }
}