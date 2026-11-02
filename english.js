/*
 * English reading and writing test practice data.
 *
 * Vocabulary (public domain, U.S. government works), USCIS rev. 07/14:
 *   Reading: https://www.uscis.gov/sites/default/files/document/questions-and-answers/reading_vocab.txt
 *   Writing: https://www.uscis.gov/sites/default/files/document/questions-and-answers/writing_vocab.txt
 *
 * USCIS does not publish the sentences used in the test. The practice
 * sentences below were written for this app using only words from the
 * official lists (each reading sentence uses only reading-list words, each
 * writing sentence only writing-list words), in the same style: the officer
 * shows a question to read, and dictates an answer-style sentence to write.
 */
window.ENGLISH_DATA = {
  sources: {
    reading: "https://www.uscis.gov/sites/default/files/document/questions-and-answers/reading_vocab.txt",
    writing: "https://www.uscis.gov/sites/default/files/document/questions-and-answers/writing_vocab.txt",
  },
  readingVocab: [
    ["People", ["Abraham Lincoln", "George Washington"]],
    ["Civics", ["American flag", "Bill of Rights", "capital", "citizen", "city", "Congress", "country", "Father of Our Country", "government", "President", "right", "Senators", "state/states", "White House"]],
    ["Places", ["America", "United States", "U.S."]],
    ["Holidays", ["Presidents' Day", "Memorial Day", "Flag Day", "Independence Day", "Labor Day", "Columbus Day", "Thanksgiving"]],
    ["Question words", ["How", "What", "When", "Where", "Who", "Why"]],
    ["Verbs", ["can", "come", "do/does", "elects", "have/has", "is/are/was/be", "lives/lived", "meet", "name", "pay", "vote", "want"]],
    ["Other (function)", ["a", "for", "here", "in", "of", "on", "the", "to", "we"]],
    ["Other (content)", ["colors", "dollar bill", "first", "largest", "many", "most", "north", "one", "people", "second", "south"]],
  ],
  writingVocab: [
    ["People", ["Adams", "Lincoln", "Washington"]],
    ["Civics", ["American Indians", "capital", "citizens", "Civil War", "Congress", "Father of Our Country", "flag", "free", "freedom of speech", "President", "right", "Senators", "state/states", "White House"]],
    ["Places", ["Alaska", "California", "Canada", "Delaware", "Mexico", "New York City", "United States", "Washington", "Washington, D.C."]],
    ["Months", ["February", "May", "June", "July", "September", "October", "November"]],
    ["Holidays", ["Presidents' Day", "Memorial Day", "Flag Day", "Independence Day", "Labor Day", "Columbus Day", "Thanksgiving"]],
    ["Verbs", ["can", "come", "elect", "have/has", "is/was/be", "lives/lived", "meets", "pay", "vote", "want"]],
    ["Other (function)", ["and", "during", "for", "here", "in", "of", "on", "the", "to", "we"]],
    ["Other (content)", ["blue", "dollar bill", "fifty/50", "first", "largest", "most", "north", "one", "one hundred/100", "people", "red", "second", "south", "taxes", "white"]],
  ],
  // Practice sentences to read aloud (questions).
  reading: [
    "Who was the first President?",
    "Who was the second President?",
    "Who is the Father of Our Country?",
    "Who was Abraham Lincoln?",
    "What is the capital of the United States?",
    "Where is the White House?",
    "Who lives in the White House?",
    "When is Presidents' Day?",
    "When is Memorial Day?",
    "When is Flag Day?",
    "When is Independence Day?",
    "When is Labor Day?",
    "When is Columbus Day?",
    "When is Thanksgiving?",
    "What are the colors of the American flag?",
    "Who is on the dollar bill?",
    "What is the largest state?",
    "What state has the most people?",
    "Where does Congress meet?",
    "When does Congress meet?",
    "How many Senators does Congress have?",
    "Who can vote?",
    "Why do people want to vote?",
    "Why do people come to America?",
    "What is the Bill of Rights?",
    "What is one right in the Bill of Rights?",
    "What country is north of the United States?",
    "What country is south of the United States?",
    "How many states are in the United States?",
    "Where do Senators meet?",
  ],
  // Practice sentences to write from dictation (answer-style).
  writing: [
    "Washington was the first President.",
    "Adams was the second President.",
    "Washington is the Father of Our Country.",
    "Lincoln was President during the Civil War.",
    "Washington, D.C. is the capital of the United States.",
    "The White House is in Washington, D.C.",
    "The President lives in the White House.",
    "Presidents' Day is in February.",
    "Memorial Day is in May.",
    "Flag Day is in June.",
    "Independence Day is in July.",
    "Labor Day is in September.",
    "Columbus Day is in October.",
    "Thanksgiving is in November.",
    "The flag is red, white, and blue.",
    "Washington is on the dollar bill.",
    "Alaska is the largest state.",
    "California has the most people.",
    "Congress meets in Washington, D.C.",
    "Congress has one hundred Senators.",
    "The United States has fifty states.",
    "Citizens can vote.",
    "Citizens elect Congress.",
    "People pay taxes.",
    "People have freedom of speech.",
    "People want to be free.",
    "American Indians lived here first.",
    "Delaware was the first state.",
    "New York City was the first capital of the United States.",
    "Canada is north of the United States.",
    "Mexico is south of the United States.",
    "We elect the President in November.",
  ],
};
