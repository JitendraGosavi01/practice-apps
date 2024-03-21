import React from "react";
import { useRouter } from "next/router";
function ContactTo() {
  const query = useRouter().query;
  return <div>ContactTo {query.id}</div>;
}

export default ContactTo;
