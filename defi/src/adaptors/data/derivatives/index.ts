import dex_imports from "../../../utils/imports/dexs_adapters"
import { AdaptorRecordType } from "../../db-utils/adaptor-record";

// TODO: needs to be optimized. Currently loads to memory all adaptors
export const importModule = (module: string) => dex_imports[module].module

// KEYS USED TO MAP ATTRIBUTE -> KEY IN DYNAMO
export const KEYS_TO_STORE = {
    [AdaptorRecordType.dailyVolume]: "dailyVolume",
    [AdaptorRecordType.totalVolume]: "totalVolume"
}

export { default as config } from "./config";

export { default as dex_imports } from "../../../utils/imports/dexs_adapters"

 