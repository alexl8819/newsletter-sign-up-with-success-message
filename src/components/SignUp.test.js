import { shallowMount } from '@vue/test-utils';

import SignUp from './SignUp.vue';

describe('Signup.vue', () => {
  test('renders initial props.email to update and props.error when passed', () => {
    const email = '';
    const error = false;
    const wrapper = shallowMount(SignUp, {
      props: { email, error }
    });
    expect(wrapper.text()).toMatch(email);
  });

  test('form emits an update event to parent when value is submitted', async () => {
    const email = '';
    const error = false;
    const wrapper = shallowMount(SignUp, {
      props: { email, error }
    });
    
    await wrapper.find('input').setValue('test@test.com');
    await wrapper.find('button').trigger('submit');

    expect(wrapper.emitted()).toHaveProperty('update:email');
  });
});
