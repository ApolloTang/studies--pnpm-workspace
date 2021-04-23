const pkgJson = require('../package.json')

const dependency1 = require('@apollotang/public-pkg-c')
let output1 = `${pkgJson.name}:${pkgJson.version} ---> ${dependency1.name}:${dependency1.version}`
console.log(output1)

const dependency2 = require('@apollotang/local-pkg-d')
let output2 = `${pkgJson.name}:${pkgJson.version} ---> ${dependency2.name}:${dependency2.version}`
console.log(output2)

module.exports = pkgJson

