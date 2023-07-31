import React, { FC } from 'react';
import { LaunchDetailed, Failure, Crew, Core } from '../types.ts';

import '../App.css';

interface Props {
  launch: LaunchDetailed | undefined;
  isFavorite: Boolean,
  handleFavoriteClick: Function,
}

const LaunchDetails: FC<Props> = (props) => {

  const hasFairings: Function = () => {
    return (
      props.launch?.fairings &&
      (
        props.launch?.fairings?.reused ||
        props.launch?.fairings?.reused ||
        props.launch?.fairings?.recovered ||
        props.launch?.fairings?.ships?.length > 0
      )
    )
  }

  const coreHasAttributes: Function = (core: Core) => {
    return (
      core.gridfins ||
      core.legs ||
      core.reused ||
      core.landing_attempt ||
      core.landing_success === true ||
      core.landing_type
    )
  }

  const hasRedditLinks: Function = () => {
    return (
      props.launch?.links.reddit?.campaign ||
      props.launch?.links.reddit?.launch ||
      props.launch?.links.reddit?.media ||
      props.launch?.links.reddit?.recovery
    );
  }

  const hasFlickrLinks: Function = () => {
    return (
      props.launch?.links.flickr?.small && props.launch.links.flickr.small.length > 0 ||
      props.launch?.links.flickr?.original && props.launch.links.flickr.original?.length > 0
    )
  }

  const hasLinks: Function = () => {
    return (
      props.launch?.links.presskit ||
      props.launch?.links.webcast ||
      props.launch?.links.youtube_id ||
      props.launch?.links.article || 
      props.launch?.links.wikipedia ||
      hasRedditLinks() ||
      hasFlickrLinks()
    );
  }

  return (<div className="launchDetails">
    {props.launch && (
      <div>
        <h3>{props.launch.name}</h3>
        <h4>{props.launch.date_utc.toString()}</h4>
        <button onClick={() => props.handleFavoriteClick(props.launch?.id)}>{props.isFavorite ? "Remove from Favorites" : "Add to Favorites"}</button>
        <ol>
          {props.launch.details && (<li>{props.launch.details}</li>)}
          {props.launch.upcoming && (<li>{'Upcoming'}</li>)}
          {props.launch.tbd && (<li>TBD</li>)}
          {props.launch.success || props.launch.success === false && (<li>{`Success: ${props.launch.success}`}</li>)}
          {hasFairings() && (
          <li>
            {`Fairing: `}
            <ol>
              {props.launch?.fairings?.reused && (<li>{`Reused: ${props.launch.fairings.reused}`}</li>)}
              {props.launch?.fairings?.reused && (<li>{`Recovery Attempt: ${props.launch.fairings.reused}`}</li>)}
              {props.launch?.fairings?.recovered && (<li>{`Recovered: ${props.launch.fairings.recovered}`}</li>)}
              {props.launch?.fairings?.ships && props.launch.fairings.ships.length > 0 && (
              <li>{`Ships:`}
                <ol>
                {(props.launch.fairings.ships.map((ship: String | null) => <li key={ship as React.Key}>{ship}</li>))}
                </ol>
              </li>
              )}
            </ol>
          </li>
          )}
          <li>{`Rocket: ${props.launch.rocket}`}</li>
          {props.launch.failures?.length > 0 && (
          <li>{'Failures: '}
          <ol>
            {props.launch.failures.map((failure: Failure | null, i) => (
              <li key={i as React.Key}>{failure?.reason}
              <ol>
                {failure?.time && (<li>{`Time: ${failure.time}`}</li>)}
                {failure?.altitude && (<li>{`Altitude: ${failure.altitude}`}</li>)}
              </ol>
              </li>
            ))}
          </ol>
          </li>
          )}
          {props.launch.ships?.length > 0 && (
            <li>{'Ships: '}
            <ol>
            {props.launch.ships.map((ship: String | null) => (
              <li key={ship as React.Key}>{`${ship}`}</li>
            ))}
            </ol>
            </li>
          )}
          {props.launch.crew?.length > 0 && (
          <li>{'Crew: '}
            <ol>
            {props.launch.crew.map((crew: Crew | null, i) => (
              <li key={crew?.crew as React.Key}>{`${i+1}: ${crew?.crew}, ${crew?.role}`}</li>
            ))}
            </ol>
          </li>
          )}
          {props.launch.capsules?.length > 0 && (
          <li>{'Capsules: '}
            <ol>
            {props.launch.capsules.map((capsule: String | null) => (
              <li key={capsule as React.Key}>{capsule}</li>
            ))}
            </ol>
          </li>
          )}
          {props.launch.payloads?.length > 0 && (
          <li>{'Payloads: '}
            <ol>
            {props.launch.payloads.map((payload: String | null) => (
              <li key={payload as React.Key}>{payload}</li>
            ))}
            </ol>
          </li>
          )}
          <li>{`Launchpad: ${props.launch.launchpad}`}</li>
          {coreHasAttributes(props.launch.cores[0]) && (<li>{'Cores: '}
            <ol>
              {props.launch.cores.map((core: Core, i) => {
                if (coreHasAttributes(core)) {
                return (<li key={i as React.Key}>{core.core || i+1}
                <ol>
                  {core.flight && (<li>{`Flight: ${core.flight}`}</li>)}
                  {core.gridfins && (<li>{`Gridfins: ${core.gridfins}`}</li>)}
                  {core.legs && (<li>{`Legs: ${core.legs}`}</li>)}
                  {core.reused && (<li>{`Reused: ${core.reused}`}</li>)}
                  {core.landing_attempt && (<li>{`Landing Attempt: ${core.landing_attempt}`}</li>)}
                  {core.landing_success && (<li>{`Landing Success: ${core.landing_success}`}</li>)}
                  {core.landing_type && (<li>{`Landing Type: ${core.landing_type}`}</li>)}
                </ol>
                </li>
              )}})}
            </ol>
          </li>)}
          {hasLinks() && (
          <li>{'Links'}
                <ol>
                  {props.launch.links.presskit && (<li><a href={props.launch.links.presskit}>{'Presskit'}</a></li>)}
                  {props.launch.links.webcast && (<li><a href={props.launch.links.webcast}>{'Webcast'}</a></li>)}
                  {props.launch.links.youtube_id && (<li><a href={`https://www.youtube.com/watch?v=${props.launch.links.youtube_id}`}>{'Youtube'}</a></li>)}
                  {props.launch.links.article && (<li><a href={props.launch.links.article}>{'Article'}</a></li>)}
                  {props.launch.links.wikipedia && (<li><a href={props.launch.links.wikipedia}>{'Wikipedia'}</a></li>)}
                  {props.launch.links.patch &&
                  (props.launch.links.patch.small ||
                  props.launch.links.patch.large) && (
                    <li>{'Patch'}
                    <ol>
                      {props.launch.links.patch.small && (<li><a href={props.launch.links.patch.small}>{props.launch.links.patch.small}</a></li>)}
                      {props.launch.links.patch.large && (<li><a href={props.launch.links.patch.large}>{props.launch.links.patch.large}</a></li>)}
                    </ol>
                    </li>
                  )}
                  {hasRedditLinks() && (
                  <li>{'Reddit'}
                    <ol>
                      {props.launch.links.reddit?.campaign && (<li><a href={props.launch.links.reddit.campaign}>{'Campaign'}</a></li>)}
                      {props.launch.links.reddit?.launch && (<li><a href={props.launch.links.reddit.launch}>{'Launch'}</a></li>)} 
                      {props.launch.links.reddit?.media && (<li><a href={props.launch.links.reddit.media}>{'Media'}</a></li>)} 
                      {props.launch.links.reddit?.recovery && (<li><a href={props.launch.links.reddit.recovery}>{'Recovery'}</a></li>)} 
                    </ol>
                    </li>
                  )}
                  {hasFlickrLinks() && (
                  <li>{'Flicker'}
                    <ol>
                    {props.launch.links.flickr?.small && (
                      props.launch.links.flickr.small.map((small: string | null, i) => (
                        <li key={i as React.Key}><a href={small as string}>{small}</a></li>
                      ))
                    )}
                    {props.launch.links.flickr?.original && (
                      props.launch.links.flickr.original.map((original: string | null, i) => (
                        <li key={i as React.Key}><a href={original as string}>{original}</a></li>
                      ))
                    )}
                    </ol>
                  </li>
                  )}
                </ol>
          </li>)}
        </ol>
      </div>
    )}
  </div>);
}

export default LaunchDetails;