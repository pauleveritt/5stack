// Karma configuration
// Generated on Tue Nov 26 2013 16:25:36 GMT-0500 (EST)

module.exports = function (config) {
    config.set(
        {
            // base path, that will be used to resolve files and exclude
            logLevel: config.LOG_INFO,

            // frameworks to use
            frameworks: ['jasmine'],

            // Can use Chrome, Firefox, etc.
            browsers: ['PhantomJS'],

            // list of files / patterns to load in the browser
            files: [
                'tests/*Specs.js'
            ],

            // If browser does not capture in given timeout [ms], kill it
            captureTimeout: 60000

        });
};
