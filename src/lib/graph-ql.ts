interface IQueryParams {
  query: string;
  variables?: object;
}

export const query = async <T>({
  query,
  variables = {},
}: IQueryParams): Promise<T> => {
  const response = await fetch(import.meta.env.WP_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  const { data } = await response.json();

  return data;
};
