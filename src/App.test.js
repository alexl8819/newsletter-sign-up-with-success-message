import { mount } from '@vue/test-utils';

import App from './App.vue';
import SuccessConfirmation from './components/SuccessConfirmation';

describe('App.vue', () => {
  test('child component should send back invalid email and create an error state', async () => {
    const invalidEmail = 'invalid@email';
    const wrapper = mount(App, {
      data() {
        return {
          email: '',
          error: false
        }
      }
    });
    
    await wrapper.find('input').setValue(invalidEmail);
    await wrapper.find('button').trigger('submit');

    expect(wrapper.vm.email).toBe(invalidEmail);
    expect(wrapper.vm.error).toBe(true);
  });

  test('valid email input should trigger computed emailConfirmed state to be true', async () => {
    const validEmail = 'test@test.com';
    const wrapper = mount(App, {
      data() {
        return {
          email: '',
          error: false
        }
      }
    });
    
    await wrapper.find('input').setValue(validEmail);
    await wrapper.find('button').trigger('submit');
  
    expect(wrapper.vm.emailConfirmed).toBe(true);
  });

  test('valid state should trigger component change with correct email prop passed', async () => {
    const validEmail = 'test@test.com';
    const wrapper = mount(App, {
      data() {
        return {
          email: '',
          error: false
        }
      }
    });

    await wrapper.find('input').setValue(validEmail);
    await wrapper.find('button').trigger('submit');
  
    expect(wrapper.getComponent(SuccessConfirmation).props()).toEqual({ email: validEmail });
  });
});
