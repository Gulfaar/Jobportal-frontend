import React, { Suspense } from "react";
import Joblisting from "./joblisting"

export default function Page() {
  return (
    <Suspense fallback={<div>Loading job listings...</div>}>
      <Joblisting />
    </Suspense>
  );
}
