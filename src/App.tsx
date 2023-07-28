import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ItemsList from './components/ItemsList.tsx'
import { LaunchDetailed, LaunchBrief } from './types'
import './App.css'
import LaunchDetails from './components/LaunchDetails.tsx';
// import castData from './components/CastData.ts';

function App() {

  const [launchesDetailed, setLaunchesDetailed] = useState<Array<LaunchDetailed>>([]);
  const [launchesBrief, setLaunchesBrief] = useState<Array<LaunchBrief>>([]);
  // const [favoriteLaunches, setFavoriteLaunches] = useState<Array<String>>([]);
  
  const [selectedLaunchId, setSelectedLaunchId] = useState<String>('');

  const handleSelect: Function = (launchId: String) => {
      localStorage.setItem("selectedLaunchId", launchId as string);
      setSelectedLaunchId(launchId);
  }
  

  const getSpaceXResults = () => {
    fetch('https://api.spacexdata.com/v5/launches/')
      .then(response => response.json())
      .then((data) => {
        if (data?.length > 0) {
          const newLaunchesDetailed: Array<LaunchDetailed> = data as Array<LaunchDetailed>;
          const newLaunchesBrief = newLaunchesDetailed.map((launch: LaunchDetailed) => ({
            name: launch.name,
            id: launch.id as React.Key | null | undefined,
            date: launch.date_utc as Date,
            flight_number: launch.flight_number,
          }));
          setLaunchesDetailed(newLaunchesDetailed);
          setLaunchesBrief(newLaunchesBrief.sort((a, b) => b.flight_number - a.flight_number));         
      }});
  }

  useEffect(() => {
    getSpaceXResults();
  }, []);

  return (
    <span className="container">
      <ItemsList
        launches={launchesBrief}
        handleSelect={handleSelect}
        selectedLaunchId={selectedLaunchId}
      />
      <LaunchDetails
        launch={launchesDetailed.find(launch => launch.id === localStorage.getItem("selectedLaunchId"))}
        isFavorite={false}
      />
    </span>
  )
}

export default App;
