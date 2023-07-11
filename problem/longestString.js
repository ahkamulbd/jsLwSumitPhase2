const array = ['Arkamul', 'Ashraful', 'RobiulAlam', 'TowhidHridoy', 'RashedKaderNewaz', 'WasimMurad'];

function longestString(names) {
    let longestWord = '';

    for (name of names) {
        if (name.length > longestWord.length) {
            longestWord = name;
        }
    }

    return [longestWord, names.indexOf(longestWord)];
}
const result = longestString(array);
console.log(result);