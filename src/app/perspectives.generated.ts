import * as Types from "../types.generated";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type PerspectivesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type PerspectivesQuery = {
  __typename?: "Query";
  perspectives: Array<{ __typename?: "Perspective"; id: number; text: string }>;
};

export const PerspectivesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Perspectives" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "perspectives" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "text" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PerspectivesQuery, PerspectivesQueryVariables>;
