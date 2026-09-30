function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="categories" id="categories">

      <button
        className={selectedCategory === "All" ? "active" : ""}
        onClick={() => setSelectedCategory("All")}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          className={
            selectedCategory === category ? "active" : ""
          }
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default CategoryFilter;
