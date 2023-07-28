import { LaunchDetailed } from "../types";


const recastData: Function = (data: any) => {
  const launchesDetailed: Array<LaunchDetailed> = [];
  console.log(data);
  data.forEach((launch: any) => {
    launchesDetailed.push({...launch});
    /*
    const newLaunch: LaunchDetailed = {
      id: launch.id,
      index: launch.index,
      fairings: {
        reused: launch.fairings.reused,
        recovery_attempt: launch.fairings.recovery_attempt,
        recovered: launch.fairings.recovered,
        ships: launch.fairings.ships,
      }
      links: {
        patch: {}
        reddit: {}
        flickr: {}
        presskit: launch.links.presskit,
        webcast: launch.links.presskit,
        youtube_id: launch.links.youtube_id,
        article
      }
      net: launch.net,
      window: launch.window,
      rocket: launch.rocket,
      success: launch.success,
      // failures
      details: launch.details,
      // crew
      ships: launch.ships,
      capsules: launch.capsules,
      launchpad: launch.launchpad,
      flight_number: launch.flight_number,
      name: launch.name,
      date_utc: launch.date_utc,
      upcoming: launch.upcoming,
      // cores:
      auto_update: launch.auto_update,
      tbd: launch.tbd,
      launch_library_id: launch.launch_library_id,
  }))
  */
});
 return launchesDetailed;
}

export default recastData;