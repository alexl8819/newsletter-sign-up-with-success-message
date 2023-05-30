import { shallowMount } from '@vue/test-utils';

import Button from './Button.vue';

describe('Button.vue', () => {
  test('renders props with default prop for button type', () => {
    const displayText = 'This is a test';
    const shouldDisable = false;
    const wrapper = shallowMount(Button, {
      props: { displayText, shouldDisable }
    });

    expect(wrapper.attributes('type')).toMatch('button');
  });

  test('renders displayed text', () => {
    const displayText = 'This is a test';
    const shouldDisable = false;
    const wrapper = shallowMount(Button, {
      props: { displayText, shouldDisable }
    });

    expect(wrapper.text()).toMatch('This is a test');
  });

  test('renders a disabled button', () => {
    const displayText = 'This is a test';
    const shouldDisable = true;
    const wrapper = shallowMount(Button, {
      props: { displayText, shouldDisable }
    });

    expect(wrapper.attributes('disabled')).toMatch('');
  });
});
