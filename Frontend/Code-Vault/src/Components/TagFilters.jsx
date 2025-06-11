import "./Styles/TagFilter.css"

function TagFilter({ tagClass, tagname }) {
    return (
        <div className="TagFilter-Container">
            <button className={tagClass}>#{tagname}</button>
        </div>
    );
}

export default TagFilter;