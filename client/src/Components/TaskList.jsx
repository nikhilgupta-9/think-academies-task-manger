import { Badge, ListGroup, Button, Spinner, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTasks } from '../Context/TaskContext';
import {
  faEdit,
  faTrash,
  faCheckCircle,
  faClock,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';

const TaskList = ({ tasks, onEdit, loading }) => {
  const { removeTask } = useTasks();

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await removeTask(id);
      } catch (err) {
        console.error("❌ Delete failed:", err.message);
      }
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'high':
        return <Badge bg="danger" className="text-nowrap">High</Badge>;
      case 'medium':
        return <Badge bg="warning" text="dark" className="text-nowrap">Medium</Badge>;
      case 'low':
        return <Badge bg="secondary" className="text-nowrap">Low</Badge>;
      default:
        return null;
    }
  };

  const getStatusIcon = (status, dueDate) => {
    const isOverdue = dueDate && new Date(dueDate) < new Date() && status !== 'completed';

    if (isOverdue) {
      return <FontAwesomeIcon icon={faExclamationTriangle} className="text-danger me-2" />;
    }

    switch (status) {
      case 'completed':
        return <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />;
      case 'in-progress':
        return <FontAwesomeIcon icon={faClock} className="text-warning me-2" />;
      default:
        return <FontAwesomeIcon icon={faClock} className="text-secondary me-2" />;
    }
  };

  if (loading) {
    return (
      <div className="text-center my-4">
        <Spinner animation="border" />
      </div>
    );
  }

  if (tasks.length === 0) {
    return <div className="text-muted text-center my-4">No tasks found</div>;
  }

  return (
    <ListGroup className="task-list">
      {tasks.map(task => (
        <ListGroup.Item
          key={task._id}
          className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center py-3"
        >
          <div className="d-flex align-items-start mb-2 mb-md-0 w-100">
            {getStatusIcon(task.status, task.dueDate)}
            <div className="flex-grow-1">
              <h6 className="mb-1">{task.title}</h6>
              {task.description && (
                <small className="text-muted d-block mb-1 text-truncate">
                  {task.description}
                </small>
              )}
              {task.dueDate && (
                <small className="d-block text-muted">
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </small>
              )}
            </div>
          </div>
          
          <Stack direction="horizontal" gap={2} className="ms-md-auto">
            <div className="d-none d-md-block">
              {getPriorityBadge(task.priority)}
            </div>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => onEdit(task)}
              className="action-btn"
            >
              <FontAwesomeIcon icon={faEdit} />
              <span className="ms-1 d-none d-md-inline">Edit</span>
            </Button>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => handleDelete(task._id)}
              className="action-btn"
            >
              <FontAwesomeIcon icon={faTrash} />
              <span className="ms-1 d-none d-md-inline">Delete</span>
            </Button>
          </Stack>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TaskList;