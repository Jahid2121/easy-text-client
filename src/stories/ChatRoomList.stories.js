import React from 'react';
import ChatRoomList from "../components/ChatRoomList/ChatRoomList.jsx"

export default {
  title: 'Components/ChatRoomList',
  component: ChatRoomList,
  argTypes: {
    rooms: { control: 'array' },
  },
  parameters: {
    docs: {
      description: {
        component: 'A list of chat rooms.',
      },
    },
  },
};

const Template = (args) => <ChatRoomList {...args} />;

export const Default = Template.bind({});
Default.args = {
  rooms: [
    { id: 1, name: 'General Chat', description: 'A place to chat about general topics' },
    { id: 2, name: 'Tech Talk', description: 'Discuss the latest in tech' },
    { id: 3, name: 'Music Lounge', description: 'Share and discuss your favorite tunes' },
  ],
};

export const NoRooms = Template.bind({});
NoRooms.args = {
  rooms: [],
};
