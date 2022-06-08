import { useFetch } from '../hooks/useFetch';

type Repostory = {
  full_name: string;
  description?: string;
};
const RequestExample = () => {
  const { data: repositories, isFetching } = useFetch<Repostory[]>(
    //example url api
    'https://api.github.com/users/vitorferraz10/repos'
  );

  if (isFetching) {
    return <p>Carregando...</p>;
  }

  return (
    <ul>
      {repositories?.map((repo: Repostory) => (
        <>
          <li>{repo.full_name}</li>
          <li>{repo.description}</li>
        </>
      ))}
    </ul>
  );
};

export default RequestExample;
