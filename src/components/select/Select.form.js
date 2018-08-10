import baseEditForm from '../base/Base.form';

import SelectEditData from './editForm/Select.edit.data';
import SelectEditValidation from './editForm/Select.edit.validation';
import SelectEditDisplay from './editForm/Select.edit.display';

export default function(...extend) {
  return baseEditForm(...extend, [
    {
      key: 'display',
      components: SelectEditDisplay
    },
    {
      key: 'validation',
      components: SelectEditValidation
    }
  ]);
}
