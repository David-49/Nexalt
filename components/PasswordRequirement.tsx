import { Box, Text } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons';
import { FC } from 'react';

interface IProps {
  label: string;
  meets: boolean;
}

export const PasswordRequirement: FC<IProps> = (props) => {
  const { label, meets } = props;

  return (
    <Text
      color={meets ? 'teal' : 'red'}
      sx={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck /> : <IconX />} <Box ml={10}>{label}</Box>
    </Text>
  );
};
