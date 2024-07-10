import { yupResolver } from '@hookform/resolvers/yup';
import React, { ReactNode } from 'react';
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import * as yup from 'yup';

// Define the types for the props, ensuring T extends FieldValues
type FormContainerProps<T extends FieldValues> = {
  children: ReactNode;
  defaultValues?: DefaultValues<T>;
  schema: yup.AnyObjectSchema;
  onSubmit: SubmitHandler<T>;
};

function FormContainer<T extends FieldValues>({
  children,
  defaultValues,
  schema,
  onSubmit,
}: FormContainerProps<T>) {
  const methods = useForm<T>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default FormContainer;
