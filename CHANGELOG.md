# v0.4.2 --
---------------------------


# v0.4.1 -- August 28, 2016
---------------------------
All dependencies are up to date with the exception of Babel which I'll tackle
at some point.

Refactored package.json to put dependencies that aren't required at runtime
into devDependencies where they belong.

Reduced build/ contents from 3.9M in v0.3.0 to 2.0M in 0.4.1!


# v0.4.0 -- August 26, 2016
---------------------------
Putting a big fork in the ground!

This is a big move forward for this project as it:

	Merges evonck's changes to update:
	    react from 0.13.3 to ^15.2.1
	    react-bootstrap from 0.25.2 to ^0.30.0
	    react-router from ^0.13.3 to ^2.6.0
	    reflux from ^0.2.12 to ^0.4.1

Pointed repo URL at ssteinerX GitHub URL since original author seems not
interested.

Added ssteinerX issues URL to "bugs" key, though I'm not sure there can be
multiple destinations for issues.

Added ssteinerX authorship to package.json.

# v0.3.0

- Implemented [css-modules](https://github.com/css-modules/css-modules) with basic styling
- Bumped karma to 0.13.9 @claudiopro

# v0.2.5

ES6 cleanup with static class properties - @StevenLangbroek

# v0.2.4

Updated various dependencies

# v0.2.3

- Use the HTML5 history API for cleaner URLs - @paulyoung
- Wrapped up remaining unit tests, better code coverage
- `PRODUCTION` environment variable now serves static file when running `node server.js`
- Build app upon npm postinstall
- Instant deploy with Heroku button

# v0.2.2

Integrated with [Sauce Labs](https://saucelabs.com/) for automated, cross-browser testing.

# v0.2.1

Updated React and React Router to v0.13.1

# v0.2.0

Major changes:
- Moved underlying module / build system from Browserify to Webpack.
- Using React Hot Loader under the scenes to automatically reload file changes during local dev
- Using Karma to run test suite and generate code coverage reports

Removed no longer necessary dependencies:
- browserify
- watchify
- expect.js
- xhr
- es5-shim
- console-polyfill

Continuing to maintain core philosophies of minimal tooling and testing:
- Simplified run scripts: `watch`, `watch-js` and `server` replaced with `server`
- No additional commands needed
- Tests now include Sinon for mocks and Chai for assertions, no more expect.js
- Same `src/` directory structure

# v0.1.0

First release.
