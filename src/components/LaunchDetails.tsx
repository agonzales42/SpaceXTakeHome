import React, { FC } from 'react';
import { LaunchDetailed, Failure, Crew, Core } from '../types.ts';

import '../App.css';

interface Props {
  launch: LaunchDetailed | undefined;
  isFavorite: Boolean,
}

const LaunchDetails: FC<Props> = (props) => {

  return (<div className="launchDetails">
    {props.launch && (
      <div onClick={() => console.log(props.launch)}>
        <h3>{props.launch.name}</h3>
        <h4>{props.launch.date_utc.toString()}</h4>
        <ol>
          {props.launch.details && (<li>{props.launch.details}</li>)}
          {props.launch.upcoming && (<li>{'Upcoming'}</li>)}
          {props.launch.tbd && (<li>TBD</li>)}
          <li>{`Success: ${props.launch.success}`}</li>
          {props.launch.fairings && (
          <li>
            {`Fairing: `}
            <ol>
              <li>{`Reused: ${props.launch.fairings.reused}`}</li>
              <li>{`Recovery Attempt: ${props.launch.fairings.reused}`}</li>
              <li>{`Recovered: ${props.launch.fairings.recovered}`}</li>
              {props.launch.fairings.ships?.length > 0 && (
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
          <li>{'Cores: '}
            <ol>
              {props.launch.cores.map((core: Core, i) => (
                <li key={i as React.Key}>{core.core}
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
              ))}
            </ol>
          </li>
          <li>{'Links'}
                <ol>
                  {props.launch.links.patch && (
                    <li>{'Patch'}
                    <ol>
                      {props.launch.links.patch.small && (<li><a href={props.launch.links.patch.small as string}></a></li>)}
                      {props.launch.links.patch.large && (<li><a href={props.launch.links.patch.small as string}></a></li>)}
                    </ol>
                    </li>
                  )}
                  {props.launch.links.reddit && (
                  <li>{'Reddit'}
                    <ol>
                      {props.launch.links.reddit.campaign && (<li><a href={props.launch.links.reddit.campaign as string}>Campaign</a></li>)}
                      {props.launch.links.reddit.launch && (<li><a href={props.launch.links.reddit.launch as string}>Launch</a></li>)} 
                      {props.launch.links.reddit.media && (<li><a href={props.launch.links.reddit.media as string}>Media</a></li>)} 
                      {props.launch.links.reddit.recovery && (<li><a href={props.launch.links.reddit.recovery as string}>Recovery</a></li>)} 
                    </ol>
                    </li>
                  )}
                  {props.launch.links.flickr && (
                  <li>{'Flicker'}
                    <ol>
                    {props.launch.links.flickr.small && (
                      props.launch.links.flickr.small.map((small: String | null) => (
                        <li><a href={small as string}>{small}</a></li>
                      ))
                    )}
                    {props.launch.links.flickr.original && (
                      props.launch.links.flickr.original.map((original: String | null) => (
                        <li><a href={original as string}>{original}</a></li>
                      ))
                    )}
                    </ol>
                  </li>
                  )}
                  {props.launch.links.presskit && (<li><a href={props.launch.links.presskit as string}>{'Presskit'}</a></li>)}
                  {props.launch.links.webcast && (<li><a href={props.launch.links.webcast as string}>{'Webcast'}</a></li>)}
                  {props.launch.links.youtube_id && (<li><a href={`https://www.youtube.com/watch?v=${props.launch.links.youtube_id}`}>Youtube</a></li>)}
                  {props.launch.links.article && (<li><a href={props.launch.links.article as string}>Article</a></li>)}
                  {props.launch.links.wikipedia && (<li><a href={props.launch.links.wikipedia as string}>Wikipedia</a></li>)}
                </ol>
          
          </li>
        </ol>
      </div>
    )}
  </div>);
}

export default LaunchDetails;