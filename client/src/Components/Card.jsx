// Card.jsx
const Card = ({ children, className = '' }) => {
  return (
    <div className={`card p-4 shadow-sm rounded ${className}`}>
      {children}
    </div>
  );
};

export default Card;
