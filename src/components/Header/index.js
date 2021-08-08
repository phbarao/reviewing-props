import React from "react";

import { PageHeader } from "./styles";

export default function Header({ title }) {
  return (
    <PageHeader>
      <h2>{title}</h2>
    </PageHeader>
  );
}
