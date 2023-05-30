import { shallowMount } from '@vue/test-utils';

import SignUp from './SignUp.vue';

describe('Signup.vue', () => {
  test('renders component with initial props when passed', () => {
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
    await wrapper.find('form').trigger('submit');

    expect(wrapper.emitted()).toHaveProperty('update:email');
  });

  test('invalid input passed from parent should contain error state class in input element', async () => {
    const email = 'bad@email';
    const error = true;
    const wrapper = shallowMount(SignUp, {
      props: { email, error }
    });

    // expect(getComputedStyle(wrapper.find('.form__input--error + .form__label').element, ':after').content).toContain('Valid email required');
    // expect(wrapper.find('label::after').text()).toMatch('Valid email required');
    expect(wrapper.find('input').html()).toContain('form__input--error');
  });
});
