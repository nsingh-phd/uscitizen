/*
 * US naturalization civics test questions and answers.
 *
 * Source (public domain, U.S. government works):
 *   2025 version - USCIS M-1778 (09/25), "128 Civics Questions and Answers (2025 version)"
 *     https://www.uscis.gov/sites/default/files/document/questions-and-answers/2025-Civics-Test-128-Questions-and-Answers.pdf
 *   2008 version - USCIS (rev. 01/19), "Civics (History and Government) Questions for the Naturalization Test"
 *     https://www.uscis.gov/sites/default/files/document/questions-and-answers/100q.pdf
 *   Answers that change with elections/appointments ("updates": true) come from
 *     https://www.uscis.gov/citizenship/testupdates (page last updated 09/18/2025).
 *
 * Questions marked "star" are the 65/20 special-consideration questions.
 * Questions with "local" depend on where the applicant lives and are answered
 * by the user in the browser (saved only in localStorage, never sent anywhere).
 */
window.CIVICS_META = {
  testUpdatesLastUpdated: "09/18/2025",
  testUpdatesUrl: "https://www.uscis.gov/citizenship/testupdates",
};
window.CIVICS_DATA = {
 "2025": [
  {
   "n": 1,
   "part": "American Government",
   "section": "Principles of American Government",
   "q": "What is the form of government of the United States?",
   "a": [
    "Republic",
    "Constitution-based federal republic",
    "Representative democracy"
   ]
  },
  {
   "n": 2,
   "part": "American Government",
   "section": "Principles of American Government",
   "q": "What is the supreme law of the land?",
   "star": true,
   "a": [
    "(U.S.) Constitution"
   ]
  },
  {
   "n": 3,
   "part": "American Government",
   "section": "Principles of American Government",
   "q": "Name one thing the U.S. Constitution does.",
   "a": [
    "Forms the government",
    "Defines powers of government",
    "Defines the parts of government",
    "Protects the rights of the people"
   ]
  },
  {
   "n": 4,
   "part": "American Government",
   "section": "Principles of American Government",
   "q": "The U.S. Constitution starts with the words “We the People.” What does “We the People” mean?",
   "a": [
    "Self-government",
    "Popular sovereignty",
    "Consent of the governed",
    "People should govern themselves",
    "(Example of) social contract"
   ]
  },
  {
   "n": 5,
   "part": "American Government",
   "section": "Principles of American Government",
   "q": "How are changes made to the U.S. Constitution?",
   "a": [
    "Amendments",
    "The amendment process"
   ]
  },
  {
   "n": 6,
   "part": "American Government",
   "section": "Principles of American Government",
   "q": "What does the Bill of Rights protect?",
   "a": [
    "(The basic) rights of Americans",
    "(The basic) rights of people living in the United States"
   ]
  },
  {
   "n": 7,
   "part": "American Government",
   "section": "Principles of American Government",
   "q": "How many amendments does the U.S. Constitution have?",
   "star": true,
   "a": [
    "Twenty-seven (27)"
   ]
  },
  {
   "n": 8,
   "part": "American Government",
   "section": "Principles of American Government",
   "q": "Why is the Declaration of Independence important?",
   "a": [
    "It says America is free from British control.",
    "It says all people are created equal.",
    "It identifies inherent rights.",
    "It identifies individual freedoms."
   ]
  },
  {
   "n": 9,
   "part": "American Government",
   "section": "Principles of American Government",
   "q": "What founding document said the American colonies were free from Britain?",
   "a": [
    "Declaration of Independence"
   ]
  },
  {
   "n": 10,
   "part": "American Government",
   "section": "Principles of American Government",
   "q": "Name two important ideas from the Declaration of Independence and the U.S. Constitution.",
   "a": [
    "Equality",
    "Liberty",
    "Social contract",
    "Natural rights",
    "Limited government",
    "Self-government"
   ]
  },
  {
   "n": 11,
   "part": "American Government",
   "section": "Principles of American Government",
   "q": "The words “Life, Liberty, and the pursuit of Happiness” are in what founding document?",
   "a": [
    "Declaration of Independence"
   ]
  },
  {
   "n": 12,
   "part": "American Government",
   "section": "Principles of American Government",
   "q": "What is the economic system of the United States?",
   "star": true,
   "a": [
    "Capitalism",
    "Free market economy"
   ]
  },
  {
   "n": 13,
   "part": "American Government",
   "section": "Principles of American Government",
   "q": "What is the rule of law?",
   "a": [
    "Everyone must follow the law.",
    "Leaders must obey the law.",
    "Government must obey the law.",
    "No one is above the law."
   ]
  },
  {
   "n": 14,
   "part": "American Government",
   "section": "Principles of American Government",
   "q": "Many documents influenced the U.S. Constitution. Name one.",
   "a": [
    "Declaration of Independence",
    "Articles of Confederation",
    "Federalist Papers",
    "Anti-Federalist Papers",
    "Virginia Declaration of Rights",
    "Fundamental Orders of Connecticut",
    "Mayflower Compact",
    "Iroquois Great Law of Peace"
   ]
  },
  {
   "n": 15,
   "part": "American Government",
   "section": "Principles of American Government",
   "q": "There are three branches of government. Why?",
   "a": [
    "So one part does not become too powerful",
    "Checks and balances",
    "Separation of powers"
   ]
  },
  {
   "n": 16,
   "part": "American Government",
   "section": "System of Government",
   "q": "Name the three branches of government.",
   "a": [
    "Legislative, executive, and judicial",
    "Congress, president, and the courts"
   ]
  },
  {
   "n": 17,
   "part": "American Government",
   "section": "System of Government",
   "q": "The President of the United States is in charge of which branch of government?",
   "a": [
    "Executive branch"
   ]
  },
  {
   "n": 18,
   "part": "American Government",
   "section": "System of Government",
   "q": "What part of the federal government writes laws?",
   "a": [
    "(U.S.) Congress",
    "(U.S. or national) legislature",
    "Legislative branch"
   ]
  },
  {
   "n": 19,
   "part": "American Government",
   "section": "System of Government",
   "q": "What are the two parts of the U.S. Congress?",
   "a": [
    "Senate and House (of Representatives)"
   ]
  },
  {
   "n": 20,
   "part": "American Government",
   "section": "System of Government",
   "q": "Name one power of the U.S. Congress.",
   "star": true,
   "a": [
    "Writes laws",
    "Declares war",
    "Makes the federal budget"
   ]
  },
  {
   "n": 21,
   "part": "American Government",
   "section": "System of Government",
   "q": "How many U.S. senators are there?",
   "a": [
    "One hundred (100)"
   ]
  },
  {
   "n": 22,
   "part": "American Government",
   "section": "System of Government",
   "q": "How long is a term for a U.S. senator?",
   "a": [
    "Six (6) years"
   ]
  },
  {
   "n": 23,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who is one of your state’s U.S. senators now?",
   "a": [],
   "note": "District of Columbia residents and residents of U.S. territories should answer that D.C. (or the territory where the applicant lives) has no U.S. senators.",
   "local": "senator"
  },
  {
   "n": 24,
   "part": "American Government",
   "section": "System of Government",
   "q": "How many voting members are in the House of Representatives?",
   "a": [
    "Four hundred thirty-five (435)"
   ]
  },
  {
   "n": 25,
   "part": "American Government",
   "section": "System of Government",
   "q": "How long is a term for a member of the House of Representatives?",
   "a": [
    "Two (2) years"
   ]
  },
  {
   "n": 26,
   "part": "American Government",
   "section": "System of Government",
   "q": "Why do U.S. representatives serve shorter terms than U.S. senators?",
   "a": [
    "To more closely follow public opinion"
   ]
  },
  {
   "n": 27,
   "part": "American Government",
   "section": "System of Government",
   "q": "How many senators does each state have?",
   "a": [
    "Two (2)"
   ]
  },
  {
   "n": 28,
   "part": "American Government",
   "section": "System of Government",
   "q": "Why does each state have two senators?",
   "a": [
    "Equal representation (for small states)",
    "The Great Compromise (Connecticut Compromise)"
   ]
  },
  {
   "n": 29,
   "part": "American Government",
   "section": "System of Government",
   "q": "Name your U.S. representative.",
   "a": [],
   "note": "Residents of territories with nonvoting Delegates or Resident Commissioners may provide the name of that Delegate or Commissioner. Also acceptable is any statement that the territory has no (voting) representatives in Congress.",
   "local": "representative"
  },
  {
   "n": 30,
   "part": "American Government",
   "section": "System of Government",
   "q": "What is the name of the Speaker of the House of Representatives now?",
   "star": true,
   "a": [
    "Mike Johnson",
    "Johnson",
    "James Michael Johnson (birth name)"
   ],
   "updates": true
  },
  {
   "n": 31,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who does a U.S. senator represent?",
   "a": [
    "Citizens of their state",
    "People of their state"
   ]
  },
  {
   "n": 32,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who elects U.S. senators?",
   "a": [
    "Citizens from their state"
   ]
  },
  {
   "n": 33,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who does a member of the House of Representatives represent?",
   "a": [
    "Citizens in their (congressional) district",
    "Citizens in their district",
    "People from their (congressional) district",
    "People in their district"
   ]
  },
  {
   "n": 34,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who elects members of the House of Representatives?",
   "a": [
    "Citizens from their (congressional) district"
   ]
  },
  {
   "n": 35,
   "part": "American Government",
   "section": "System of Government",
   "q": "Some states have more representatives than other states. Why?",
   "a": [
    "(Because of) the state’s population",
    "(Because) they have more people",
    "(Because) some states have more people"
   ]
  },
  {
   "n": 36,
   "part": "American Government",
   "section": "System of Government",
   "q": "The President of the United States is elected for how many years?",
   "star": true,
   "a": [
    "Four (4) years"
   ]
  },
  {
   "n": 37,
   "part": "American Government",
   "section": "System of Government",
   "q": "The President of the United States can serve only two terms. Why?",
   "a": [
    "(Because of) the 22nd Amendment",
    "To keep the president from becoming too powerful"
   ]
  },
  {
   "n": 38,
   "part": "American Government",
   "section": "System of Government",
   "q": "What is the name of the President of the United States now?",
   "star": true,
   "a": [
    "Donald J. Trump",
    "Donald Trump",
    "Trump"
   ],
   "updates": true
  },
  {
   "n": 39,
   "part": "American Government",
   "section": "System of Government",
   "q": "What is the name of the Vice President of the United States now?",
   "star": true,
   "a": [
    "JD Vance",
    "Vance"
   ],
   "updates": true
  },
  {
   "n": 40,
   "part": "American Government",
   "section": "System of Government",
   "q": "If the president can no longer serve, who becomes president?",
   "a": [
    "The Vice President (of the United States)"
   ]
  },
  {
   "n": 41,
   "part": "American Government",
   "section": "System of Government",
   "q": "Name one power of the president.",
   "a": [
    "Signs bills into law",
    "Vetoes bills",
    "Enforces laws",
    "Commander in Chief (of the military)",
    "Chief diplomat",
    "Appoints federal judges"
   ]
  },
  {
   "n": 42,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who is Commander in Chief of the U.S. military?",
   "a": [
    "The President (of the United States)"
   ]
  },
  {
   "n": 43,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who signs bills to become laws?",
   "a": [
    "The President (of the United States)"
   ]
  },
  {
   "n": 44,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who vetoes bills?",
   "star": true,
   "a": [
    "The President (of the United States)"
   ]
  },
  {
   "n": 45,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who appoints federal judges?",
   "a": [
    "The President (of the United States)"
   ]
  },
  {
   "n": 46,
   "part": "American Government",
   "section": "System of Government",
   "q": "The executive branch has many parts. Name one.",
   "a": [
    "President (of the United States)",
    "Cabinet",
    "Federal departments and agencies"
   ]
  },
  {
   "n": 47,
   "part": "American Government",
   "section": "System of Government",
   "q": "What does the President’s Cabinet do?",
   "a": [
    "Advises the President (of the United States)"
   ]
  },
  {
   "n": 48,
   "part": "American Government",
   "section": "System of Government",
   "q": "What are two Cabinet-level positions?",
   "a": [
    "Attorney General",
    "Secretary of Agriculture",
    "Secretary of Commerce",
    "Secretary of Education",
    "Secretary of Energy",
    "Secretary of Health and Human Services",
    "Secretary of Homeland Security",
    "Secretary of Housing and Urban Development",
    "Secretary of the Interior",
    "Secretary of Labor",
    "Secretary of State",
    "Secretary of Transportation",
    "Secretary of the Treasury",
    "Secretary of Veterans Affairs",
    "Secretary of War (Defense)",
    "Vice-President",
    "Administrator of the Environmental Protection Agency",
    "Administrator of the Small Business Administration",
    "Director of the Central Intelligence Agency",
    "Director of the Office of Management and Budget",
    "Director of National Intelligence",
    "United States Trade Representative"
   ]
  },
  {
   "n": 49,
   "part": "American Government",
   "section": "System of Government",
   "q": "Why is the Electoral College important?",
   "a": [
    "It decides who is elected president.",
    "It provides a compromise between the popular election of the president and congressional selection."
   ]
  },
  {
   "n": 50,
   "part": "American Government",
   "section": "System of Government",
   "q": "What is one part of the judicial branch?",
   "a": [
    "Supreme Court",
    "Federal Courts"
   ]
  },
  {
   "n": 51,
   "part": "American Government",
   "section": "System of Government",
   "q": "What does the judicial branch do?",
   "a": [
    "Reviews laws",
    "Explains laws",
    "Resolves disputes (disagreements) about the law",
    "Decides if a law goes against the (U.S.) Constitution"
   ]
  },
  {
   "n": 52,
   "part": "American Government",
   "section": "System of Government",
   "q": "What is the highest court in the United States?",
   "star": true,
   "a": [
    "Supreme Court"
   ]
  },
  {
   "n": 53,
   "part": "American Government",
   "section": "System of Government",
   "q": "How many seats are on the Supreme Court?",
   "a": [
    "Nine (9)"
   ]
  },
  {
   "n": 54,
   "part": "American Government",
   "section": "System of Government",
   "q": "How many Supreme Court justices are usually needed to decide a case?",
   "a": [
    "Five (5)"
   ]
  },
  {
   "n": 55,
   "part": "American Government",
   "section": "System of Government",
   "q": "How long do Supreme Court justices serve?",
   "a": [
    "(For) life",
    "Lifetime appointment",
    "(Until) retirement"
   ]
  },
  {
   "n": 56,
   "part": "American Government",
   "section": "System of Government",
   "q": "Supreme Court justices serve for life. Why?",
   "a": [
    "To be independent (of politics)",
    "To limit outside (political) influence"
   ]
  },
  {
   "n": 57,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who is the Chief Justice of the United States now?",
   "a": [
    "John Roberts",
    "John G. Roberts, Jr.",
    "Roberts"
   ],
   "updates": true
  },
  {
   "n": 58,
   "part": "American Government",
   "section": "System of Government",
   "q": "Name one power that is only for the federal government.",
   "a": [
    "Print paper money",
    "Mint coins",
    "Declare war",
    "Create an army",
    "Make treaties",
    "Set foreign policy"
   ]
  },
  {
   "n": 59,
   "part": "American Government",
   "section": "System of Government",
   "q": "Name one power that is only for the states.",
   "a": [
    "Provide schooling and education",
    "Provide protection (police)",
    "Provide safety (fire departments)",
    "Give a driver’s license",
    "Approve zoning and land use"
   ]
  },
  {
   "n": 60,
   "part": "American Government",
   "section": "System of Government",
   "q": "What is the purpose of the 10th Amendment?",
   "a": [
    "(It states that the) powers not given to the federal government belong to the states or to the people."
   ]
  },
  {
   "n": 61,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who is the governor of your state now?",
   "star": true,
   "a": [],
   "note": "District of Columbia residents should answer that D.C. does not have a governor.",
   "local": "governor"
  },
  {
   "n": 62,
   "part": "American Government",
   "section": "System of Government",
   "q": "What is the capital of your state?",
   "a": [],
   "note": "District of Columbia residents should answer that D.C. is not a state and does not have a capital. Residents of U.S. territories should name the capital of the territory.",
   "local": "capital"
  },
  {
   "n": 63,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "There are four amendments to the U.S. Constitution about who can vote. Describe one of them.",
   "a": [
    "Citizens eighteen (18) and older (can vote).",
    "You don’t have to pay (a poll tax) to vote.",
    "Any citizen can vote. (Women and men can vote.)",
    "A male citizen of any race (can vote)."
   ]
  },
  {
   "n": 64,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "Who can vote in federal elections, run for federal office, and serve on a jury in the United States?",
   "a": [
    "Citizens",
    "Citizens of the United States",
    "U.S. citizens"
   ]
  },
  {
   "n": 65,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "What are three rights of everyone living in the United States?",
   "a": [
    "Freedom of expression",
    "Freedom of speech",
    "Freedom of assembly",
    "Freedom to petition the government",
    "Freedom of religion",
    "The right to bear arms"
   ]
  },
  {
   "n": 66,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "What do we show loyalty to when we say the Pledge of Allegiance?",
   "star": true,
   "a": [
    "The United States",
    "The flag"
   ]
  },
  {
   "n": 67,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "Name two promises that new citizens make in the Oath of Allegiance.",
   "a": [
    "Give up loyalty to other countries",
    "Defend the (U.S.) Constitution",
    "Obey the laws of the United States",
    "Serve in the military (if needed)",
    "Serve (help, do important work for) the nation (if needed)",
    "Be loyal to the United States"
   ]
  },
  {
   "n": 68,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "How can people become United States citizens?",
   "a": [
    "Be born in the United States, under the conditions set by the 14th Amendment",
    "Naturalize",
    "Derive citizenship (under conditions set by Congress)"
   ]
  },
  {
   "n": 69,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "What are two examples of civic participation in the United States?",
   "a": [
    "Vote",
    "Run for office",
    "Join a political party",
    "Help with a campaign",
    "Join a civic group",
    "Join a community group",
    "Give an elected official your opinion (on an issue)",
    "Contact elected officials",
    "Support or oppose an issue or policy",
    "Write to a newspaper"
   ]
  },
  {
   "n": 70,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "What is one way Americans can serve their country?",
   "a": [
    "Vote",
    "Pay taxes",
    "Obey the law",
    "Serve in the military",
    "Run for office",
    "Work for local, state, or federal government"
   ]
  },
  {
   "n": 71,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "Why is it important to pay federal taxes?",
   "a": [
    "Required by law",
    "All people pay to fund the federal government",
    "Required by the (U.S.) Constitution (16th Amendment)",
    "Civic duty"
   ]
  },
  {
   "n": 72,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "It is important for all men age 18 through 25 to register for the Selective Service. Name one reason why.",
   "a": [
    "Required by law",
    "Civic duty",
    "Makes the draft fair, if needed"
   ]
  },
  {
   "n": 73,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "The colonists came to America for many reasons. Name one.",
   "a": [
    "Freedom",
    "Political liberty",
    "Religious freedom",
    "Economic opportunity",
    "Escape persecution"
   ]
  },
  {
   "n": 74,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "Who lived in America before the Europeans arrived?",
   "star": true,
   "a": [
    "American Indians",
    "Native Americans"
   ]
  },
  {
   "n": 75,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "What group of people was taken and sold as slaves?",
   "a": [
    "Africans",
    "People from Africa"
   ]
  },
  {
   "n": 76,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "What war did the Americans fight to win independence from Britain?",
   "a": [
    "American Revolution",
    "The (American) Revolutionary War",
    "War for (American) Independence"
   ]
  },
  {
   "n": 77,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "Name one reason why the Americans declared independence from Britain.",
   "a": [
    "High taxes",
    "Taxation without representation",
    "British soldiers stayed in Americans’ houses (boarding, quartering)",
    "They did not have self-government",
    "Boston Massacre",
    "Boston Tea Party (Tea Act)",
    "Stamp Act",
    "Sugar Act",
    "Townshend Acts",
    "Intolerable (Coercive) Acts"
   ]
  },
  {
   "n": 78,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "Who wrote the Declaration of Independence?",
   "star": true,
   "a": [
    "(Thomas) Jefferson"
   ]
  },
  {
   "n": 79,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "When was the Declaration of Independence adopted?",
   "a": [
    "July 4, 1776"
   ]
  },
  {
   "n": 80,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "The American Revolution had many important events. Name one.",
   "a": [
    "(Battle of) Bunker Hill",
    "Declaration of Independence",
    "Washington Crossing the Delaware (Battle of Trenton)",
    "(Battle of) Saratoga",
    "Valley Forge (Encampment)",
    "(Battle of) Yorktown (British surrender at Yorktown)"
   ]
  },
  {
   "n": 81,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "There were 13 original states. Name five.",
   "a": [
    "New Hampshire",
    "Massachusetts",
    "Rhode Island",
    "Connecticut",
    "New York",
    "New Jersey",
    "Pennsylvania",
    "Delaware",
    "Maryland",
    "Virginia",
    "North Carolina",
    "South Carolina",
    "Georgia"
   ]
  },
  {
   "n": 82,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "What founding document was written in 1787?",
   "a": [
    "(U.S.) Constitution"
   ]
  },
  {
   "n": 83,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
   "a": [
    "(James) Madison",
    "(Alexander) Hamilton",
    "(John) Jay",
    "Publius"
   ]
  },
  {
   "n": 84,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "Why were the Federalist Papers important?",
   "a": [
    "They helped people understand the (U.S.) Constitution.",
    "They supported passing the (U.S.) Constitution."
   ]
  },
  {
   "n": 85,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "Benjamin Franklin is famous for many things. Name one.",
   "a": [
    "Founded the first free public libraries",
    "First Postmaster General of the United States",
    "Helped write the Declaration of Independence",
    "Inventor",
    "U.S. diplomat"
   ]
  },
  {
   "n": 86,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "George Washington is famous for many things. Name one.",
   "star": true,
   "a": [
    "“Father of Our Country”",
    "First president of the United States",
    "General of the Continental Army",
    "President of the Constitutional Convention"
   ]
  },
  {
   "n": 87,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "Thomas Jefferson is famous for many things. Name one.",
   "a": [
    "Writer of the Declaration of Independence",
    "Third president of the United States",
    "Doubled the size of the United States (Louisiana Purchase)",
    "First Secretary of State",
    "Founded the University of Virginia",
    "Writer of the Virginia Statute on Religious Freedom"
   ]
  },
  {
   "n": 88,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "James Madison is famous for many things. Name one.",
   "a": [
    "“Father of the Constitution”",
    "Fourth president of the United States",
    "President during the War of 1812",
    "One of the writers of the Federalist Papers"
   ]
  },
  {
   "n": 89,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "Alexander Hamilton is famous for many things. Name one.",
   "a": [
    "First Secretary of the Treasury",
    "One of the writers of the Federalist Papers",
    "Helped establish the First Bank of the United States",
    "Aide to General George Washington",
    "Member of the Continental Congress"
   ]
  },
  {
   "n": 90,
   "part": "American History",
   "section": "1800s",
   "q": "What territory did the United States buy from France in 1803?",
   "a": [
    "Louisiana Territory",
    "Louisiana"
   ]
  },
  {
   "n": 91,
   "part": "American History",
   "section": "1800s",
   "q": "Name one war fought by the United States in the 1800s.",
   "a": [
    "War of 1812",
    "Mexican-American War",
    "Civil War",
    "Spanish-American War"
   ]
  },
  {
   "n": 92,
   "part": "American History",
   "section": "1800s",
   "q": "Name the U.S. war between the North and the South.",
   "a": [
    "The Civil War"
   ]
  },
  {
   "n": 93,
   "part": "American History",
   "section": "1800s",
   "q": "The Civil War had many important events. Name one.",
   "a": [
    "(Battle of) Fort Sumter",
    "Emancipation Proclamation",
    "(Battle of) Vicksburg",
    "(Battle of) Gettysburg",
    "Sherman’s March",
    "(Surrender at) Appomattox",
    "(Battle of) Antietam/Sharpsburg",
    "Lincoln was assassinated."
   ]
  },
  {
   "n": 94,
   "part": "American History",
   "section": "1800s",
   "q": "Abraham Lincoln is famous for many things. Name one.",
   "star": true,
   "a": [
    "Freed the slaves (Emancipation Proclamation)",
    "Saved (or preserved) the Union",
    "Led the United States during the Civil War",
    "16th president of the United States",
    "Delivered the Gettysburg Address"
   ]
  },
  {
   "n": 95,
   "part": "American History",
   "section": "1800s",
   "q": "What did the Emancipation Proclamation do?",
   "a": [
    "Freed the slaves",
    "Freed slaves in the Confederacy",
    "Freed slaves in the Confederate states",
    "Freed slaves in most Southern states"
   ]
  },
  {
   "n": 96,
   "part": "American History",
   "section": "1800s",
   "q": "What U.S. war ended slavery?",
   "a": [
    "The Civil War"
   ]
  },
  {
   "n": 97,
   "part": "American History",
   "section": "1800s",
   "q": "What amendment says all persons born or naturalized in the United States, and subject to the jurisdiction thereof, are U.S. citizens?",
   "a": [
    "14th Amendment"
   ]
  },
  {
   "n": 98,
   "part": "American History",
   "section": "1800s",
   "q": "When did all men get the right to vote?",
   "a": [
    "After the Civil War",
    "During Reconstruction",
    "(With the) 15th Amendment",
    "1870"
   ]
  },
  {
   "n": 99,
   "part": "American History",
   "section": "1800s",
   "q": "Name one leader of the women’s rights movement in the 1800s.",
   "a": [
    "Susan B. Anthony",
    "Elizabeth Cady Stanton",
    "Sojourner Truth",
    "Harriet Tubman",
    "Lucretia Mott",
    "Lucy Stone"
   ]
  },
  {
   "n": 100,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Name one war fought by the United States in the 1900s.",
   "a": [
    "World War I",
    "World War II",
    "Korean War",
    "Vietnam War",
    "(Persian) Gulf War"
   ]
  },
  {
   "n": 101,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Why did the United States enter World War I?",
   "a": [
    "Because Germany attacked U.S. (civilian) ships",
    "To support the Allied Powers (England, France, Italy, and Russia)",
    "To oppose the Central Powers (Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria)"
   ]
  },
  {
   "n": 102,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "When did all women get the right to vote?",
   "a": [
    "1920",
    "After World War I",
    "(With the) 19th Amendment"
   ]
  },
  {
   "n": 103,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "What was the Great Depression?",
   "a": [
    "Longest economic recession in modern history"
   ]
  },
  {
   "n": 104,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "When did the Great Depression start?",
   "a": [
    "The Great Crash (1929)",
    "Stock market crash of 1929"
   ]
  },
  {
   "n": 105,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Who was president during the Great Depression and World War II?",
   "a": [
    "(Franklin) Roosevelt"
   ]
  },
  {
   "n": 106,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Why did the United States enter World War II?",
   "a": [
    "(Bombing of) Pearl Harbor",
    "Japanese attacked Pearl Harbor",
    "To support the Allied Powers (England, France, and Russia)",
    "To oppose the Axis Powers (Germany, Italy, and Japan)"
   ]
  },
  {
   "n": 107,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Dwight Eisenhower is famous for many things. Name one.",
   "a": [
    "General during World War II",
    "President at the end of (during) the Korean War",
    "34th president of the United States",
    "Signed the Federal-Aid Highway Act of 1956 (Created the Interstate System)"
   ]
  },
  {
   "n": 108,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Who was the United States’ main rival during the Cold War?",
   "a": [
    "Soviet Union",
    "USSR",
    "Russia"
   ]
  },
  {
   "n": 109,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "During the Cold War, what was one main concern of the United States?",
   "a": [
    "Communism",
    "Nuclear war"
   ]
  },
  {
   "n": 110,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Why did the United States enter the Korean War?",
   "a": [
    "To stop the spread of communism"
   ]
  },
  {
   "n": 111,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Why did the United States enter the Vietnam War?",
   "a": [
    "To stop the spread of communism"
   ]
  },
  {
   "n": 112,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "What did the civil rights movement do?",
   "a": [
    "Fought to end racial discrimination"
   ]
  },
  {
   "n": 113,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Martin Luther King, Jr. is famous for many things. Name one.",
   "star": true,
   "a": [
    "Fought for civil rights",
    "Worked for equality for all Americans",
    "Worked to ensure that people would “not be judged by the color of their skin, but by the content of their character”"
   ]
  },
  {
   "n": 114,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Why did the United States enter the Persian Gulf War?",
   "a": [
    "To force the Iraqi military from Kuwait"
   ]
  },
  {
   "n": 115,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "What major event happened on September 11, 2001 in the United States?",
   "star": true,
   "a": [
    "Terrorists attacked the United States",
    "Terrorists took over two planes and crashed them into the World Trade Center in New York City",
    "Terrorists took over a plane and crashed into the Pentagon in Arlington, Virginia",
    "Terrorists took over a plane originally aimed at Washington, D.C., and crashed in a field in Pennsylvania"
   ]
  },
  {
   "n": 116,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Name one U.S. military conflict after the September 11, 2001 attacks.",
   "a": [
    "(Global) War on Terror",
    "War in Afghanistan",
    "War in Iraq"
   ]
  },
  {
   "n": 117,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Name one American Indian tribe in the United States.",
   "a": [
    "Apache",
    "Blackfeet",
    "Cayuga",
    "Cherokee",
    "Cheyenne",
    "Chippewa",
    "Choctaw",
    "Creek",
    "Crow",
    "Hopi",
    "Huron",
    "Inupiat",
    "Lakota",
    "Mohawk",
    "Mohegan",
    "Navajo",
    "Oneida",
    "Onondaga",
    "Pueblo",
    "Seminole",
    "Seneca",
    "Shawnee",
    "Sioux",
    "Teton",
    "Tuscarora"
   ],
   "note": "For a complete list of tribes, please visit bia.gov."
  },
  {
   "n": 118,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Name one example of an American innovation.",
   "a": [
    "Light bulb",
    "Automobile (cars, internal combustion engine)",
    "Skyscrapers",
    "Airplane",
    "Assembly line",
    "Landing on the moon",
    "Integrated circuit (IC)"
   ]
  },
  {
   "n": 119,
   "part": "Symbols and Holidays",
   "section": "Symbols",
   "q": "What is the capital of the United States?",
   "a": [
    "Washington, D.C."
   ]
  },
  {
   "n": 120,
   "part": "Symbols and Holidays",
   "section": "Symbols",
   "q": "Where is the Statue of Liberty?",
   "a": [
    "New York (Harbor)",
    "Liberty Island"
   ],
   "note": "Also acceptable are New Jersey, near New York City, and on the Hudson (River)."
  },
  {
   "n": 121,
   "part": "Symbols and Holidays",
   "section": "Symbols",
   "q": "Why does the flag have 13 stripes?",
   "star": true,
   "a": [
    "(Because there were) 13 original colonies",
    "(Because the stripes) represent the original colonies"
   ]
  },
  {
   "n": 122,
   "part": "Symbols and Holidays",
   "section": "Symbols",
   "q": "Why does the flag have 50 stars?",
   "a": [
    "(Because there is) one star for each state",
    "(Because) each star represents a state",
    "(Because there are) 50 states"
   ]
  },
  {
   "n": 123,
   "part": "Symbols and Holidays",
   "section": "Symbols",
   "q": "What is the name of the national anthem?",
   "a": [
    "The Star-Spangled Banner"
   ]
  },
  {
   "n": 124,
   "part": "Symbols and Holidays",
   "section": "Symbols",
   "q": "The Nation’s first motto was “E Pluribus Unum.” What does that mean?",
   "a": [
    "Out of many, one",
    "We all become one"
   ]
  },
  {
   "n": 125,
   "part": "Symbols and Holidays",
   "section": "Holidays",
   "q": "What is Independence Day?",
   "a": [
    "A holiday to celebrate U.S. independence (from Britain)",
    "The country’s birthday"
   ]
  },
  {
   "n": 126,
   "part": "Symbols and Holidays",
   "section": "Holidays",
   "q": "Name three national U.S. holidays.",
   "star": true,
   "a": [
    "New Year’s Day",
    "Martin Luther King, Jr. Day",
    "Presidents Day (Washington’s Birthday)",
    "Memorial Day",
    "Juneteenth",
    "Independence Day",
    "Labor Day",
    "Columbus Day",
    "Veterans Day",
    "Thanksgiving Day",
    "Christmas Day"
   ]
  },
  {
   "n": 127,
   "part": "Symbols and Holidays",
   "section": "Holidays",
   "q": "What is Memorial Day?",
   "a": [
    "A holiday to honor soldiers who died in military service"
   ]
  },
  {
   "n": 128,
   "part": "Symbols and Holidays",
   "section": "Holidays",
   "q": "What is Veterans Day?",
   "a": [
    "A holiday to honor people in the (U.S.) military",
    "A holiday to honor people who have served (in the U.S. military)"
   ]
  }
 ],
 "2008": [
  {
   "n": 1,
   "part": "American Government",
   "section": "Principles of American Democracy",
   "q": "What is the supreme law of the land?",
   "a": [
    "the Constitution"
   ]
  },
  {
   "n": 2,
   "part": "American Government",
   "section": "Principles of American Democracy",
   "q": "What does the Constitution do?",
   "a": [
    "sets up the government",
    "defines the government",
    "protects basic rights of Americans"
   ]
  },
  {
   "n": 3,
   "part": "American Government",
   "section": "Principles of American Democracy",
   "q": "The idea of self-government is in the first three words of the Constitution. What are these words?",
   "a": [
    "We the People"
   ]
  },
  {
   "n": 4,
   "part": "American Government",
   "section": "Principles of American Democracy",
   "q": "What is an amendment?",
   "a": [
    "a change (to the Constitution)",
    "an addition (to the Constitution)"
   ]
  },
  {
   "n": 5,
   "part": "American Government",
   "section": "Principles of American Democracy",
   "q": "What do we call the first ten amendments to the Constitution?",
   "a": [
    "the Bill of Rights"
   ]
  },
  {
   "n": 6,
   "part": "American Government",
   "section": "Principles of American Democracy",
   "q": "What is one right or freedom from the First Amendment?",
   "star": true,
   "a": [
    "speech",
    "religion",
    "assembly",
    "press",
    "petition the government"
   ]
  },
  {
   "n": 7,
   "part": "American Government",
   "section": "Principles of American Democracy",
   "q": "How many amendments does the Constitution have?",
   "a": [
    "twenty-seven (27)"
   ]
  },
  {
   "n": 8,
   "part": "American Government",
   "section": "Principles of American Democracy",
   "q": "What did the Declaration of Independence do?",
   "a": [
    "announced our independence (from Great Britain)",
    "declared our independence (from Great Britain)",
    "said that the United States is free (from Great Britain)"
   ]
  },
  {
   "n": 9,
   "part": "American Government",
   "section": "Principles of American Democracy",
   "q": "What are two rights in the Declaration of Independence?",
   "a": [
    "life",
    "liberty",
    "pursuit of happiness"
   ]
  },
  {
   "n": 10,
   "part": "American Government",
   "section": "Principles of American Democracy",
   "q": "What is freedom of religion?",
   "a": [
    "You can practice any religion, or not practice a religion."
   ]
  },
  {
   "n": 11,
   "part": "American Government",
   "section": "Principles of American Democracy",
   "q": "What is the economic system in the United States?",
   "star": true,
   "a": [
    "capitalist economy",
    "market economy"
   ]
  },
  {
   "n": 12,
   "part": "American Government",
   "section": "Principles of American Democracy",
   "q": "What is the “rule of law”?",
   "a": [
    "Everyone must follow the law.",
    "Leaders must obey the law.",
    "Government must obey the law.",
    "No one is above the law."
   ]
  },
  {
   "n": 13,
   "part": "American Government",
   "section": "System of Government",
   "q": "Name one branch or part of the government.",
   "star": true,
   "a": [
    "Congress",
    "legislative",
    "President",
    "executive",
    "the courts",
    "judicial"
   ]
  },
  {
   "n": 14,
   "part": "American Government",
   "section": "System of Government",
   "q": "What stops one branch of government from becoming too powerful?",
   "a": [
    "checks and balances",
    "separation of powers"
   ]
  },
  {
   "n": 15,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who is in charge of the executive branch?",
   "a": [
    "the President"
   ]
  },
  {
   "n": 16,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who makes federal laws?",
   "a": [
    "Congress",
    "Senate and House (of Representatives)",
    "(U.S. or national) legislature"
   ]
  },
  {
   "n": 17,
   "part": "American Government",
   "section": "System of Government",
   "q": "What are the two parts of the U.S. Congress?",
   "star": true,
   "a": [
    "the Senate and House (of Representatives)"
   ]
  },
  {
   "n": 18,
   "part": "American Government",
   "section": "System of Government",
   "q": "How many U.S. Senators are there?",
   "a": [
    "one hundred (100)"
   ]
  },
  {
   "n": 19,
   "part": "American Government",
   "section": "System of Government",
   "q": "We elect a U.S. Senator for how many years?",
   "a": [
    "six (6)"
   ]
  },
  {
   "n": 20,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who is one of your state’s U.S. Senators now?",
   "star": true,
   "a": [],
   "note": "District of Columbia residents and residents of U.S. territories should answer that D.C. (or the territory where the applicant lives) has no U.S. Senators.",
   "local": "senator"
  },
  {
   "n": 21,
   "part": "American Government",
   "section": "System of Government",
   "q": "The House of Representatives has how many voting members?",
   "a": [
    "four hundred thirty-five (435)"
   ]
  },
  {
   "n": 22,
   "part": "American Government",
   "section": "System of Government",
   "q": "We elect a U.S. Representative for how many years?",
   "a": [
    "two (2)"
   ]
  },
  {
   "n": 23,
   "part": "American Government",
   "section": "System of Government",
   "q": "Name your U.S. Representative.",
   "a": [],
   "note": "Residents of territories with nonvoting Delegates or Resident Commissioners may provide the name of that Delegate or Commissioner. Also acceptable is any statement that the territory has no (voting) Representatives in Congress.",
   "local": "representative"
  },
  {
   "n": 24,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who does a U.S. Senator represent?",
   "a": [
    "all people of the state"
   ]
  },
  {
   "n": 25,
   "part": "American Government",
   "section": "System of Government",
   "q": "Why do some states have more Representatives than other states?",
   "a": [
    "(because of) the state’s population",
    "(because) they have more people",
    "(because) some states have more people"
   ]
  },
  {
   "n": 26,
   "part": "American Government",
   "section": "System of Government",
   "q": "We elect a President for how many years?",
   "a": [
    "four (4)"
   ]
  },
  {
   "n": 27,
   "part": "American Government",
   "section": "System of Government",
   "q": "In what month do we vote for President?",
   "star": true,
   "a": [
    "November"
   ]
  },
  {
   "n": 28,
   "part": "American Government",
   "section": "System of Government",
   "q": "What is the name of the President of the United States now?",
   "star": true,
   "a": [
    "Donald J. Trump",
    "Donald Trump",
    "Trump"
   ],
   "updates": true
  },
  {
   "n": 29,
   "part": "American Government",
   "section": "System of Government",
   "q": "What is the name of the Vice President of the United States now?",
   "a": [
    "JD Vance",
    "Vance"
   ],
   "updates": true
  },
  {
   "n": 30,
   "part": "American Government",
   "section": "System of Government",
   "q": "If the President can no longer serve, who becomes President?",
   "a": [
    "the Vice President"
   ]
  },
  {
   "n": 31,
   "part": "American Government",
   "section": "System of Government",
   "q": "If both the President and the Vice President can no longer serve, who becomes President?",
   "a": [
    "the Speaker of the House"
   ]
  },
  {
   "n": 32,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who is the Commander in Chief of the military?",
   "a": [
    "the President"
   ]
  },
  {
   "n": 33,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who signs bills to become laws?",
   "a": [
    "the President"
   ]
  },
  {
   "n": 34,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who vetoes bills?",
   "a": [
    "the President"
   ]
  },
  {
   "n": 35,
   "part": "American Government",
   "section": "System of Government",
   "q": "What does the President’s Cabinet do?",
   "a": [
    "advises the President"
   ]
  },
  {
   "n": 36,
   "part": "American Government",
   "section": "System of Government",
   "q": "What are two Cabinet-level positions?",
   "a": [
    "Secretary of Agriculture",
    "Secretary of Commerce",
    "Secretary of Defense",
    "Secretary of Education",
    "Secretary of Energy",
    "Secretary of Health and Human Services",
    "Secretary of Homeland Security",
    "Secretary of Housing and Urban Development",
    "Secretary of the Interior",
    "Secretary of Labor",
    "Secretary of State",
    "Secretary of Transportation",
    "Secretary of the Treasury",
    "Secretary of Veterans Affairs",
    "Attorney General",
    "Vice President"
   ]
  },
  {
   "n": 37,
   "part": "American Government",
   "section": "System of Government",
   "q": "What does the judicial branch do?",
   "a": [
    "reviews laws",
    "explains laws",
    "resolves disputes (disagreements)",
    "decides if a law goes against the Constitution"
   ]
  },
  {
   "n": 38,
   "part": "American Government",
   "section": "System of Government",
   "q": "What is the highest court in the United States?",
   "a": [
    "the Supreme Court"
   ]
  },
  {
   "n": 39,
   "part": "American Government",
   "section": "System of Government",
   "q": "How many justices are on the Supreme Court?",
   "a": [
    "Nine (9)"
   ],
   "updates": true
  },
  {
   "n": 40,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who is the Chief Justice of the United States now?",
   "a": [
    "John Roberts",
    "John G. Roberts, Jr."
   ],
   "updates": true
  },
  {
   "n": 41,
   "part": "American Government",
   "section": "System of Government",
   "q": "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
   "a": [
    "to print money",
    "to declare war",
    "to create an army",
    "to make treaties"
   ]
  },
  {
   "n": 42,
   "part": "American Government",
   "section": "System of Government",
   "q": "Under our Constitution, some powers belong to the states. What is one power of the states?",
   "a": [
    "provide schooling and education",
    "provide protection (police)",
    "provide safety (fire departments)",
    "give a driver’s license",
    "approve zoning and land use"
   ]
  },
  {
   "n": 43,
   "part": "American Government",
   "section": "System of Government",
   "q": "Who is the Governor of your state now?",
   "a": [],
   "note": "District of Columbia residents should answer that D.C. does not have a Governor.",
   "local": "governor"
  },
  {
   "n": 44,
   "part": "American Government",
   "section": "System of Government",
   "q": "What is the capital of your state?",
   "star": true,
   "a": [],
   "note": "District of Columbia residents should answer that D.C. is not a state and does not have a capital. Residents of U.S. territories should name the capital of the territory.",
   "local": "capital"
  },
  {
   "n": 45,
   "part": "American Government",
   "section": "System of Government",
   "q": "What are the two major political parties in the United States?",
   "star": true,
   "a": [
    "Democratic and Republican"
   ]
  },
  {
   "n": 46,
   "part": "American Government",
   "section": "System of Government",
   "q": "What is the political party of the President now?",
   "a": [
    "Republican (Party)"
   ],
   "updates": true
  },
  {
   "n": 47,
   "part": "American Government",
   "section": "System of Government",
   "q": "What is the name of the Speaker of the House of Representatives now?",
   "a": [
    "Mike Johnson",
    "Johnson",
    "James Michael Johnson (birth name)"
   ],
   "updates": true
  },
  {
   "n": 48,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "There are four amendments to the Constitution about who can vote. Describe one of them.",
   "a": [
    "Citizens eighteen (18) and older (can vote).",
    "You don’t have to pay (a poll tax) to vote.",
    "Any citizen can vote. (Women and men can vote.)",
    "A male citizen of any race (can vote)."
   ]
  },
  {
   "n": 49,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "What is one responsibility that is only for United States citizens?",
   "star": true,
   "a": [
    "serve on a jury",
    "vote in a federal election"
   ]
  },
  {
   "n": 50,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "Name one right only for United States citizens.",
   "a": [
    "vote in a federal election",
    "run for federal office"
   ]
  },
  {
   "n": 51,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "What are two rights of everyone living in the United States?",
   "a": [
    "freedom of expression",
    "freedom of speech",
    "freedom of assembly",
    "freedom to petition the government",
    "freedom of religion",
    "the right to bear arms"
   ]
  },
  {
   "n": 52,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "What do we show loyalty to when we say the Pledge of Allegiance?",
   "a": [
    "the United States",
    "the flag"
   ]
  },
  {
   "n": 53,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "What is one promise you make when you become a United States citizen?",
   "a": [
    "give up loyalty to other countries",
    "defend the Constitution and laws of the United States",
    "obey the laws of the United States",
    "serve in the U.S. military (if needed)",
    "serve (do important work for) the nation (if needed)",
    "be loyal to the United States"
   ]
  },
  {
   "n": 54,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "How old do citizens have to be to vote for President?",
   "star": true,
   "a": [
    "eighteen (18) and older"
   ]
  },
  {
   "n": 55,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "What are two ways that Americans can participate in their democracy?",
   "a": [
    "vote",
    "join a political party",
    "help with a campaign",
    "join a civic group",
    "join a community group",
    "give an elected official your opinion on an issue",
    "call Senators and Representatives",
    "publicly support or oppose an issue or policy",
    "run for office",
    "write to a newspaper"
   ]
  },
  {
   "n": 56,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "When is the last day you can send in federal income tax forms?",
   "star": true,
   "a": [
    "April 15"
   ]
  },
  {
   "n": 57,
   "part": "American Government",
   "section": "Rights and Responsibilities",
   "q": "When must all men register for the Selective Service?",
   "a": [
    "at age eighteen (18)",
    "between eighteen (18) and twenty-six (26)"
   ]
  },
  {
   "n": 58,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "What is one reason colonists came to America?",
   "a": [
    "freedom",
    "political liberty",
    "religious freedom",
    "economic opportunity",
    "practice their religion",
    "escape persecution"
   ]
  },
  {
   "n": 59,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "Who lived in America before the Europeans arrived?",
   "a": [
    "American Indians",
    "Native Americans"
   ]
  },
  {
   "n": 60,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "What group of people was taken to America and sold as slaves?",
   "a": [
    "Africans",
    "people from Africa"
   ]
  },
  {
   "n": 61,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "Why did the colonists fight the British?",
   "a": [
    "because of high taxes (taxation without representation)",
    "because the British army stayed in their houses (boarding, quartering)",
    "because they didn’t have self-government"
   ]
  },
  {
   "n": 62,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "Who wrote the Declaration of Independence?",
   "a": [
    "(Thomas) Jefferson"
   ]
  },
  {
   "n": 63,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "When was the Declaration of Independence adopted?",
   "a": [
    "July 4, 1776"
   ]
  },
  {
   "n": 64,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "There were 13 original states. Name three.",
   "a": [
    "New Hampshire",
    "Massachusetts",
    "Rhode Island",
    "Connecticut",
    "New York",
    "New Jersey",
    "Pennsylvania",
    "Delaware",
    "Maryland",
    "Virginia",
    "North Carolina",
    "South Carolina",
    "Georgia"
   ]
  },
  {
   "n": 65,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "What happened at the Constitutional Convention?",
   "a": [
    "The Constitution was written.",
    "The Founding Fathers wrote the Constitution."
   ]
  },
  {
   "n": 66,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "When was the Constitution written?",
   "a": [
    "1787"
   ]
  },
  {
   "n": 67,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
   "a": [
    "(James) Madison",
    "(Alexander) Hamilton",
    "(John) Jay",
    "Publius"
   ]
  },
  {
   "n": 68,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "What is one thing Benjamin Franklin is famous for?",
   "a": [
    "U.S. diplomat",
    "oldest member of the Constitutional Convention",
    "first Postmaster General of the United States",
    "writer of “Poor Richard’s Almanac”",
    "started the first free libraries"
   ]
  },
  {
   "n": 69,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "Who is the “Father of Our Country”?",
   "a": [
    "(George) Washington"
   ]
  },
  {
   "n": 70,
   "part": "American History",
   "section": "Colonial Period and Independence",
   "q": "Who was the first President?",
   "star": true,
   "a": [
    "(George) Washington"
   ]
  },
  {
   "n": 71,
   "part": "American History",
   "section": "1800s",
   "q": "What territory did the United States buy from France in 1803?",
   "a": [
    "the Louisiana Territory",
    "Louisiana"
   ]
  },
  {
   "n": 72,
   "part": "American History",
   "section": "1800s",
   "q": "Name one war fought by the United States in the 1800s.",
   "a": [
    "War of 1812",
    "Mexican-American War",
    "Civil War",
    "Spanish-American War"
   ]
  },
  {
   "n": 73,
   "part": "American History",
   "section": "1800s",
   "q": "Name the U.S. war between the North and the South.",
   "a": [
    "the Civil War",
    "the War between the States"
   ]
  },
  {
   "n": 74,
   "part": "American History",
   "section": "1800s",
   "q": "Name one problem that led to the Civil War.",
   "a": [
    "slavery",
    "economic reasons",
    "states’ rights"
   ]
  },
  {
   "n": 75,
   "part": "American History",
   "section": "1800s",
   "q": "What was one important thing that Abraham Lincoln did?",
   "star": true,
   "a": [
    "freed the slaves (Emancipation Proclamation)",
    "saved (or preserved) the Union",
    "led the United States during the Civil War"
   ]
  },
  {
   "n": 76,
   "part": "American History",
   "section": "1800s",
   "q": "What did the Emancipation Proclamation do?",
   "a": [
    "freed the slaves",
    "freed slaves in the Confederacy",
    "freed slaves in the Confederate states",
    "freed slaves in most Southern states"
   ]
  },
  {
   "n": 77,
   "part": "American History",
   "section": "1800s",
   "q": "What did Susan B. Anthony do?",
   "a": [
    "fought for women’s rights",
    "fought for civil rights"
   ]
  },
  {
   "n": 78,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Name one war fought by the United States in the 1900s.",
   "star": true,
   "a": [
    "World War I",
    "World War II",
    "Korean War",
    "Vietnam War",
    "(Persian) Gulf War"
   ]
  },
  {
   "n": 79,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Who was President during World War I?",
   "a": [
    "(Woodrow) Wilson"
   ]
  },
  {
   "n": 80,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Who was President during the Great Depression and World War II?",
   "a": [
    "(Franklin) Roosevelt"
   ]
  },
  {
   "n": 81,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Who did the United States fight in World War II?",
   "a": [
    "Japan, Germany, and Italy"
   ]
  },
  {
   "n": 82,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Before he was President, Eisenhower was a general. What war was he in?",
   "a": [
    "World War II"
   ]
  },
  {
   "n": 83,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "During the Cold War, what was the main concern of the United States?",
   "a": [
    "Communism"
   ]
  },
  {
   "n": 84,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "What movement tried to end racial discrimination?",
   "a": [
    "civil rights (movement)"
   ]
  },
  {
   "n": 85,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "What did Martin Luther King, Jr. do?",
   "star": true,
   "a": [
    "fought for civil rights",
    "worked for equality for all Americans"
   ]
  },
  {
   "n": 86,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "What major event happened on September 11, 2001, in the United States?",
   "a": [
    "Terrorists attacked the United States."
   ]
  },
  {
   "n": 87,
   "part": "American History",
   "section": "Recent American History and Other Important Historical Information",
   "q": "Name one American Indian tribe in the United States.",
   "a": [
    "Cherokee",
    "Navajo",
    "Sioux",
    "Chippewa",
    "Choctaw",
    "Pueblo",
    "Apache",
    "Iroquois",
    "Creek",
    "Blackfeet",
    "Seminole",
    "Cheyenne",
    "Arawak",
    "Shawnee",
    "Mohegan",
    "Huron",
    "Oneida",
    "Lakota",
    "Crow",
    "Teton",
    "Hopi",
    "Inuit"
   ],
   "note": "USCIS Officers will be supplied with a list of federally recognized American Indian tribes."
  },
  {
   "n": 88,
   "part": "Integrated Civics",
   "section": "Geography",
   "q": "Name one of the two longest rivers in the United States.",
   "a": [
    "Missouri (River)",
    "Mississippi (River)"
   ]
  },
  {
   "n": 89,
   "part": "Integrated Civics",
   "section": "Geography",
   "q": "What ocean is on the West Coast of the United States?",
   "a": [
    "Pacific (Ocean)"
   ]
  },
  {
   "n": 90,
   "part": "Integrated Civics",
   "section": "Geography",
   "q": "What ocean is on the East Coast of the United States?",
   "a": [
    "Atlantic (Ocean)"
   ]
  },
  {
   "n": 91,
   "part": "Integrated Civics",
   "section": "Geography",
   "q": "Name one U.S. territory.",
   "a": [
    "Puerto Rico",
    "U.S. Virgin Islands",
    "American Samoa",
    "Northern Mariana Islands",
    "Guam"
   ]
  },
  {
   "n": 92,
   "part": "Integrated Civics",
   "section": "Geography",
   "q": "Name one state that borders Canada.",
   "a": [
    "Maine",
    "New Hampshire",
    "Vermont",
    "New York",
    "Pennsylvania",
    "Ohio",
    "Michigan",
    "Minnesota",
    "North Dakota",
    "Montana",
    "Idaho",
    "Washington",
    "Alaska"
   ]
  },
  {
   "n": 93,
   "part": "Integrated Civics",
   "section": "Geography",
   "q": "Name one state that borders Mexico.",
   "a": [
    "California",
    "Arizona",
    "New Mexico",
    "Texas"
   ]
  },
  {
   "n": 94,
   "part": "Integrated Civics",
   "section": "Geography",
   "q": "What is the capital of the United States?",
   "star": true,
   "a": [
    "Washington, D.C."
   ]
  },
  {
   "n": 95,
   "part": "Integrated Civics",
   "section": "Geography",
   "q": "Where is the Statue of Liberty?",
   "star": true,
   "a": [
    "New York (Harbor)",
    "Liberty Island"
   ],
   "note": "Also acceptable are New Jersey, near New York City, and on the Hudson (River)."
  },
  {
   "n": 96,
   "part": "Integrated Civics",
   "section": "Symbols",
   "q": "Why does the flag have 13 stripes?",
   "a": [
    "because there were 13 original colonies",
    "because the stripes represent the original colonies"
   ]
  },
  {
   "n": 97,
   "part": "Integrated Civics",
   "section": "Symbols",
   "q": "Why does the flag have 50 stars?",
   "star": true,
   "a": [
    "because there is one star for each state",
    "because each star represents a state",
    "because there are 50 states"
   ]
  },
  {
   "n": 98,
   "part": "Integrated Civics",
   "section": "Symbols",
   "q": "What is the name of the national anthem?",
   "a": [
    "The Star-Spangled Banner"
   ]
  },
  {
   "n": 99,
   "part": "Integrated Civics",
   "section": "Holidays",
   "q": "When do we celebrate Independence Day?",
   "star": true,
   "a": [
    "July 4"
   ]
  },
  {
   "n": 100,
   "part": "Integrated Civics",
   "section": "Holidays",
   "q": "Name two national U.S. holidays.",
   "a": [
    "New Year’s Day",
    "Martin Luther King, Jr. Day",
    "Presidents’ Day",
    "Memorial Day",
    "Independence Day",
    "Labor Day",
    "Columbus Day",
    "Veterans Day",
    "Thanksgiving",
    "Christmas"
   ]
  }
 ]
};
