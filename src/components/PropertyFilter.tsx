interface PropertyFilterProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

export function PropertyFilter({ selectedType, onTypeChange }: PropertyFilterProps) {
  const types = ['All', 'Kothi', 'Farmhouse', 'Retail', 'Shop', 'Flat', 'Office', 'Plot'];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Filter by Type</h2>
      <div className="flex flex-wrap gap-2">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => onTypeChange(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedType === type
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
