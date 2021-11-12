use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Foo {
    pub first: u32,

    #[wasm_bindgen(readonly)]
    pub second: u32,
}
