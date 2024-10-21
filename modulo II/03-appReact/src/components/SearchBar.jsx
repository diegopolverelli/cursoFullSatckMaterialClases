/* eslint-disable react/prop-types */
export function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
}) {
    return (
        <form>
            <input
                type="text"
                value={filterText}
                placeholder="Buscar..."
                onChange={(e) => onFilterTextChange(e.target.value)}
            />


            <label>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                />
                {' '}
                Mostrar solo productos en stock
            </label>
        </form>
    );
}