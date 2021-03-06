describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve' and 'remove'. ", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
    expect(hashTable.remove).toEqual(jasmine.any(Function));
  });

  // it("should add one key-value pair ", function() {
  //   var index = hashTable.insert('key1', 'value1');
  //   expect( hashTable.retrieve('key1')).toEqual('value1');
  // });

  // it("should retrieve one key-value pair ", function() {
  //   hashTable.insert('key1', 'value1');
  //   expect(hashTable.retrieve('key1')).toEqual('value1');
  // });

  // it("should remove one key-value pair ", function() {
  //   hashTable.insert('key1', 'value1');
  //   hashTable.remove('key1');
  //   expect(hashTable.retrieve('key1')).toEqual(undefined);
  // });

  // it("should add two key-value pairs", function() {
  //   hashTable.insert('key1', 'value1');
  //   hashTable.insert('key2', 'value2');
  //   expect( hashTable.retrieve('key1') ).toEqual('value1');
  //   expect( hashTable.retrieve('key2') ).toEqual('value2');
  // });

  // it("should overwrite exisiting key-value pair if the key exists", function() {
  //   hashTable.insert('key1', 'value1');
  //   hashTable.insert('key1', 'value2');
  //   hashTable.insert('key1', 'value3');
  //   hashTable.insert('key1', 'value4');
  //   hashTable.insert('key1', 'value5');
  //   expect( hashTable.retrieve('key1') ).toEqual('value5');
  // });

  // it("should retrieve two key-value pairs", function() {
  //   hashTable.insert('key1', 'value1');
  //   hashTable.insert('key2', 'value2');
  //   expect(hashTable.retrieve('key2')).toEqual('value2');
  // });

  it("should remove two key-value pairs", function() {
    hashTable.insert('key1', 'value1');
    hashTable.insert('key2', 'value2');
    hashTable.remove('key1');
    hashTable.remove('key2');
    hashTable.insert('z', '99');
    hashTable.insert('y', '98');
    hashTable.insert('x', '97');
    hashTable.insert('w', '96');
    // hashTable.insert('key1', 'I SHOULD SHOW UP, SHAO!');
    // expect(hashTable.retrieve('key1')).toEqual('I SHOULD SHOW UP, SHAO!');
    expect(hashTable.retrieve('w')).toEqual('96');
    expect(hashTable.retrieve('key1')).toEqual(undefined);
  });

  // it("should handle many inserted values", function() {
  //   hashTable.insert('a', 'Denver');
  //   hashTable.insert('b', 'Seattle');
  //   hashTable.insert('c', 'Detroit');
  //   hashTable.insert('d', 'Miami');
  //   hashTable.insert('e', 'Cincinnati');
  //   hashTable.insert('f', 'San Antonio');
  //   hashTable.insert('g', 'Omaha');
  //   hashTable.insert('h', 'Salt Lake City');
  //   hashTable.insert('i', 'Kansas City');
  //   hashTable.insert('j', 'Minneapolis');
  //   hashTable.insert('k', 'Albuquerque');
  //   hashTable.remove('c');
  //   hashTable.remove('k');
  //   hashTable.insert('f', 'THE STARS AT NIGHT ARE BIG AND BRIGHT');
  //   expect(hashTable.retrieve('f')).toEqual('THE STARS AT NIGHT ARE BIG AND BRIGHT');
  //   expect(hashTable.retrieve('c')).toEqual(undefined);
  //   hashTable.remove('a');
  //   hashTable.remove('b');
  //   hashTable.remove('c');
  //   hashTable.remove('d');
  //   hashTable.remove('e');
  //   hashTable.remove('f');
  //   hashTable.remove('g');
  //   hashTable.remove('h');
  //   hashTable.remove('i');
  //   hashTable.remove('j');
  // });

  // it("should not break after changing the limit, case 1", function() {
  //   hashTable.insert('key1', 'value1');
  //   hashTable.insert('key2', 'value2');
  //   hashTable.insert('key3', 'value3');
  //   expect(hashTable.retrieve('key1')).toEqual('value1');
  //   expect(hashTable.retrieve('key2')).toEqual('value2');
  //   expect(hashTable.retrieve('key3')).toEqual('value3');
  //   hashTable = hashTable.reHash(10);
  //   expect(hashTable.retrieve('key1')).toEqual('value1');
  //   expect(hashTable.retrieve('key2')).toEqual('value2');
  //   expect(hashTable.retrieve('key3')).toEqual('value3');
  // });

  // it("should not break after changing the limit, case 2", function() {
  //   hashTable.insert('key1', 'value1');
  //   expect(hashTable.retrieve('key1')).toEqual('value1');
  //   hashTable = hashTable.reHash(10);
  //   expect(hashTable.retrieve('key1')).toEqual('value1');

  // it("should handle really really obnoxiously large sizes", function() {
  //   for(var i=0; i<50000; i++){
  //     hashTable.insert(i.toString(), 'LOL'+i);
  //     expect(hashTable.retrieve('39657')).toEqual('LOL39657');
  //   }
  // });

  // });

  // add more tests here to test the functionality of hashTable
});