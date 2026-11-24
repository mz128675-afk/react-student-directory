import { useState } from 'react'

// Form to add a new student. Sends the new student up to App via onAdd.
// The form has no GPA field — a new student starts without a GPA.
export default function AddStudentForm({ onAdd }) {
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('CS')
  const [age, setAge] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (name.trim() === '' || age === '') return

    onAdd({ name: name.trim(), department, age: Number(age) })

    // Clear the form after adding
    setName('')
    setDepartment('CS')
    setAge('')
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>Add a Student</h2>

      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student name"
          required
        />
      </label>

      <label>
        Department
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="CS">CS</option>
          <option value="IT">IT</option>
          <option value="SE">SE</option>
        </select>
      </label>

      <label>
        Age
        <input
          type="number"
          min="1"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          required
        />
      </label>

      <button className="add-btn" type="submit">
        Add Student
      </button>
    </form>
  )
}
