import * as Types from "../types.generated";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type TodosQueryVariables = Types.Exact<{ [key: string]: never }>;

export type TodosQuery = {
  __typename?: "Query";
  todos: Array<{ __typename?: "Todo"; id: string }>;
};

export const TodosDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Todos" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "todos" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TodosQuery, TodosQueryVariables>;
