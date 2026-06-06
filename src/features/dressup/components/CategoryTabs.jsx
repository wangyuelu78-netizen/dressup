import Button from "../../../shared/components/Button.jsx";

export default function CategoryTabs({ activeCategory, categories, onChange }) {
  return (
    <div className="category-tabs" role="tablist" aria-label="素材分类">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "active" : "ghost"}
          onClick={() => onChange(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}
