import * as wasm from './wasm_bindgen_type_issue_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/
export class Foo {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foo_free(ptr);
    }
    /**
    */
    get first() {
        var ret = wasm.__wbg_get_foo_first(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set first(arg0) {
        wasm.__wbg_set_foo_first(this.ptr, arg0);
    }
    /**
    */
    get second() {
        var ret = wasm.__wbg_get_foo_second(this.ptr);
        return ret >>> 0;
    }
}

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

