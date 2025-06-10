import TitleBar from "./Components/TitleBar"
import Sidebar from "./Components/sidebar"
import Heatmap from "./Components/Heatmap"
import TagFilter from "./Components/TagFilters"
import Title from "./Components/Title"
import ProblemCard from "./Components/ProblemCard"

function App() {

  return (
    <>
      <div className="Body-container">
        <div>
            <TitleBar/>
        </div>
        <div className="Main-Container">
          <div className="Sidebar-Container">
              <Sidebar/>
          </div>
          <div className="content-Container">
            <div className="Heatmap-Container">
              <Heatmap/>
            </div>
            <div className="Title-Container">
              <Title/>
            </div>
            <div className="Tags-Container">
                <TagFilter/>
            </div>
            <div className="Problem-Container">
              <div className="ProblemCard-Container">
                <ProblemCard
                  index = {1}
                  title="Two Sum"
                  difficulty="Easy"
                  date="7-June-2025"
                />
              </div> 
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default App
