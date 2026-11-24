import { useMemo, useState } from 'react'
import StudentCard from './components/StudentCard.jsx'
import SearchBar from './components/SearchBar.jsx'
import DepartmentFilter from './components/DepartmentFilter.jsx'
import AddStudentForm from './components/AddStudentForm.jsx'

// Starting students — 6 students
const initialStudents = [
  { id: 1, name: 'Ali', department: 'CS', age: 20, gpa: 3.8 },
  { id: 2, name: 'Sara', department: 'IT', age: 21, gpa: 3.5 },
  { id: 3, name: 'Usman', department: 'CS', age: 22, gpa: 3.2 },
  { id: 4, name: 'Ayesha', department: 'SE', age: 19, gpa: 3.9 },
  { id: 5, name: 'Bilal', department: 'IT', age: 20, gpa: 3.0 },
  { id: 6, name: 'Zainab', department: 'CS', age: 21, gpa: 3.7 },
]

const DEPARTMENTS = ['All', 'CS', 'IT', 'SE']

export default function App() {
  const [students, setStudents] = useState(initialStudents)
  const [search, setSearch] = useState('')
  const [department, setDepartment] = useState('All')

  // Filtered list: search by name + department filter.
  // useMemo recomputes only when students, search or department changes.
  const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase()
    return students.filter((student) => {
      const matchesName = student.name.toLowerCase().includes(query)
      const matchesDept = department === 'All' || student.department === department
      return matchesName && matchesDept
    })
  }, [students, search, department])

  // Add a new student to the end of the list
  function addStudent(newStudent) {
    setStudents((prev) => [...prev, { id: Date.now(), ...newStudent }])
  }

  // Remove a student by id
  function deleteStudent(id) {
    setStudents((prev) => prev.filter((student) => student.id !== id))
  }

  return (
    <div className="app">
      <header className="header">
        <h1>React Student Directory</h1>
        <p>Search, filter and manage students — built with React + Vite</p>
      </header>

      <main>
        <SearchBar value={search} onChange={setSearch} />
        <DepartmentFilter
          departments={DEPARTMENTS}
          selected={department}
          onSelect={setDepartment}
        />

        <p className="count">
          {filteredStudents.length} {filteredStudents.length === 1 ? 'student' : 'students'}
        </p>

        {filteredStudents.length === 0 ? (
          <p className="empty">No student found. Try a different search or filter.</p>
        ) : (
          <div className="grid">
            {filteredStudents.map((student) => (
              <StudentCard key={student.id} student={student} onDelete={deleteStudent} />
            ))}
          </div>
        )}

        <AddStudentForm onAdd={addStudent} />
      </main>

      <footer className="footer">
        Built with React + Vite — first React project by Mirza Zubair
      </footer>
    </div>
  )
}
