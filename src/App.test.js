import { mount } from '@vue/test-utils';

import App from './App.vue';
import SuccessConfirmation from './components/SuccessConfirmation';

describe('App.vue', () => {
  test('invalid email input should return error state', async () => {
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
    
    expect(wrapper.vm.error).toBe(true);
  });

  test('valid email input should trigger emailConfirmed computed state to be true', async () => {
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

  test('valid state should trigger component change with correct email prop', async () => {
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
