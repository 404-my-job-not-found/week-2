/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;
    let sMap = new Map();
    let tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (sMap.has(s[i])) {
            sMap.set(s[i], sMap.get(s[i]) + 1);
        } else {
            sMap.set(s[i], 1);
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (tMap.has(t[i])) {
            tMap.set(t[i], tMap.get(t[i]) + 1);
        } else {
            tMap.set(t[i], 1);
        }
    }

    for (let [key, value] of sMap.entries()) {
        console.log(key, value);
        console.log(tMap.get(key));

        if (tMap.has(key)) {
            if (tMap.get(key) !== value) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};

const s = "dgqztusjuu";
const t = "dqugjzutsu";

console.log(isAnagram(s, t));
