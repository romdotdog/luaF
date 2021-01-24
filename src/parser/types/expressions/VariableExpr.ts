import { Expression } from "../Base.ts";
import { Token, TokenTree } from "../Token.ts";

export class VariableExpr extends Expression {
    value: Token

    constructor(value: Token) {
        super()
        this.value = value
    }

    assemble(): TokenTree[] {
        return [this.value]
    }
}