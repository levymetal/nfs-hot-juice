import {WHEELS, BODIES, DECALS, RIDE_HEIGHTS} from '../constants/data';

export function findWheel(source: string) {
  return WHEELS.find(d => d.source === source) as typeof WHEELS[number];
}

export function findBody(source: string) {
  return BODIES.find(d => d.source === source) as typeof BODIES[number];
}

export function findDecal(source: string) {
  return DECALS.find(d => d.source === source) as typeof DECALS[number];
}

export function findRideHeight(offset: string) {
  return RIDE_HEIGHTS.find(d => d.offset === offset) as typeof RIDE_HEIGHTS[number];
}

export function stats({
  wheel,
  body,
  decals,
  rideHeight,
}: {
  wheel: string;
  body: string;
  decals: string[];
  rideHeight: string;
}) {
  function stat(attr: 'speed' | 'swag' | 'handling') {
    return [
      findWheel(wheel).stats[attr],
      findBody(body).stats[attr],
      findRideHeight(rideHeight).stats[attr],
      ...decals.map(d => findDecal(d).stats[attr]),
    ].reduce<number>((acc, curr) => acc + curr, 0);
  }

  return {
    speed: stat('speed'),
    handling: stat('handling'),
    swag: stat('swag'),
  };
}
