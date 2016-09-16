Journal
-------

This is my "notes to myself" development journal as I worked on this project.

I find this type of thing incredibly useful.

September 4, 2016
-----------------
No response at all from original author, going to scrap original tests and
start over, possibly with a completely different toolchain.


August 27, 2016
---------------

I have now updated *all* of the dependencies except for Babel and jQuery.

I'm wanting to get some test coverage in place before I do those last couple
as the probability for breakage is great.

Unfortunately, the tests included with the original package are completely
dysfunctional due to missing data files.  I have written to the original
author to ask whether he could provide them as they never seem to have
been checked into the repository.

Waiting for a reponse from original repository owner on that.

August 26, 2016
---------------
Big win!  Just merged evonck's changes to update:
    react from 0.13.3 to ^15.2.1
    react-bootstrap from 0.25.2 to ^0.30.0
    react-router from ^0.13.3 to ^2.6.0
    reflux from ^0.2.12 to ^0.4.1

By doing this:

    git pull git@github.com:evonck/sb-admin-react.git lastRelease


    July 4, 2016
    ------------
    First `npm install` gave all this:

    	npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
    	npm WARN deprecated minimatch@0.3.0: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
    	npm WARN deprecated minimatch@0.4.0: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
    	npm WARN prefer global coffee-script@1.8.0 should be installed with -g
    	npm WARN prefer global node-gyp@3.4.0 should be installed with -g
    	npm WARN karma-mocha@0.1.10 requires a peer of mocha@* but none was installed.

    July 4, 2016
    ------------
    Then I did this to clear up the globals:
    	npm remove node-gyp
    	npm remove coffee-script

    Then I did this to install up the globals:

    	npm install -g node-gyp coffee-script

    Then, to see what could be upgraded to get rid of deprecation warnings:

    	npm outdated

    	Package                       Current   Wanted  Latest  Location
    	axios                           0.7.0    0.7.0  0.12.0  essential-react
    	babel-core                     5.8.38   5.8.38  6.10.4  essential-react
    	babel-loader                    5.4.0    5.4.0   6.2.4  essential-react
    	bootstrap-social               4.11.0   4.11.0   5.0.0  essential-react
    	css-loader                     0.18.0   0.18.0  0.23.1  essential-react
    	extract-text-webpack-plugin     0.8.2    0.8.2   1.0.1  essential-react
    	file-loader                     0.8.5    0.8.5   0.9.0  essential-react
    	istanbul                       0.3.22   0.3.22   0.4.4  essential-react
    	istanbul-instrumenter-loader    0.1.3    0.1.3   0.2.0  essential-react
    	jquery                          2.2.4    2.2.4   3.0.0  essential-react
    	karma                         0.13.22  0.13.22   1.1.0  essential-react
    	karma-coverage                  0.2.7    0.2.7   1.0.0  essential-react
    	karma-mocha                    0.1.10   0.1.10   1.1.1  essential-react
    	karma-phantomjs-launcher        0.1.4    0.1.4   1.0.1  essential-react
    	karma-sauce-launcher           0.2.14   0.2.14   1.0.0  essential-react
    	karma-sinon-chai                0.3.2    0.3.2   1.2.2  essential-react
    	normalizr                       1.4.1    1.4.1   2.1.0  essential-react
    	phantomjs                      1.9.20   1.9.20   2.1.7  essential-react
    	postcss-loader                  0.6.0    0.6.0   0.9.1  essential-react
    	react                          0.13.3   0.13.3  15.2.0  essential-react
    	react-bootstrap                0.25.2   0.25.2  0.29.5  essential-react
    	react-modal                     0.5.0    0.5.0   1.4.0  essential-react
    	react-router                   0.13.5   0.13.5   2.5.2  essential-react
    	reflux                         0.2.13   0.2.13   0.4.1  essential-react
    	style-loader                   0.12.4   0.12.4  0.13.1  essential-react

    A LOT of things in this package seem to be pre-1.0 which may mean the old way of using React might not work.

    # One thing at a time!

    Decided at this point to just see if I could get it running, put a stake in the GIT, and move along.

    	> essential-react@0.3.0 build /Users/ssteiner/Desktop/WSSW-Projects/SiteMonitor/WebDashboard/Dashboard/sb-admin-react
    	> webpack -p --config webpack.production.config.js

    	Container#eachAtRule is deprecated. Use Container#walkAtRules instead.
    	Container#eachRule is deprecated. Use Container#walkRules instead.
    	Container#eachDecl is deprecated. Use Container#walkDecls instead.
    	Node#removeSelf is deprecated. Use Node#remove.
    	Hash: 5ad0f3847908e57d4556
    	Version: webpack 1.13.1
    	Time: 21912ms
    	                                 Asset       Size  Chunks             Chunk Names
    	                              1.app.js    7.55 kB       1  [emitted]
    	  f4769f9bdb7466be65088239c12046d1.eot    20.1 kB          [emitted]
    	  d7c639084f684d66a1bc66855d193ed8.svg     392 kB          [emitted]
    	  1dc35d25e61d819a9c357074014867ab.ttf     153 kB          [emitted]
    	e6cf7c6ec7c2d6f670ae9d762604cb0b.woff2    71.9 kB          [emitted]
    	 c8ddf1e5e5bf3682bc7bebf30f394148.woff    90.4 kB          [emitted]
    	  89889688147bd7575d6327160d64e760.svg     109 kB          [emitted]
    	  e18bbf611f2a2e43afc071aa2f4e1512.ttf    45.4 kB          [emitted]
    	 fa2772327f55d8198301fdb8bcfc8158.woff    23.4 kB          [emitted]
    	448c34a56d699c29117adc64c43affeb.woff2      18 kB          [emitted]
    	                                app.js     738 kB       0  [emitted]  main
    	  25a32416abee198dd821b0b17a198a8f.eot    76.5 kB          [emitted]
    	                              2.app.js    8.09 kB       2  [emitted]
    	                              3.app.js    16.6 kB       3  [emitted]
    	                              4.app.js    14.6 kB       4  [emitted]
    	                              5.app.js    6.95 kB       5  [emitted]
    	                              6.app.js    2.27 kB       6  [emitted]
    	                              7.app.js    61.5 kB       7  [emitted]
    	                              8.app.js    12.9 kB       8  [emitted]
    	                              9.app.js    5.46 kB       9  [emitted]
    	                             10.app.js    2.69 kB      10  [emitted]
    	                             11.app.js    11.6 kB      11  [emitted]
    	                             12.app.js  603 bytes      12  [emitted]
    	    + 765 hidden modules

    	WARNING in app.js from UglifyJs
    	Condition always true [./~/classnames/index.js:40,2]
    	Dropping unreachable code [./~/classnames/index.js:46,0]
    	Condition always true [./~/dom-helpers/util/babelHelpers.js:2,0]
    	Dropping unreachable code [./~/dom-helpers/util/babelHelpers.js:4,3]
    	Side effects in initialization of unused variable _ownerDocument2 [./~/dom-helpers/activeElement.js:14,0]
    	Side effects in initialization of unused variable bsStyle [./~/react-bootstrap/lib/ButtonInput.js:46,0]
    	Side effects in initialization of unused variable value [./~/react-bootstrap/lib/ButtonInput.js:47,0]
    	Dropping unused variable internals [./~/react-router/~/qs/lib/utils.js:6,0]
    	Condition always true [./~/jquery/dist/jquery.js:9778,0]
    	Condition always true [./~/nprogress/nprogress.js:6,0]
    	Dropping unreachable code [./~/nprogress/nprogress.js:8,3]
    	Side effects in initialization of unused variable children [./~/react-bootstrap/lib/Modal.js:198,0]
    	Side effects in initialization of unused variable context [./~/react-bootstrap/lib/utils/createContextWrapper.js:43,0]
    	Dropping unused variable internals [./~/react-router/~/qs/lib/index.js:9,0]
    	Side effects in initialization of unused variable invokeReturn [./~/regenerator/runtime.js:167,0]
    	Side effects in initialization of unused variable sourceMap [./~/style-loader/addStyles.js:185,0]
    	Side effects in initialization of unused variable media [./~/style-loader/addStyles.js:203,0]
    	Condition always false [./~/style-loader/addStyles.js:23,0]
    	Dropping unreachable code [./~/style-loader/addStyles.js:24,0]
    	Condition always false [./~/style-loader!./~/css-loader!./~/less-loader!./src/common/styles/app.less:10,0]
    	Dropping unreachable code [./~/style-loader!./~/css-loader!./~/less-loader!./src/common/styles/app.less:12,0]
    	Side effects in initialization of unused variable update [./~/style-loader!./~/css-loader!./~/less-loader!./src/common/styles/app.less:7,0]
    	Side effects in initialization of unused variable valueLink [./~/uncontrollable/createUncontrollable.js:90,0]
    	Side effects in initialization of unused variable checkedLink [./~/uncontrollable/createUncontrollable.js:91,0]
    	essential-react@0.3.0 /Users/ssteiner/Desktop/WSSW-Projects/SiteMonitor/WebDashboard/Dashboard/sb-admin-react
    	├─┬ autoprefixer@6.3.7
    	│ ├── browserslist@1.3.4
    	│ ├── caniuse-db@1.0.30000492
    	│ ├── normalize-range@0.1.2
    	│ ├── num2fraction@1.2.2
    	│ ├─┬ postcss@5.0.21
    	│ │ └── js-base64@2.1.9
    	│ └── postcss-value-parser@3.3.0
    	├── axios@0.7.0
    	├─┬ babel-core@5.8.38
    	│ ├── babel-plugin-constant-folding@1.0.1
    	│ ├── babel-plugin-dead-code-elimination@1.0.2
    	│ ├── babel-plugin-eval@1.0.1
    	│ ├── babel-plugin-inline-environment-variables@1.0.1
    	│ ├── babel-plugin-jscript@1.0.4
    	│ ├── babel-plugin-member-expression-literals@1.0.1
    	│ ├── babel-plugin-property-literals@1.0.1
    	│ ├── babel-plugin-proto-to-assign@1.0.4
    	│ ├── babel-plugin-react-constant-elements@1.0.3
    	│ ├── babel-plugin-react-display-name@1.0.3
    	│ ├── babel-plugin-remove-console@1.0.1
    	│ ├── babel-plugin-remove-debugger@1.0.1
    	│ ├── babel-plugin-runtime@1.0.7
    	│ ├─┬ babel-plugin-undeclared-variables-check@1.0.2
    	│ │ └── leven@1.0.2
    	│ ├── babel-plugin-undefined-to-void@1.1.6
    	│ ├── babylon@5.8.38
    	│ ├── bluebird@2.10.2
    	│ ├─┬ chalk@1.1.3
    	│ │ ├── ansi-styles@2.2.1
    	│ │ ├── escape-string-regexp@1.0.5
    	│ │ ├── has-ansi@2.0.0
    	│ │ └── supports-color@2.0.0
    	│ ├── convert-source-map@1.2.0
    	│ ├── core-js@1.2.6
    	│ ├─┬ debug@2.2.0
    	│ │ └── ms@0.7.1
    	│ ├── detect-indent@3.0.1
    	│ ├── esutils@2.0.2
    	│ ├── fs-readdir-recursive@0.1.2
    	│ ├── globals@6.4.1
    	│ ├─┬ home-or-tmp@1.0.0
    	│ │ ├── os-tmpdir@1.0.1
    	│ │ └── user-home@1.1.1
    	│ ├─┬ is-integer@1.0.6
    	│ │ └─┬ is-finite@1.0.1
    	│ │   └── number-is-nan@1.0.0
    	│ ├── js-tokens@1.0.1
    	│ ├── json5@0.4.0
    	│ ├── lodash@3.10.1
    	│ ├─┬ minimatch@2.0.10
    	│ │ └─┬ brace-expansion@1.1.5
    	│ │   ├── balanced-match@0.4.1
    	│ │   └── concat-map@0.0.1
    	│ ├─┬ output-file-sync@1.1.2
    	│ │ └── object-assign@4.1.0
    	│ ├── path-exists@1.0.0
    	│ ├── path-is-absolute@1.0.0
    	│ ├── private@0.1.6
    	│ ├─┬ regenerator@0.8.40
    	│ │ ├─┬ commoner@0.10.4
    	│ │ │ ├─┬ commander@2.9.0
    	│ │ │ │ └── graceful-readlink@1.0.1
    	│ │ │ └─┬ detective@4.3.1
    	│ │ │   └── acorn@1.2.2
    	│ │ ├─┬ defs@1.1.1
    	│ │ │ ├─┬ alter@0.2.0
    	│ │ │ │ └── stable@0.1.5
    	│ │ │ ├── ast-traverse@0.1.1
    	│ │ │ ├── breakable@1.0.0
    	│ │ │ ├── simple-fmt@0.1.0
    	│ │ │ ├── simple-is@0.2.0
    	│ │ │ ├── stringmap@0.2.2
    	│ │ │ ├── stringset@0.2.1
    	│ │ │ ├── tryor@0.1.2
    	│ │ │ └─┬ yargs@3.27.0
    	│ │ │   └── window-size@0.1.4
    	│ │ ├── esprima-fb@15001.1001.0-dev-harmony-fb
    	│ │ ├─┬ recast@0.10.33
    	│ │ │ └── ast-types@0.8.12
    	│ │ └── through@2.3.8
    	│ ├─┬ regexpu@1.3.0
    	│ │ ├── esprima@2.7.2
    	│ │ ├── regenerate@1.3.1
    	│ │ ├── regjsgen@0.2.0
    	│ │ └─┬ regjsparser@0.1.5
    	│ │   └── jsesc@0.5.0
    	│ ├── repeating@1.1.3
    	│ ├── resolve@1.1.7
    	│ ├── shebang-regex@1.0.0
    	│ ├── slash@1.0.0
    	│ ├── source-map@0.5.6
    	│ ├─┬ source-map-support@0.2.10
    	│ │ └── source-map@0.1.32
    	│ ├── to-fast-properties@1.0.2
    	│ ├── trim-right@1.0.1
    	│ └── try-resolve@1.0.1
    	├─┬ babel-loader@5.4.0
    	│ ├─┬ loader-utils@0.2.15
    	│ │ ├── big.js@3.1.3
    	│ │ ├── emojis-list@2.0.1
    	│ │ └── json5@0.5.0
    	│ └── object-assign@3.0.0
    	├── base-64@0.1.0
    	├── bootstrap@3.3.6
    	├─┬ bootstrap-social@4.11.0
    	│ └── font-awesome@4.4.0
    	├── bundle-loader@0.5.4
    	├── classnames@2.2.5
    	├─┬ coveralls@2.11.9
    	│ ├─┬ js-yaml@3.0.1
    	│ │ ├─┬ argparse@0.1.16
    	│ │ │ ├── underscore@1.7.0
    	│ │ │ └── underscore.string@2.4.0
    	│ │ └── esprima@1.0.4
    	│ ├── lcov-parse@0.0.6
    	│ ├── log-driver@1.2.4
    	│ ├── minimist@1.2.0
    	│ └─┬ request@2.67.0
    	│   ├── aws-sign2@0.6.0
    	│   ├─┬ bl@1.0.3
    	│   │ └── readable-stream@2.0.6
    	│   ├── caseless@0.11.0
    	│   ├─┬ combined-stream@1.0.5
    	│   │ └── delayed-stream@1.0.0
    	│   ├── extend@3.0.0
    	│   ├── forever-agent@0.6.1
    	│   ├── form-data@1.0.0-rc4
    	│   ├─┬ har-validator@2.0.6
    	│   │ └─┬ is-my-json-valid@2.13.1
    	│   │   ├── generate-function@2.0.0
    	│   │   ├─┬ generate-object-property@1.2.0
    	│   │   │ └── is-property@1.0.2
    	│   │   ├── jsonpointer@2.0.0
    	│   │   └── xtend@4.0.1
    	│   ├─┬ hawk@3.1.3
    	│   │ ├── boom@2.10.1
    	│   │ ├── cryptiles@2.0.5
    	│   │ ├── hoek@2.16.3
    	│   │ └── sntp@1.0.9
    	│   ├─┬ http-signature@1.1.1
    	│   │ ├── assert-plus@0.2.0
    	│   │ ├─┬ jsprim@1.3.0
    	│   │ │ ├── extsprintf@1.0.2
    	│   │ │ ├── json-schema@0.2.2
    	│   │ │ └── verror@1.3.6
    	│   │ └─┬ sshpk@1.8.3
    	│   │   ├── asn1@0.2.3
    	│   │   ├── assert-plus@1.0.0
    	│   │   ├─┬ dashdash@1.14.0
    	│   │   │ └── assert-plus@1.0.0
    	│   │   ├── ecc-jsbn@0.1.1
    	│   │   ├─┬ getpass@0.1.6
    	│   │   │ └── assert-plus@1.0.0
    	│   │   ├── jodid25519@1.0.2
    	│   │   ├── jsbn@0.1.0
    	│   │   └── tweetnacl@0.13.3
    	│   ├── is-typedarray@1.0.0
    	│   ├── isstream@0.1.2
    	│   ├── json-stringify-safe@5.0.1
    	│   ├─┬ mime-types@2.1.11
    	│   │ └── mime-db@1.23.0
    	│   ├── node-uuid@1.4.7
    	│   ├── oauth-sign@0.8.2
    	│   ├── qs@5.2.0
    	│   ├── stringstream@0.0.5
    	│   ├── tough-cookie@2.2.2
    	│   └── tunnel-agent@0.4.3
    	├─┬ css-loader@0.18.0
    	│ ├─┬ css-selector-tokenizer@0.5.4
    	│ │ ├── cssesc@0.1.0
    	│ │ └── fastparse@1.1.1
    	│ ├─┬ cssnano@3.7.1
    	│ │ ├── decamelize@1.2.0
    	│ │ ├── defined@1.0.0
    	│ │ ├── indexes-of@1.0.1
    	│ │ ├─┬ postcss-calc@5.2.1
    	│ │ │ ├── postcss-message-helpers@2.0.0
    	│ │ │ └─┬ reduce-css-calc@1.2.4
    	│ │ │   ├── balanced-match@0.1.0
    	│ │ │   └─┬ reduce-function-call@1.0.1
    	│ │ │     └── balanced-match@0.1.0
    	│ │ ├─┬ postcss-colormin@2.2.0
    	│ │ │ └─┬ colormin@1.1.0
    	│ │ │   ├─┬ color@0.11.3
    	│ │ │   │ ├── color-convert@1.3.1
    	│ │ │   │ └─┬ color-string@0.3.0
    	│ │ │   │   └── color-name@1.1.1
    	│ │ │   └── css-color-names@0.0.3
    	│ │ ├── postcss-convert-values@2.4.0
    	│ │ ├── postcss-discard-comments@2.0.4
    	│ │ ├── postcss-discard-duplicates@2.0.1
    	│ │ ├── postcss-discard-empty@2.1.0
    	│ │ ├── postcss-discard-overridden@0.1.1
    	│ │ ├─┬ postcss-discard-unused@2.2.1
    	│ │ │ ├── flatten@1.0.2
    	│ │ │ └── uniqs@2.0.0
    	│ │ ├─┬ postcss-filter-plugins@2.0.0
    	│ │ │ └── uniqid@1.0.0
    	│ │ ├─┬ postcss-merge-idents@2.1.6
    	│ │ │ └── has-own@1.0.0
    	│ │ ├── postcss-merge-longhand@2.0.1
    	│ │ ├── postcss-merge-rules@2.0.9
    	│ │ ├── postcss-minify-font-values@1.0.5
    	│ │ ├── postcss-minify-gradients@1.0.3
    	│ │ ├─┬ postcss-minify-params@1.0.4
    	│ │ │ └── alphanum-sort@1.0.2
    	│ │ ├─┬ postcss-minify-selectors@2.0.5
    	│ │ │ └─┬ postcss-selector-parser@2.1.0
    	│ │ │   └── uniq@1.0.1
    	│ │ ├── postcss-normalize-charset@1.1.0
    	│ │ ├─┬ postcss-normalize-url@3.0.7
    	│ │ │ ├── is-absolute-url@2.0.0
    	│ │ │ └─┬ normalize-url@1.5.3
    	│ │ │   ├── prepend-http@1.0.4
    	│ │ │   ├─┬ query-string@4.2.2
    	│ │ │   │ └── strict-uri-encode@1.1.0
    	│ │ │   └─┬ sort-keys@1.1.2
    	│ │ │     └── is-plain-obj@1.1.0
    	│ │ ├── postcss-ordered-values@2.2.1
    	│ │ ├── postcss-reduce-idents@2.3.0
    	│ │ ├── postcss-reduce-initial@1.0.0
    	│ │ ├── postcss-reduce-transforms@1.0.3
    	│ │ ├─┬ postcss-svgo@2.1.3
    	│ │ │ ├─┬ is-svg@2.0.1
    	│ │ │ │ └── html-comment-regex@1.1.0
    	│ │ │ └─┬ svgo@0.6.6
    	│ │ │   ├── coa@1.0.1
    	│ │ │   ├─┬ csso@2.0.0
    	│ │ │   │ └── clap@1.1.1
    	│ │ │   ├── sax@1.2.1
    	│ │ │   └── whet.extend@0.9.9
    	│ │ ├── postcss-unique-selectors@2.0.2
    	│ │ └── postcss-zindex@2.1.1
    	│ ├─┬ postcss-modules-extract-imports@0.0.5
    	│ │ └─┬ postcss@4.1.16
    	│ │   ├── es6-promise@2.3.0
    	│ │   └── source-map@0.4.4
    	│ ├─┬ postcss-modules-local-by-default@0.0.12
    	│ │ └─┬ postcss@4.1.16
    	│ │   └── source-map@0.4.4
    	│ ├─┬ postcss-modules-scope@0.0.8
    	│ │ └─┬ postcss@4.1.16
    	│ │   └── source-map@0.4.4
    	│ └── source-list-map@0.1.6
    	├─┬ express@4.14.0
    	│ ├─┬ accepts@1.3.3
    	│ │ └── negotiator@0.6.1
    	│ ├── array-flatten@1.1.1
    	│ ├── content-disposition@0.5.1
    	│ ├── content-type@1.0.2
    	│ ├── cookie@0.3.1
    	│ ├── cookie-signature@1.0.6
    	│ ├── depd@1.1.0
    	│ ├── encodeurl@1.0.1
    	│ ├── escape-html@1.0.3
    	│ ├── etag@1.7.0
    	│ ├─┬ finalhandler@0.5.0
    	│ │ ├── statuses@1.3.0
    	│ │ └── unpipe@1.0.0
    	│ ├── fresh@0.3.0
    	│ ├── merge-descriptors@1.0.1
    	│ ├── methods@1.1.2
    	│ ├─┬ on-finished@2.3.0
    	│ │ └── ee-first@1.1.1
    	│ ├── parseurl@1.3.1
    	│ ├── path-to-regexp@0.1.7
    	│ ├─┬ proxy-addr@1.1.2
    	│ │ ├── forwarded@0.1.0
    	│ │ └── ipaddr.js@1.1.1
    	│ ├── qs@6.2.0
    	│ ├── range-parser@1.2.0
    	│ ├─┬ send@0.14.1
    	│ │ ├── destroy@1.0.4
    	│ │ └─┬ http-errors@1.5.0
    	│ │   └── setprototypeof@1.0.1
    	│ ├── serve-static@1.11.1
    	│ ├─┬ type-is@1.6.13
    	│ │ └── media-typer@0.3.0
    	│ ├── utils-merge@1.0.0
    	│ └── vary@1.1.0
    	├─┬ extract-text-webpack-plugin@0.8.2
    	│ └── async@1.5.2
    	├── file-loader@0.8.5
    	├─┬ flux@2.1.1
    	│ ├─┬ fbemitter@2.0.2
    	│ │ └─┬ fbjs@0.7.2
    	│ │   ├─┬ isomorphic-fetch@2.2.1
    	│ │   │ ├─┬ node-fetch@1.5.3
    	│ │   │ │ └── encoding@0.1.12
    	│ │   │ └── whatwg-fetch@1.0.0
    	│ │   └── ua-parser-js@0.7.10
    	│ ├─┬ fbjs@0.1.0-alpha.7
    	│ │ └── whatwg-fetch@0.9.0
    	│ └── immutable@3.8.1
    	├── font-awesome@4.6.3
    	├─┬ istanbul@0.3.22
    	│ ├── abbrev@1.0.9
    	│ ├─┬ escodegen@1.7.1
    	│ │ ├── esprima@1.2.5
    	│ │ ├── estraverse@1.9.3
    	│ │ ├─┬ optionator@0.5.0
    	│ │ │ ├── deep-is@0.1.3
    	│ │ │ ├── fast-levenshtein@1.0.7
    	│ │ │ ├── levn@0.2.5
    	│ │ │ ├── prelude-ls@1.1.2
    	│ │ │ └── type-check@0.3.2
    	│ │ └── source-map@0.2.0
    	│ ├── esprima@2.5.0
    	│ ├─┬ fileset@0.2.1
    	│ │ └── glob@5.0.15
    	│ ├─┬ handlebars@4.0.5
    	│ │ └── source-map@0.4.4
    	│ ├─┬ js-yaml@3.6.1
    	│ │ ├─┬ argparse@1.0.7
    	│ │ │ └── sprintf-js@1.0.3
    	│ │ └── esprima@2.7.2
    	│ ├─┬ mkdirp@0.5.1
    	│ │ └── minimist@0.0.8
    	│ ├── nopt@3.0.6
    	│ ├─┬ once@1.3.3
    	│ │ └── wrappy@1.0.2
    	│ ├─┬ supports-color@3.1.2
    	│ │ └── has-flag@1.0.0
    	│ ├─┬ which@1.2.10
    	│ │ └── isexe@1.1.2
    	│ └── wordwrap@1.0.0
    	├── istanbul-instrumenter-loader@0.1.3
    	├── jquery@2.2.4
    	├─┬ karma@0.13.22
    	│ ├── batch@0.5.3
    	│ ├─┬ body-parser@1.15.2
    	│ │ ├── bytes@2.4.0
    	│ │ ├── iconv-lite@0.4.13
    	│ │ └── raw-body@2.1.7
    	│ ├─┬ chokidar@1.6.0
    	│ │ ├─┬ anymatch@1.3.0
    	│ │ │ ├── arrify@1.0.1
    	│ │ │ └─┬ micromatch@2.3.10
    	│ │ │   ├─┬ arr-diff@2.0.0
    	│ │ │   │ └── arr-flatten@1.0.1
    	│ │ │   ├─┬ braces@1.8.5
    	│ │ │   │ ├─┬ expand-range@1.8.2
    	│ │ │   │ │ └─┬ fill-range@2.2.3
    	│ │ │   │ │   ├── is-number@2.1.0
    	│ │ │   │ │   ├── isobject@2.1.0
    	│ │ │   │ │   └── randomatic@1.1.5
    	│ │ │   │ ├── preserve@0.2.0
    	│ │ │   │ └── repeat-element@1.1.2
    	│ │ │   ├─┬ expand-brackets@0.1.5
    	│ │ │   │ └── is-posix-bracket@0.1.1
    	│ │ │   ├── extglob@0.3.2
    	│ │ │   ├── filename-regex@2.0.0
    	│ │ │   ├─┬ kind-of@3.0.3
    	│ │ │   │ └── is-buffer@1.1.3
    	│ │ │   ├── normalize-path@2.0.1
    	│ │ │   ├─┬ object.omit@2.0.0
    	│ │ │   │ ├─┬ for-own@0.1.4
    	│ │ │   │ │ └── for-in@0.1.5
    	│ │ │   │ └── is-extendable@0.1.1
    	│ │ │   ├─┬ parse-glob@3.0.4
    	│ │ │   │ ├── glob-base@0.3.0
    	│ │ │   │ └── is-dotfile@1.0.2
    	│ │ │   └─┬ regex-cache@0.4.3
    	│ │ │     ├── is-equal-shallow@0.1.3
    	│ │ │     └── is-primitive@2.0.0
    	│ │ ├── async-each@1.0.0
    	│ │ ├─┬ fsevents@1.0.12
    	│ │ │ └─┬ node-pre-gyp@0.6.25
    	│ │ │   ├─┬ mkdirp@0.5.1
    	│ │ │   │ └── minimist@0.0.8
    	│ │ │   ├─┬ nopt@3.0.6
    	│ │ │   │ └── abbrev@1.0.7
    	│ │ │   ├─┬ npmlog@2.0.3
    	│ │ │   │ ├── ansi@0.3.1
    	│ │ │   │ ├─┬ are-we-there-yet@1.1.2
    	│ │ │   │ │ └── delegates@1.0.0
    	│ │ │   │ └─┬ gauge@1.2.7
    	│ │ │   │   ├── has-unicode@2.0.0
    	│ │ │   │   ├─┬ lodash.pad@4.1.0
    	│ │ │   │   │ ├── lodash.repeat@4.0.0
    	│ │ │   │   │ └── lodash.tostring@4.1.2
    	│ │ │   │   ├── lodash.padend@4.2.0
    	│ │ │   │   └── lodash.padstart@4.2.0
    	│ │ │   ├─┬ rc@1.1.6
    	│ │ │   │ ├── deep-extend@0.4.1
    	│ │ │   │ ├── ini@1.3.4
    	│ │ │   │ ├── minimist@1.2.0
    	│ │ │   │ └── strip-json-comments@1.0.4
    	│ │ │   ├─┬ request@2.69.0
    	│ │ │   │ ├── aws-sign2@0.6.0
    	│ │ │   │ ├─┬ aws4@1.3.2
    	│ │ │   │ │ └─┬ lru-cache@4.0.1
    	│ │ │   │ │   ├── pseudomap@1.0.2
    	│ │ │   │ │   └── yallist@2.0.0
    	│ │ │   │ ├── bl@1.0.3
    	│ │ │   │ ├── caseless@0.11.0
    	│ │ │   │ ├─┬ combined-stream@1.0.5
    	│ │ │   │ │ └── delayed-stream@1.0.0
    	│ │ │   │ ├── extend@3.0.0
    	│ │ │   │ ├── forever-agent@0.6.1
    	│ │ │   │ ├─┬ form-data@1.0.0-rc4
    	│ │ │   │ │ └── async@1.5.2
    	│ │ │   │ ├─┬ har-validator@2.0.6
    	│ │ │   │ │ ├─┬ chalk@1.1.3
    	│ │ │   │ │ │ ├── ansi-styles@2.2.1
    	│ │ │   │ │ │ ├── escape-string-regexp@1.0.5
    	│ │ │   │ │ │ ├─┬ has-ansi@2.0.0
    	│ │ │   │ │ │ │ └── ansi-regex@2.0.0
    	│ │ │   │ │ │ ├── strip-ansi@3.0.1
    	│ │ │   │ │ │ └── supports-color@2.0.0
    	│ │ │   │ │ ├─┬ commander@2.9.0
    	│ │ │   │ │ │ └── graceful-readlink@1.0.1
    	│ │ │   │ │ ├─┬ is-my-json-valid@2.13.1
    	│ │ │   │ │ │ ├── generate-function@2.0.0
    	│ │ │   │ │ │ ├─┬ generate-object-property@1.2.0
    	│ │ │   │ │ │ │ └── is-property@1.0.2
    	│ │ │   │ │ │ ├── jsonpointer@2.0.0
    	│ │ │   │ │ │ └── xtend@4.0.1
    	│ │ │   │ │ └─┬ pinkie-promise@2.0.0
    	│ │ │   │ │   └── pinkie@2.0.4
    	│ │ │   │ ├─┬ hawk@3.1.3
    	│ │ │   │ │ ├── boom@2.10.1
    	│ │ │   │ │ ├── cryptiles@2.0.5
    	│ │ │   │ │ ├── hoek@2.16.3
    	│ │ │   │ │ └── sntp@1.0.9
    	│ │ │   │ ├─┬ http-signature@1.1.1
    	│ │ │   │ │ ├── assert-plus@0.2.0
    	│ │ │   │ │ ├─┬ jsprim@1.2.2
    	│ │ │   │ │ │ ├── extsprintf@1.0.2
    	│ │ │   │ │ │ ├── json-schema@0.2.2
    	│ │ │   │ │ │ └── verror@1.3.6
    	│ │ │   │ │ └─┬ sshpk@1.7.4
    	│ │ │   │ │   ├── asn1@0.2.3
    	│ │ │   │ │   ├─┬ dashdash@1.13.0
    	│ │ │   │ │   │ └── assert-plus@1.0.0
    	│ │ │   │ │   ├── ecc-jsbn@0.1.1
    	│ │ │   │ │   ├── jodid25519@1.0.2
    	│ │ │   │ │   ├── jsbn@0.1.0
    	│ │ │   │ │   └── tweetnacl@0.14.3
    	│ │ │   │ ├── is-typedarray@1.0.0
    	│ │ │   │ ├── isstream@0.1.2
    	│ │ │   │ ├── json-stringify-safe@5.0.1
    	│ │ │   │ ├─┬ mime-types@2.1.10
    	│ │ │   │ │ └── mime-db@1.22.0
    	│ │ │   │ ├── node-uuid@1.4.7
    	│ │ │   │ ├── oauth-sign@0.8.1
    	│ │ │   │ ├── qs@6.0.2
    	│ │ │   │ ├── stringstream@0.0.5
    	│ │ │   │ ├── tough-cookie@2.2.2
    	│ │ │   │ └── tunnel-agent@0.4.2
    	│ │ │   ├─┬ rimraf@2.5.2
    	│ │ │   │ └─┬ glob@7.0.3
    	│ │ │   │   ├─┬ inflight@1.0.4
    	│ │ │   │   │ └── wrappy@1.0.1
    	│ │ │   │   ├── inherits@2.0.1
    	│ │ │   │   ├─┬ minimatch@3.0.0
    	│ │ │   │   │ └─┬ brace-expansion@1.1.3
    	│ │ │   │   │   ├── balanced-match@0.3.0
    	│ │ │   │   │   └── concat-map@0.0.1
    	│ │ │   │   ├─┬ once@1.3.3
    	│ │ │   │   │ └── wrappy@1.0.1
    	│ │ │   │   └── path-is-absolute@1.0.0
    	│ │ │   ├── semver@5.1.0
    	│ │ │   ├─┬ tar@2.2.1
    	│ │ │   │ ├── block-stream@0.0.8
    	│ │ │   │ ├─┬ fstream@1.0.8
    	│ │ │   │ │ └── graceful-fs@4.1.3
    	│ │ │   │ └── inherits@2.0.1
    	│ │ │   └─┬ tar-pack@3.1.3
    	│ │ │     ├─┬ debug@2.2.0
    	│ │ │     │ └── ms@0.7.1
    	│ │ │     ├─┬ fstream-ignore@1.0.3
    	│ │ │     │ └─┬ minimatch@3.0.0
    	│ │ │     │   └─┬ brace-expansion@1.1.3
    	│ │ │     │     ├── balanced-match@0.3.0
    	│ │ │     │     └── concat-map@0.0.1
    	│ │ │     ├─┬ once@1.3.3
    	│ │ │     │ └── wrappy@1.0.1
    	│ │ │     ├─┬ readable-stream@2.0.6
    	│ │ │     │ ├── core-util-is@1.0.2
    	│ │ │     │ ├── isarray@1.0.0
    	│ │ │     │ ├── process-nextick-args@1.0.6
    	│ │ │     │ ├── string_decoder@0.10.31
    	│ │ │     │ └── util-deprecate@1.0.2
    	│ │ │     └── uid-number@0.0.6
    	│ │ ├── glob-parent@2.0.0
    	│ │ ├── inherits@2.0.1
    	│ │ ├─┬ is-binary-path@1.0.1
    	│ │ │ └── binary-extensions@1.5.0
    	│ │ ├─┬ is-glob@2.0.1
    	│ │ │ └── is-extglob@1.0.0
    	│ │ └─┬ readdirp@2.1.0
    	│ │   ├── minimatch@3.0.2
    	│ │   └── set-immediate-shim@1.0.1
    	│ ├── colors@1.1.2
    	│ ├─┬ connect@3.4.1
    	│ │ └── finalhandler@0.4.1
    	│ ├── core-js@2.4.0
    	│ ├── di@0.0.1
    	│ ├─┬ dom-serialize@2.2.1
    	│ │ ├── custom-event@1.0.0
    	│ │ ├── ent@2.2.0
    	│ │ └── void-elements@2.0.1
    	│ ├─┬ expand-braces@0.1.2
    	│ │ ├── array-slice@0.2.3
    	│ │ ├── array-unique@0.2.1
    	│ │ └─┬ braces@0.1.5
    	│ │   └─┬ expand-range@0.1.1
    	│ │     ├── is-number@0.1.1
    	│ │     └── repeat-string@0.2.2
    	│ ├─┬ glob@7.0.5
    	│ │ ├── fs.realpath@1.0.0
    	│ │ └── inflight@1.0.5
    	│ ├── graceful-fs@4.1.4
    	│ ├─┬ http-proxy@1.14.0
    	│ │ └── requires-port@1.0.0
    	│ ├── isbinaryfile@3.0.0
    	│ ├─┬ log4js@0.6.37
    	│ │ ├─┬ readable-stream@1.0.34
    	│ │ │ ├── core-util-is@1.0.2
    	│ │ │ └── isarray@0.0.1
    	│ │ └── semver@4.3.6
    	│ ├── mime@1.3.4
    	│ ├── minimatch@3.0.2
    	│ ├─┬ optimist@0.6.1
    	│ │ ├── minimist@0.0.10
    	│ │ └── wordwrap@0.0.2
    	│ ├─┬ rimraf@2.5.3
    	│ │ └─┬ glob@7.0.5
    	│ │   └── minimatch@3.0.2
    	│ ├─┬ socket.io@1.4.8
    	│ │ ├─┬ engine.io@1.6.11
    	│ │ │ ├─┬ accepts@1.1.4
    	│ │ │ │ ├─┬ mime-types@2.0.14
    	│ │ │ │ │ └── mime-db@1.12.0
    	│ │ │ │ └── negotiator@0.4.9
    	│ │ │ ├── base64id@0.1.0
    	│ │ │ ├─┬ engine.io-parser@1.2.4
    	│ │ │ │ ├── after@0.8.1
    	│ │ │ │ ├── arraybuffer.slice@0.0.6
    	│ │ │ │ ├── base64-arraybuffer@0.1.2
    	│ │ │ │ ├── blob@0.0.4
    	│ │ │ │ ├─┬ has-binary@0.1.6
    	│ │ │ │ │ └── isarray@0.0.1
    	│ │ │ │ └── utf8@2.1.0
    	│ │ │ └─┬ ws@1.1.0
    	│ │ │   ├── options@0.0.6
    	│ │ │   └── ultron@1.0.2
    	│ │ ├─┬ has-binary@0.1.7
    	│ │ │ └── isarray@0.0.1
    	│ │ ├─┬ socket.io-adapter@0.4.0
    	│ │ │ └─┬ socket.io-parser@2.2.2
    	│ │ │   ├── component-emitter@1.1.2
    	│ │ │   ├── debug@0.7.4
    	│ │ │   ├── isarray@0.0.1
    	│ │ │   └── json3@3.2.6
    	│ │ ├─┬ socket.io-client@1.4.8
    	│ │ │ ├── backo2@1.0.2
    	│ │ │ ├── component-bind@1.0.0
    	│ │ │ ├── component-emitter@1.2.0
    	│ │ │ ├─┬ engine.io-client@1.6.11
    	│ │ │ │ ├── component-emitter@1.1.2
    	│ │ │ │ ├── component-inherit@0.0.3
    	│ │ │ │ ├── has-cors@1.1.0
    	│ │ │ │ ├── parsejson@0.0.1
    	│ │ │ │ ├── parseqs@0.0.2
    	│ │ │ │ ├── ws@1.0.1
    	│ │ │ │ ├── xmlhttprequest-ssl@1.5.1
    	│ │ │ │ └── yeast@0.1.2
    	│ │ │ ├── indexof@0.0.1
    	│ │ │ ├── object-component@0.0.3
    	│ │ │ ├─┬ parseuri@0.0.4
    	│ │ │ │ └─┬ better-assert@1.0.2
    	│ │ │ │   └── callsite@1.0.0
    	│ │ │ └── to-array@0.1.4
    	│ │ └─┬ socket.io-parser@2.2.6
    	│ │   ├── benchmark@1.0.0
    	│ │   ├── component-emitter@1.1.2
    	│ │   ├── isarray@0.0.1
    	│ │   └── json3@3.3.2
    	│ └─┬ useragent@2.1.9
    	│   └── lru-cache@2.2.4
    	├─┬ karma-coverage@0.2.7
    	│ ├── dateformat@1.0.12
    	│ ├─┬ ibrik@2.0.0
    	│ │ ├─┬ coffee-script@1.8.0
    	│ │ │ └── mkdirp@0.3.5
    	│ │ ├── esprima@1.2.5
    	│ │ ├── estraverse@1.8.0
    	│ │ ├─┬ fileset@0.1.8
    	│ │ │ ├─┬ glob@3.2.11
    	│ │ │ │ └── minimatch@0.3.0
    	│ │ │ └─┬ minimatch@0.4.0
    	│ │ │   └── lru-cache@2.7.3
    	│ │ ├── lodash@2.4.2
    	│ │ └── which@1.0.9
    	│ └─┬ minimatch@0.3.0
    	│   ├── lru-cache@2.7.3
    	│   └── sigmund@1.0.1
    	├── karma-mocha@0.1.10
    	├── karma-phantomjs-launcher@0.1.4
    	├─┬ karma-sauce-launcher@0.2.14
    	│ ├── q@0.9.7
    	│ ├─┬ sauce-connect-launcher@0.11.1
    	│ │ ├── adm-zip@0.4.7
    	│ │ ├── async@0.9.0
    	│ │ ├── lodash@3.5.0
    	│ │ └── rimraf@2.2.6
    	│ ├── saucelabs@0.1.1
    	│ └─┬ wd@0.3.12
    	│   ├─┬ archiver@0.14.4
    	│   │ ├── async@0.9.2
    	│   │ ├── buffer-crc32@0.2.5
    	│   │ ├── glob@4.3.5
    	│   │ ├─┬ lazystream@0.1.0
    	│   │ │ └─┬ readable-stream@1.0.34
    	│   │ │   └── isarray@0.0.1
    	│   │ ├── lodash@3.2.0
    	│   │ ├─┬ readable-stream@1.0.34
    	│   │ │ └── isarray@0.0.1
    	│   │ ├─┬ tar-stream@1.1.5
    	│   │ │ ├── bl@0.9.5
    	│   │ │ ├── end-of-stream@1.1.0
    	│   │ │ └─┬ readable-stream@1.0.34
    	│   │ │   └── isarray@0.0.1
    	│   │ └─┬ zip-stream@0.5.2
    	│   │   ├─┬ compress-commons@0.2.9
    	│   │   │ ├─┬ crc32-stream@0.3.4
    	│   │   │ │ └─┬ readable-stream@1.0.34
    	│   │   │ │   └── isarray@0.0.1
    	│   │   │ ├── node-int64@0.3.3
    	│   │   │ └─┬ readable-stream@1.0.34
    	│   │   │   └── isarray@0.0.1
    	│   │   ├── lodash@3.2.0
    	│   │   └─┬ readable-stream@1.0.34
    	│   │     └── isarray@0.0.1
    	│   ├── async@1.0.0
    	│   ├── lodash@3.9.3
    	│   ├─┬ request@2.55.0
    	│   │ ├── aws-sign2@0.5.0
    	│   │ ├─┬ bl@0.9.5
    	│   │ │ └─┬ readable-stream@1.0.34
    	│   │ │   └── isarray@0.0.1
    	│   │ ├── caseless@0.9.0
    	│   │ ├─┬ combined-stream@0.0.7
    	│   │ │ └── delayed-stream@0.0.5
    	│   │ ├─┬ form-data@0.2.0
    	│   │ │ └── async@0.9.2
    	│   │ ├── har-validator@1.8.0
    	│   │ ├── hawk@2.3.1
    	│   │ ├─┬ http-signature@0.10.1
    	│   │ │ ├── asn1@0.1.11
    	│   │ │ ├── assert-plus@0.1.5
    	│   │ │ └── ctype@0.5.3
    	│   │ ├─┬ mime-types@2.0.14
    	│   │ │ └── mime-db@1.12.0
    	│   │ ├── oauth-sign@0.6.0
    	│   │ └── qs@2.4.2
    	│   ├── underscore.string@3.0.3
    	│   └── vargs@0.1.0
    	├─┬ karma-sinon-chai@0.3.2
    	│ ├─┬ chai@1.10.0
    	│ │ ├── assertion-error@1.0.0
    	│ │ └─┬ deep-eql@0.1.3
    	│ │   └── type-detect@0.1.1
    	│ ├── lodash@2.4.2
    	│ ├─┬ sinon@1.12.2
    	│ │ ├─┬ formatio@1.1.1
    	│ │ │ └── samsam@1.1.3
    	│ │ ├── lolex@1.1.0
    	│ │ └── util@0.10.3
    	│ └── sinon-chai@2.6.0
    	├─┬ karma-webpack@1.7.0
    	│ ├── async@0.9.2
    	│ ├─┬ source-map@0.1.43
    	│ │ └── amdefine@1.0.0
    	│ └── webpack-dev-middleware@1.6.1
    	├── lazy@1.0.11
    	├─┬ less@2.7.1
    	│ ├─┬ errno@0.1.4
    	│ │ └── prr@0.0.0
    	│ ├── image-size@0.5.0
    	│ └─┬ promise@7.1.1
    	│   └── asap@2.0.4
    	├── less-loader@2.2.3
    	├── UNMET PEER DEPENDENCY mocha@*
    	├─┬ node-sass@3.8.0
    	│ ├── async-foreach@0.1.3
    	│ ├─┬ cross-spawn@3.0.1
    	│ │ └─┬ lru-cache@4.0.1
    	│ │   ├── pseudomap@1.0.2
    	│ │   └── yallist@2.0.0
    	│ ├─┬ gaze@1.1.0
    	│ │ └─┬ globule@1.0.0
    	│ │   ├── glob@7.0.5
    	│ │   ├── lodash@4.9.0
    	│ │   └── minimatch@3.0.2
    	│ ├── get-stdin@4.0.1
    	│ ├─┬ glob@7.0.5
    	│ │ └── minimatch@3.0.2
    	│ ├── in-publish@2.0.0
    	│ ├─┬ lodash.clonedeep@4.3.2
    	│ │ └── lodash._baseclone@4.5.7
    	│ ├─┬ meow@3.7.0
    	│ │ ├─┬ camelcase-keys@2.1.0
    	│ │ │ └── camelcase@2.1.1
    	│ │ ├─┬ loud-rejection@1.6.0
    	│ │ │ ├─┬ currently-unhandled@0.4.1
    	│ │ │ │ └── array-find-index@1.0.1
    	│ │ │ └── signal-exit@3.0.0
    	│ │ ├── map-obj@1.0.1
    	│ │ ├─┬ normalize-package-data@2.3.5
    	│ │ │ ├── hosted-git-info@2.1.5
    	│ │ │ ├─┬ is-builtin-module@1.0.0
    	│ │ │ │ └── builtin-modules@1.1.1
    	│ │ │ └─┬ validate-npm-package-license@3.0.1
    	│ │ │   ├─┬ spdx-correct@1.0.2
    	│ │ │   │ └── spdx-license-ids@1.2.1
    	│ │ │   └─┬ spdx-expression-parse@1.0.2
    	│ │ │     └── spdx-exceptions@1.0.4
    	│ │ ├─┬ read-pkg-up@1.0.1
    	│ │ │ ├─┬ find-up@1.1.2
    	│ │ │ │ └── path-exists@2.1.0
    	│ │ │ └─┬ read-pkg@1.1.0
    	│ │ │   ├─┬ load-json-file@1.1.0
    	│ │ │   │ ├─┬ parse-json@2.2.0
    	│ │ │   │ │ └─┬ error-ex@1.3.0
    	│ │ │   │ │   └── is-arrayish@0.2.1
    	│ │ │   │ ├── pify@2.3.0
    	│ │ │   │ └─┬ strip-bom@2.0.0
    	│ │ │   │   └── is-utf8@0.2.1
    	│ │ │   └── path-type@1.1.0
    	│ │ ├─┬ redent@1.0.0
    	│ │ │ ├─┬ indent-string@2.1.0
    	│ │ │ │ └── repeating@2.0.1
    	│ │ │ └── strip-indent@1.0.1
    	│ │ └── trim-newlines@1.0.0
    	│ ├── nan@2.3.5
    	│ ├─┬ node-gyp@3.4.0
    	│ │ ├── fstream@1.0.10
    	│ │ ├── glob@7.0.5
    	│ │ ├── minimatch@3.0.2
    	│ │ ├─┬ npmlog@3.1.2
    	│ │ │ ├─┬ are-we-there-yet@1.1.2
    	│ │ │ │ └── delegates@1.0.0
    	│ │ │ ├── console-control-strings@1.1.0
    	│ │ │ ├─┬ gauge@2.6.0
    	│ │ │ │ ├── aproba@1.0.4
    	│ │ │ │ ├── has-color@0.1.7
    	│ │ │ │ ├── has-unicode@2.0.1
    	│ │ │ │ └── wide-align@1.1.0
    	│ │ │ └── set-blocking@2.0.0
    	│ │ ├─┬ osenv@0.1.3
    	│ │ │ └── os-homedir@1.0.1
    	│ │ ├─┬ path-array@1.0.1
    	│ │ │ └─┬ array-index@1.0.0
    	│ │ │   └─┬ es6-symbol@3.1.0
    	│ │ │     ├── d@0.1.1
    	│ │ │     └─┬ es5-ext@0.10.12
    	│ │ │       └── es6-iterator@2.0.0
    	│ │ ├── semver@5.2.0
    	│ │ └─┬ tar@2.2.1
    	│ │   └── block-stream@0.0.9
    	│ ├─┬ request@2.72.0
    	│ │ ├── aws4@1.4.1
    	│ │ ├─┬ bl@1.1.2
    	│ │ │ └── readable-stream@2.0.6
    	│ │ └── qs@6.1.0
    	│ └─┬ sass-graph@2.1.2
    	│   ├─┬ glob@7.0.5
    	│   │ └── minimatch@3.0.2
    	│   ├── lodash@4.13.1
    	│   └─┬ yargs@4.7.1
    	│     ├── camelcase@3.0.0
    	│     ├─┬ cliui@3.2.0
    	│     │ └── wrap-ansi@2.0.0
    	│     ├─┬ lodash.assign@4.0.9
    	│     │ ├── lodash.keys@4.0.7
    	│     │ └── lodash.rest@4.0.3
    	│     ├─┬ os-locale@1.4.0
    	│     │ └─┬ lcid@1.0.0
    	│     │   └── invert-kv@1.0.0
    	│     ├─┬ pkg-conf@1.1.3
    	│     │ └── symbol@0.2.3
    	│     ├── require-main-filename@1.0.1
    	│     ├── set-blocking@1.0.0
    	│     ├─┬ string-width@1.0.1
    	│     │ ├── code-point-at@1.0.0
    	│     │ └── is-fullwidth-code-point@1.0.0
    	│     ├── window-size@0.2.0
    	│     ├── y18n@3.2.1
    	│     └─┬ yargs-parser@2.4.0
    	│       └── camelcase@2.1.1
    	├── normalizr@1.4.1
    	├── nprogress@0.2.0
    	├─┬ phantomjs@1.9.20
    	│ ├─┬ extract-zip@1.5.0
    	│ │ ├─┬ concat-stream@1.5.0
    	│ │ │ ├── readable-stream@2.0.6
    	│ │ │ └── typedarray@0.0.6
    	│ │ ├── debug@0.7.4
    	│ │ ├─┬ mkdirp@0.5.0
    	│ │ │ └── minimist@0.0.8
    	│ │ └─┬ yauzl@2.4.1
    	│ │   └─┬ fd-slicer@1.0.1
    	│ │     └── pend@1.2.0
    	│ ├─┬ fs-extra@0.26.7
    	│ │ ├── jsonfile@2.3.1
    	│ │ └── klaw@1.3.0
    	│ ├─┬ hasha@2.2.0
    	│ │ ├── is-stream@1.1.0
    	│ │ └─┬ pinkie-promise@2.0.1
    	│ │   └── pinkie@2.0.4
    	│ ├── kew@0.7.0
    	│ ├── progress@1.1.8
    	│ ├─┬ request@2.67.0
    	│ │ ├─┬ bl@1.0.3
    	│ │ │ └── readable-stream@2.0.6
    	│ │ └── qs@5.2.0
    	│ └─┬ request-progress@2.0.1
    	│   └── throttleit@1.0.0
    	├── postcss-loader@0.6.0
    	├── postcss-nested@1.0.0
    	├─┬ react@0.13.3
    	│ └─┬ envify@3.4.1
    	│   └─┬ jstransform@11.0.3
    	│     ├── base62@1.1.1
    	│     ├── esprima-fb@15001.1.0-dev-harmony-fb
    	│     ├── object-assign@2.1.1
    	│     └── source-map@0.4.4
    	├─┬ react-bootstrap@0.25.2
    	│ ├── babel-runtime@5.8.38
    	│ ├── dom-helpers@2.4.0
    	│ ├── keycode@2.1.2
    	│ ├─┬ react-overlays@0.4.4
    	│ │ ├── react-prop-types@0.2.2
    	│ │ └── warning@2.1.0
    	│ └── uncontrollable@3.2.4
    	├─┬ react-hot-loader@1.3.0
    	│ ├── react-hot-api@0.4.7
    	│ └── source-map@0.4.4
    	├─┬ react-modal@0.5.0
    	│ ├── element-class@0.2.2
    	│ └─┬ lodash.assign@3.2.0
    	│   ├─┬ lodash._baseassign@3.2.0
    	│   │ ├── lodash._basecopy@3.0.1
    	│   │ └── lodash.keys@3.1.2
    	│   ├─┬ lodash._createassigner@3.1.1
    	│   │ ├── lodash._bindcallback@3.0.1
    	│   │ ├── lodash._isiterateecall@3.0.9
    	│   │ └── lodash.restparam@3.6.1
    	│   └─┬ lodash.keys@3.1.2
    	│     ├── lodash._getnative@3.9.1
    	│     ├── lodash.isarguments@3.0.8
    	│     └── lodash.isarray@3.0.4
    	├─┬ react-router@0.13.5
    	│ ├── can-use-dom@0.1.0
    	│ ├─┬ invariant@2.2.1
    	│ │ └── loose-envify@1.2.0
    	│ ├── object-assign@2.1.1
    	│ └── qs@2.4.1
    	├─┬ reflux@0.2.13
    	│ ├── eventemitter3@1.2.0
    	│ └── reflux-core@0.2.1
    	├─┬ resource-api-utils@1.0.1
    	│ ├── q@1.4.1
    	│ └─┬ superagent@1.8.3
    	│   ├── component-emitter@1.2.1
    	│   ├── cookiejar@2.0.6
    	│   ├── form-data@1.0.0-rc3
    	│   ├── formidable@1.0.17
    	│   ├── qs@2.3.3
    	│   ├─┬ readable-stream@1.0.27-1
    	│   │ └── isarray@0.0.1
    	│   └── reduce-component@1.0.1
    	├── style-loader@0.12.4
    	├─┬ url-loader@0.5.7
    	│ └── mime@1.2.11
    	├─┬ webpack@1.13.1
    	│ ├── acorn@3.2.0
    	│ ├── clone@1.0.2
    	│ ├─┬ enhanced-resolve@0.9.1
    	│ │ └── memory-fs@0.2.0
    	│ ├── interpret@0.6.6
    	│ ├─┬ memory-fs@0.3.0
    	│ │ └─┬ readable-stream@2.1.4
    	│ │   ├── buffer-shims@1.0.0
    	│ │   ├── isarray@1.0.0
    	│ │   ├── process-nextick-args@1.0.7
    	│ │   └── util-deprecate@1.0.2
    	│ ├─┬ node-libs-browser@0.5.3
    	│ │ ├── assert@1.4.1
    	│ │ ├─┬ browserify-zlib@0.1.4
    	│ │ │ └── pako@0.2.8
    	│ │ ├─┬ buffer@3.6.0
    	│ │ │ ├── base64-js@0.0.8
    	│ │ │ └── ieee754@1.1.6
    	│ │ ├─┬ console-browserify@1.1.0
    	│ │ │ └── date-now@0.1.4
    	│ │ ├── constants-browserify@0.0.1
    	│ │ ├─┬ crypto-browserify@3.2.8
    	│ │ │ ├── pbkdf2-compat@2.0.1
    	│ │ │ ├── ripemd160@0.2.0
    	│ │ │ └── sha.js@2.2.6
    	│ │ ├── domain-browser@1.1.7
    	│ │ ├── events@1.1.1
    	│ │ ├─┬ http-browserify@1.7.0
    	│ │ │ └── Base64@0.2.1
    	│ │ ├── https-browserify@0.0.0
    	│ │ ├── os-browserify@0.1.2
    	│ │ ├── path-browserify@0.0.0
    	│ │ ├── process@0.11.5
    	│ │ ├── punycode@1.4.1
    	│ │ ├── querystring-es3@0.2.1
    	│ │ ├─┬ readable-stream@1.1.14
    	│ │ │ └── isarray@0.0.1
    	│ │ ├─┬ stream-browserify@1.0.0
    	│ │ │ └─┬ readable-stream@1.1.14
    	│ │ │   └── isarray@0.0.1
    	│ │ ├── string_decoder@0.10.31
    	│ │ ├── timers-browserify@1.4.2
    	│ │ ├── tty-browserify@0.0.0
    	│ │ ├─┬ url@0.10.3
    	│ │ │ ├── punycode@1.3.2
    	│ │ │ └── querystring@0.2.0
    	│ │ └── vm-browserify@0.0.4
    	│ ├── tapable@0.1.10
    	│ ├─┬ uglify-js@2.6.4
    	│ │ ├── async@0.2.10
    	│ │ ├── uglify-to-browserify@1.0.2
    	│ │ └─┬ yargs@3.10.0
    	│ │   ├── camelcase@1.2.1
    	│ │   ├─┬ cliui@2.1.0
    	│ │   │ ├─┬ center-align@0.1.3
    	│ │   │ │ ├─┬ align-text@0.1.4
    	│ │   │ │ │ ├── longest@1.0.1
    	│ │   │ │ │ └── repeat-string@1.5.4
    	│ │   │ │ └── lazy-cache@1.0.4
    	│ │   │ └── right-align@0.1.3
    	│ │   └── window-size@0.1.0
    	│ ├─┬ watchpack@0.2.9
    	│ │ └── async@0.9.2
    	│ └─┬ webpack-core@0.6.8
    	│   └── source-map@0.4.4
    	└─┬ webpack-dev-server@1.14.1
    	  ├─┬ compression@1.6.2
    	  │ ├── bytes@2.3.0
    	  │ ├── compressible@2.0.8
    	  │ └── on-headers@1.0.1
    	  ├── connect-history-api-fallback@1.1.0
    	  ├── serve-index@1.8.0
    	  ├─┬ sockjs@0.3.17
    	  │ ├─┬ faye-websocket@0.10.0
    	  │ │ └─┬ websocket-driver@0.6.5
    	  │ │   └── websocket-extensions@0.1.1
    	  │ └── uuid@2.0.2
    	  ├─┬ sockjs-client@1.1.1
    	  │ ├─┬ eventsource@0.1.6
    	  │ │ └─┬ original@1.0.0
    	  │ │   └── url-parse@1.0.5
    	  │ ├── faye-websocket@0.11.0
    	  │ ├── json3@3.3.2
    	  │ └─┬ url-parse@1.1.1
    	  │   └── querystringify@0.0.3
    	  ├── stream-cache@0.0.2
    	  └─┬ strip-ansi@3.0.1
    	    └── ansi-regex@2.0.0

