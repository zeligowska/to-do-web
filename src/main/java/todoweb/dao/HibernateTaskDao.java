package todoweb.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;
import todoweb.model.Task;


import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Created by mizeligo on 08.08.2017.
 */

@Repository
@Primary
public class HibernateTaskDao implements TaskDao {

    private final EntityManager entityManager;

    @Autowired
    public HibernateTaskDao(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public Integer saveTask(final Task task) {
        entityManager.persist(task);
        return task.getId();
    }

    @Override
    public Set<Task> getAllTasks() {
        final CriteriaQuery criteriaQuery = entityManager.getCriteriaBuilder().createQuery(Task.class);
        criteriaQuery.from(Task.class);
        final List<Task> tasks = entityManager.createQuery(criteriaQuery).getResultList();
        return new HashSet<>(tasks);
    }

    @Override
    public Set<Task> getTasks(String query) {
        final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        final CriteriaQuery criteriaQuery = criteriaBuilder.createQuery(Task.class);
        final Root<Task> root = criteriaQuery.from(Task.class);

        criteriaQuery.where(criteriaBuilder.or(criteriaBuilder.like(root.get("name"), query), criteriaBuilder.like(root.get("details"), query)));
        final List<Task> tasks = entityManager.createQuery(criteriaQuery).getResultList();
        return new HashSet<>(tasks);
    }

    @Override
    public void deleteTask(Integer id) {
        final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        final CriteriaQuery criteriaQuery = criteriaBuilder.createQuery(Task.class);
        final Root<Task> root = criteriaQuery.from(Task.class);
        criteriaQuery.where(criteriaBuilder.equal(root.get("id"),id)).getResultType();
        final Task task = (Task) entityManager.createQuery(criteriaQuery).getSingleResult();
        entityManager.remove(task);
    }
}