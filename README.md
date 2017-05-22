# tslint-config-finger

[**Finger**](https://finger66.com)内部使用的，用于检测[TypeScript](https://www.typescriptlang.org/)代码

<span><img src="http://forthebadge.com/images/badges/built-with-love.svg"></span>
<span><img src="http://forthebadge.com/images/badges/makes-people-smile.svg"></span>
<span><img src="http://forthebadge.com/images/badges/uses-badges.svg"></span>

English Doc.: [EN](https://github.com/ffe-team/tslint-config-finger/blob/master/README_EN.md)

## 安装

### 安装包

```shell
# npm
npm install tslint tslint-config-finger --save-dev

## OR

#yarn
yarn add tslint tslint-config-finger --dev

```

### 初始化工程

```shell
    tslint --init
```

在运行上面的脚本之后，我们将在项目根目录下发现`tslint.json`文件。

你的`tslint.json`可能和下面的一样：

```json
    {
        "defaultSeverity": "error",
        "extends": ["tslint:recommend"],
        "jsRules": {},
        "rules": {}
    }
```

## 基本使用

像下面那样改变`tslint.json`文件：

```json
    {
        "defaultSeverity": "error",
        "extends": ["tslint-config-finger"],
        "jsRules": {},
        "rules": {}
    }
```

完了，感谢使用!
