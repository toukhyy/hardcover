import { ReactNode } from 'react';
import {
  SubmitHandler,
  useForm,
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';
import { ZodType, ZodTypeDef } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type FormProps<TFormValues extends FieldValues> = {
  children: (methods: UseFormReturn<TFormValues>) => ReactNode;
  onSubmit: SubmitHandler<TFormValues>;
  schema: ZodType<TFormValues, ZodTypeDef, unknown>;
};

export default function Form<TFormValues extends FieldValues>({
  children,
  schema,
  onSubmit,
}: FormProps<TFormValues>) {
  const methods = useForm<TFormValues>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
}
