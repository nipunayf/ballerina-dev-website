var docData = {"packages":[{"isSingleFile":false,"name":"xmlutils","orgName":"ballerina","version":"1.0.5","description":"## Module overview\n\nThis module provides utility functions to manipulate the built-in `xml` data type. \nIt provides APIs to convert a `json` to an `xml` or convert a `table` to an `xml`.\n","summary":"This module provides utility functions to manipulate the built-in \"xml\" data type.\nIt provides APIs to convert a \"json\" to an \"xml\" or convert a \"table\" to an \"xml\".","modules":[{"id":"xmlutils","orgName":"ballerina","version":"1.0.5","records":[{"fields":[{"defaultValue":"\"@\"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"attributePrefix","description":"The attribute prefix to use in the XML representation\n","isDeprecated":false},{"defaultValue":"\"root\"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"arrayEntryTag","description":"The XML tag to add an element from a JSON array\n","isDeprecated":false}],"isClosed":false,"name":"JsonOptions","description":"Represents a record type to provide configurations for the JSON to XML\nconversion.\n\n","isDeprecated":false}],"classes":[],"abstractObjects":[],"clients":[],"listeners":[],"functions":[{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"name":"json","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"jsonValue","description":"The JSON source\n","isDeprecated":false},{"defaultValue":"{}","type":{"orgName":"ballerina","moduleName":"xmlutils","version":"1.0.5","name":"JsonOptions","category":"records","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"options","description":"The `xmlutils:JsonOptions` record for JSON to XML conversion properties\n","isDeprecated":false}],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"xml","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"error","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"XML representation of the given JSON if the JSON is\n           successfully converted or else an `error`\n","isDeprecated":false}],"name":"fromJSON","description":"Converts a JSON object to an XML representation.\n```ballerina\n# json data \u003d {\n#     name: \"John\",\n#     age: 30\n# };\n# xml|error xmlValue \u003d xmlutils:fromJSON(data);\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"tableValue","description":"The `table` value to be converted to an XML\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"xml","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"The XML representation of the provided table\n","isDeprecated":false}],"name":"fromTable","description":"Converts a table to its XML representation.\n```ballerina\n# type Employee record {\n#      int id;\n#      string name;\n#      float salary;\n#      boolean permanent;\n#  };\n# table\u003cEmployee\u003e tableValue \u003d table[ { id: 1, name: \"Mary\",  salary: 300.5, permanent: true },\n#         { id: 2, name: \"John\",  salary: 300.5, permanent: true }\n#     ];\n# xml xmlValue \u003d xmlutils:fromTable(tableValue);\n# ```\n\n","isDeprecated":false}],"constants":[],"annotations":[],"errors":[],"types":[],"enums":[]}]}]};