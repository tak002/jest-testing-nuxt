import AppToggleButton from '@/components/AppToggleButton.vue';
import { mount, Wrapper } from '@vue/test-utils';

describe('AppToggleButton.vue', () => {
  let wrapper: Wrapper<any> | null;

  beforeEach(() => {
    // 一度wrapperをnullにして適切にGCされるようにする
    wrapper = null;

    // wrapperにVueコンポーネントのマウント結果を代入し使い回す
    wrapper = mount(AppToggleButton);
  });

  test('デフォルト状態でoffであるか', () => {
    // findによってthis.$el内から探索されたp要素をデータソースとしてアサーションを行う
    expect(wrapper!.find('p').text()).toBe('off');
  });

  test('ボタンを押すことによってonとなるか', async () => {
    // findによってthis.$el内から探索されたbutton要素に対してclickイベントを手動で発火させる
    // ※triggerは非同期のためasync/awaitで待たないとエラーになる
    await wrapper!.find('button').trigger('click');

    // 手動で発火させた場合でも、Vue.jsの@clickは呼ばれるはずであるため、onとなるはず
    expect(wrapper!.find('p').text()).toBe('on');
  });
});
