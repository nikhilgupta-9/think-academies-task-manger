import { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const TaskForm = ({ show, onHide, onSave, initialData = null, loading }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending',
    priority: 'medium',
    dueDate: ''
  });

  // Pre-fill form when editing
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        status: initialData.status || 'pending',
        priority: initialData.priority || 'medium',
        dueDate: initialData.dueDate ? initialData.dueDate.slice(0, 10) : ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    await onSave(formData); // use passed handler
    setFormData({
      title: '',
      description: '',
      status: 'pending',
      priority: 'medium',
      dueDate: ''
    });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{initialData ? 'Edit Task' : 'Add New Task'}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Title *</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter task title"
              value={formData.title}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={3}
              placeholder="Optional description..."
              value={formData.description}
              onChange={handleChange}
              disabled={loading}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              disabled={loading}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 w-100">
            <Form.Label>Priority</Form.Label>
            <Form.Select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              disabled={loading}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              disabled={loading}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide} disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? (initialData ? 'Updating...' : 'Adding...') : (initialData ? 'Update Task' : 'Add Task')}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default TaskForm;
