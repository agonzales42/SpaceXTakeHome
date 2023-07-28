import {LaunchDetailed} from '../types.ts';

const castData: Function = (data: any) => {
  const castedLaunches: Array<LaunchDetailed> =  [];
  data.forEach((rawLaunch: any) => {
    const castLaunch: LaunchDetailed = {
      id: rawLaunch.id as String,
      fairings: {
        reused: rawLaunch.fairings?.reused as Boolean | null || null,
        recovery_attempt: rawLaunch.fairings?.recovery_attempt as Boolean | null || null,
        recovered: rawLaunch.fairings?.recovered as Boolean | null || null,
        ships: rawLaunch.fairings?.ships 
      }
    }
    castedLaunches.push(castLaunch);
  })
}

export default castData;