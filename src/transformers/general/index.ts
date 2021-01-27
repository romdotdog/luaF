import { Block } from "@ast/Base"
import dotToBracketNotation from "./dotToBracketNotation"
import stringToArgCall from "./stringToArgCall"
import removeDuplicateLiterals from "./removeDuplicateLiterals"
import tweakNumberNotation from "./tweakNumberNotation"
import variableGrouping from "./variableGrouping"
import encodeStrings from "./encodeStrings"
import splitStrings from "./splitStrings"
import nilDeadEnd from "./nilDeadEnd"
import charToTernary from "./charToTernary"

export default [
	dotToBracketNotation,
	stringToArgCall,

	splitStrings,
	charToTernary,

	removeDuplicateLiterals,
	variableGrouping,

	tweakNumberNotation,
	encodeStrings,
	nilDeadEnd
] as ((root: Block) => Block)[]
