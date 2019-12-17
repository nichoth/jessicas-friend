var minimist = require('minimist')
// var trumpet = require('trumpet')
var hyperstream = require('hyperstream');
var fs = require('fs');
// var tr = trumpet()

var _args = minimist(process.argv.slice(2))
var args = _args._
var outdir = _args.outdir
console.log('out', outdir)

args.forEach(function (path) {
    if (path.includes('_template.html')) return
    var p = __dirname + '/' + path
    console.log('path', p)
    read(p)
})

function read (path) {
    var hs = hyperstream({
        'body': fs.createReadStream(path)
    })
    var filename = path.split('/')
    filename = filename[filename.length - 1]
    var d = __dirname + '/src/html/_template.html'
    var write = fs.createWriteStream(outdir + filename)
    fs.createReadStream(d).pipe(hs).pipe(write)
}

