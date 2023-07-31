import { useState, useEffect } from 'react'
import ItemsList from './components/ItemsList.tsx'
import { LaunchDetailed, LaunchBrief } from './types'
import './App.css'
import LaunchDetails from './components/LaunchDetails.tsx';

function App() {

  const [launchesDetailed, setLaunchesDetailed] = useState<Array<LaunchDetailed>>([]);
  const [launchesBrief, setLaunchesBrief] = useState<Array<LaunchBrief>>([]);
  const [favoriteLaunchIds, setFavoriteLaunchIds] = useState<Array<string>>([]);
  const [selectedLaunchId, setSelectedLaunchId] = useState<String>('');
  const [listDisplayed, setListDisplayed] = useState<string>('all');

  const handleSelect: Function = (launchId: string) => {
      localStorage.setItem('selectedLaunchId', launchId);
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

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteLaunchIds));
  }, [favoriteLaunchIds]);

  const handleFavoriteClick: Function = (id: string) => {
    if (!favoriteLaunchIds.includes(id)) {
      const newFavoriteLaunchIds = [...favoriteLaunchIds, id];
      setFavoriteLaunchIds(newFavoriteLaunchIds);
      // localStorage.setItem('favorites', JSON.stringify(newFavoriteLaunchIds));
    } else {
      setFavoriteLaunchIds(favoriteLaunchIds.filter((favoriteId: string) => favoriteId !== id));
      // localStorage.setItem('favorites', JSON.stringify(newFavoriteLaunchIds));
    }
  }

  return (
    <span className='container'>
      <ItemsList
        launches={listDisplayed === 'all' ? launchesBrief : launchesBrief.filter((launch: LaunchBrief) => JSON.parse(localStorage.getItem('favorites') as string)?.includes(launch.id))}
        handleSelect={handleSelect}
        selectedLaunchId={selectedLaunchId}
        setListDisplayed={setListDisplayed}
        listDisplayed={listDisplayed}
        favorites={favoriteLaunchIds}
        // favorites={JSON.parse(localStorage.getItem('favorites') as string)}
      />
      <LaunchDetails
        launch={launchesDetailed.find(launch => launch.id === localStorage.getItem('selectedLaunchId'))}
        handleFavoriteClick={handleFavoriteClick}
        isFavorite={favoriteLaunchIds.some(launchId => launchId === localStorage.getItem('selectedLaunchId'))}
        // isFavorite={JSON.parse(localStorage.getItem('favorites') as string).includes(localStorage.getItem('selectedLaunchId') as string)}
      />
    </span>
  )
}

export default App;
