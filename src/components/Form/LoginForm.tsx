import { z } from 'zod';
import Form from '@/components/Form/Form';
import FormInput from '@/components/Form/FormInput';
import Button from '../Elements/Button/Button';

type FormFields = {
  username: string;
  password: string;
};

const schema = z.object({
  username: z.string().min(1, 'Required'),
  password: z.string().min(6, 'Required'),
});

export default function LoginForm() {
  return (
    <Form<FormFields>
      schema={schema}
      onSubmit={(data) => console.log(data)}
      formClass="flex flex-col gap-3"
      id="sign-in-form"
    >
      {({ register, formState }) => (
        <>
          <FormInput
            type="text"
            label="username"
            registration={register('username')}
            error={formState?.errors?.['username']}
          />
          <FormInput
            type="password"
            label="password"
            registration={register('password')}
            error={formState?.errors?.['password']}
          />
          <Button type="submit" size="md" buttonClass="mt-2">
            Login
          </Button>
        </>
      )}
    </Form>
  );
}
