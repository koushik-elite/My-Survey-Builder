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
    components: [
      {
        label: 'Question',
        key: 'question',
        input: true,
        type: 'textarea',
        defaultValue: '',
      },
      {
        label: 'Comment',
        key: 'comment',
        input: true,
        type: 'checkbox',
        defaultValue: true,
      },
      {
        label: 'Score',
        key: 'score',
        input: true,
        type: 'number',
        defaultValue: '0',
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
    defaultValue: [{ label: '', value: 0, commentmandatory: false }],
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
        type: 'number',
        defaultValue: 0,
      },
      {
        label: 'Comment Mandatory',
        key: 'commentmandatory',
        input: true,
        type: 'checkbox'
      }
    ]
  },
  {
    type: 'hidden',
    input: true,
    weight: 700,
    key: 'groupMode'
  }
];
