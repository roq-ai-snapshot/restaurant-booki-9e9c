import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  table_number: yup.number().integer().required(),
  reservation_date: yup.date().required(),
  reservation_time: yup.string().required(),
  number_of_guests: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
