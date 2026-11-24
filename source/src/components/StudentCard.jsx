// One student card. Receives a student object and a delete handler as props.
export default function StudentCard({ student, onDelete }) {
  return (
    <article className="card">
      <h2>{student.name}</h2>
      <p>
        <strong>Department:</strong> {student.department}
      </p>
      <p>
        <strong>Age:</strong> {student.age}
      </p>
      <p>
        <strong>GPA:</strong> {student.gpa !== undefined ? student.gpa.toFixed(1) : '—'}
      </p>
      <button className="delete-btn" onClick={() => onDelete(student.id)}>
        Delete
      </button>
    </article>
  )
}
