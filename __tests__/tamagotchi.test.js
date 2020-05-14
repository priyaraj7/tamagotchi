import {  Tamagotchi } from "../src/tamagotchi.js";

describe("Care", () => { //1
  jest.useFakeTimers();
  let pet;

  beforeEach(function() { //2
    pet = new Tamagotchi("Care");
  });

  afterEach(function() { //3
    jest.clearAllTimers();
  });

  test("should have a name, food level, play level andsleep level when it is created", () => { //4
    expect(pet.name).toEqual("Care");
    expect(pet.foodLevel).toEqual(10);
    expect(pet.playlevel).toEqual(15);
    expect(pet.sleeplevel).toEqual(25);
  });
  beforeEach(function() { //6
    pet = new Tamagotchi("Care");
    pet.startLifecycle();
  });
  test("should have a food level of 7 after 3001 milliseconds", () => { //5
    jest.advanceTimersByTime(3001);
    expect(pet.foodLevel).toEqual(7);
  });
  test("should have a play level of 10 after 6001 milliseconds", () => {
    jest.advanceTimersByTime(6001);
    expect(pet.playlevel).toEqual(10);
  });
  test("should have a play level of 20 after 11001 milliseconds", () => {
    jest.advanceTimersByTime(11001);
    expect(pet.sleeplevel).toEqual(20);
  });
  // test("should get very hungry if the food level drops below zero", function() {
  //   pet.foodLevel = 0;
  //   expect(pet.didYouGetEaten()).toEqual(true);
  // });

  // test("should get very hungry if 10 seconds pass without feeding", function() {
  //   jest.advanceTimersByTime(10001);
  //   expect(pet.didYouGetEaten()).toEqual(true);
  // });

  // test("should have a food level of ten if it is fed", function() {
  //   jest.advanceTimersByTime(9001);
  //   pet.feed();
  //   expect(pet.foodLevel).toEqual(10);
  // });

  // test("should not be able to feed if you're dead", () => {
  //   jest.advanceTimersByTime(10001);
  //   // expect(() => pet.feed()).toThrowError('you are dead');
  //   try {
  //     pet.feed();
  //     expect(true).toBe(false);
  //   } catch (e) {
  //     expect(e.message).toEqual("you are dead");
  //   }
  // });
});
