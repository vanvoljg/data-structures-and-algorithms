'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');

describe('AnimalShelter class', () => {
  it('can enqueue a cat', () => {
    let shelter = new AnimalShelter();
    expect(() => {shelter.enqueue('cat');}).not.toThrow();
  });

  it('can enqueue a dog', () => {
    let shelter = new AnimalShelter();
    expect(() => {shelter.enqueue('dog');}).not.toThrow();
  });

  it('can dequeue a cat', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    expect(shelter.dequeue('cat')).toEqual('cat');
  });

  it('can dequeue a dog', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    expect(shelter.dequeue('dog')).toEqual('dog');
  });

  it('will not enqueue anything else', () => {
    let shelter = new AnimalShelter();
    expect(() => {shelter.enqueue('fish');}).toThrow(SyntaxError);
  });

  it('will not dequeue anything else', () => {
    let shelter = new AnimalShelter();
    expect(() => {shelter.dequeue('fish');}).toThrow(SyntaxError);
  });
});
