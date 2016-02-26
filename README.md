# angular-cjk-word-break
Simple angular filter for line break of CJK words.

## Installation
You can install either via bower or via npm.

### bower
```
bower install --save angular-cjk-word-break
```
Then include the script.
```
<script type="text/javascript" src="bower_components/angular/angular.js"
...
<script type="text/javascript" src="bower_components/angular-cjk-word-break/angular-cjk-word-break.js"
```

### npm
```
npm install --save angular-cjk-word-break
```
Then add this module to your script.
```
require('angular-cjk-word-break');
```

## Usage
Import this library to your angular app.
```
angular.module('myApp', ['cjkWordBreak']);
```

Then you can use the `cjkWordBreak` filter like follows:
```
<p ng-bind-html="longCjkText | cjkWordBreak"></p>
```
**Note: You must use this filter with `ng-bind-html` attribute.**

## License
Copyright (c) 2016, HyunSeob. Licensed under the [MIT license](https://github.com/HyunSeob/angular-cjk-word-break/blob/master/LICENSE).
