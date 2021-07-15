import React, {useState} from 'react';
import {Global} from '@emotion/react';
import {Helmet} from 'react-helmet';
import {reset, base} from '../styles/common';
import Select from '../components/Select';
import Splash from '../components/Splash';
import Label from '../components/Label';
import ProgressBar from '../components/ProgressBar';
import Row from '../components/Row';
import Card from '../components/Card';
import {WHEELS, BODIES, DECALS, RIDE_HEIGHTS} from '../constants/data';
import {findDecal, stats} from '../lib/helper';
import {mobileMq} from '../constants/media';

import '../styles/fonts.css';

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [wheel, setWheel] = useState<string>(WHEELS[0].source);
  const [body, setBody] = useState<string>(BODIES[0].source);
  const [decals, setDecals] = useState<string[]>([]);
  const [rideHeight, setRideHeight] = useState<string>('0');
  const {speed, handling, swag} = stats({wheel, body, decals, rideHeight});

  const offset = {
    marginBottom: rideHeight,
    transition: 'margin 250ms cubic-bezier(0.180, 0.595, 0.065, 1.445)',
  };

  return (
    <>
      <Global styles={[reset, base]}></Global>

      <Helmet>
        <title>Need for Speed: Hot Juice</title>
      </Helmet>

      {isModalVisible && <Splash onClick={() => setIsModalVisible(false)} />}

      <div
        css={{
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
          width: '100vw',

          [mobileMq]: {
            display: 'none',
          },
        }}
      >
        <img css={styles.absImage} src={require('../images/bg.jpg').default} />
        <img css={styles.absImage} src={require(`../images/wheels/${wheel}.png`).default} />
        <img css={[styles.absImage, offset]} src={require(`../images/body.png`).default} />
        {body && <img css={[styles.absImage, offset]} src={require(`../images/bodies/${body}.png`).default} />}
        {decals.map(decal => (
          <img
            key={decal}
            css={[styles.absImage, offset, findDecal(decal).css]}
            src={require(`../images/decals/${decal}.png`).default}
          />
        ))}

        <div css={{display: 'flex', left: 0, position: 'absolute', right: 0, top: 0}}>
          <Card>
            <Row>
              <Label htmlFor="wheels">Wheels</Label>
              <Select name="wheels" onChange={event => setWheel(event.target.value)} value={wheel}>
                {WHEELS.map(option => (
                  <option key={option.name} value={option.source}>
                    {option.name}
                  </option>
                ))}
              </Select>
            </Row>

            <Row>
              <Label htmlFor="body">Body</Label>
              <Select name="body" onChange={event => setBody(event.target.value)} value={body}>
                {BODIES.map(option => (
                  <option key={option.name} value={option.source}>
                    {option.name}
                  </option>
                ))}
              </Select>
            </Row>

            <Row>
              <Label htmlFor="ride-height">Ride height</Label>
              <Select name="ride-height" onChange={event => setRideHeight(event.target.value)} value={rideHeight}>
                {RIDE_HEIGHTS.map(option => (
                  <option key={option.name} value={option.offset}>
                    {option.name}
                  </option>
                ))}
              </Select>
            </Row>

            <Row>
              <Label htmlFor="decals">
                Decals <br />
                <span css={{fontSize: '0.5em'}}>cmd + click for multiple</span>
              </Label>
              <Select
                name="decals"
                multiple
                onChange={event => setDecals(Array.from(event.target.selectedOptions, option => option.value))}
              >
                {DECALS.map(option => (
                  <option key={option.name} value={option.source}>
                    {option.name}
                  </option>
                ))}
              </Select>
            </Row>
          </Card>

          <Card>
            <Row>
              <Label>Performance</Label>
              <ProgressBar value={speed} />
            </Row>

            <Row>
              <Label>Handling</Label>
              <ProgressBar value={handling} />
            </Row>

            <Row>
              <Label>Juice</Label>
              <ProgressBar value={swag} />
            </Row>

            <Row>
              <Label>Probability of getting the house built on time</Label>
              <ProgressBar value={(speed + handling + swag) / 20} />
            </Row>
          </Card>
        </div>
      </div>
    </>
  );
}

const styles = {
  absImage: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    objectPosition: 'center 70%',
  },
} as const;
