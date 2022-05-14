import { Textarea, TextareaProps } from '@chakra-ui/react';
import { forwardRef } from 'react';
import ResizeTextarea from 'react-textarea-autosize';

export const AutosizeTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  return (
      <Textarea
          fontFamily={'Menlo Regular'}
          fontSize='13px'
          border='none'
          minH='unset'
          overflow='hidden'
          resize='none'
          ref={ref}
          minRows={1}
          as={ResizeTextarea}
          {...props}
      />
  );
});

AutosizeTextarea.displayName = 'AutosizeTextarea';