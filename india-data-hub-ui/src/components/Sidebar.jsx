const Sidebar = ({ categories }) => {
  if (!Array.isArray(categories)) {
    return <div className="sidebar">No categories found</div>;
  }

  return (
    <div className="sidebar">
      {categories.map((cat, i) => (
        <div key={i}>{cat.name}</div>
      ))}
    </div>
  );
};

export default Sidebar;
