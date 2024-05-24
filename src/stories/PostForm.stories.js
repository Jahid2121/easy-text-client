import PostForm from '../components/PostForm/PostForm.jsx';
import React from 'react';

// Define metadata for the PostForm component story
export default {
    title: 'Components/PostForm',
    component: PostForm,
};

// Template function for the PostForm story
const Template = (args) => <PostForm {...args} />;

// Default story for the PostForm component
export const Default = Template.bind({});
Default.args = {
    onSubmit: (data) => alert(`Post submitted: ${JSON.stringify(data, null, 2)}`)
};

// Another story for demonstration with pre-filled data
export const Prefilled = Template.bind({});
Prefilled.args = {
    onSubmit: (data) => alert(`Post submitted: ${JSON.stringify(data, null, 2)}`),
    title: 'Sample Title',
    content: 'Sample content goes here.'
};
