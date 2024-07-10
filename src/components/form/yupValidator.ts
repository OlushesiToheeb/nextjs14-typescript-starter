import { parse } from 'date-fns';
import * as Yup from 'yup';

import { YupFields } from '@/types/form/index';

const baseSchema = {
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  bvn: Yup.number()
    .required('Bvn is required')
    .typeError('Bvn must be a number')
    .test(
      'maxLenght',
      'Bvn cannot be less or grater than 11',
      (val) => !isNaN(val) && `${val}`.length === 11,
    ),
  phoneNumber: Yup.number()
    .required('Phone number is required')
    .typeError('Phone number must be a number')
    .test(
      'maxLenght',
      'Phone number cannot be less or grater than 10',
      (val) => !isNaN(val) && `${val}`.length === 10,
    ),
  dob: Yup.date()
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, 'dd.MM.yyyy', new Date());
      return result;
    })
    .typeError('Please enter a valid date')
    .required('Date of birth is required')
    .min(new Date('1969-11-13'), 'Date is too early')
    .max(new Date(), 'Date cannot be in the future'),
  password: Yup.string().required('Pin is required'),
  gender: Yup.string().required('Gender is required'),
} as const;

export function createSchema(fields: Partial<Record<YupFields, boolean>>) {
  const schemaObject: Record<string, Yup.AnySchema> = {};
  Object.keys(fields).forEach((field) => {
    if (baseSchema[field as YupFields]) {
      schemaObject[field] = baseSchema[field as YupFields];
    }
  });
  return Yup.object().shape(schemaObject);
}
