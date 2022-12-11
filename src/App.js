import "./App.css";
import CardContainer from "./components/CardContainer";
import { data } from "././data/nineCardData";
import ApiCard from "./components/ApiCard";

function App() {
  return (
    <div className="App">
      <div className="socialSecurity">
        <ApiCard />
      </div>
      <div className="nineCards">
        {data.map((item, index) => {
          return (
            <CardContainer
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              content={item.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
