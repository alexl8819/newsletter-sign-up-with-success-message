import { shallowMount } from '@vue/test-utils';

import SuccessConfirmation from './SuccessConfirmation.vue';

describe('SuccessConfirmation.vue', () => {
  test('renders props.email when passed', () => {
    const email = 'test@test.com';
    const wrapper = shallowMount(SuccessConfirmation, {
      props: { email }
    });
    expect(wrapper.text()).toMatch(email);
  });

  // test('should reload page when dismissed button is clicked', () => {});
});
