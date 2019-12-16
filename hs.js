// var fs = require('fs')
var minimist = require('minimist')
var trumpet = require('trumpet')
// var args = minimist(process.argv.slice(2))

// // var d = __dirname + '/' + args.dir
// // console.log(d)

// // console.log(args)

// args.forEach(function (path) {
//     // console.log(__dirname)
//     tr.selectAll('a', function (anchor) {
//         anchor.createReadStream().pipe(process.stdout)
//     })
//     // var d = __dirname + '/src/html/index.html'
//     // console.log(d)
//     // fs.createReadStream(d)
//     //     .pipe(tr)
//         // .pipe(process.stdout)
// })



var hyperstream = require('hyperstream');
var fs = require('fs');
var tr = trumpet()

var args = minimist(process.argv.slice(2))._

// tr.selectAll('a', function (anchor) {
//     // console.log('a', a)
//     anchor.createReadStream().pipe(process.stdout)
// })

// fs.createReadStream(__dirname +'/src/html/index.html').pipe(tr)


// var p = __dirname + '/' + 'src/html/booking.html'
// var hs = hyperstream({
//     'body': fs.createReadStream(p)
// })
// var d = __dirname + '/src/html/_template.html'
// fs.createReadStream(d).pipe(hs).pipe(process.stdout)


var i = 0
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
    console.log('i', i)

    var d = __dirname + '/src/html/_template.html'
    var write = fs.createWriteStream(__dirname + '/' + i + '.html')
    fs.createReadStream(d).pipe(hs).pipe(write)
    i++
}

// var hs = hyperstream({
//     body: fs.createReadStream(__dirname + '/src/html/store.html')
// })

// var rs = fs.createReadStream(__dirname + '/src/html/index.html')
// rs.pipe(hs).pipe(process.stdout)



// // var hs = hyperstream({
// //     '#a': fs.createReadStream(__dirname + '/hs/a.html'),
// //     '#b': fs.createReadStream(__dirname + '/hs/b.html')
// // });

// // var rs = fs.createReadStream(__dirname + '/src/html/index.html');
// // rs.pipe(hs).pipe(process.stdout);

