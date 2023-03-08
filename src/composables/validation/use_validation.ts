import {
  useVuelidate,
  type ValidationArgs,
} from '@vuelidate/core';
import type { ToRefs } from 'vue';

export const useValidation = (data: ToRefs<object>, validationRules: ValidationArgs) => {
  const v$ = useVuelidate(validationRules, data);

  return {
    validator: v$,
    errors: v$.value.$errors,
  };
};
