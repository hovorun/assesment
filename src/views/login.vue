<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-toolbar-title>Login form</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <v-form @submit.prevent="handleSubmit">
            <v-text-field
              v-model.triw="data.email"
              label="Please enter your email"
            />

            <div
              v-for="error of validator.email.$errors"
              :key="error.$uid"
              class="input-errors mb-4"
            >
              <div class="error-msg">
                {{ error.$message }}
              </div>
            </div>

            <v-text-field
              v-model.triw="data.password"
              type="password"
              label="Please enter your password"
            />

            <div
              v-for="error of validator.password.$errors"
              :key="error.$uid"
              class="input-errors mb-4"
            >
              <div class="error-msg">
                {{ error.$message }}
              </div>
            </div>

            <v-btn
              type="submit"
              block
              class="mt-2"
            >
              Submit
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { useValidation } from '@/composables';
import { reactive } from 'vue';
import {
  required,
  email,
  minLength,
} from '@vuelidate/validators';
import { useRouter } from 'vue-router';

const router = useRouter();

const data = reactive({
  email: '',
  password: '',
});

const validationRules = {
  email: {
    required,
    email,
    minLength: minLength(6),
  },
  password: {
    required,
    minLength: minLength(6),
  },
};

const { validator } = useValidation(data, validationRules);

const handleSubmit = () => {
  validator.value.$touch();

  if (!validator.value.$error) {
    router.push('/game');
  }
};
</script>

<style scoped lang="scss">
.error-msg {
  color: red;
}
</style>
