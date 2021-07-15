export const WHEELS = [
  {name: 'Alloy', source: 'alloy', stats: {speed: 8, handling: 3, swag: 3}},
  {name: 'Stockies', source: 'stockies', stats: {speed: 9, handling: 14, swag: 0}},
  {name: 'Lowrider', source: 'lowrider', stats: {speed: 12, handling: 7, swag: 25}},
  {name: 'HRE', source: 'hre', stats: {speed: 18, handling: 17, swag: 18}},
  {name: 'Drag', source: 'drag', stats: {speed: 25, handling: 2, swag: 10}},
  {name: '4WD', source: '4wd', stats: {speed: 15, handling: 5, swag: 12}},
  {name: 'Offroad', source: 'offroad', stats: {speed: 7, handling: 3, swag: 15}},
] as const;

export const BODIES = [
  {name: 'Stock', source: 'stock', stats: {speed: 5, handling: 6, swag: 5}},
  {name: 'Gutted', source: '', stats: {speed: 18, handling: 7, swag: 2}},
  {name: 'Edition', source: 'edition', stats: {speed: 15, handling: 18, swag: 12}},
  {name: 'LBWK', source: 'lbwk', stats: {speed: 25, handling: 25, swag: 19}},
  {name: 'Offroad', source: 'offroad', stats: {speed: 8, handling: 12, swag: 5}},
] as const;

export const RIDE_HEIGHTS = [
  {name: 'Stock', offset: '0', stats: {speed: 10, handling: 10, swag: 5}},
  {name: 'Low', offset: '-1.5%', stats: {speed: 15, handling: 25, swag: 15}},
  {name: 'Slammed', offset: '-3%', stats: {speed: 25, handling: 10, swag: 25}},
] as const;

export const DECALS = [
  {
    name: 'Juice',
    source: 'juice',
    css: {mixBlendMode: 'multiply'},
    stats: {speed: 4, handling: 2, swag: 3},
  },
  {
    name: 'Up',
    source: 'up',
    css: {opacity: 0.9},
    stats: {speed: 5, handling: 5, swag: 5},
  },
  {
    name: 'Buildkite',
    source: 'buildkite',
    css: {mixBlendMode: 'multiply', opacity: 0.9},
    stats: {speed: 3, handling: 5, swag: 3},
  },
  {
    name: 'DataDog',
    source: 'datadog',
    css: {mixBlendMode: 'color-burn'},
    stats: {speed: 3, handling: 4, swag: 4},
  },
  {
    name: 'Terraform',
    source: 'terraform',
    css: {mixBlendMode: 'darken'},
    stats: {speed: 5, handling: 2, swag: 2},
  },
] as const;
