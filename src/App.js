import "./App.css";
import { useState } from "react"; 
function App() {
  //
  const [toggleState, setToggleState] = useState(1);

  //for getting the value of radio button
  const [owner, setOwner] = useState();
  const [queue, setQueue] = useState();
  const [project, setProject] = useState();



  console.log( "OwnerID:-",owner);
  console.log("QueueID:-",queue );
  console.log("ProjectID:-",project);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="App">
        <div className="left">
          <h2>Filter By</h2>

          <div
            className={toggleState === 1 ? "data active-tabs" : "data"}
            onClick={() => toggleTab(1)}
          >
            Owner(s) :
          </div>
          <div
            className={toggleState === 2 ? "data active-tabs" : "data"}
            onClick={() => toggleTab(2)}
          >
            Queue(s) :
          </div>
          <div
            className={toggleState === 3 ? "data active-tabs" : "data"}
            onClick={() => toggleTab(3)}
          >
            Project(s) :
          </div>
          <div
            className={toggleState === 4 ? "data active-tabs" : "data"}
            onClick={() => toggleTab(4)}
          >
            Date Range :
          </div>
        </div>
        <div className="right">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <h2>Owner's</h2>
            <h3>{owner}</h3>
            <div className="radio">
              <label htmlFor="ashok">Ashok</label>
              <input
                type="radio"
                id="01"
                value="Ashok"
                onChange={(e) => setOwner(e.target.value)}
              />
            </div>
            <div className="radio">
              <label htmlFor="arun">Arun</label>
              <input
                type="radio"
                id="02"
                value="Arun"
                onChange={(e) => setOwner(e.target.value)}
              />
            </div>
          </div>
          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h2>Queue's</h2>
            <h3>{queue}</h3>
            <div className="radio">
              <label htmlFor="classmate ">Classmate</label>
              <input
                type="radio"
                id="03"
                value="Classmate"
                onChange={(e) => setQueue(e.target.value)}
              />
            </div>
            <div className="radio">
              <label htmlFor="greencell">GreenCell</label>
              <input
                type="radio"
                id="04"
                value="GreenCell"
                onChange={(e) => setQueue(e.target.value)}
              />
            </div>
          </div>
          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h2>Project's</h2>
            <h3>{project}</h3>
            <div className="radio">
              <label htmlFor="classmate">Classmate customizer</label>
              <input
                type="radio"
                id="05"
                name="action"
                value="Classmate customizer"
                onChange={(e) => setProject(e.target.value)}
              />
            </div>
            <div className="radio">
              <label htmlFor="phase1">GreenCell phase-1</label>
              <input
                type="radio"
                id="06"
                name="action"
                value="GreenCell phase-1"
                onChange={(e) => setProject(e.target.value)}
              />
            </div>
            <div className="radio">
              <label htmlFor="phase2">GreenCell phase-2</label>
              <input
                type="radio"
                id="07"
                name="action"
                value="GreenCell phase-2"
                onChange={(e) => setProject(e.target.value)}
              />
            </div>
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <h2>Date Range</h2>

            <div className="startDate">
              <div className="datelable">
                <label htmlFor="StartDate">
                  Start Date<span>*</span>
                </label>
              </div>

              <input
                type="date"
                id="startDate"
                name="startDate"
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              />
            </div>
            <div className="endDate">
              <div className="datelable">
                <label htmlFor="endDate">
                  End Date<span>*</span>
                </label>
              </div>

              <input
                type="date"
                id="endDate"
                name="endDate"
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="allbutton">
        <button className="reset">Reset Filter</button>
        <button className="apply">Apply Filter</button>
      </div>
    </>
  );
}

export default App;
