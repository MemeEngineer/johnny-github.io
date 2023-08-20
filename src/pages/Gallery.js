import SearchBar from "../components/SearchBar.js";
import { projects } from "../data.js";
import Github from "../assets/github.svg.png";
import Internet from "../assets/internet.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Gallery.css";

export default function Gallery(props) {
  const { search, setSearch } = props;
  //   console.log(projects);

  const filterproject = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <h1>Gallery</h1>
      <SearchBar search={search} setSearch={setSearch} />

      {filterproject.map((project, index) => {
        return (
          <Card>
            <div className="gallery" key={index}>
              <div className="gallery-card">
                <a href={project.link} alt="rngrpg" target="blank">
                  <CardMedia component="img" image={project.image}></CardMedia>
                </a>
                <CardContent>
                <Typography>
                <div>
                <h3>{project.title}</h3>
              </div>
              </Typography>
                <p>{project.description}</p>
                </CardContent>
                <a href={project.github} target="blank">
                  <img
                    src={Github}
                    alt="github"
                    style={{ height: "2em", width: "2em" }}
                  />
                </a>
                <a href={project.link} target="blank">
                  <img
                    src={Internet}
                    alt="github"
                    style={{ height: "2em", width: "2em" }}
                  />
                </a>

                <div>
                  {" "}
                  Technology Stack:
                  {project.tech.map((tech, index) => {
                    return (
                      <div key={index}>
                        <div>{tech}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
