import axios from "axios";
import React from "react";

export default async function SinleArticle({
  params,
}: {
  params: { id: string };
}) {
  const article = await axios.get(
    `http://localhost:3000/api/v1/blog/${params.id}`
  );
  return (
    <div>
      <h1>{article.data.article.title}</h1>
      <div>{article.data.article.content}</div>
    </div>
  );
}
