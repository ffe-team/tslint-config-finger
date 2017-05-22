// adjacent-overload-signatures
// function testOverloadSignatures(a: number): number
// function testOverloadSignatures(a: string): string
// function testOverloadSignatures(a) {
//   if (typeof a === 'number') {

//   }
// }

// ban-types
const banTypesTest: {} = {a: 1, b: 2}

// member-access
class MemberAccessTest {
  publicVar: string
  private _testAccess: string

  constructor() { /* empty */ }

  test1(): void { /* empty */ }

  get testAccess(): string {
    return this._testAccess
  }

  set testAccess(val: string) {
    this._testAccess = val
  }
}

//member-ordering
class MemberOrderTest {
  public static publicStaticVar: string
  protected static protectedStaticVar: string
  private static privateStaticVar: string
  public publicVar: string
  protected protectedVar: string
  private privateVar: string

  constructor() { /* empty */ }

  public static publicStaticFunc(): void { /* empty */ }
  protected static protectedStaticFunc(): void { /* empty */ }
  private static privateStaticFunc(): void { /* empty */ }

  public publicFunc(): void { /* empty */ }
  protected protectedFunc(): void { /* empty */ }
  private privateFunc(): void { /* empty */ }  
}
 
// no-any
// const noAnyTest: any = 1

// no-empty-interface
// interface noEmptyInterface {}

// no-import-side-effect
import './index.css'
import './index.less'
import './index.sass'
import './index.scss'
import './index.stylus'
import './index.styl'
import './index.html'
import './index.pug'
import './index.jade'
import './index.ejs'
import './index.hbs'

// no-inferrable-types
const a = 1

function noInferFunc (ab: number = 1): number {
  return a
}

// no-internal-module
// no-namespace
declare namespace OuterModel {}

// no-non-null-assertion
function noNonNullFunc(e:number): void {
  // e!.toExponential()
}

// no-reference
// /// <reference path="./index.d.ts" />

// no-unnecessary-type-assertion
// const unnecessaryNum = 1
// const unnecessaryNum2: number = unnecessaryNum as number

// no-var-requires
// var noVar = require('./testmodel')

// only-arrow-functions
const arrawFunction = () => {/* empty */}

// typedef
const typedefVar = 1

// unified-signatures
// function unifiedFunc(a: number): void;
// function unifiedFunc(a: string): string;
// function unifiedFunc(a: number | string): string {
//   return `${a}`
// }

// curly
let curlyVar: number = 1
if (true) curlyVar++

// forin
const forinObject = {a: 1, b: 2}

for (const key in forinObject) {
 // empty
}

// label-position
label:

for (const key in forinObject) {
  if (Object.prototype.hasOwnProperty.call(forinObject, key)) {
    continue label
  }
}



