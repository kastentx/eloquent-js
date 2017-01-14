function args() {
  return (
    'Path to Node: ' + process.argv[0] + '\n' +
    'Path to this file: ' + process.argv[1] + '\n' +
    'First command-line argument: ' + process.argv[2]
  )
}

console.log(args())
