import ChildPage from '@/pages/child.vue';
import {
  createLocalVue,
  mount,
  RouterLinkStub,
  Wrapper,
} from '@vue/test-utils';

const localVue = createLocalVue();

describe('pages/child.vue', () => {
  test('トップページへ戻る導線が存在する', () => {
    const wrapper: Wrapper<any> = mount(ChildPage, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });
    /**
     * @see https://vue-test-utils.vuejs.org/ja/api/wrapper/#exists
     * findは現在非推奨とのことでfindComponent
     */
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/');
  });
});
