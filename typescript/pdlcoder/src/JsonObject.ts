type JSONValue =
    | string
    | number
    | boolean
    | JSONObject
    | JSONArray;

interface JSONObject {
    [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> { }

export {JSONValue, JSONObject, JSONArray}

// https://dev.to/ankittanna/how-to-create-a-type-for-complex-json-object-in-typescript-d81