import { shallowMount } from '@vue/test-utils';

import SignUp from './SignUp.vue';

describe('SuccessConfirmation.vue', () => {
  test('renders initial props.email to update and props.error when passed', () => {
    const email = '';
    const error = false;
    const wrapper = shallowMount(SignUp, {
      props: { email, error }
    });
    expect(wrapper.text()).toMatch(email);
  });
});
