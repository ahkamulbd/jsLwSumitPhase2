/*
How many times sumit used in the below paragraph and position of first
*/

const sentence = "He started young, like many others attempt with the things they love. Few are successful in turning their passion into their daily job. But Sumit is one of those few by his own merit and virtue. On one hand, Sumit is a successful entrepreneur leading the largest digital-first agency in the country and on the other, an influential name in the local online community of programmers and freelancers as one of the best instructional content creators in colloquial and comprehensive Bangla. Sumit studied and graduated from the Department of Computer Science and Engineering (CSE) in Bangladesh University of Engineering & Technology (BUET). Sumit started freelancing during his third year at the university and immediately got pulled into the diverse workspace and potential of this industry. His passion turned into a profession when he, together with a fellow classmate, formed Analyzen Bangladesh Limited – an unassuming software company based out of their hall room. Now after 14 years, the very company, turned out to be the pioneer ushering in the era of technology driven marketing solutions in Bangladesh, caters to a wide spectrum of corporate brands with the largest portfolio in the market with Sumit Saha at its helm as the Managing Director."

const matches = sentence.match(/sumit/gi);
console.log(matches);
console.log(matches.length);