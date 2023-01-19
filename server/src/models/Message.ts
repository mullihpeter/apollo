// src/models/Message.ts

import { builder } from "../builder";

builder.prismaObject("Message", {
  fields: (t) => ({
    id: t.exposeID("id"),
    body: t.exposeString("body"),
    created_at: t.expose("created_at", {
      type: "Date",
    }),
  }),
});