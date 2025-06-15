import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Modal, Spinner, ProgressBar, Badge, Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import TaskList from '../../Components/TaskList';
import EditTaskForm from '../../Components/EditTaskForm';
import { TaskProvider, useTasks } from '../../Context/TaskContext';
import '../../styles/Dashboard.css';

const DashboardContent = ({ onLogout }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending',
    priority: 'medium',
    dueDate: ''
  });

  const { 
    tasks, 
    loading, 
    addTask, 
    updateTask,
    deleteTask,
    fetchTasks 
  } = useTasks();

  // Calculate task statistics
  const taskStats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === 'completed').length,
    pending: tasks.filter(t => t.status === 'pending').length,
    overdue: tasks.filter(t => 
      t.dueDate && new Date(t.dueDate) < new Date() && t.status !== 'completed'
    ).length
  };

  const completionPercentage = taskStats.total > 0 
    ? Math.round((taskStats.completed / taskStats.total) * 100) 
    : 0;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(formData);
    setShowModal(false);
    setFormData({
      title: '',
      description: '',
      status: 'pending',
      priority: 'medium',
      dueDate: ''
    });
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
    setShowEditModal(true);
  };

  const handleTaskUpdate = async (updatedTask) => {
    await updateTask(updatedTask);
    setShowEditModal(false);
  };

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
  };

  return (
    <div className="dashboard-container">
      <Navbar onLogout={onLogout} />
      
      <Container fluid className="dashboard-layout">
        <main className="dashboard-main p-3 p-md-4">
          <Row className="align-items-center mb-4">
            <Col xs={12} md={6}>
              <h1 className="mb-3 mb-md-0">Task Dashboard</h1>
            </Col>
            <Col xs={12} md={6} className="text-md-end">
              <Button 
                variant="primary" 
                onClick={() => setShowModal(true)}
                className="add-task-btn w-100 w-md-auto"
              >
                + New Task
              </Button>
            </Col>
          </Row>

          <Row className="metrics-section mb-4">
            <Col xs={12} lg={4} className="mb-3 mb-lg-0">
              <div className="metric-item p-3 h-100">
                <h3>Productivity</h3>
                <ProgressBar 
                  now={completionPercentage} 
                  label={`${completionPercentage}%`}
                  variant={completionPercentage > 70 ? 'success' : completionPercentage > 40 ? 'warning' : 'danger'}
                  className="productivity-bar"
                />
              </div>
            </Col>

            <Col xs={12} lg={8}>
              <Row className="metric-grid g-2">
                <Col xs={6} sm={3}>
                  <div className="metric-card p-3 h-100">
                    <h4>Total Tasks</h4>
                    <span className="metric-value text-dark">{taskStats.total}</span>
                  </div>
                </Col>
                <Col xs={6} sm={3}>
                  <div className="metric-card p-3 h-100">
                    <h4>Completed</h4>
                    <span className="metric-value text-success">{taskStats.completed}</span>
                  </div>
                </Col>
                <Col xs={6} sm={3}>
                  <div className="metric-card p-3 h-100">
                    <h4>Pending</h4>
                    <span className="metric-value text-warning">{taskStats.pending}</span>
                  </div>
                </Col>
                <Col xs={6} sm={3}>
                  <div className="metric-card p-3 h-100">
                    <h4>Overdue</h4>
                    <span className="metric-value text-danger">{taskStats.overdue}</span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <section className="task-section">
            <div className="section-header d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
              <h2 className="text-primary mb-2 mb-md-0">Your Tasks</h2>
              <div className="status-filter d-flex">
                <Badge bg="secondary" className="filter-badge me-2">All</Badge>
                <Badge bg="success" className="filter-badge me-2">Completed</Badge>
                <Badge bg="warning" className="filter-badge">Pending</Badge>
              </div>
            </div>
            <TaskList 
              tasks={tasks} 
              onEdit={handleEdit} 
              onDelete={handleDelete} 
            />
          </section>
        </main>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Task</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Title <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="What needs to be done?"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Add details..."
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
            
            <Row>
              <Col sm={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Priority</Form.Label>
                  <Form.Select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  <span className="ms-2">Saving...</span>
                </>
              ) : 'Save Task'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <EditTaskForm
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        task={taskToEdit}
        onUpdate={handleTaskUpdate}
        loading={loading}
      />
    </div>
  );
};

const Dashboard = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('authToken')) {
        setIsAuthenticated(false);
        navigate('/login');
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [setIsAuthenticated, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <TaskProvider>
      <DashboardContent onLogout={handleLogout} />
    </TaskProvider>
  );
};

export default Dashboard;