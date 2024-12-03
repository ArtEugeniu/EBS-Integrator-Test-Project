interface FilterProps {
  categories: string[];
  selectedCategory: string;
  onFilterChange: (category: string) => void;
}

function Filters({ categories, onFilterChange, selectedCategory }: FilterProps) {
  const toUpperCase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <div className="filters">
      <h3>Filter by Category</h3>
      <ul className="filter__items">
        <li className={`filter__item ${selectedCategory === '' ? 'active' : ''}`} onClick={() => onFilterChange('')}>All</li>
        {categories.map((category) => (
          <li className={`filter__item ${selectedCategory === category ? 'active' : ''}`} onClick={() => onFilterChange(category)}>
            {toUpperCase(category)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filters;