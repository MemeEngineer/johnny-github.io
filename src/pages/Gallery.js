import SearchBar from "../components/SearchBar.js";
import { projects } from "../data.js";
import './Gallery.css'

export default function Gallery(props) {
  const { search, setSearch } = props;
  console.log(projects);

  const filterproject = projects.filter((project)=> project.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
      <h1>Gallery</h1>
      <SearchBar search={search} setSearch={setSearch} />

      {filterproject.map((project) => {
        return (
          <div className="gallery">
            {project.title}
            <div>
              <a href={project.link} alt="rngrpg" target="blank">
                <img
                  src={project.image}
                  alt="rngrpg"
                />
              </a>
              <p>{project.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
