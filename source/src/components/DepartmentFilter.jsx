// Department filter buttons. The active button gets the "active" class.
export default function DepartmentFilter({ departments, selected, onSelect }) {
  return (
    <div className="filters">
      {departments.map((dept) => (
        <button
          key={dept}
          className={selected === dept ? 'filter-btn active' : 'filter-btn'}
          onClick={() => onSelect(dept)}
        >
          {dept}
        </button>
      ))}
    </div>
  )
}
