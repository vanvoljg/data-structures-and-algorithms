'use strict';

const Hashtable = require('../hashtable.js');

describe('Hashtable class', () => {
  const keyTypes = {
    string: 'keyString',
    number: 50,
    boolean: true,
    booleanFalse: false,
    null: null,
    undefined: undefined,
    reallylong:
      'thisi si adflksjdflkajs dflkjas ;dflkjas l;dfjas d;lfjaw8or jawojf a9wjf awjfe asfjas;l kdjfa;slk jfd;lka sjdfl;kjas dfl;jkas ;lfdjas ;ldfj;laskjf l;sajk l;kdajg ;lasjg;l djf;kg sd;gj ;lskdfj g;lsdjf;l asjdf;l asjd;glj dfkg;ljsdfl gjaspohf pEF ;LAWENF;LK ASJF;LKJAS D;FLJAS ;LFJAS;LKDJFALSKJDFKASJFL ASJDF JSDLKJDF',
  };

  describe('hash() method should return a hash from a stringable key', () => {
    const map = new Hashtable();

    for (let type of Object.keys(keyTypes)) {
      const key = keyTypes[type];
      it(`${key} as key`, () => {
        const hash = map.hash(key);
        expect(typeof hash).toEqual('number');
      });
    }
  });

  describe('iGetIndex() method should return an integer index', () => {
    const map = new Hashtable();

    for (let type of Object.keys(keyTypes)) {
      const key = keyTypes[type];
      it(`${key} as key`, () => {
        const index = map.iGetIndex(key);
        expect(typeof index).toEqual('number');
      });
    }
  });

  // describe('Adding a value results in the value being present in the data structure', () => {
  //   const map = new Hashtable();
  //
  //   for (let type of Object.keys(keyTypes)) {
  //     const key = keyTypes[type];
  //     map.add(key, key);
  //   }
  //   for (let type of Object.keys(keyTypes)) {
  //     const key = keyTypes[type];
  //   }
  // });

  const map = new Hashtable();

  describe('add() method can add to the hash table', () => {
    for (let type of Object.keys(keyTypes)) {
      const key = keyTypes[type];

      it(`${key} as key and ${type} as value`, () => {
        expect(() => {
          map.add(key, type);
        }).not.toThrow();
      });
    }
  });

  describe('contains() method checks to see if a key exists in the hashtable', () => {
    for (let type of Object.keys(keyTypes)) {
      const key = keyTypes[type];

      it(`${key} as key and ${type} as value`, () => {
        expect(() => {
          map.contains(key);
        }).not.toThrow();
        expect(map.contains(key)).toBeTruthy();
      });
    }
  });

  describe('get() method retrieves the value from the hashtable', () => {
    for (let type of Object.keys(keyTypes)) {
      const key = keyTypes[type];

      it(`${key} should return ${type}`, () => {
        expect(() => {
          map.get(key);
        }).not.toThrow();
        expect(map.get(key)).toEqual(type);
      });

      it('returns undefined for keys that do not exist', () => {
        expect(map.get('fish')).toBeUndefined();
      });
    }
  });

  it('add() will reassign keys that exist in the table already', () => {
    const key = 'keyString';
    const value = 'value';
    const reused = 'reused';
    map.add(key, value);
    expect(() => {
      map.add(key, reused);
    }).not.toThrow();
    expect(map.contains(key)).toBeTruthy();
    expect(map.get(key)).toEqual(reused);
  });

  it('will not accept functions as keys', () => {
    expect(() => {
      map.add(() => {}, 'function');
    }).toThrow();
  });
  it('will not accept objects as keys', () => {
    expect(() => {
      map.add({key:'value'}, 'object');
    }).toThrow();
  });
  it('will not accept arrays as keys', () => {
    expect(() => {
      map.add([], 'array');
    }).toThrow();
  });
});
