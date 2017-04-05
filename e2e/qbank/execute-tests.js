var _child_process = require('child_process');
require('core-js/shim');
var _path = require('path');

function execute() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var callback = arguments.length <= 1 || arguments[1] === undefined ? function noop() {} : arguments[1];

  var testAttempt = 1;
  var grepArgs = '';

function filterArgs(protractorArgs) {
  protractorArgs = protractorArgs.filter(function (arg) {
    return !/^--(suite|specs)=/.test(arg);
  });
  ['--suite', '--specs'].forEach(function (item) {
    var index = protractorArgs.indexOf(item);
    if (index !== -1) {
      protractorArgs.splice(index, 2);
    }
  });
  return protractorArgs;
}

  function handleTestEnd(status) {
    var output = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

    if (status === 0) {
      callback(status);
    } else {
      if (++testAttempt <= 3) {
        process.stdout.write(`\nUsing standard parser to parse output\n`)
        var failedSpecs = parse(output)

        process.stdout.write('Re-running tests: test attempt ' + testAttempt + '\n');
        if (failedSpecs.length === 0) {
          process.stdout.write('\nTests failed but no specs were found. All specs will be run again.\n\n');
        } else {
          process.stdout.write('Re-running the following test files:\n');
          process.stdout.write(failedSpecs.join('\n') + '\n');
        }
        return startProtractor(failedSpecs, true);
      }

      callback(status, output);
    }
  }

function parse(output) {
    var failedSpecs = new Set();
    var match = null;
    grepArgs = '(';
    var FAILED_LINES = /at (?:\[object Object\]|Object)\.(?:<anonymous>|it) \((([A-Za-z]:\\)?.*?):.*\)/g;
    var grepText = /\✗(.*?)\u001b/g ;
    
    while(match = grepText.exec(output)){
    grepArgs = grepArgs.concat(match[1].trim().concat('|'));
  }
  grepArgs = grepArgs.slice(0,-1).concat(')$');
 // grepArgs = grepArgs.concat(')$');

    match =null;
    while (match = FAILED_LINES.exec(output)) {
      // eslint-disable-line no-cond-assign
      // windows output includes stack traces from
      // webdriver so we filter those out here
      if (!/node_modules/.test(match[1])) {
        failedSpecs.add(match[1]);
      }
    }

    return [].concat(Array.from(failedSpecs));
  }

  function startProtractor() {
    var specFiles = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var retry = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    var output = '';

    var protractorMainPath = require.resolve('protractor');
    // '.../node_modules/protractor/bin/protractor'
    var protractorPath = (0, _path.resolve)(protractorMainPath, '../../bin/protractor');
    var protractorArgs = [protractorPath];

    if (retry) {
      protractorArgs.push('--params.flake.retry', true);
    }

    if (specFiles.length) {
      protractorArgs = filterArgs(protractorArgs);
      protractorArgs.push('--specs', specFiles.join(','));
      protractorArgs.push('--grep', grepArgs);


     // protractor --specs='./e2e/**/fail-spec1.ts,./e2e/**/fail-spec.ts' --grep='
      //(npm working test|npm failure test)$'

    }


var protractor = (0, _child_process.spawn)('node', protractorArgs, []);

    protractor.stdout.on('data', (buffer) => {
      let text = buffer.toString();
      process.stdout.write(text);
      output = output + text;
    })

    protractor.stderr.on('data', (buffer) => {
      let text = buffer.toString();
      process.stderr.write(text);
      output = output + text;
    })

    protractor.on('exit', function (status) {
      handleTestEnd(status, output);
    });
  }

  startProtractor();
};

module.exports.execute = execute();