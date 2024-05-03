/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = (version1, version2) => {
  const splitVersion1 = version1.split(".");
  const splitVersion2 = version2.split(".");

  const maxRevision = Math.max(splitVersion1.length, splitVersion2.length);
  for (let i = 0; i < maxRevision; i++) {
    const version1Number = splitVersion1[i] ? Number(splitVersion1[i]) : 0;
    const version2Number = splitVersion2[i] ? Number(splitVersion2[i]) : 0;

    if (version1Number > version2Number) return 1;
    if (version1Number < version2Number) return -1;
  }

  return 0;
};

console.log(compareVersion("1.0.1", "1")); //1
console.log(compareVersion("1.01", "1.001")); //0
console.log(compareVersion("1.0", "1.0.0")); //0
console.log(compareVersion("0.1", "1.1")); //-1
console.log(compareVersion("7.5.2.4", "7.5.3")); //-1
