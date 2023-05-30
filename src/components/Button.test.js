import { shallowMount } from '@vue/test-utils';

import Button from './Button.vue';

describe('Button.vue', () => {
  test('renders passed props and displays text', () => {
    const displayText = 'This is a test';
    const shouldDisable = false;
    const wrapper = shallowMount(Button, {
      props: { displayText, shouldDisable }
    });

    expect(wrapper.text()).toMatch('This is a test');
  });
});
