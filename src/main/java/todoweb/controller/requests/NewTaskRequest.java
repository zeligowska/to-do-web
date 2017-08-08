package todoweb.controller.requests;

import lombok.Getter;
import todoweb.model.NewTaskParameters;

import javax.validation.constraints.NotNull;

/**
 * Created by mizeligo on 03.08.2017.
 */
@Getter
public class NewTaskRequest implements NewTaskParameters {
    @NotNull
    private String name;
    private String details;
}
