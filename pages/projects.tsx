import { Flex, Heading } from '@chakra-ui/react';

import { Project } from '../components/project';

const projects = [
  {title: 'IgorAvshtol/init-app', link: 'https://github.com/IgorAvshtol/init-app'},
  {title: 'IgorAvshtol/atlas-test', link: 'https://github.com/IgorAvshtol/atlas-test'},
  {title: 'IgorAvshtol/itransition-main-app', link: 'https://github.com/IgorAvshtol/itransition-main-app'}
];

export default function Projects() {
  return (
      <Flex direction='column' alignItems='center'>
        <Heading as='h3' size='xl' my='10px'>
          Projects
        </Heading>
        {
          projects.map(project => <Project key={project.link} title={project.title} link={project.link}/>)
        }
      </Flex>
  );
};