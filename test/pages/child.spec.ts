import {
  createLocalVue,
  mount,
  RouterLinkStub,
  Wrapper,
} from '@vue/test-utils';
import ChildPage from '@/pages/child.vue';

const localVue = createLocalVue();

describe('pages/child.vue', () => {
  test('トップページへ戻る導線が存在する', () => {
    const wrapper: Wrapper<any> = mount(ChildPage, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/');
  });
});
