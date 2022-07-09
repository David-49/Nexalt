import { FC, useState } from 'react';

import { PasswordInput, Popover, Progress } from '@mantine/core';
import { GetInputPropsPayload } from '@mantine/form/lib/types';
import { UseFormReturnType } from '@mantine/form/lib/use-form';
import { PasswordRequirement } from './PasswordRequirement';

interface IProps {
  label: string;
  description: string;
  placeholder: string;
  formData: UseFormReturnType<{
    email: string;
    password: string;
    confirm: string;
  }>;
  formMethods: GetInputPropsPayload;
}

export const PasswordStrength: FC<IProps> = (props) => {
  const { label, description, placeholder, formData, formMethods } = props;
  const [popoverOpened, setPopoverOpened] = useState(false);

  const requirements = [
    { re: /[0-9]/, label: 'Inclut un nombre' },
    { re: /[a-z]/, label: 'Inclut une lettre minuscule' },
    { re: /[A-Z]/, label: 'Includes une lettre majuscule' },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Inclut un caractère spécial' },
  ];

  const getStrength = (password: string) => {
    let multiplier = password.length > 7 ? 0 : 1;

    requirements.forEach((requirement) => {
      if (!requirement.re.test(password)) {
        multiplier += 1;
      }
    });

    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
  };

  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(formData.values.password)}
    />
  ));

  const strength = getStrength(formData.values.password);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  return (
    <Popover
      opened={popoverOpened}
      position="bottom"
      placement="start"
      withArrow
      styles={{ popover: { width: '100%' } }}
      trapFocus={false}
      transition="pop-top-left"
      onFocusCapture={() => setPopoverOpened(true)}
      onBlurCapture={() => setPopoverOpened(false)}
      target={
        <PasswordInput
          required
          label={label}
          placeholder={placeholder}
          description={description}
          {...formMethods}
        />
      }
    >
      <Progress
        color={color}
        value={strength}
        size={5}
        style={{ marginBottom: 10 }}
      />
      <PasswordRequirement
        label="Inclut au moins 8 caractères"
        meets={formData.values.password.length > 7}
      />
      {checks}
    </Popover>
  );
};
