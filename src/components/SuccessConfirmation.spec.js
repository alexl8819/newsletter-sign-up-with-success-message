import { shallowMount } from '@vue/test-utils';

import SuccessConfirmation from './SuccessConfirmation.vue';

describe('SuccessConfirmation.vue', () => {
  it('renders props.email when passed', () => {
    const email = 'test@test.com';
    const wrapper = shallowMount(SuccessConfirmation, {
      props: { email }
    });
    expect(wrapper.text()).toMatch(email);
  });
});
