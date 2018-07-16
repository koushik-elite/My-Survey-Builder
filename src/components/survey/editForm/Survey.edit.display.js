export default [
  {
    type: 'datagrid',
    input: true,
    preview: false,
    condensed: true,
    multiple: false,
    protected: false,
    unique: false,
    persistent: true,
    label: 'Questions',
    key: 'questions',
    tooltip: 'The questions you would like to as in this survey question.',
    weight: 50,
    defaultValue: [{ label: '', value: '', comment: false }],
    components: [
      {
        label: 'Question\'s',
        key: 'question',
        input: true,
        type: 'textarea',
      },
      {
        label: 'Comments',
        key: 'comment',
        input: true,
        type: 'checkbox'
      },
      {
        label: 'Score',
        key: 'score',
        input: true,
        type: 'number'
      },
      /*
      {
        label: 'Scores',
        key: 'scores',
        input: false,
        type: 'datagrid',
        disabled: true,
        components: [
          {
            key: 'sname',
            input: false,
            type: 'textfield'
          },
          {
            key: 'scoresl',
            input: true,
            type: 'number',
          }
        ]
      }*/
    ]
  },
  {
    type: 'datagrid',
    input: true,
    label: 'Values',
    key: 'values',
    tooltip: 'The values that can be selected per question. Example: \'Yes\', \'No\', etc.',
    weight: 50,
    defaultValue: [{ label: '', value: '' }],
    components: [
      {
        label: 'Label',
        key: 'label',
        input: true,
        type: 'textfield'
      },
      {
        label: 'Value',
        key: 'value',
        input: true,
        type: 'number'
      }
    ]
  }
];
