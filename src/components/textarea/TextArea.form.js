import textEditForm from '../textfield/TextField.form';
import baseEditForm from '../base/Base.form';
import TextAreaEditDisplay from './editForm/TextArea.edit.display';

export default function(...extend) {
  return baseEditForm(...extend, [
    {
      key: 'display',
      components: TextAreaEditDisplay
    }
  ]);
}
