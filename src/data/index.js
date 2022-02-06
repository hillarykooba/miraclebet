import countries from "./countries.json";
import leagues from "./leagues.json";
import bets from "./bets.json";

import FixturesFeb10 from "./fixtures/Feb/Feb10.json";
import FixturesFeb11 from "./fixtures/Feb/Feb11.json";
import FixturesFeb12 from "./fixtures/Feb/Feb12.json";
import FixturesFeb13 from "./fixtures/Feb/Feb13.json";
import FixturesFeb14 from "./fixtures/Feb/Feb14.json";
import FixturesFeb15 from "./fixtures/Feb/Feb15.json";
import FixturesFeb16 from "./fixtures/Feb/Feb16.json";
import FixturesFeb17 from "./fixtures/Feb/Feb17.json";
import FixturesFeb18 from "./fixtures/Feb/Feb18.json";
import FixturesFeb19 from "./fixtures/Feb/Feb19.json";
import FixturesFeb20 from "./fixtures/Feb/Feb20.json";
import FixturesFeb21 from "./fixtures/Feb/Feb21.json";
import FixturesFeb22 from "./fixtures/Feb/Feb22.json";
import FixturesFeb23 from "./fixtures/Feb/Feb23.json";
import FixturesFeb24 from "./fixtures/Feb/Feb24.json";
import FixturesFeb25 from "./fixtures/Feb/Feb25.json";
import FixturesFeb26 from "./fixtures/Feb/Feb26.json";
import FixturesFeb27 from "./fixtures/Feb/Feb27.json";
import FixturesFeb28 from "./fixtures/Feb/Feb28.json";

import OddsFeb110 from "./odds/Feb/FebP110.json";
import OddsFeb210 from "./odds/Feb/FebP210.json";
import OddsFeb111 from "./odds/Feb/FebP111.json";
import OddsFeb211 from "./odds/Feb/FebP211.json";
import OddsFeb311 from "./odds/Feb/FebP311.json";
import OddsFeb411 from "./odds/Feb/FebP411.json";

import OddsFeb112 from "./odds/Feb/FebP112.json";
import OddsFeb212 from "./odds/Feb/FebP212.json";
import OddsFeb312 from "./odds/Feb/FebP312.json";
import OddsFeb412 from "./odds/Feb/FebP412.json";
import OddsFeb512 from "./odds/Feb/FebP512.json";
import OddsFeb612 from "./odds/Feb/FebP612.json";
import OddsFeb712 from "./odds/Feb/FebP712.json";
import OddsFeb812 from "./odds/Feb/FebP812.json";
import OddsFeb912 from "./odds/Feb/FebP912.json";
import OddsFeb1012 from "./odds/Feb/FebP1012.json";
import OddsFeb1112 from "./odds/Feb/FebP1112.json";
import OddsFeb1212 from "./odds/Feb/FebP1212.json";

const odds = [
  ...OddsFeb110,
  ...OddsFeb210,
  ...OddsFeb111,
  ...OddsFeb211,
  ...OddsFeb311,
  ...OddsFeb411,

  ...OddsFeb112,
  ...OddsFeb212,
  ...OddsFeb312,
  ...OddsFeb412,
  ...OddsFeb512,
  ...OddsFeb612,
  ...OddsFeb712,
  ...OddsFeb812,
  ...OddsFeb912,
  ...OddsFeb1012,
  ...OddsFeb1112,
  ...OddsFeb1212,
];

const fixtures = [
  ...FixturesFeb10,
  ...FixturesFeb11,
  ...FixturesFeb12,
  ...FixturesFeb13,
  ...FixturesFeb14,
  ...FixturesFeb15,
  ...FixturesFeb16,
  ...FixturesFeb17,
  ...FixturesFeb18,
  ...FixturesFeb19,
  ...FixturesFeb20,
  ...FixturesFeb21,
  ...FixturesFeb22,
  ...FixturesFeb23,
  ...FixturesFeb24,
  ...FixturesFeb25,
  ...FixturesFeb26,
  ...FixturesFeb27,
  ...FixturesFeb28,
];
export function getFixtures() {
  const getFutureFixtures = fixtures.filter((ff) => {
    return ff.fixture.timestamp >= new Date().valueOf() / 1000;
  });

  return getFutureFixtures;
}

export function getOdds() {
  const getFutureOdds = odds.filter((ff) => {
    return ff.fixture.timestamp >= new Date().valueOf() / 1000;
  });
  return getFutureOdds;
}

export function getCountries() {
  return countries;
}

export function getLeagues() {
  return leagues;
}

export function getBets() {
  return bets;
}

export function getCountry(id) {
  return countries.find((country) => country.id === id);
}
