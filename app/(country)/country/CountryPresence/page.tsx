// app/(country)/country/CountryPresence/page.tsx
import React, { Suspense } from "react";
import CountryPresenceClient from "./countrypresenceclient";

const CountryPresencePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <CountryPresenceClient/>
    </Suspense>
  );
};

export default CountryPresencePage;
