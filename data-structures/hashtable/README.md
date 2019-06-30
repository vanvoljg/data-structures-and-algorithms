# Hashtable

Implement a Hashtable class

## Challenge

Implement a Hashtable with the following methods:

- `add`: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- `get`: takes in the key and returns the value from the table.
- `contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.
- `hash`: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency

- `add`
  - Time: O(1) - best case, O(n) worst case, where n is the number of elements in the hashtable
  - Space: O(1) - the hash table is a fixed size array, with all values being pointers
- `get`
  - Time: O(1) - best case, O(n) worst case, where n is the number of elements in the hashtable
  - Space: O(1)
- `contains`
  - Time: O(1) - best case, O(n) worst case, where n is the number of elements in the hashtable
  - Space: O(1)
- `hash`
  - Time: O(1)
  - Space: O(n), where n is the number of characters in the key
- `access`
  - Time: O(1) best case, O(n) worst case, where n is the number of elements in the hashtable
