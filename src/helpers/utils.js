export function getDirection(angle) {
  // We divide it into 16 sections
  let directions = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW'
  ];
  // This means, every 360 / 16 degree, there's a section change
  // So, in our case, every 22.5 degree, there's a section change
  // In order to get the correct section, we just need to divide
  let section = parseInt(angle / 22.5 + 0.5);
  // If our result comes to be x.6, which should normally be rounded off to
  // int(x) + 1, but parseInt doesn't care about it
  // Hence, we are adding 0.5 to it

  // Now we know the section, just need to make sure it's under 16
  section = section % 16;

  // Now we can return it
  return directions[section];
}

export function kmmToMiles(km) {
  return km * 0.000621371;
}

export function metersToKm(meters) {
  return meters / 1000;
}
