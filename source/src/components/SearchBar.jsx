// Search input. Controlled component: value and onChange come from App.
export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search by name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
