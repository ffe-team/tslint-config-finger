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

  constructor() {}

  test1() {}

  get testAccess(): string {
    return this._testAccess
  }

  set testAccess(val: string) {
    this._testAccess = val
  }
}

//member-ordering
class MemberOrderTest {}
 
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
