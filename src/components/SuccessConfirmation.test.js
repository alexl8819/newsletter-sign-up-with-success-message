import { shallowMount } from '@vue/test-utils';

import SuccessConfirmation from './SuccessConfirmation.vue';

describe('SuccessConfirmation.vue', () => {
  test('renders email prop when passed', () => {
    const email = 'test@test.com';
    const wrapper = shallowMount(SuccessConfirmation, {
      props: { email }
    });
    expect(wrapper.text()).toMatch(email);
  });

  /*test('should emit reload fn when dismiss is clicked', async () => {
    const email = 'test@test.com';
    const wrapper = shallowMount(SuccessConfirmation, {
      props: { email }
    });

    await wrapper.find('button').trigger('click');
    
    // expect(wrapper.emitted()).toHaveProperty('reload');
  });*/
});
