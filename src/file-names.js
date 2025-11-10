const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  const fileMap = new Map();
  const res = new Array();

  for (const name of names) {
    if (fileMap.has(name)) {
      let entries = fileMap.get(name);
      let newName = `${name}(${entries})`;

      while (fileMap.has(newName)) {
        entries++;
        mewName = `${name}(${entries})`;
      }
      fileMap.set(name, entries + 1);
      
      res.push(newName);
      fileMap.set(newName, 1);
    } else {
      fileMap.set(name, 1);
      res.push(name);
    }
  }
  return res;
}

module.exports = {
  renameFiles
};
