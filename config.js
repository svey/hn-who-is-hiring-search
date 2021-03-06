module.exports = {
  asyncWorkers: {
    askCheckingQ: 4,
    commentCreationQ: 10,
    askCreationQ: 2,
  },
  db: {
    name: 'hnwhoishiring',
    username: 'hnwih',
    password: 'asdf',
  },
  query: {
    // Include 'Who is hiring?' Asks
    includeWhoIsHiring: true,

    // Include 'Freelancer? Seeking Freelancer?' Asks
    includeFreelancerSeekingFreelancer: false,

    // Include 'Who wants to be hired?' Asks
    includeWhoWantsToBeHired: false,

    // Oldest Comment to include in the search (Unix time)
    oldestComment: 1420070400,

    // Regex to test against Comment text
    regexes: [
      'remote.*(js|javascript|react)',
      '(js|javascript|react).*remote',
    ],

    // Operator to use with your regexes (AND || OR)
    regexesAndOr: 'OR',

    // Path to results file (will be created if it doesn't exist)
    resultsName: 'queryResults.txt',
  },
};
