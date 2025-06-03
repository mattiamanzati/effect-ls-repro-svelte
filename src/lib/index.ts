// place files you want to import through the `$lib` alias in this folder.
import * as Effect from "effect/Effect"

const program = Effect.gen(function*(){
    const a = yield* Effect.succeed(true)
})