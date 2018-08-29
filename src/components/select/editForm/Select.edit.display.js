export default [
    {
        type: 'textarea',
        key: 'rawvalue',
        input: true,
        weight: 10,
        label: 'Drop down Data',
        tooltip: 'A raw data saperated by \'|\' Symbol.',
    },
    {
        type: 'hidden',
        input: true,
        hidden: true,
        weight: 700,
        key: 'groupMode'
    }
];
