import { Button, Flex, Heading } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import useSWR, { mutate } from 'swr';

import { AutosizeTextarea } from '../components/textarea';
import { updateGist } from '../services/updateGist';
import { GistBlock } from '../components/gistBlock';
import { getGist } from '../services/getGist';
import Head from 'next/head';

interface ICurrentGistData {
  filename: string;
  content: string;
}

export interface IFilesData {
  [key: string]: ICurrentGistData;
}

interface IGistFiles {
  files: IFilesData;
}

export default function Gist() {
  const {data} = useSWR<IGistFiles>('/', getGist);

  const initialValue = data?.files['Test gist'].content;
  const title = data?.files['Test gist'].filename;
  const [edit, setEdit] = useState<boolean>(false);
  const [newGistContent, setNewGistContent] = useState<string>(initialValue!);

  const onEditButtonClick = () => {
    setEdit(!edit);
  };

  const onTextareaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewGistContent(e.currentTarget.value);
  };

  const onSaveButtonClick = async () => {
    await updateGist(newGistContent);
    await mutate('/');
    setEdit(false);
  };

  return (
      <Flex w='100%' flexDirection='column' alignItems='center'>
        <Head>
          <title>Blog by Igor | Gist</title>
        </Head>
        <Heading as='h3' size='xl' my='10px'>
          {title}
        </Heading>
        <Flex w={{lg: '50%', md: '80%', sm: '95%'}} my='10px' flexDirection='column'>
          <GistBlock code={initialValue!} filename={title!}/>
          {edit && <AutosizeTextarea defaultValue={initialValue ?? newGistContent} onChange={onTextareaChangeHandler}/>}
        </Flex>
        {!edit && <Button colorScheme='pink' variant='solid' onClick={onEditButtonClick}>Edit</Button>}
        {edit &&
            <Flex>
              <Button colorScheme='teal' variant='ghost' onClick={onSaveButtonClick}>SAVE</Button>
              <Button colorScheme='teal' variant='ghost' onClick={onEditButtonClick}>CANCEL</Button>
            </Flex>}
      </Flex>
  );
};
