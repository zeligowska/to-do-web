package todoweb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import todoweb.controller.requests.NewTaskRequest;
import todoweb.model.Task;
import todoweb.service.TaskService;

import javax.validation.Valid;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

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
    public List<Task> getTasks() {
        return getSortedTasks(taskService.getAllTasks());
    }

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public List<Task> searchTask(@RequestParam String query) {
        return getSortedTasks(taskService.getTasks(query));
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public void deleteTask(@RequestParam Integer id) {
        taskService.deleteTask(id);
    }

    private List<Task> getSortedTasks(final Set<Task> tasks) {
        return tasks.stream().sorted(Comparator.comparing(Task::getId)).collect(Collectors.toList());
    }
}