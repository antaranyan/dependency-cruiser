import modules from "./modules.mjs";
import folders from "./folders.mjs";
import summary from "./summary.mjs";

export default {
  title: "dependency-cruiser output format",
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://dependency-cruiser.js.org/schema/cruise-result.schema.json",
  type: "object",
  required: ["summary", "modules"],
  additionalProperties: false,
  properties: {
    modules: { $ref: "#/definitions/ModulesType" },
    folders: { $ref: "#/definitions/FoldersType" },
    summary: { $ref: "#/definitions/SummaryType" },
  },
  definitions: {
    ...modules.definitions,
    ...folders.definitions,
    ...summary.definitions,
  },
};
