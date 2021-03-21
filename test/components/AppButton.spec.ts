import AppButton from '@/components/AppButton.vue';
import { mount } from '@vue/test-utils';

describe('components?AppButton.vue', () => {
  // snapshotを更新するには --updateSnapshot
  test('match snapshot(unClicked)', () => {
    const wrapper = mount(AppButton);
    expect(wrapper.element).toMatchInlineSnapshot(`
      <div>
        <!---->
         
        <button
          type="button"
        >
          click
        </button>
      </div>
    `);
  });

  test('match snapshot(clicked)', () => {
    const wrapper = mount(AppButton);
    wrapper.find('button').trigger('click');
    expect(wrapper.element).toMatchSnapshot();
  });
});
