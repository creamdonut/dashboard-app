import { generatePath, Link } from 'react-router-dom';

import { Paths } from 'pages/routes';
import { Center } from 'shared/Center';

export const NotFoundPage = () => {
  return (
    <Center>
      There is no such page here
      <p />
      Please go <Link to={generatePath(Paths.Home)}>home</Link>
    </Center>
  );
};
