import "../styles/Tag.css";

function Tag(tag, index) {
  return (
  <div className="tag" key={index}> {tag.tag} </div>
  );
}

export default Tag;
