package todoweb.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication(scanBasePackages = "todoweb")
@EntityScan(basePackages = "todoweb.model")
public class ToDoWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(ToDoWebApplication.class, args);
	}
}
