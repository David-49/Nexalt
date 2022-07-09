import { FC } from 'react';

import { IconCheck } from '@tabler/icons';
import { colors } from '../theme';

interface IProps {}

export const Checked: FC<IProps> = (props) => (
  <div
    style={{
      backgroundColor: colors.primaryBlue,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 16,
      height: 16,
      borderRadius: 3,
    }}
  >
    <IconCheck color="#fff" style={{ fontWeight: 'bold' }} />
  </div>
);
