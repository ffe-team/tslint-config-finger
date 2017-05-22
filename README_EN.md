# tslint-config-finger

It is used by [**Finger**](http://finger66.com/static/laptap/join.html)，for checking [TypeScript](https://www.typescriptlang.org/) code.

<span><img src="http://forthebadge.com/images/badges/built-with-love.svg"></span>
<span><img src="http://forthebadge.com/images/badges/makes-people-smile.svg"></span>
<span><img src="http://forthebadge.com/images/badges/uses-badges.svg"></span>

中文文档: [zh](https://github.com/ffe-team/tslint-config-finger/blob/master/README.md)

## Install

### Install packages

```shell
# npm
npm install tslint tslint-config-finger --save-dev

## OR

#yarn
yarn add tslint tslint-config-finger --dev

```

### Init project

```shell
    tslint --init
```

After running above script, we will find a `tslint.json` file in root directory of your project.

Your `tslint.json` may be same as below:

```json
    {
        "defaultSeverity": "error",
        "extends": ["tslint:recommend"],
        "jsRules": {},
        "rules": {}
    }
```

## Basic Usage

Change your `tslint.json` file as below:

```json
    {
        "defaultSeverity": "error",
        "extends": ["tslint-config-finger"],
        "jsRules": {},
        "rules": {}
    }
```

That's all, thanks for using!
