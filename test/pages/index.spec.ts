import { createLocalVue, mount, Wrapper } from '@vue/test-utils';
import cloneDeep from 'lodash/cloneDeep';
import Vuex from 'vuex';
import IndexPage from '~/pages/index.vue';
import store from '~/store/index';

// vuexを使う準備
const localVue = createLocalVue();
localVue.use(Vuex);

describe('pages/index.vue', () => {
  let wrapper: Wrapper<any> | null;

  beforeEach(() => {
    // 一度wrapperをnullにして適切にGCされるようにする
    wrapper = null;
    // wrapperにVueコンポーネントのマウント結果を代入し使い回す
    // 同時に/store/indexを第二引数へセット
    wrapper = mount(IndexPage, {
      store: new Vuex.Store(cloneDeep(store)),
      localVue,
    });
  });

  test('カウンターをクリックした時に、カウント値が1加算させる', async () => {
    expect(wrapper!.vm.count).toBe(0);
    // triggerは非同期のためasync/await
    await wrapper!.find('button').trigger('click');
    expect(wrapper!.vm.count).toBe(1);
  });
});
